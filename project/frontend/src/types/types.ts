export type AssetType = 'CRYPTO' | 'STOCK';
export type OrderSide = 'BUY' | 'SELL';
export type OrderExecutionType = 'MARKET' | 'LIMIT';

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  type: AssetType;
  currentPrice: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  logoUrl: string | null;
  isActive: boolean;
}

export interface AssetListResponse {
  data: Asset[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface Holding {
  assetId: string;
  symbol: string;
  name: string;
  type: AssetType;
  logoUrl: string | null;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  currentValue: number;
  costBasis: number;
  pnl: number;
  pnlPercent: number;
}

export interface Portfolio {
  balance: number;
  holdingsValue: number;
  totalValue: number;
  totalPnl: number;
  totalPnlPercent: number;
  holdings: Holding[];
}

export interface CreateOrderPayload {
  assetId: string;
  type: OrderSide;
  orderType: OrderExecutionType;
  quantity: number;
  price?: number;
}

export type OrderStatus = 'PENDING' | 'FILLED' | 'CANCELLED';

export interface Order {
  id: string;
  assetId: string;
  type: OrderSide;
  orderType: OrderExecutionType;
  quantity: number;
  price: number;
  total: number;
  status: OrderStatus;
  filledAt: string | null;
  createdAt: string;
  asset: Asset;
}