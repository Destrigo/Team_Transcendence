import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations"
	},
	datasource: {
		url: "postgresql://papertrade:papertrade_secret@localhost:5432/papertrade"
	}
});
