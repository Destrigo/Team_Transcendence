import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Search,
  LineChart,
  BarChart3,
  Settings as SettingsIcon,
} from 'lucide-react';

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/trade', label: 'Trade', icon: LineChart },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-primary text-primary-foreground'
      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
  }`;

export default function Sidebar() {

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-card">
      <div className="px-5 py-5">
        <span className="text-lg font-bold tracking-tight">PaperTrade</span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={linkClasses}>
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
