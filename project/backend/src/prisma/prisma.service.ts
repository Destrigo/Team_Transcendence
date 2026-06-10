import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    constructor() {
        const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
        super({ adapter });
    }

    // Runs when the app starts - establish DB connection
    async onModuleInit() {
        await this.$connect(); // Opens TCP connection on app startup
    }

    // Runs when the app shuts down - close DB connection
    async onModuleDestroy() {
        await this.$disconnect(); // Closes connection
    }
}