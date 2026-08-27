import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { io, type Socket } from 'socket.io-client';
import { useAuth } from '../auth/useAuth';
import {
  fetchNotifications,
  fetchUnreadCount,
  markAllNotificationsRead,
  markNotificationRead,
} from '../services/social.service';
import type { AppNotification, ChatMessage } from '../types/social';

const SOCIAL_URL = `${import.meta.env.VITE_API_URL ?? 'https://localhost'}/social`;

interface SocialContextType {
  socket: Socket | null;
  onlineUserIds: Set<string>;
  notifications: AppNotification[];
  unreadCount: number;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  /** Subscribe to live messages; returns an unsubscribe function. */
  onMessage: (handler: (message: ChatMessage) => void) => () => void;
}

const SocialContext = createContext<SocialContextType>({
  socket: null,
  onlineUserIds: new Set(),
  notifications: [],
  unreadCount: 0,
  markAsRead: async () => {},
  markAllAsRead: async () => {},
  onMessage: () => () => {},
});

export function useSocial() {
  return useContext(SocialContext);
}

export function SocialProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUserIds, setOnlineUserIds] = useState<Set<string>>(new Set());
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const messageHandlers = useRef(new Set<(message: ChatMessage) => void>());

  useEffect(() => {
    if (!user) {
      setSocket(null);
      setOnlineUserIds(new Set());
      return;
    }

    const s = io(SOCIAL_URL, { withCredentials: true });
    setSocket(s);

    s.on('presence:update', ({ userId, online }: { userId: string; online: boolean }) => {
      setOnlineUserIds((prev) => {
        const next = new Set(prev);
        if (online) next.add(userId);
        else next.delete(userId);
        return next;
      });
    });

    s.on('notification:new', (notification: AppNotification) => {
      setNotifications((prev) => [notification, ...prev].slice(0, 50));
      setUnreadCount((prev) => prev + 1);
    });

    s.on('message:new', (message: ChatMessage) => {
      messageHandlers.current.forEach((handler) => handler(message));
    });

    fetchNotifications().then(setNotifications).catch(() => {});
    fetchUnreadCount().then(setUnreadCount).catch(() => {});

    return () => {
      s.disconnect();
    };
  }, [user]);

  const markAsRead = async (id: string) => {
    await markNotificationRead(id);
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  const markAllAsRead = async () => {
    await markAllNotificationsRead();
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    setUnreadCount(0);
  };

  const onMessage = (handler: (message: ChatMessage) => void) => {
    messageHandlers.current.add(handler);
    return () => messageHandlers.current.delete(handler);
  };

  return (
    <SocialContext.Provider
      value={{ socket, onlineUserIds, notifications, unreadCount, markAsRead, markAllAsRead, onMessage }}
    >
      {children}
    </SocialContext.Provider>
  );
}
