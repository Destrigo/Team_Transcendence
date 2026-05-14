import { BrowserRouter, Routes, Route } from "react-router-dom";
// TODO: uncomment when auth context is ready
// import { AuthProvider, useAuth } from "@/contexts/AuthContext";
// import { NotificationProvider } from "@/contexts/NotificationContext";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Trading from "./pages/Trading";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

// TODO: replace with ProtectedRoute once AuthProvider is wired up
// function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { isAuthenticated } = useAuth();
//   if (!isAuthenticated) return <Navigate to="/login" replace />;
//   return <>{children}</>;
// }

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trading" element={<Trading />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
