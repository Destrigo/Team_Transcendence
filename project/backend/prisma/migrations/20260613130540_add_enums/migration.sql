/*
  Warnings:

  - Changed the type of `type` on the `Asset` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Friendships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `orderType` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `direction` on the `PriceAlerts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('crypto', 'stock');

-- CreateEnum
CREATE TYPE "OrderSide" AS ENUM ('buy', 'sell');

-- CreateEnum
CREATE TYPE "OrderKind" AS ENUM ('market', 'limit');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'filled', 'cancelled');

-- CreateEnum
CREATE TYPE "FriendshipStatus" AS ENUM ('pending', 'accepted', 'declined');

-- CreateEnum
CREATE TYPE "AlertDirection" AS ENUM ('above', 'below');

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "type",
ADD COLUMN     "type" "AssetType" NOT NULL;

-- AlterTable
ALTER TABLE "Friendships" DROP COLUMN "status",
ADD COLUMN     "status" "FriendshipStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "type",
ADD COLUMN     "type" "OrderSide" NOT NULL,
DROP COLUMN "orderType",
ADD COLUMN     "orderType" "OrderKind" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL;

-- AlterTable
ALTER TABLE "PriceAlerts" DROP COLUMN "direction",
ADD COLUMN     "direction" "AlertDirection" NOT NULL;

-- CreateIndex
CREATE INDEX "Asset_type_idx" ON "Asset"("type");

-- CreateIndex
CREATE INDEX "Order_status_orderType_idx" ON "Order"("status", "orderType");
