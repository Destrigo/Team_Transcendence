import {
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
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = this.getUserId(req);
    return this.analytics.getPortfolioHistory(
      userId,
      from ? new Date(from) : undefined,
      to ? new Date(to) : undefined,
    );
  }

  @Get('allocation')
  getAllocation(@Req() req: AuthenticatedRequest) {
    return this.analytics.getAllocation(this.getUserId(req));
  }

  @Get('stats')
  getStats(
    @Req() req: AuthenticatedRequest,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = this.getUserId(req);
    return this.analytics.getTradeStats(
      userId,
      from ? new Date(from) : undefined,
      to ? new Date(to) : undefined,
    );
  }

  @Get('trades')
  getTrades(
    @Req() req: AuthenticatedRequest,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = this.getUserId(req);
    return this.analytics.getTrades(
      userId,
      from ? new Date(from) : undefined,
      to ? new Date(to) : undefined,
    );
  }

  @Get('export/csv')
  async exportCsv(
    @Req() req: AuthenticatedRequest,
    @Res() res: Response,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = this.getUserId(req);
    const csv = await this.analytics.exportCsv(
      userId,
      from ? new Date(from) : undefined,
      to ? new Date(to) : undefined,
    );

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="trades.csv"');
    res.send(csv);
  }

  private getUserId(req: AuthenticatedRequest): string {
    const userId = req.user?.userId ?? req.user?.id;

    if (!userId) {
      throw new UnauthorizedException('Authenticated user is required');
    }

    return userId;
  }
}
