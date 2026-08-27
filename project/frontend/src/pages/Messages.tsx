import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Loader2, Send } from 'lucide-react';
import { resolveAvatarUrl } from '../api/avatar';
import MessageBubble from '../components/MessageBubble';
import { useAuth } from '../auth/useAuth';
import { useSocial } from '../social/SocialContext';
import { fetchConversation, fetchFriends, markConversationRead, sendMessageRest } from '../services/social.service';
import type { ChatMessage, Friend } from '../types/social';

export default function MessagesPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userId: otherUserId } = useParams<{ userId?: string }>();
  const { user } = useAuth();
  const { socket, onlineUserIds, onMessage } = useSocial();

  const [friends, setFriends] = useState<Friend[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState('');
  const [loadingFriends, setLoadingFriends] = useState(true);
  const [loadingConversation, setLoadingConversation] = useState(false);
  const [sendError, setSendError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchFriends()
      .then(setFriends)
      .finally(() => setLoadingFriends(false));
  }, []);

  useEffect(() => {
    if (!otherUserId) return;
    setLoadingConversation(true);
    setSendError('');
    fetchConversation(otherUserId)
      .then(setMessages)
      .finally(() => setLoadingConversation(false));
    markConversationRead(otherUserId).catch(() => {});
  }, [otherUserId]);

  useEffect(() => {
    return onMessage((message) => {
      if (!otherUserId) return;
      const inThisConversation =
        (message.senderId === otherUserId && message.receiverId === user?.id) ||
        (message.senderId === user?.id && message.receiverId === otherUserId);
      if (inThisConversation) {
        setMessages((prev) => (prev.some((m) => m.id === message.id) ? prev : [...prev, message]));
      }
    });
  }, [onMessage, otherUserId, user?.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const activeFriend = friends.find((f) => f.id === otherUserId) ?? null;

  const handleSend = useCallback(async () => {
    const content = draft.trim();
    if (!content || !otherUserId) return;
    setDraft('');
    setSendError('');

    try {
      if (socket?.connected) {
        socket.emit('message:send', { receiverId: otherUserId, content });
      } else {
        const message = await sendMessageRest(otherUserId, content);
        setMessages((prev) => [...prev, message]);
      }
    } catch (err: any) {
      setSendError(err?.response?.data?.message ?? t('chat.sendFailed'));
    }
  }, [draft, otherUserId, socket, t]);

  return (
    <div className="mx-auto flex h-[calc(100vh-8rem)] max-w-5xl gap-4 p-6">
      <aside className="flex w-72 shrink-0 flex-col overflow-y-auto rounded-lg border border-border bg-card">
        <div className="border-b border-border px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {t('chat.conversations')}
        </div>
        {loadingFriends ? (
          <div className="flex items-center justify-center gap-2 py-8 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        ) : friends.length === 0 ? (
          <p className="p-4 text-sm text-muted-foreground">{t('chat.noFriendsToMessage')}</p>
        ) : (
          friends.map((f) => (
            <button
              key={f.id}
              onClick={() => navigate(`/messages/${f.id}`)}
              className={`flex items-center gap-2 border-b border-border px-3 py-2.5 text-left transition-colors last:border-b-0 hover:bg-accent/60 ${
                f.id === otherUserId ? 'bg-accent' : ''
              }`}
            >
              <span className="relative shrink-0">
                {resolveAvatarUrl(f.avatarUrl) ? (
                  <img src={resolveAvatarUrl(f.avatarUrl)!} alt="" className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {(f.displayName || f.username).slice(0, 2).toUpperCase()}
                  </span>
                )}
                <span
                  className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-card ${
                    onlineUserIds.has(f.id) || f.isOnline ? 'bg-emerald-500' : 'bg-muted-foreground/40'
                  }`}
                />
              </span>
              <span className="truncate text-sm font-medium">{f.displayName || f.username}</span>
            </button>
          ))
        )}
      </aside>

      <section className="flex flex-1 flex-col rounded-lg border border-border bg-card">
        {!otherUserId || !activeFriend ? (
          <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
            {t('chat.selectConversation')}
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              {resolveAvatarUrl(activeFriend.avatarUrl) ? (
                <img src={resolveAvatarUrl(activeFriend.avatarUrl)!} alt="" className="h-8 w-8 rounded-full object-cover" />
              ) : (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {(activeFriend.displayName || activeFriend.username).slice(0, 2).toUpperCase()}
                </span>
              )}
              <span className="text-sm font-semibold">{activeFriend.displayName || activeFriend.username}</span>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto p-4">
              {loadingConversation ? (
                <div className="flex items-center justify-center gap-2 py-8 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              ) : messages.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">{t('chat.noMessagesYet')}</p>
              ) : (
                messages.map((m) => <MessageBubble key={m.id} message={m} isOwn={m.senderId === user?.id} />)
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-border p-3">
              {sendError && <p className="mb-2 text-xs text-destructive">{sendError}</p>}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={t('chat.messagePlaceholder')}
                  className="flex-1 rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  disabled={!draft.trim()}
                  className="flex items-center justify-center rounded bg-primary px-3 text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
