import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.tsx';
import { AuthProvider } from './auth/authProvider';
import { SocialProvider } from './social/SocialContext';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <SocialProvider>
      <App />
    </SocialProvider>
  </AuthProvider>
);