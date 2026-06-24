import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect  } from "@nestjs/websockets"
import { PrismaService } from "src/prisma/prisma.service";

@WebSocketGateway()
export class PresenceGateway implements OnGatewayDisconnect, OnGatewayConnection {
    constructor(private prisma: PrismaService) {}

    async handleConnection(client) {
        const userId = client.handshake.query.userId as string;
        if (!userId) { client.disconnect(); return; }
        
        await this.prisma.user.update({
            where: { id: userId },
            data: { isOnline: true }
       });
    }

    async handleDisconnect(client) {
        const userId = client.handshake.query.userId as string;
        if (!userId) { return; }
        
        await this.prisma.user.update({
            where: { id: userId },
            data: { isOnline: false, lastSeen: new Date()}
        })
    }
}