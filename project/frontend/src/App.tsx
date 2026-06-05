// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "@/contexts/AuthContext";
// import { NotificationProvider } from "@/contexts/NotificationContext";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import './App.css'

// import Login from "./pages/Login"
// import Trading from "./pages/Trading"
// import Dashboard from "./pages/Dashboard"
// import Analytics from "./pages/Analytics"
// import Settings from "./pages/Settings"
// import NotFound from "./pages/NotFound"

// const queryClient = new QueryClient();

// // Protected Route wrapper
// function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { isAuthenticated } = useAuth();
  
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
  
//   return <>{children}</>;
// }

// // Public Route wrapper (redirects to dashboard if authenticated)
// function PublicRoute({ children }: { children: React.ReactNode }) {
//   const { isAuthenticated } = useAuth();
  
//   if (isAuthenticated) {
//     return <Navigate to="/dashboard" replace />;
//   }
  
//   return <>{children}</>;
// }


// const AppRoutes = () => (
//   <Routes>
//     <Route path="/" element={<Index />} />
//     <Route path="/login" element={
//       <PublicRoute>
//         <Login />
//       </PublicRoute>
//     } />
//     <Route path="/dashboard" element={
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     } />
//     <Route path="/trading" element={
//       <ProtectedRoute>
//         <Trading />
//       </ProtectedRoute>
//     } />
//     <Route path="/analytics" element={
//       <ProtectedRoute>
//         <Analytics />
//       </ProtectedRoute>
//     } />
//     <Route path="/settings" element={
//       <ProtectedRoute>
//         <Settings />
//       </ProtectedRoute>
//     } />
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <AuthProvider>
//         <NotificationProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <AppRoutes />
//           </BrowserRouter>
//         </NotificationProvider>
//       </AuthProvider>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/Profile";
import TermsPage from "./pages/Terms";
import PrivacyPage from "./pages/Privacy";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/profile" element={ <ProtectedRoute> <Profile /> </ProtectedRoute> } />
    </Routes>
  );
};

export default App;