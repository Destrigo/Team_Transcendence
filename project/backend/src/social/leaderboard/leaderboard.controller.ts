import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { LeaderboardService } from './leaderboard.service';

// A non-numeric query param (e.g. ?page=abc) makes Number() return NaN,
// which is truthy-checked-in but not `undefined` — the service's default
// parameters only kick in for `undefined`, so a NaN would silently corrupt
// the pagination math instead of falling back to the default.
function parsePositiveInt(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

@Controller('leaderboard')
@UseGuards(JwtAuthGuard)
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get()
  getLeaderboard(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.leaderboardService.getLeaderboard(parsePositiveInt(page), parsePositiveInt(limit));
  }
}
