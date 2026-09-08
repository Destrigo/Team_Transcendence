import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Trading from './pages/Trading';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/Register';
import SearchPage from './pages/Search';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { PublicRoute } from './routes/PublicRoute';
import TradingPage from './pages/Trading';
import PageShell from './components/PageShell';
import PublicLayout from './components/PublicLayout';
import PublicProfile from './pages/PublicProfile';
import FriendsPage from './pages/Friends';
import MessagesPage from './pages/Messages';
import LeaderboardPage from './pages/Leaderboard';
import AssetDetailsPage from './pages/AssetDetails';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>

      <Route element={<ProtectedRoute><PageShell /></ProtectedRoute>}>
        <Route path="/profile/:id" element={<PublicProfile />} />
        <Route path="/trade" element={<TradingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/asset-details" element={<AssetDetailsPage />} />
        <Route path="/asset-details/:symbol" element={<AssetDetailsPage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/messages/:userId" element={<MessagesPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;