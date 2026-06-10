import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from './backend/generated';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    // Runs when the app starts - establish DB connection
    async onModuleInit() {
        await this.$connect(); // Opens TCP connection on app startup
    }

    // Runs when the app shuts down - close DB connection
    async onModuleDestroy() {
        await this.$disconnect(); // Closes connection
    }
}