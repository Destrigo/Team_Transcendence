import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { parseQueryInt } from '../../common/parse-query-int';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
@UseGuards(JwtAuthGuard)
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get()
  getLeaderboard(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.leaderboardService.getLeaderboard(parseQueryInt(page), parseQueryInt(limit));
  }
}
