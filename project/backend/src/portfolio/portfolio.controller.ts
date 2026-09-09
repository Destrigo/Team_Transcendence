import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DateRangeDto } from '../analytics/dto/analytics.dto';

@UseGuards(JwtAuthGuard)
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getPortfolio(@Req() req) {
    return this.portfolioService.getPortfolio(req.user.userId);
  }

  @Get('history')
  getHistory(@Req() req, @Query() { from, to }: DateRangeDto) {
    return this.portfolioService.getHistory(req.user.userId, from, to);
  }
}
