import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { NotificationsService } from './notifications.service';

/** Turns trading-engine events into notifications, decoupled from the trading module. */
@Injectable()
export class OrderNotificationsListener {
  constructor(private readonly notifications: NotificationsService) {}

  @OnEvent('order.filled')
  async onOrderFilled(payload: { orderId: string; userId: string }) {
    await this.notifications.notify(payload.userId, {
      type: 'order_filled',
      title: 'Order filled',
      body: 'One of your orders was filled.',
      data: { orderId: payload.orderId },
    });
  }

  @OnEvent('order.cancelled')
  async onOrderCancelled(payload: { orderId: string; userId: string; reason?: string }) {
    await this.notifications.notify(payload.userId, {
      type: 'order_cancelled',
      title: 'Order cancelled',
      body: payload.reason ?? 'One of your orders was cancelled.',
      data: { orderId: payload.orderId },
    });
  }
}
