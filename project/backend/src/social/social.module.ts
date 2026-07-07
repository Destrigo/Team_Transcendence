import { Module } from "@nestjs/common"
import { FriendsService } from "./friends/friends.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { FriendsController } from "./friends/friends.controller";
import { MessageController } from "./messages/messages.controller";
import { MessageService } from "./messages/messages.service";
import { LeaderboardController } from "./leaderboard/leaderboard.controller";
import { LeaderboardService } from "./leaderboard/leaderboard.service";
import { PresenceGateway } from "./presence/presence.gateway";
import { MessageGateway } from "./messages/chat.gateway";

@Module({
    imports: [PrismaModule],
    controllers: [FriendsController, MessageController, LeaderboardController],
    providers: [FriendsService, MessageService, LeaderboardService, PresenceGateway, MessageGateway],
    exports: [],
})
export class SocialModule {}