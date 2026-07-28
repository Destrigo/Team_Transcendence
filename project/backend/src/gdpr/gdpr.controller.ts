import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { AccessTokenGuard } from '../common/guards/access-token.guard';
import { DeleteAccountDto } from './dto/delete-account.dto';
import { GdprService } from './gdpr.service';

type AuthenticatedRequest = Request & {
  user: { userId: string };
};

@Controller('gdpr')
@UseGuards(AccessTokenGuard)
export class GdprController {
  constructor(private readonly gdprService: GdprService) {}

  @Get('export')
  async export(
    @Req() req: AuthenticatedRequest,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.gdprService.exportUserData(req.user.userId);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="papertrade-personal-data.json"',
    );

    return data;
  }

  @Delete('delete-account')
  @HttpCode(HttpStatus.OK)
  async deleteAccount(
    @Req() req: AuthenticatedRequest,
    @Body() dto: DeleteAccountDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.gdprService.deleteAccount(
      req.user.userId,
      dto.password,
    );

    res.clearCookie('access_token');
    res.clearCookie('refresh_token');

    return result;
  }
}
