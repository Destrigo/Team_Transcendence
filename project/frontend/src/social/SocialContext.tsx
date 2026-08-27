import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { io, type Socket } from 'socket.io-client';
import { useAuth } from '../auth/useAuth';
import {
  fetchNotifications,
  markAllNotificationsRead,
  markNotificationRead,
  sendMessageRest,
} from '../services/social.service';
import type { AppNotification, ChatMessage } from '../types/social';

const SOCIAL_URL = `${import.meta.env.VITE_API_URL ?? 'https://localhost'}/social`;

interface SocialContextType {
  socket: Socket | null;
  onlineUserIds: Set<string>;
  /** True once the initial presence:snapshot has arrived — before that, onlineUserIds is empty by default, not "confirmed nobody's online". */
  presenceReady: boolean;
  notifications: AppNotification[];
  unreadCount: number;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  /** Subscribe to live messages; returns an unsubscribe function. */
  onMessage: (handler: (message: ChatMessage) => void) => () => void;
  /** Send over the live socket if connected, resolving/rejecting via its ack; falls back to REST otherwise. */
  sendMessage: (receiverId: string, content: string) => Promise<ChatMessage>;
}

const SocialContext = createContext<SocialContextType>({
  socket: null,
  onlineUserIds: new Set(),
  presenceReady: false,
  notifications: [],
  unreadCount: 0,
  markAsRead: async () => {},
  markAllAsRead: async () => {},
  onMessage: () => () => {},
  sendMessage: async () => {
    throw new Error('SocialProvider not mounted');
  },
});

export function useSocial() {
  return useContext(SocialContext);
}

export function SocialProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUserIds, setOnlineUserIds] = useState<Set<string>>(new Set());
  const [presenceReady, setPresenceReady] = useState(false);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const messageHandlers = useRef(new Set<(message: ChatMessage) => void>());

  // Marks one notification read locally. Idempotent by design: it runs both
  // from the REST call's own optimistic update and from the server's
  // `notification:read` echo (sent to every tab, including the one that
  // triggered it) — whichever arrives second must be a safe no-op.
  const applyRead = (id: string) => {
    setNotifications((prev) => {
      const target = prev.find((n) => n.id === id);
      if (!target || target.isRead) return prev;
      setUnreadCount((count) => Math.max(0, count - 1));
      return prev.map((n) => (n.id === id ? { ...n, isRead: true } : n));
    });
  };

  useEffect(() => {
    if (!user) {
      setSocket(null);
      setOnlineUserIds(new Set());
      setPresenceReady(false);
      return;
    }

    const s = io(SOCIAL_URL, { withCredentials: true });
    setSocket(s);

    // Deltas alone only cover transitions after this socket connects — a
    // friend who was already online needs an initial snapshot to seed from.
    s.on('presence:snapshot', ({ onlineUserIds: ids }: { onlineUserIds: string[] }) => {
      setOnlineUserIds(new Set(ids));
      setPresenceReady(true);
    });

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

    // Fired by the server whenever *this* user reads a notification from any
    // tab/device — including this one, echoed back alongside the REST call's
    // own optimistic update below, so this has to be idempotent either way.
    s.on('notification:read', ({ id }: { id: string }) => applyRead(id));

    s.on('notifications:allRead', () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    });

    s.on('message:new', (message: ChatMessage) => {
      messageHandlers.current.forEach((handler) => handler(message));
    });

    // The list endpoint already bundles the unread count in one response.
    fetchNotifications()
      .then((page) => {
        setNotifications(page.data);
        setUnreadCount(page.unreadCount);
      })
      .catch(() => {});

    return () => {
      s.disconnect();
    };
  }, [user]);

  const markAsRead = async (id: string) => {
    await markNotificationRead(id);
    applyRead(id);
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

  const sendMessage = (receiverId: string, content: string): Promise<ChatMessage> => {
    if (!socket?.connected) {
      return sendMessageRest(receiverId, content);
    }
    return new Promise((resolve, reject) => {
      socket.emit(
        'message:send',
        { receiverId, content },
        (response: ChatMessage | { error: string }) => {
          if (response && 'error' in response) reject(new Error(response.error));
          else resolve(response as ChatMessage);
        },
      );
    });
  };

  return (
    <SocialContext.Provider
      value={{
        socket,
        onlineUserIds,
        presenceReady,
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        onMessage,
        sendMessage,
      }}
    >
      {children}
    </SocialContext.Provider>
  );
}
