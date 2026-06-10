"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.SortOrder = exports.PriceAlertsScalarFieldEnum = exports.NotificationsScalarFieldEnum = exports.MessagesScalarFieldEnum = exports.FriendshipsScalarFieldEnum = exports.PortfolioSnapshotsScalarFieldEnum = exports.HoldingsScalarFieldEnum = exports.OrderScalarFieldEnum = exports.AssetScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Asset: 'Asset',
    Order: 'Order',
    Holdings: 'Holdings',
    PortfolioSnapshots: 'PortfolioSnapshots',
    Friendships: 'Friendships',
    Messages: 'Messages',
    Notifications: 'Notifications',
    PriceAlerts: 'PriceAlerts'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    username: 'username',
    displayName: 'displayName',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    balance: 'balance',
    oauthProvider: 'oauthProvider',
    oauthId: 'oauthId',
    twoFactorSecret: 'twoFactorSecret',
    twoFactorEnabled: 'twoFactorEnabled',
    language: 'language',
    isOnline: 'isOnline',
    lastSeen: 'lastSeen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AssetScalarFieldEnum = {
    id: 'id',
    symbol: 'symbol',
    name: 'name',
    type: 'type',
    currentPrice: 'currentPrice',
    priceUpdatedAt: 'priceUpdatedAt',
    logoUrl: 'logoUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    assetId: 'assetId',
    type: 'type',
    orderType: 'orderType',
    quantity: 'quantity',
    price: 'price',
    total: 'total',
    status: 'status',
    filledAt: 'filledAt',
    createdAt: 'createdAt'
};
exports.HoldingsScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    assetId: 'assetId',
    quantity: 'quantity',
    avgBuyPrice: 'avgBuyPrice',
    updatedAt: 'updatedAt'
};
exports.PortfolioSnapshotsScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    totalValue: 'totalValue',
    balance: 'balance',
    holdingsValue: 'holdingsValue',
    snapshotDate: 'snapshotDate'
};
exports.FriendshipsScalarFieldEnum = {
    id: 'id',
    requesterId: 'requesterId',
    addresseeId: 'addresseeId',
    status: 'status',
    createdAt: 'createdAt'
};
exports.MessagesScalarFieldEnum = {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    content: 'content',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.NotificationsScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    body: 'body',
    data: 'data',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.PriceAlertsScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    assetId: 'assetId',
    targetPrice: 'targetPrice',
    direction: 'direction',
    isTriggered: 'isTriggered',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map