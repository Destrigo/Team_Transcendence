import { Navigate } from 'react-router-dom';

// TODO: replace with auth-aware redirect once AuthContext is ready
// import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  // const { isAuthenticated } = useAuth();
  // return <Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />;
  return <Navigate to="/login" replace />;
};

export default Index;
