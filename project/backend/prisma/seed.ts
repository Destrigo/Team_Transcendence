import { PrismaClient, AssetType } from '@prisma/client';

const prisma = new PrismaClient();

const assets = [
  // ── CRYPTO (10) ────────────────────────────────────────────────
  // coingeckoId matches the CoinGecko /simple/price?ids= parameter
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

  // ── STOCKS (10) ────────────────────────────────────────────────
  // finnhubSymbol is the ticker used in Finnhub /quote?symbol=
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
  console.log('🌱 Seeding assets...');

  for (const asset of assets) {
    await prisma.asset.upsert({
      where: { symbol: asset.symbol },
      update: {},  // don't overwrite prices if already seeded
      create: asset,
    });
  }

  console.log(`✅ Seeded ${assets.length} assets (10 crypto + 10 stocks)`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
