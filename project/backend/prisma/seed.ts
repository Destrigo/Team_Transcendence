import { PrismaClient, AssetType } from "@prisma/client";
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

  const assets = [
    // ================= CRYPTO =================
    {
      symbol: "BTC",
      name: "Bitcoin",
      type: AssetType.CRYPTO,
      currentPrice: 105000,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: "bitcoin",
      finnhubSymbol: null,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      type: AssetType.CRYPTO,
      currentPrice: 2500,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: "ethereum",
      finnhubSymbol: null,
    },
    {
      symbol: "SOL",
      name: "Solana",
      type: AssetType.CRYPTO,
      currentPrice: 145,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: "solana",
      finnhubSymbol: null,
    },
    {
      symbol: "BNB",
      name: "Binance Coin",
      type: AssetType.CRYPTO,
      currentPrice: 580,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: "binancecoin",
      finnhubSymbol: null,
    },
    {
      symbol: "XRP",
      name: "Ripple",
      type: AssetType.CRYPTO,
      currentPrice: 0.55,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: "ripple",
      finnhubSymbol: null,
    },
    {
      symbol: "ADA",
      name: "Cardano",
      type: AssetType.CRYPTO,
      currentPrice: 0.45,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: "cardano",
      finnhubSymbol: null,
    },
    {
      symbol: "DOGE",
      name: "Dogecoin",
      type: AssetType.CRYPTO,
      currentPrice: 0.12,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: "dogecoin",
      finnhubSymbol: null,
    },

    // ================= STOCK =================
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      type: AssetType.STOCK,
      currentPrice: 213,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: null,
      finnhubSymbol: "AAPL",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      type: AssetType.STOCK,
      currentPrice: 415,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: null,
      finnhubSymbol: "MSFT",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      type: AssetType.STOCK,
      currentPrice: 175,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: null,
      finnhubSymbol: "GOOGL",
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      type: AssetType.STOCK,
      currentPrice: 185,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: null,
      finnhubSymbol: "AMZN",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      type: AssetType.STOCK,
      currentPrice: 240,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
      coingeckoId: null,
      finnhubSymbol: "TSLA",
    },
  ];

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  await prisma.asset.createMany({
    data: assets,
    skipDuplicates: true,
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });