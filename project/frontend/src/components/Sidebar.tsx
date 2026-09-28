import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  LayoutDashboard,
  Search,
  LineChart,
  BarChart3,
  Settings as SettingsIcon,
  Users,
  MessageCircle,
  Trophy,
  Store,
  Wallet,
  X,
} from 'lucide-react';

const NAV_ITEMS = [
  { to: '/dashboard', labelKey: 'sidebar.dashboard', icon: LayoutDashboard },
  { to: '/search', labelKey: 'sidebar.search', icon: Search },
  { to: '/trade', labelKey: 'sidebar.trade', icon: LineChart },
  { to: '/markets', labelKey: 'markets.title', icon: Store },
  { to: '/portfolio', labelKey: 'nav.portfolio', icon: Wallet },
  { to: '/friends', labelKey: 'sidebar.friends', icon: Users },
  { to: '/messages', labelKey: 'sidebar.messages', icon: MessageCircle },
  { to: '/leaderboard', labelKey: 'sidebar.leaderboard', icon: Trophy },
  { to: '/analytics', labelKey: 'sidebar.analytics', icon: BarChart3 },
  { to: '/settings', labelKey: 'sidebar.settings', icon: SettingsIcon },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-primary text-primary-foreground'
      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
  }`;

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* Backdrop — mobile only, shown while the drawer is open */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-60 shrink-0 flex-col border-r border-border bg-card transition-transform duration-200 ease-in-out md:static md:z-auto md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="text-lg font-bold tracking-tight">PaperTrade</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('sidebar.close')}
            className="rounded p-1 text-muted-foreground hover:bg-accent md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {NAV_ITEMS.map(({ to, labelKey, icon: Icon }) => (
            <NavLink key={to} to={to} className={linkClasses} onClick={onClose}>
              <Icon className="h-4 w-4" />
              {t(labelKey)}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
