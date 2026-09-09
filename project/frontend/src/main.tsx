import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.tsx';
import { AuthProvider } from './auth/authProvider';
import { SocialProvider } from './social/SocialContext';
import { PriceFeedProvider } from './prices/PriceFeedContext';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <SocialProvider>
      <PriceFeedProvider>
        <App />
      </PriceFeedProvider>
    </SocialProvider>
  </AuthProvider>
);