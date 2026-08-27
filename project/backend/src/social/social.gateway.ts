import { Injectable, Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';
import { FriendsService } from './friends/friends.service';
import { MessagesService } from './messages/messages.service';
import { getUserIdFromSocket } from '../common/ws/ws-auth.util';

type AuthedSocket = Socket & { data: { userId: string } };

/**
 * Single authenticated namespace for presence + direct messages + push
 * notifications. One socket connection per browser tab; a user can have
 * several open at once (multiple tabs/devices), so presence is tracked as
 * a set of connections per user, not a single flag.
 */
@Injectable()
@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL ?? 'https://localhost',
    credentials: true,
  },
  namespace: '/social',
})
export class SocialGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(SocialGateway.name);
  private readonly connections = new Map<string, Set<string>>(); // userId -> socket ids

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly friends: FriendsService,
    private readonly messages: MessagesService,
  ) {}

  async handleConnection(client: Socket) {
    const userId = await getUserIdFromSocket(client, this.jwtService);
    if (!userId) {
      client.disconnect(true);
      return;
    }
    (client as AuthedSocket).data.userId = userId;

    const wasOffline = !this.connections.has(userId);
    if (wasOffline) this.connections.set(userId, new Set());
    this.connections.get(userId)!.add(client.id);

    if (wasOffline) {
      await this.prisma.user.update({
        where: { id: userId },
        data: { isOnline: true },
      });
      await this.broadcastPresence(userId, true);
    }
  }

  async handleDisconnect(client: Socket) {
    const userId = (client as AuthedSocket).data?.userId;
    if (!userId) return;

    const sockets = this.connections.get(userId);
    sockets?.delete(client.id);

    if (sockets && sockets.size === 0) {
      this.connections.delete(userId);
      await this.prisma.user.update({
        where: { id: userId },
        data: { isOnline: false, lastSeen: new Date() },
      });
      await this.broadcastPresence(userId, false);
    }
  }

  @SubscribeMessage('message:send')
  async handleSendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { receiverId: string; content: string },
  ) {
    const senderId = (client as AuthedSocket).data?.userId;
    if (!senderId) return;

    const message = await this.messages.sendMessage(
      senderId,
      data.receiverId,
      data.content,
    );

    this.emitToUser(data.receiverId, 'message:new', message);
    this.emitToUser(senderId, 'message:new', message);
    return message;
  }

  /** Used by NotificationsService to push a live event to every tab a user has open. */
  emitToUser(userId: string, event: string, payload: unknown) {
    const sockets = this.connections.get(userId);
    if (!sockets) return;
    for (const socketId of sockets) {
      this.server.to(socketId).emit(event, payload);
    }
  }

  isOnline(userId: string): boolean {
    return this.connections.has(userId);
  }

  private async broadcastPresence(userId: string, online: boolean) {
    try {
      const friendIds = await this.friends.getFriendIds(userId);
      for (const friendId of friendIds) {
        this.emitToUser(friendId, 'presence:update', { userId, online });
      }
    } catch (err) {
      this.logger.warn(`Failed to broadcast presence for ${userId}: ${err}`);
    }
  }
}
