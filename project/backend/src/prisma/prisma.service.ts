import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

	private static createDriverAdapter() {
		const pool = new pkg.Pool({
			connectionString: 'postgresql://papertrade:papertrade_secret@localhost:5432/papertrade'
		});

		return new PrismaPg(pool);
	}

	constructor() {
		super({
			adapter: PrismaService.createDriverAdapter(),
		});
	}

	async onModuleInit() {
		await this.$connect();
	}

	async onModuleDestroy() {
		await this.$disconnect();
	}

}
