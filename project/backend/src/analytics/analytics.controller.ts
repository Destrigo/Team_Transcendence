import {
  BadRequestException,
  Controller,
  Get,
  Query,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { AnalyticsService } from './analytics.service';

type AuthenticatedRequest = Request & {
  user?: {
    userId?: string;
    id?: string;
  };
};

@Controller('analytics')
export class AnalyticsController {
  constructor(private analytics: AnalyticsService) {}

  @Get('portfolio')
  getPortfolio(
    @Req() req: AuthenticatedRequest,
    @Query('userId') userIdOverride?: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = this.getUserId(req, userIdOverride);
    return this.analytics.getPortfolioHistory(
      userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );
  }

  @Get('allocation')
  getAllocation(
    @Req() req: AuthenticatedRequest,
    @Query('userId') userIdOverride?: string,
  ) {
    return this.analytics.getAllocation(this.getUserId(req, userIdOverride));
  }

  @Get('stats')
  getStats(
    @Req() req: AuthenticatedRequest,
    @Query('userId') userIdOverride?: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = this.getUserId(req, userIdOverride);
    return this.analytics.getTradeStats(
      userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );
  }

  @Get('trades')
  getTrades(
    @Req() req: AuthenticatedRequest,
    @Query('userId') userIdOverride?: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = this.getUserId(req, userIdOverride);
    return this.analytics.getTrades(
      userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );
  }

  @Get('export/csv')
  async exportCsv(
    @Req() req: AuthenticatedRequest,
    @Res() res: Response,
    @Query('userId') userIdOverride?: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = this.getUserId(req, userIdOverride);
    const csv = await this.analytics.exportCsv(
      userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="trades.csv"');
    res.send(csv);
  }

  private getUserId(
    req: AuthenticatedRequest,
    userIdOverride?: string,
  ): string {
    const userId = req.user?.userId ?? req.user?.id ?? userIdOverride;

    if (!userId) {
      throw new UnauthorizedException('Authenticated user is required');
    }

    return userId;
  }

  private parseDate(
    value: string | undefined,
    field: string,
  ): Date | undefined {
    if (!value) return undefined;
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) {
      throw new BadRequestException(`Invalid date for ${field}`);
    }
    return d;
  }
}
