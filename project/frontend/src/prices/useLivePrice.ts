import { useEffect, useRef, useState } from 'react';
import { usePriceFeed } from './PriceFeedContext';

export type PriceFlash = 'up' | 'down' | null;

/**
 * Overlays the live WebSocket price (once the feed has spoken for this
 * symbol) on top of a REST-fetched fallback, and reports a brief up/down
 * flash whenever the effective price actually moves.
 */
export function useLivePrice(symbol: string, fallbackPrice: number, fallbackChange24h: number) {
  const { prices } = usePriceFeed();
  const live = prices[symbol];
  const price = live?.price ?? fallbackPrice;
  const change24h = live?.change24h ?? fallbackChange24h;

  const prevPrice = useRef(price);
  const [flash, setFlash] = useState<PriceFlash>(null);

  useEffect(() => {
    if (price === prevPrice.current) return;
    const direction: PriceFlash = price > prevPrice.current ? 'up' : 'down';
    prevPrice.current = price;
    setFlash(direction);
    const timer = setTimeout(() => setFlash(null), 700);
    return () => clearTimeout(timer);
  }, [price]);

  return { price, change24h, flash };
}
