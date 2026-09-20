import { PrismaClient, AssetType, OrderType, OrderExecutionType, OrderStatus, FriendshipStatus, type User } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as bcrypt from "bcrypt";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

// Seeded for evaluators so the app isn't empty on first login — see README.
const TEST_ACCOUNTS = [
  { email: 'evaluator1@papertrade.test', username: 'evaluator1', password: 'Evaluator123!' },
  { email: 'evaluator2@papertrade.test', username: 'evaluator2', password: 'Evaluator123!' },
];

const assets = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    type: AssetType.CRYPTO,
    coingeckoId: 'bitcoin',
    logoUrl: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    type: AssetType.CRYPTO,
    coingeckoId: 'ethereum',
    logoUrl: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    type: AssetType.CRYPTO,
    coingeckoId: 'solana',
    logoUrl: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png',
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    type: AssetType.CRYPTO,
    coingeckoId: 'cardano',
    logoUrl: 'https://assets.coingecko.com/coins/images/975/thumb/cardano.png',
  },
  {
    symbol: 'DOT',
    name: 'Polkadot',
    type: AssetType.CRYPTO,
    coingeckoId: 'polkadot',
    logoUrl: 'https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png',
  },
  {
    symbol: 'LINK',
    name: 'Chainlink',
    type: AssetType.CRYPTO,
    coingeckoId: 'chainlink',
    logoUrl: 'https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png',
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    type: AssetType.CRYPTO,
    coingeckoId: 'avalanche-2',
    logoUrl: 'https://assets.coingecko.com/coins/images/12559/thumb/coin-round-red.png',
  },
  {
    symbol: 'UNI',
    name: 'Uniswap',
    type: AssetType.CRYPTO,
    coingeckoId: 'uniswap',
    logoUrl: 'https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png',
  },
  {
    symbol: 'LTC',
    name: 'Litecoin',
    type: AssetType.CRYPTO,
    coingeckoId: 'litecoin',
    logoUrl: 'https://assets.coingecko.com/coins/images/2/thumb/litecoin.png',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    type: AssetType.CRYPTO,
    coingeckoId: 'dogecoin',
    logoUrl: 'https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png',
  },

  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    type: AssetType.STOCK,
    finnhubSymbol: 'AAPL',
    logoUrl: null,
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    type: AssetType.STOCK,
    finnhubSymbol: 'MSFT',
    logoUrl: null,
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    type: AssetType.STOCK,
    finnhubSymbol: 'GOOGL',
    logoUrl: null,
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    type: AssetType.STOCK,
    finnhubSymbol: 'AMZN',
    logoUrl: null,
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    type: AssetType.STOCK,
    finnhubSymbol: 'TSLA',
    logoUrl: null,
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    type: AssetType.STOCK,
    finnhubSymbol: 'META',
    logoUrl: null,
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    type: AssetType.STOCK,
    finnhubSymbol: 'NVDA',
    logoUrl: null,
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co.',
    type: AssetType.STOCK,
    finnhubSymbol: 'JPM',
    logoUrl: null,
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices Inc.',
    type: AssetType.STOCK,
    finnhubSymbol: 'AMD',
    logoUrl: null,
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    type: AssetType.STOCK,
    finnhubSymbol: 'JNJ',
    logoUrl: null,
  },
];

async function main() {
  console.log('Seeding assets...');

  for (const asset of assets) {
    await prisma.asset.upsert({
      where: { symbol: asset.symbol },
      update: {},
      create: asset,
    });
  }

  console.log(`Seeded ${assets.length} assets`);

  console.log('Seeding test accounts...');

  const users: User[] = [];
  for (const account of TEST_ACCOUNTS) {
    const passwordHash = await bcrypt.hash(account.password, 10);
    const user = await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        username: account.username,
        passwordHash,
        displayName: account.username,
      },
    });
    users.push(user);
  }

  const [evaluator1, evaluator2] = users;

  // Make the two test accounts friends so Friends/Chat/Presence/Notifications
  // have something to show immediately instead of starting from empty.
  await prisma.friendship.upsert({
    where: { requesterId_addresseeId: { requesterId: evaluator1.id, addresseeId: evaluator2.id } },
    update: { status: FriendshipStatus.ACCEPTED },
    create: {
      requesterId: evaluator1.id,
      addresseeId: evaluator2.id,
      status: FriendshipStatus.ACCEPTED,
    },
  });

  const existingMessages = await prisma.message.count({
    where: { senderId: evaluator1.id, receiverId: evaluator2.id },
  });
  if (existingMessages === 0) {
    await prisma.message.create({
      data: { senderId: evaluator1.id, receiverId: evaluator2.id, content: 'Welcome to PaperTrade!' },
    });
    await prisma.message.create({
      data: { senderId: evaluator2.id, receiverId: evaluator1.id, content: 'Thanks, looking forward to trading.' },
    });
  }

  // Give evaluator1 a starting position + a filled order so Portfolio,
  // Trading order history, and Analytics aren't empty on first look either.
  const btc = await prisma.asset.findUnique({ where: { symbol: 'BTC' } });
  if (btc) {
    const quantity = 0.01;
    const price = Number(btc.currentPrice) || 30000;

    await prisma.holding.upsert({
      where: { userId_assetId: { userId: evaluator1.id, assetId: btc.id } },
      update: {},
      create: {
        userId: evaluator1.id,
        assetId: btc.id,
        quantity,
        avgBuyPrice: price,
      },
    });

    const existingOrder = await prisma.order.count({ where: { userId: evaluator1.id, assetId: btc.id } });
    if (existingOrder === 0) {
      await prisma.order.create({
        data: {
          userId: evaluator1.id,
          assetId: btc.id,
          type: OrderType.BUY,
          orderType: OrderExecutionType.MARKET,
          quantity,
          price,
          total: quantity * price,
          status: OrderStatus.FILLED,
          filledAt: new Date(),
        },
      });
      await prisma.user.update({
        where: { id: evaluator1.id },
        data: { balance: { decrement: quantity * price } },
      });
    }
  }

  console.log(`Seeded ${users.length} test accounts (${TEST_ACCOUNTS.map((a) => a.email).join(', ')}, password: Evaluator123!)`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
