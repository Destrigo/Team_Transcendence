import {
  BadRequestException,
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

@Controller('analytics')
@UseGuards(JwtAuthGuard)
export class AnalyticsController {
  constructor(private analytics: AnalyticsService) {}

  @Get('portfolio')
  getPortfolio(
    @CurrentUser() user: AuthenticatedUser,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.analytics.getPortfolioHistory(
      user.userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );
  }

  @Get('allocation')
  getAllocation(@CurrentUser() user: AuthenticatedUser) {
    return this.analytics.getAllocation(user.userId);
  }

  @Get('stats')
  getStats(
    @CurrentUser() user: AuthenticatedUser,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.analytics.getTradeStats(
      user.userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );
  }

  @Get('trades')
  getTrades(
    @CurrentUser() user: AuthenticatedUser,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.analytics.getTrades(
      user.userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );
  }

  @Get('export/csv')
  async exportCsv(
    @CurrentUser() user: AuthenticatedUser,
    @Res() res: Response,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const csv = await this.analytics.exportCsv(
      user.userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="trades.csv"');
    res.send(csv);
  }

  @Get('export/pdf')
  async exportPdf(
    @CurrentUser() user: AuthenticatedUser,
    @Res() res: Response,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const pdf = await this.analytics.exportPdf(
      user.userId,
      this.parseDate(from, 'from'),
      this.parseDate(to, 'to'),
    );

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="analytics-report.pdf"',
    );
    res.send(pdf);
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
