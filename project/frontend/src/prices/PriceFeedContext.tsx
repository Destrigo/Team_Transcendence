import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { io, type Socket } from 'socket.io-client';
import { useAuth } from '../auth/useAuth';

const PRICES_URL = `${import.meta.env.VITE_API_URL ?? 'https://localhost'}/prices`;

interface PriceEntry {
  price: number;
  change24h: number;
}

interface PriceFeedContextType {
  prices: Record<string, PriceEntry>;
}

const PriceFeedContext = createContext<PriceFeedContextType>({ prices: {} });

export function usePriceFeed() {
  return useContext(PriceFeedContext);
}

export function PriceFeedProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [prices, setPrices] = useState<Record<string, PriceEntry>>({});

  useEffect(() => {
    if (!user) {
      setPrices({});
      return;
    }

    const s: Socket = io(PRICES_URL, { withCredentials: true });

    const applyUpdates = (updates: Array<{ symbol: string; price: number; change24h: number }>) => {
      setPrices((prev) => {
        const next = { ...prev };
        for (const u of updates) next[u.symbol] = { price: u.price, change24h: u.change24h };
        return next;
      });
    };

    // price:batch seeds the full snapshot on connect; price:update carries
    // only the symbols that actually changed on each later broadcast.
    s.on('price:batch', applyUpdates);
    s.on('price:update', applyUpdates);

    return () => {
      s.disconnect();
    };
  }, [user]);

  return <PriceFeedContext.Provider value={{ prices }}>{children}</PriceFeedContext.Provider>;
}
