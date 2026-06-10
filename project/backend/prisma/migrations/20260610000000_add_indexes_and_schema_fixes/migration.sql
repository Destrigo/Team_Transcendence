-- AlterTable: add createdAt to PortfolioSnapshots, change snapshotDate to DATE type
ALTER TABLE "PortfolioSnapshots" ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "snapshotDate" SET DATA TYPE DATE;

-- Add indexes for fast lookups on frequently queried columns

-- CreateIndex
CREATE INDEX "Asset_type_idx" ON "Asset"("type");

-- CreateIndex
CREATE INDEX "Friendships_requesterId_idx" ON "Friendships"("requesterId");

-- CreateIndex
CREATE INDEX "Friendships_addresseeId_idx" ON "Friendships"("addresseeId");

-- CreateIndex
CREATE INDEX "Holdings_userId_idx" ON "Holdings"("userId");

-- CreateIndex
CREATE INDEX "Messages_senderId_receiverId_createdAt_idx" ON "Messages"("senderId", "receiverId", "createdAt");

-- CreateIndex
CREATE INDEX "Notifications_userId_isRead_createdAt_idx" ON "Notifications"("userId", "isRead", "createdAt");

-- CreateIndex
CREATE INDEX "Order_userId_createdAt_idx" ON "Order"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Order_status_orderType_idx" ON "Order"("status", "orderType");

-- CreateIndex
CREATE INDEX "PortfolioSnapshots_userId_snapshotDate_idx" ON "PortfolioSnapshots"("userId", "snapshotDate");

-- CreateIndex: one snapshot per user per day
CREATE UNIQUE INDEX "PortfolioSnapshots_userId_snapshotDate_key" ON "PortfolioSnapshots"("userId", "snapshotDate");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");
