import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { MessageService } from "./messages.service";


@WebSocketGateway()
export class MessageGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    private userSocket = new Map<string, string>();
    
    constructor(private messageService: MessageService) {}
    
    async handleConnection(client) {
        const userId = client.handshake.query.userId as string;
        if (!userId) { client.disconnect()}

        this.userSocket.set(userId, client.id)

    }

    async handleDisconnect(client) {
        for (const [userId, socketId] of this.userSocket.entries())
            if (socketId === client.id) {
                this.userSocket.delete(userId);
                break;
            }
    }

    @SubscribeMessage('send_message')
    async handleMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { receiverId: string; content: string }
    ) {
        
        const senderId = client.handshake.query.userId;
        const message = await this.messageService.sendMessage(senderId, data.receiverId, data.content);
        
        const receiverSocketId = this.userSocket.get(data.receiverId)
        if (receiverSocketId) {
            this.server.to(receiverSocketId).emit('new_message', message);
        }
        this.server.to(client.id).emit('new_message', message);

    }   
    

}