import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { FriendsController } from './friends/friends.controller';
import { FriendsService } from './friends/friends.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { LeaderboardController } from './leaderboard/leaderboard.controller';
import { LeaderboardService } from './leaderboard/leaderboard.service';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsService } from './notifications/notifications.service';
import { OrderNotificationsListener } from './notifications/order-notifications.listener';
import { SocialGateway } from './social.gateway';

@Module({
  imports: [
    PrismaModule,
    // Access tokens are already signed elsewhere; this registration only
    // lets the social gateway verify them on the websocket handshake.
    JwtModule.register({ secret: process.env.JWT_ACCESS_SECRET }),
  ],
  controllers: [FriendsController, MessagesController, LeaderboardController, NotificationsController],
  providers: [
    FriendsService,
    MessagesService,
    LeaderboardService,
    NotificationsService,
    OrderNotificationsListener,
    SocialGateway,
  ],
})
export class SocialModule {}
