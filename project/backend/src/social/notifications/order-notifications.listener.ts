import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { NotificationsService } from './notifications.service';

/** Turns trading-engine events into notifications, decoupled from the trading module. */
@Injectable()
export class OrderNotificationsListener {
  private readonly logger = new Logger(OrderNotificationsListener.name);

  constructor(private readonly notifications: NotificationsService) {}

  @OnEvent('order.filled')
  async onOrderFilled(payload: { orderId: string; userId: string }) {
    try {
      await this.notifications.notify(payload.userId, {
        type: 'order_filled',
        title: 'Order filled',
        body: 'One of your orders was filled.',
        data: { orderId: payload.orderId },
      });
    } catch (err) {
      // trading.service.ts fires this with a plain (unawaited) EventEmitter2
      // .emit() — an uncaught rejection here would be a silent unhandled
      // promise rejection, not a request that could surface it to a caller.
      this.logger.warn(`Failed to notify ${payload.userId} of order fill: ${err}`);
    }
  }

  @OnEvent('order.cancelled')
  async onOrderCancelled(payload: { orderId: string; userId: string; reason?: string }) {
    try {
      await this.notifications.notify(payload.userId, {
        type: 'order_cancelled',
        title: 'Order cancelled',
        body: payload.reason ?? 'One of your orders was cancelled.',
        data: { orderId: payload.orderId },
      });
    } catch (err) {
      this.logger.warn(`Failed to notify ${payload.userId} of order cancellation: ${err}`);
    }
  }
}
