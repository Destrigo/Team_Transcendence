import { Module } from "@nestjs/common"
import { FriendsService } from "./friends/friends.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { FriendsController } from "./friends/friends.controller";

@Module({
    imports: [PrismaModule],
    controllers: [FriendsController],
    providers: [FriendsService],
    exports: [],
})
export class SocialModule {}