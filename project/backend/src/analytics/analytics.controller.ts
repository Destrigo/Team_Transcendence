import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('analytics')
@UseGuards(JwtAuthGuard)
export class AnalyticsController {
  constructor(private analytics: AnalyticsService) {}

  @Get('portfolio')
  getPortfolio(
    @Req() req: Request,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = (req.user as any).userId;
    return this.analytics.getPortfolioHistory(userId, from ? new Date(from) : undefined, to ? new Date(to) : undefined);
  }

  @Get('allocation')
  getAllocation(@Req() req: Request) {
    return this.analytics.getAllocation((req.user as any).userId);
  }

  @Get('stats')
  getStats(
    @Req() req: Request,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = (req.user as any).userId;
    return this.analytics.getTradeStats(userId, from ? new Date(from) : undefined, to ? new Date(to) : undefined);
  }

  @Get('trades')
  getTrades(
    @Req() req: Request,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = (req.user as any).userId;
    return this.analytics.getTrades(userId, from ? new Date(from) : undefined, to ? new Date(to) : undefined);
  }

  @Get('export/csv')
  async exportCsv(
    @Req() req: Request,
    @Res() res: Response,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const userId = (req.user as any).userId;
    const csv = await this.analytics.exportCsv(userId, from ? new Date(from) : undefined, to ? new Date(to) : undefined);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="trades.csv"');
    res.send(csv);
  }
}
