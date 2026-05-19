import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const users = [
    {
      email: "trader1@example.com",
      username: "bullmaster",
      display_name: "Bull Master",
      balance: 25000,
      language: "en",
      is_online: true,
    },
    {
      email: "trader2@example.com",
      username: "cryptoking",
      display_name: "Crypto King",
      balance: 50000,
      language: "en",
      is_online: false,
    },
    {
      email: "trader3@example.com",
      username: "scalper_pro",
      display_name: "Scalper Pro",
      balance: 15000,
      language: "ru",
      is_online: true,
    },
    {
      email: "trader4@example.com",
      username: "longterm_guru",
      display_name: "Long Term Guru",
      balance: 100000,
      language: "en",
      is_online: false,
    },
    {
      email: "trader5@example.com",
      username: "risk_hunter",
      display_name: "Risk Hunter",
      balance: 7000,
      language: "ru",
      is_online: true,
    },
  ];

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  console.log("✅ Users seeded");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });