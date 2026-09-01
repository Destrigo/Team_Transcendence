import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { getUserIdFromSocket } from '../common/ws/ws-auth.util';

type PriceUpdate = { symbol: string; price: number; change24h: number };

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL ?? 'https://localhost',
    credentials: true,
  },
  namespace: '/prices',
})
export class PriceFeedGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(PriceFeedGateway.name);

  // Last broadcast value per symbol, so broadcastPrices() can emit only
  // what actually changed instead of the full list on every tick.
  private readonly lastKnownPrices = new Map<string, PriceUpdate>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async handleConnection(client: Socket) {
    const userId = await getUserIdFromSocket(client, this.jwtService);
    if (!userId) {
      client.disconnect(true);
      return;
    }

    this.logger.log(`Client connected: ${client.id}`);

    try {
      const snapshot = await this.getSnapshot();
      client.emit('price:batch', snapshot);
    } catch (err) {
      this.logger.warn(`Failed to send price snapshot to ${client.id}: ${err}`);
    }
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  broadcastPrices(updates: PriceUpdate[]) {
    const changed = updates.filter((u) => {
      const prev = this.lastKnownPrices.get(u.symbol);
      return !prev || prev.price !== u.price || prev.change24h !== u.change24h;
    });

    for (const u of updates) this.lastKnownPrices.set(u.symbol, u);

    if (changed.length === 0) return;
    this.server.emit('price:update', changed);
  }

  @SubscribeMessage('price:subscribe')
  handleSubscribe(client: Socket) {
    this.logger.log(`Client ${client.id} subscribed`);
  }

  private async getSnapshot(): Promise<PriceUpdate[]> {
    const assets = await this.prisma.asset.findMany({
      where: { isActive: true },
      select: { symbol: true, currentPrice: true, change24h: true },
    });
    return assets.map((a) => ({
      symbol: a.symbol,
      price: Number(a.currentPrice),
      change24h: Number(a.change24h),
    }));
  }
}
