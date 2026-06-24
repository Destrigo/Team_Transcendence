import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class LeaderboardService {
    constructor(private prisma: PrismaService) {}

    async getLeaderboard() {
        const users = await this.prisma.user.findMany({
            select: {
                id: true, 
                username: true,
                balance: true,
                holdings: {
                    select: {
                        quantity: true,
                        asset: {
                            select: {currentPrice: true }
                        }
                    }
                }
            }
        });

        const leaderboard = users.map(user => {
            const holdingValue = user.holdings.reduce((sum, holdings) => {
                return sum + Number(holdings.quantity) * Number(holdings.asset.currentPrice)
            }, 0)

            return {
                id: user.id,
                username: user.username,
                totalValue: Number(user.balance) + holdingValue,
            };
        }).sort((a, b) => b.totalValue - a.totalValue); //highest first

        return leaderboard;
    }
}