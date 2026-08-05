import { api } from '../api/api';
import type {
  Asset,
  AssetListResponse,
  CreateOrderPayload,
  Order,
  OrderStatus,
  Portfolio,
} from '../types/types';

export interface AssetQueryParams {
  q?: string;
  type?: 'CRYPTO' | 'STOCK';
  sort?: 'price' | 'change' | 'name' | 'volume' | 'marketCap';
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface OrdersQueryParams {
  status?: OrderStatus;
  type?: 'BUY' | 'SELL';
  assetId?: string;
}

function normalizeAsset(raw: Asset): Asset {
  return {
    ...raw,
    currentPrice: Number(raw.currentPrice),
    change24h: Number(raw.change24h),
    volume24h: Number(raw.volume24h),
    marketCap: Number(raw.marketCap),
  };
}

function normalizeOrder(raw: Order): Order {
  return {
    ...raw,
    quantity: Number(raw.quantity),
    price: Number(raw.price),
    total: Number(raw.total),
    asset: normalizeAsset(raw.asset),
  };
}

export async function fetchAssets(params: AssetQueryParams): Promise<AssetListResponse> {
  const { data } = await api.get<AssetListResponse>('/assets', { params });
  return { ...data, data: data.data.map(normalizeAsset) };
}

export async function fetchPortfolio(): Promise<Portfolio> {
  const { data } = await api.get<Portfolio>('/portfolio');
  return data;
}

export async function placeOrder(payload: CreateOrderPayload) {
  const { data } = await api.post('/orders', payload);
  return data;
}

export async function fetchOrders(params: OrdersQueryParams = {}): Promise<Order[]> {
  const { data } = await api.get<Order[]>('/orders', { params });
  return data.map(normalizeOrder);
}

export async function cancelOrder(orderId: string): Promise<void> {
  await api.delete(`/orders/${orderId}`);
}