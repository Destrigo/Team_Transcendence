import { Controller, Get, Post, Put, Param, Body  } from "@nestjs/common";
import { MessageService } from "./messages.service"

@Controller('messages')
export class MessageController {
    constructor(private messageService: MessageService) {}

    @Post('/:otherUserId')
    sendMessage(@Param('otherUserId') otherUserId: string, @Body('content') content: string) {
        const senderId = "placeholder-sender-id";
        return this.messageService.sendMessage(senderId, otherUserId, content)
    }

    @Get('/:otherUserId')
    getConversation(@Param('otherUserId') otherUserId: string) {
        const userId = "placeholder-user-id";
        return this.messageService.getConversation(userId, otherUserId);

    }

    @Put('/:otherUserId/read')
    markAsRead(@Param('otherUserId') otherUserId: string) {
        const userId = "placeholder-user-id"
        return this.messageService.markAsRead(userId, otherUserId);
    }
}