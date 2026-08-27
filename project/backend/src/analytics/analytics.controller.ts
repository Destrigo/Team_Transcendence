import {
  Controller,
  Get,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../auth/jwt-payload.interface';
import { AnalyticsService } from './analytics.service';
import { DateRangeDto } from './dto/analytics.dto';

@UseGuards(JwtAuthGuard)
@Controller('analytics')
export class AnalyticsController {
  constructor(private analytics: AnalyticsService) {}

  @Get('portfolio')
  getPortfolio(
    @CurrentUser() user: AuthenticatedUser,
    @Query() { from, to }: DateRangeDto,
  ) {
    return this.analytics.getPortfolioHistory(user.userId, from, to);
  }

  @Get('allocation')
  getAllocation(@CurrentUser() user: AuthenticatedUser) {
    return this.analytics.getAllocation(user.userId);
  }

  @Get('stats')
  getStats(
    @CurrentUser() user: AuthenticatedUser,
    @Query() { from, to }: DateRangeDto,
  ) {
    return this.analytics.getTradeStats(user.userId, from, to);
  }

  @Get('trades')
  getTrades(
    @CurrentUser() user: AuthenticatedUser,
    @Query() { from, to }: DateRangeDto,
  ) {
    return this.analytics.getTrades(user.userId, from, to);
  }

  @Get('export/csv')
  async exportCsv(
    @CurrentUser() user: AuthenticatedUser,
    @Res() res: Response,
    @Query() { from, to }: DateRangeDto,
  ) {
    const csv = await this.analytics.exportCsv(user.userId, from, to);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="trades.csv"');
    res.send(csv);
  }

  @Get('export/pdf')
  async exportPdf(
    @CurrentUser() user: AuthenticatedUser,
    @Res() res: Response,
    @Query() { from, to }: DateRangeDto,
  ) {
    const pdf = await this.analytics.exportPdf(user.userId, from, to);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="analytics-report.pdf"',
    );
    res.send(pdf);
  }
}
