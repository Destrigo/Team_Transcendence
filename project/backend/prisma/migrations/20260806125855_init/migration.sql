-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('STOCK', 'CRYPTO', 'FOREX', 'COMMODITY');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('BUY', 'SELL');

-- CreateEnum
CREATE TYPE "OrderExecutionType" AS ENUM ('MARKET', 'LIMIT');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PROCESSING', 'FILLED', 'CANCELLED');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255),
    "hashed_refresh_token" VARCHAR(255),
    "username" VARCHAR(50) NOT NULL,
    "display_name" TEXT,
    "avatar_url" TEXT,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 10000,
    "oauth_provider" VARCHAR(50),
    "oauth_id" VARCHAR(255),
    "two_factor_secret" VARCHAR(255),
    "two_factor_enabled" BOOLEAN NOT NULL DEFAULT false,
    "language" VARCHAR(5) NOT NULL DEFAULT 'en',
    "is_online" BOOLEAN NOT NULL DEFAULT false,
    "last_seen" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assets" (
    "id" UUID NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AssetType" NOT NULL,
    "current_price" DECIMAL(15,6) NOT NULL DEFAULT 0,
    "change_24h" DECIMAL(10,4) NOT NULL DEFAULT 0,
    "volume_24h" DECIMAL(20,2) NOT NULL DEFAULT 0,
    "market_cap" DECIMAL(20,2) NOT NULL DEFAULT 0,
    "logo_url" TEXT,
    "coingecko_id" TEXT,
    "finnhub_symbol" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "price_updated_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "asset_id" UUID NOT NULL,
    "type" "OrderType" NOT NULL,
    "order_type" "OrderExecutionType" NOT NULL,
    "quantity" DECIMAL(15,8) NOT NULL,
    "price" DECIMAL(15,6) NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "filled_at" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holdings" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "asset_id" UUID NOT NULL,
    "quantity" DECIMAL(15,8) NOT NULL,
    "avg_buy_price" DECIMAL(15,6) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "holdings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_snapshots" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "total_value" DECIMAL(15,2) NOT NULL,
    "balance" DECIMAL(15,2) NOT NULL,
    "holdings_value" DECIMAL(15,2) NOT NULL,
    "snapshot_date" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "assets_symbol_key" ON "assets"("symbol");

-- CreateIndex
CREATE INDEX "orders_user_id_created_at_idx" ON "orders"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "orders_status_order_type_idx" ON "orders"("status", "order_type");

-- CreateIndex
CREATE INDEX "holdings_user_id_idx" ON "holdings"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "holdings_user_id_asset_id_key" ON "holdings"("user_id", "asset_id");

-- CreateIndex
CREATE INDEX "portfolio_snapshots_user_id_snapshot_date_idx" ON "portfolio_snapshots"("user_id", "snapshot_date");

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_snapshots_user_id_snapshot_date_key" ON "portfolio_snapshots"("user_id", "snapshot_date");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holdings" ADD CONSTRAINT "holdings_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holdings" ADD CONSTRAINT "holdings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_snapshots" ADD CONSTRAINT "portfolio_snapshots_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
