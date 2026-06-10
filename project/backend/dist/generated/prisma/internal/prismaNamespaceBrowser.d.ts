import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Asset: "Asset";
    readonly Order: "Order";
    readonly Holdings: "Holdings";
    readonly PortfolioSnapshots: "PortfolioSnapshots";
    readonly Friendships: "Friendships";
    readonly Messages: "Messages";
    readonly Notifications: "Notifications";
    readonly PriceAlerts: "PriceAlerts";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly username: "username";
    readonly displayName: "displayName";
    readonly passwordHash: "passwordHash";
    readonly avatarUrl: "avatarUrl";
    readonly balance: "balance";
    readonly oauthProvider: "oauthProvider";
    readonly oauthId: "oauthId";
    readonly twoFactorSecret: "twoFactorSecret";
    readonly twoFactorEnabled: "twoFactorEnabled";
    readonly language: "language";
    readonly isOnline: "isOnline";
    readonly lastSeen: "lastSeen";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AssetScalarFieldEnum: {
    readonly id: "id";
    readonly symbol: "symbol";
    readonly name: "name";
    readonly type: "type";
    readonly currentPrice: "currentPrice";
    readonly priceUpdatedAt: "priceUpdatedAt";
    readonly logoUrl: "logoUrl";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly assetId: "assetId";
    readonly type: "type";
    readonly orderType: "orderType";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly total: "total";
    readonly status: "status";
    readonly filledAt: "filledAt";
    readonly createdAt: "createdAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const HoldingsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly assetId: "assetId";
    readonly quantity: "quantity";
    readonly avgBuyPrice: "avgBuyPrice";
    readonly updatedAt: "updatedAt";
};
export type HoldingsScalarFieldEnum = (typeof HoldingsScalarFieldEnum)[keyof typeof HoldingsScalarFieldEnum];
export declare const PortfolioSnapshotsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly totalValue: "totalValue";
    readonly balance: "balance";
    readonly holdingsValue: "holdingsValue";
    readonly snapshotDate: "snapshotDate";
};
export type PortfolioSnapshotsScalarFieldEnum = (typeof PortfolioSnapshotsScalarFieldEnum)[keyof typeof PortfolioSnapshotsScalarFieldEnum];
export declare const FriendshipsScalarFieldEnum: {
    readonly id: "id";
    readonly requesterId: "requesterId";
    readonly addresseeId: "addresseeId";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type FriendshipsScalarFieldEnum = (typeof FriendshipsScalarFieldEnum)[keyof typeof FriendshipsScalarFieldEnum];
export declare const MessagesScalarFieldEnum: {
    readonly id: "id";
    readonly senderId: "senderId";
    readonly receiverId: "receiverId";
    readonly content: "content";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum];
export declare const NotificationsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly data: "data";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];
export declare const PriceAlertsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly assetId: "assetId";
    readonly targetPrice: "targetPrice";
    readonly direction: "direction";
    readonly isTriggered: "isTriggered";
    readonly createdAt: "createdAt";
};
export type PriceAlertsScalarFieldEnum = (typeof PriceAlertsScalarFieldEnum)[keyof typeof PriceAlertsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
