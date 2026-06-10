
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Holdings
 * 
 */
export type Holdings = $Result.DefaultSelection<Prisma.$HoldingsPayload>
/**
 * Model PortfolioSnapshots
 * 
 */
export type PortfolioSnapshots = $Result.DefaultSelection<Prisma.$PortfolioSnapshotsPayload>
/**
 * Model Friendships
 * 
 */
export type Friendships = $Result.DefaultSelection<Prisma.$FriendshipsPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model PriceAlerts
 * 
 */
export type PriceAlerts = $Result.DefaultSelection<Prisma.$PriceAlertsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holdings`: Exposes CRUD operations for the **Holdings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holdings
    * const holdings = await prisma.holdings.findMany()
    * ```
    */
  get holdings(): Prisma.HoldingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioSnapshots`: Exposes CRUD operations for the **PortfolioSnapshots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioSnapshots
    * const portfolioSnapshots = await prisma.portfolioSnapshots.findMany()
    * ```
    */
  get portfolioSnapshots(): Prisma.PortfolioSnapshotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendships`: Exposes CRUD operations for the **Friendships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendships.findMany()
    * ```
    */
  get friendships(): Prisma.FriendshipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceAlerts`: Exposes CRUD operations for the **PriceAlerts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceAlerts
    * const priceAlerts = await prisma.priceAlerts.findMany()
    * ```
    */
  get priceAlerts(): Prisma.PriceAlertsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "asset" | "order" | "holdings" | "portfolioSnapshots" | "friendships" | "messages" | "notifications" | "priceAlerts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Holdings: {
        payload: Prisma.$HoldingsPayload<ExtArgs>
        fields: Prisma.HoldingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoldingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoldingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          findFirst: {
            args: Prisma.HoldingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoldingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          findMany: {
            args: Prisma.HoldingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>[]
          }
          create: {
            args: Prisma.HoldingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          createMany: {
            args: Prisma.HoldingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoldingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>[]
          }
          delete: {
            args: Prisma.HoldingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          update: {
            args: Prisma.HoldingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          deleteMany: {
            args: Prisma.HoldingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoldingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoldingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>[]
          }
          upsert: {
            args: Prisma.HoldingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingsPayload>
          }
          aggregate: {
            args: Prisma.HoldingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoldings>
          }
          groupBy: {
            args: Prisma.HoldingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoldingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoldingsCountArgs<ExtArgs>
            result: $Utils.Optional<HoldingsCountAggregateOutputType> | number
          }
        }
      }
      PortfolioSnapshots: {
        payload: Prisma.$PortfolioSnapshotsPayload<ExtArgs>
        fields: Prisma.PortfolioSnapshotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioSnapshotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioSnapshotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>
          }
          findFirst: {
            args: Prisma.PortfolioSnapshotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioSnapshotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>
          }
          findMany: {
            args: Prisma.PortfolioSnapshotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>[]
          }
          create: {
            args: Prisma.PortfolioSnapshotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>
          }
          createMany: {
            args: Prisma.PortfolioSnapshotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioSnapshotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>[]
          }
          delete: {
            args: Prisma.PortfolioSnapshotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>
          }
          update: {
            args: Prisma.PortfolioSnapshotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioSnapshotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioSnapshotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioSnapshotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioSnapshotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioSnapshotsPayload>
          }
          aggregate: {
            args: Prisma.PortfolioSnapshotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioSnapshots>
          }
          groupBy: {
            args: Prisma.PortfolioSnapshotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioSnapshotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioSnapshotsCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioSnapshotsCountAggregateOutputType> | number
          }
        }
      }
      Friendships: {
        payload: Prisma.$FriendshipsPayload<ExtArgs>
        fields: Prisma.FriendshipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>
          }
          findFirst: {
            args: Prisma.FriendshipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>
          }
          findMany: {
            args: Prisma.FriendshipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>[]
          }
          create: {
            args: Prisma.FriendshipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>
          }
          createMany: {
            args: Prisma.FriendshipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>[]
          }
          delete: {
            args: Prisma.FriendshipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>
          }
          update: {
            args: Prisma.FriendshipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipsPayload>
          }
          aggregate: {
            args: Prisma.FriendshipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendships>
          }
          groupBy: {
            args: Prisma.FriendshipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipsCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      PriceAlerts: {
        payload: Prisma.$PriceAlertsPayload<ExtArgs>
        fields: Prisma.PriceAlertsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceAlertsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceAlertsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>
          }
          findFirst: {
            args: Prisma.PriceAlertsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceAlertsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>
          }
          findMany: {
            args: Prisma.PriceAlertsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>[]
          }
          create: {
            args: Prisma.PriceAlertsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>
          }
          createMany: {
            args: Prisma.PriceAlertsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceAlertsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>[]
          }
          delete: {
            args: Prisma.PriceAlertsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>
          }
          update: {
            args: Prisma.PriceAlertsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>
          }
          deleteMany: {
            args: Prisma.PriceAlertsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceAlertsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceAlertsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>[]
          }
          upsert: {
            args: Prisma.PriceAlertsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertsPayload>
          }
          aggregate: {
            args: Prisma.PriceAlertsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceAlerts>
          }
          groupBy: {
            args: Prisma.PriceAlertsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceAlertsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceAlertsCountArgs<ExtArgs>
            result: $Utils.Optional<PriceAlertsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    asset?: AssetOmit
    order?: OrderOmit
    holdings?: HoldingsOmit
    portfolioSnapshots?: PortfolioSnapshotsOmit
    friendships?: FriendshipsOmit
    messages?: MessagesOmit
    notifications?: NotificationsOmit
    priceAlerts?: PriceAlertsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    holdings: number
    portfolioSnapshots: number
    sentMessages: number
    receivedMessages: number
    sentFriendRequests: number
    receivedFriendRequests: number
    notifications: number
    priceAlerts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    holdings?: boolean | UserCountOutputTypeCountHoldingsArgs
    portfolioSnapshots?: boolean | UserCountOutputTypeCountPortfolioSnapshotsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    sentFriendRequests?: boolean | UserCountOutputTypeCountSentFriendRequestsArgs
    receivedFriendRequests?: boolean | UserCountOutputTypeCountReceivedFriendRequestsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    priceAlerts?: boolean | UserCountOutputTypeCountPriceAlertsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPortfolioSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioSnapshotsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPriceAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAlertsWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    orders: number
    holdings: number
    priceAlerts: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | AssetCountOutputTypeCountOrdersArgs
    holdings?: boolean | AssetCountOutputTypeCountHoldingsArgs
    priceAlerts?: boolean | AssetCountOutputTypeCountPriceAlertsArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingsWhereInput
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountPriceAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAlertsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    displayName: string | null
    passwordHash: string | null
    avatarUrl: string | null
    balance: Decimal | null
    oauthProvider: string | null
    oauthId: string | null
    twoFactorSecret: string | null
    twoFactorEnabled: boolean | null
    language: string | null
    isOnline: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    displayName: string | null
    passwordHash: string | null
    avatarUrl: string | null
    balance: Decimal | null
    oauthProvider: string | null
    oauthId: string | null
    twoFactorSecret: string | null
    twoFactorEnabled: boolean | null
    language: string | null
    isOnline: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    displayName: number
    passwordHash: number
    avatarUrl: number
    balance: number
    oauthProvider: number
    oauthId: number
    twoFactorSecret: number
    twoFactorEnabled: number
    language: number
    isOnline: number
    lastSeen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    displayName?: true
    passwordHash?: true
    avatarUrl?: true
    balance?: true
    oauthProvider?: true
    oauthId?: true
    twoFactorSecret?: true
    twoFactorEnabled?: true
    language?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    displayName?: true
    passwordHash?: true
    avatarUrl?: true
    balance?: true
    oauthProvider?: true
    oauthId?: true
    twoFactorSecret?: true
    twoFactorEnabled?: true
    language?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    displayName?: true
    passwordHash?: true
    avatarUrl?: true
    balance?: true
    oauthProvider?: true
    oauthId?: true
    twoFactorSecret?: true
    twoFactorEnabled?: true
    language?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    displayName: string | null
    passwordHash: string
    avatarUrl: string | null
    balance: Decimal
    oauthProvider: string | null
    oauthId: string | null
    twoFactorSecret: string | null
    twoFactorEnabled: boolean
    language: string
    isOnline: boolean
    lastSeen: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    displayName?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    balance?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabled?: boolean
    language?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    holdings?: boolean | User$holdingsArgs<ExtArgs>
    portfolioSnapshots?: boolean | User$portfolioSnapshotsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sentFriendRequests?: boolean | User$sentFriendRequestsArgs<ExtArgs>
    receivedFriendRequests?: boolean | User$receivedFriendRequestsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    priceAlerts?: boolean | User$priceAlertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    displayName?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    balance?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabled?: boolean
    language?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    displayName?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    balance?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabled?: boolean
    language?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    displayName?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    balance?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabled?: boolean
    language?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "displayName" | "passwordHash" | "avatarUrl" | "balance" | "oauthProvider" | "oauthId" | "twoFactorSecret" | "twoFactorEnabled" | "language" | "isOnline" | "lastSeen" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    holdings?: boolean | User$holdingsArgs<ExtArgs>
    portfolioSnapshots?: boolean | User$portfolioSnapshotsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sentFriendRequests?: boolean | User$sentFriendRequestsArgs<ExtArgs>
    receivedFriendRequests?: boolean | User$receivedFriendRequestsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    priceAlerts?: boolean | User$priceAlertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      holdings: Prisma.$HoldingsPayload<ExtArgs>[]
      portfolioSnapshots: Prisma.$PortfolioSnapshotsPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagesPayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagesPayload<ExtArgs>[]
      sentFriendRequests: Prisma.$FriendshipsPayload<ExtArgs>[]
      receivedFriendRequests: Prisma.$FriendshipsPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      priceAlerts: Prisma.$PriceAlertsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      displayName: string | null
      passwordHash: string
      avatarUrl: string | null
      balance: Prisma.Decimal
      oauthProvider: string | null
      oauthId: string | null
      twoFactorSecret: string | null
      twoFactorEnabled: boolean
      language: string
      isOnline: boolean
      lastSeen: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    holdings<T extends User$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, User$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolioSnapshots<T extends User$portfolioSnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, User$portfolioSnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentFriendRequests<T extends User$sentFriendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentFriendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriendRequests<T extends User$receivedFriendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedFriendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceAlerts<T extends User$priceAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$priceAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Decimal'>
    readonly oauthProvider: FieldRef<"User", 'String'>
    readonly oauthId: FieldRef<"User", 'String'>
    readonly twoFactorSecret: FieldRef<"User", 'String'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly language: FieldRef<"User", 'String'>
    readonly isOnline: FieldRef<"User", 'Boolean'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.holdings
   */
  export type User$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    where?: HoldingsWhereInput
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    cursor?: HoldingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoldingsScalarFieldEnum | HoldingsScalarFieldEnum[]
  }

  /**
   * User.portfolioSnapshots
   */
  export type User$portfolioSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    where?: PortfolioSnapshotsWhereInput
    orderBy?: PortfolioSnapshotsOrderByWithRelationInput | PortfolioSnapshotsOrderByWithRelationInput[]
    cursor?: PortfolioSnapshotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioSnapshotsScalarFieldEnum | PortfolioSnapshotsScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * User.sentFriendRequests
   */
  export type User$sentFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    where?: FriendshipsWhereInput
    orderBy?: FriendshipsOrderByWithRelationInput | FriendshipsOrderByWithRelationInput[]
    cursor?: FriendshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * User.receivedFriendRequests
   */
  export type User$receivedFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    where?: FriendshipsWhereInput
    orderBy?: FriendshipsOrderByWithRelationInput | FriendshipsOrderByWithRelationInput[]
    cursor?: FriendshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * User.priceAlerts
   */
  export type User$priceAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    where?: PriceAlertsWhereInput
    orderBy?: PriceAlertsOrderByWithRelationInput | PriceAlertsOrderByWithRelationInput[]
    cursor?: PriceAlertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceAlertsScalarFieldEnum | PriceAlertsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    currentPrice: Decimal | null
  }

  export type AssetSumAggregateOutputType = {
    currentPrice: Decimal | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
    type: string | null
    currentPrice: Decimal | null
    priceUpdatedAt: Date | null
    logoUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
    type: string | null
    currentPrice: Decimal | null
    priceUpdatedAt: Date | null
    logoUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    type: number
    currentPrice: number
    priceUpdatedAt: number
    logoUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    currentPrice?: true
  }

  export type AssetSumAggregateInputType = {
    currentPrice?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    type?: true
    currentPrice?: true
    priceUpdatedAt?: true
    logoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    type?: true
    currentPrice?: true
    priceUpdatedAt?: true
    logoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    type?: true
    currentPrice?: true
    priceUpdatedAt?: true
    logoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal
    priceUpdatedAt: Date
    logoUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    type?: boolean
    currentPrice?: boolean
    priceUpdatedAt?: boolean
    logoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Asset$ordersArgs<ExtArgs>
    holdings?: boolean | Asset$holdingsArgs<ExtArgs>
    priceAlerts?: boolean | Asset$priceAlertsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    type?: boolean
    currentPrice?: boolean
    priceUpdatedAt?: boolean
    logoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    type?: boolean
    currentPrice?: boolean
    priceUpdatedAt?: boolean
    logoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
    type?: boolean
    currentPrice?: boolean
    priceUpdatedAt?: boolean
    logoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "name" | "type" | "currentPrice" | "priceUpdatedAt" | "logoUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Asset$ordersArgs<ExtArgs>
    holdings?: boolean | Asset$holdingsArgs<ExtArgs>
    priceAlerts?: boolean | Asset$priceAlertsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      holdings: Prisma.$HoldingsPayload<ExtArgs>[]
      priceAlerts: Prisma.$PriceAlertsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      name: string
      type: string
      currentPrice: Prisma.Decimal
      priceUpdatedAt: Date
      logoUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Asset$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Asset$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    holdings<T extends Asset$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceAlerts<T extends Asset$priceAlertsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$priceAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly symbol: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly type: FieldRef<"Asset", 'String'>
    readonly currentPrice: FieldRef<"Asset", 'Decimal'>
    readonly priceUpdatedAt: FieldRef<"Asset", 'DateTime'>
    readonly logoUrl: FieldRef<"Asset", 'String'>
    readonly isActive: FieldRef<"Asset", 'Boolean'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.orders
   */
  export type Asset$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Asset.holdings
   */
  export type Asset$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    where?: HoldingsWhereInput
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    cursor?: HoldingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoldingsScalarFieldEnum | HoldingsScalarFieldEnum[]
  }

  /**
   * Asset.priceAlerts
   */
  export type Asset$priceAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    where?: PriceAlertsWhereInput
    orderBy?: PriceAlertsOrderByWithRelationInput | PriceAlertsOrderByWithRelationInput[]
    cursor?: PriceAlertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceAlertsScalarFieldEnum | PriceAlertsScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    quantity: Decimal | null
    price: Decimal | null
    total: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    quantity: Decimal | null
    price: Decimal | null
    total: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    assetId: string | null
    type: string | null
    orderType: string | null
    quantity: Decimal | null
    price: Decimal | null
    total: Decimal | null
    status: string | null
    filledAt: Date | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    assetId: string | null
    type: string | null
    orderType: string | null
    quantity: Decimal | null
    price: Decimal | null
    total: Decimal | null
    status: string | null
    filledAt: Date | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    assetId: number
    type: number
    orderType: number
    quantity: number
    price: number
    total: number
    status: number
    filledAt: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    quantity?: true
    price?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    quantity?: true
    price?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    type?: true
    orderType?: true
    quantity?: true
    price?: true
    total?: true
    status?: true
    filledAt?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    type?: true
    orderType?: true
    quantity?: true
    price?: true
    total?: true
    status?: true
    filledAt?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    type?: true
    orderType?: true
    quantity?: true
    price?: true
    total?: true
    status?: true
    filledAt?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    assetId: string
    type: string
    orderType: string
    quantity: Decimal
    price: Decimal
    total: Decimal
    status: string
    filledAt: Date | null
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    type?: boolean
    orderType?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    status?: boolean
    filledAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    type?: boolean
    orderType?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    status?: boolean
    filledAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    type?: boolean
    orderType?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    status?: boolean
    filledAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    assetId?: boolean
    type?: boolean
    orderType?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    status?: boolean
    filledAt?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "assetId" | "type" | "orderType" | "quantity" | "price" | "total" | "status" | "filledAt" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      assetId: string
      type: string
      orderType: string
      quantity: Prisma.Decimal
      price: Prisma.Decimal
      total: Prisma.Decimal
      status: string
      filledAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly assetId: FieldRef<"Order", 'String'>
    readonly type: FieldRef<"Order", 'String'>
    readonly orderType: FieldRef<"Order", 'String'>
    readonly quantity: FieldRef<"Order", 'Decimal'>
    readonly price: FieldRef<"Order", 'Decimal'>
    readonly total: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'String'>
    readonly filledAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Holdings
   */

  export type AggregateHoldings = {
    _count: HoldingsCountAggregateOutputType | null
    _avg: HoldingsAvgAggregateOutputType | null
    _sum: HoldingsSumAggregateOutputType | null
    _min: HoldingsMinAggregateOutputType | null
    _max: HoldingsMaxAggregateOutputType | null
  }

  export type HoldingsAvgAggregateOutputType = {
    quantity: Decimal | null
    avgBuyPrice: Decimal | null
  }

  export type HoldingsSumAggregateOutputType = {
    quantity: Decimal | null
    avgBuyPrice: Decimal | null
  }

  export type HoldingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    assetId: string | null
    quantity: Decimal | null
    avgBuyPrice: Decimal | null
    updatedAt: Date | null
  }

  export type HoldingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    assetId: string | null
    quantity: Decimal | null
    avgBuyPrice: Decimal | null
    updatedAt: Date | null
  }

  export type HoldingsCountAggregateOutputType = {
    id: number
    userId: number
    assetId: number
    quantity: number
    avgBuyPrice: number
    updatedAt: number
    _all: number
  }


  export type HoldingsAvgAggregateInputType = {
    quantity?: true
    avgBuyPrice?: true
  }

  export type HoldingsSumAggregateInputType = {
    quantity?: true
    avgBuyPrice?: true
  }

  export type HoldingsMinAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    quantity?: true
    avgBuyPrice?: true
    updatedAt?: true
  }

  export type HoldingsMaxAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    quantity?: true
    avgBuyPrice?: true
    updatedAt?: true
  }

  export type HoldingsCountAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    quantity?: true
    avgBuyPrice?: true
    updatedAt?: true
    _all?: true
  }

  export type HoldingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holdings to aggregate.
     */
    where?: HoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holdings
    **/
    _count?: true | HoldingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoldingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoldingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoldingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoldingsMaxAggregateInputType
  }

  export type GetHoldingsAggregateType<T extends HoldingsAggregateArgs> = {
        [P in keyof T & keyof AggregateHoldings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoldings[P]>
      : GetScalarType<T[P], AggregateHoldings[P]>
  }




  export type HoldingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingsWhereInput
    orderBy?: HoldingsOrderByWithAggregationInput | HoldingsOrderByWithAggregationInput[]
    by: HoldingsScalarFieldEnum[] | HoldingsScalarFieldEnum
    having?: HoldingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoldingsCountAggregateInputType | true
    _avg?: HoldingsAvgAggregateInputType
    _sum?: HoldingsSumAggregateInputType
    _min?: HoldingsMinAggregateInputType
    _max?: HoldingsMaxAggregateInputType
  }

  export type HoldingsGroupByOutputType = {
    id: string
    userId: string
    assetId: string
    quantity: Decimal
    avgBuyPrice: Decimal
    updatedAt: Date
    _count: HoldingsCountAggregateOutputType | null
    _avg: HoldingsAvgAggregateOutputType | null
    _sum: HoldingsSumAggregateOutputType | null
    _min: HoldingsMinAggregateOutputType | null
    _max: HoldingsMaxAggregateOutputType | null
  }

  type GetHoldingsGroupByPayload<T extends HoldingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoldingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoldingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoldingsGroupByOutputType[P]>
            : GetScalarType<T[P], HoldingsGroupByOutputType[P]>
        }
      >
    >


  export type HoldingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    quantity?: boolean
    avgBuyPrice?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holdings"]>

  export type HoldingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    quantity?: boolean
    avgBuyPrice?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holdings"]>

  export type HoldingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    quantity?: boolean
    avgBuyPrice?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holdings"]>

  export type HoldingsSelectScalar = {
    id?: boolean
    userId?: boolean
    assetId?: boolean
    quantity?: boolean
    avgBuyPrice?: boolean
    updatedAt?: boolean
  }

  export type HoldingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "assetId" | "quantity" | "avgBuyPrice" | "updatedAt", ExtArgs["result"]["holdings"]>
  export type HoldingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type HoldingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type HoldingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $HoldingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holdings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      assetId: string
      quantity: Prisma.Decimal
      avgBuyPrice: Prisma.Decimal
      updatedAt: Date
    }, ExtArgs["result"]["holdings"]>
    composites: {}
  }

  type HoldingsGetPayload<S extends boolean | null | undefined | HoldingsDefaultArgs> = $Result.GetResult<Prisma.$HoldingsPayload, S>

  type HoldingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoldingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoldingsCountAggregateInputType | true
    }

  export interface HoldingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holdings'], meta: { name: 'Holdings' } }
    /**
     * Find zero or one Holdings that matches the filter.
     * @param {HoldingsFindUniqueArgs} args - Arguments to find a Holdings
     * @example
     * // Get one Holdings
     * const holdings = await prisma.holdings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoldingsFindUniqueArgs>(args: SelectSubset<T, HoldingsFindUniqueArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holdings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoldingsFindUniqueOrThrowArgs} args - Arguments to find a Holdings
     * @example
     * // Get one Holdings
     * const holdings = await prisma.holdings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoldingsFindUniqueOrThrowArgs>(args: SelectSubset<T, HoldingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holdings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsFindFirstArgs} args - Arguments to find a Holdings
     * @example
     * // Get one Holdings
     * const holdings = await prisma.holdings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoldingsFindFirstArgs>(args?: SelectSubset<T, HoldingsFindFirstArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holdings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsFindFirstOrThrowArgs} args - Arguments to find a Holdings
     * @example
     * // Get one Holdings
     * const holdings = await prisma.holdings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoldingsFindFirstOrThrowArgs>(args?: SelectSubset<T, HoldingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holdings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holdings
     * const holdings = await prisma.holdings.findMany()
     * 
     * // Get first 10 Holdings
     * const holdings = await prisma.holdings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holdingsWithIdOnly = await prisma.holdings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoldingsFindManyArgs>(args?: SelectSubset<T, HoldingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holdings.
     * @param {HoldingsCreateArgs} args - Arguments to create a Holdings.
     * @example
     * // Create one Holdings
     * const Holdings = await prisma.holdings.create({
     *   data: {
     *     // ... data to create a Holdings
     *   }
     * })
     * 
     */
    create<T extends HoldingsCreateArgs>(args: SelectSubset<T, HoldingsCreateArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holdings.
     * @param {HoldingsCreateManyArgs} args - Arguments to create many Holdings.
     * @example
     * // Create many Holdings
     * const holdings = await prisma.holdings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoldingsCreateManyArgs>(args?: SelectSubset<T, HoldingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holdings and returns the data saved in the database.
     * @param {HoldingsCreateManyAndReturnArgs} args - Arguments to create many Holdings.
     * @example
     * // Create many Holdings
     * const holdings = await prisma.holdings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holdings and only return the `id`
     * const holdingsWithIdOnly = await prisma.holdings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoldingsCreateManyAndReturnArgs>(args?: SelectSubset<T, HoldingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Holdings.
     * @param {HoldingsDeleteArgs} args - Arguments to delete one Holdings.
     * @example
     * // Delete one Holdings
     * const Holdings = await prisma.holdings.delete({
     *   where: {
     *     // ... filter to delete one Holdings
     *   }
     * })
     * 
     */
    delete<T extends HoldingsDeleteArgs>(args: SelectSubset<T, HoldingsDeleteArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holdings.
     * @param {HoldingsUpdateArgs} args - Arguments to update one Holdings.
     * @example
     * // Update one Holdings
     * const holdings = await prisma.holdings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoldingsUpdateArgs>(args: SelectSubset<T, HoldingsUpdateArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holdings.
     * @param {HoldingsDeleteManyArgs} args - Arguments to filter Holdings to delete.
     * @example
     * // Delete a few Holdings
     * const { count } = await prisma.holdings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoldingsDeleteManyArgs>(args?: SelectSubset<T, HoldingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holdings
     * const holdings = await prisma.holdings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoldingsUpdateManyArgs>(args: SelectSubset<T, HoldingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holdings and returns the data updated in the database.
     * @param {HoldingsUpdateManyAndReturnArgs} args - Arguments to update many Holdings.
     * @example
     * // Update many Holdings
     * const holdings = await prisma.holdings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holdings and only return the `id`
     * const holdingsWithIdOnly = await prisma.holdings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HoldingsUpdateManyAndReturnArgs>(args: SelectSubset<T, HoldingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Holdings.
     * @param {HoldingsUpsertArgs} args - Arguments to update or create a Holdings.
     * @example
     * // Update or create a Holdings
     * const holdings = await prisma.holdings.upsert({
     *   create: {
     *     // ... data to create a Holdings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holdings we want to update
     *   }
     * })
     */
    upsert<T extends HoldingsUpsertArgs>(args: SelectSubset<T, HoldingsUpsertArgs<ExtArgs>>): Prisma__HoldingsClient<$Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsCountArgs} args - Arguments to filter Holdings to count.
     * @example
     * // Count the number of Holdings
     * const count = await prisma.holdings.count({
     *   where: {
     *     // ... the filter for the Holdings we want to count
     *   }
     * })
    **/
    count<T extends HoldingsCountArgs>(
      args?: Subset<T, HoldingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoldingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HoldingsAggregateArgs>(args: Subset<T, HoldingsAggregateArgs>): Prisma.PrismaPromise<GetHoldingsAggregateType<T>>

    /**
     * Group by Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HoldingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoldingsGroupByArgs['orderBy'] }
        : { orderBy?: HoldingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HoldingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoldingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holdings model
   */
  readonly fields: HoldingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holdings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoldingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Holdings model
   */
  interface HoldingsFieldRefs {
    readonly id: FieldRef<"Holdings", 'String'>
    readonly userId: FieldRef<"Holdings", 'String'>
    readonly assetId: FieldRef<"Holdings", 'String'>
    readonly quantity: FieldRef<"Holdings", 'Decimal'>
    readonly avgBuyPrice: FieldRef<"Holdings", 'Decimal'>
    readonly updatedAt: FieldRef<"Holdings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Holdings findUnique
   */
  export type HoldingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where: HoldingsWhereUniqueInput
  }

  /**
   * Holdings findUniqueOrThrow
   */
  export type HoldingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where: HoldingsWhereUniqueInput
  }

  /**
   * Holdings findFirst
   */
  export type HoldingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where?: HoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holdings.
     */
    cursor?: HoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingsScalarFieldEnum | HoldingsScalarFieldEnum[]
  }

  /**
   * Holdings findFirstOrThrow
   */
  export type HoldingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where?: HoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holdings.
     */
    cursor?: HoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingsScalarFieldEnum | HoldingsScalarFieldEnum[]
  }

  /**
   * Holdings findMany
   */
  export type HoldingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where?: HoldingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingsOrderByWithRelationInput | HoldingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holdings.
     */
    cursor?: HoldingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingsScalarFieldEnum | HoldingsScalarFieldEnum[]
  }

  /**
   * Holdings create
   */
  export type HoldingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Holdings.
     */
    data: XOR<HoldingsCreateInput, HoldingsUncheckedCreateInput>
  }

  /**
   * Holdings createMany
   */
  export type HoldingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holdings.
     */
    data: HoldingsCreateManyInput | HoldingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holdings createManyAndReturn
   */
  export type HoldingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * The data used to create many Holdings.
     */
    data: HoldingsCreateManyInput | HoldingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holdings update
   */
  export type HoldingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Holdings.
     */
    data: XOR<HoldingsUpdateInput, HoldingsUncheckedUpdateInput>
    /**
     * Choose, which Holdings to update.
     */
    where: HoldingsWhereUniqueInput
  }

  /**
   * Holdings updateMany
   */
  export type HoldingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holdings.
     */
    data: XOR<HoldingsUpdateManyMutationInput, HoldingsUncheckedUpdateManyInput>
    /**
     * Filter which Holdings to update
     */
    where?: HoldingsWhereInput
    /**
     * Limit how many Holdings to update.
     */
    limit?: number
  }

  /**
   * Holdings updateManyAndReturn
   */
  export type HoldingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * The data used to update Holdings.
     */
    data: XOR<HoldingsUpdateManyMutationInput, HoldingsUncheckedUpdateManyInput>
    /**
     * Filter which Holdings to update
     */
    where?: HoldingsWhereInput
    /**
     * Limit how many Holdings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holdings upsert
   */
  export type HoldingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Holdings to update in case it exists.
     */
    where: HoldingsWhereUniqueInput
    /**
     * In case the Holdings found by the `where` argument doesn't exist, create a new Holdings with this data.
     */
    create: XOR<HoldingsCreateInput, HoldingsUncheckedCreateInput>
    /**
     * In case the Holdings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoldingsUpdateInput, HoldingsUncheckedUpdateInput>
  }

  /**
   * Holdings delete
   */
  export type HoldingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
    /**
     * Filter which Holdings to delete.
     */
    where: HoldingsWhereUniqueInput
  }

  /**
   * Holdings deleteMany
   */
  export type HoldingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holdings to delete
     */
    where?: HoldingsWhereInput
    /**
     * Limit how many Holdings to delete.
     */
    limit?: number
  }

  /**
   * Holdings without action
   */
  export type HoldingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holdings
     */
    select?: HoldingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holdings
     */
    omit?: HoldingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingsInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioSnapshots
   */

  export type AggregatePortfolioSnapshots = {
    _count: PortfolioSnapshotsCountAggregateOutputType | null
    _avg: PortfolioSnapshotsAvgAggregateOutputType | null
    _sum: PortfolioSnapshotsSumAggregateOutputType | null
    _min: PortfolioSnapshotsMinAggregateOutputType | null
    _max: PortfolioSnapshotsMaxAggregateOutputType | null
  }

  export type PortfolioSnapshotsAvgAggregateOutputType = {
    totalValue: Decimal | null
    balance: Decimal | null
    holdingsValue: Decimal | null
  }

  export type PortfolioSnapshotsSumAggregateOutputType = {
    totalValue: Decimal | null
    balance: Decimal | null
    holdingsValue: Decimal | null
  }

  export type PortfolioSnapshotsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalValue: Decimal | null
    balance: Decimal | null
    holdingsValue: Decimal | null
    snapshotDate: Date | null
  }

  export type PortfolioSnapshotsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalValue: Decimal | null
    balance: Decimal | null
    holdingsValue: Decimal | null
    snapshotDate: Date | null
  }

  export type PortfolioSnapshotsCountAggregateOutputType = {
    id: number
    userId: number
    totalValue: number
    balance: number
    holdingsValue: number
    snapshotDate: number
    _all: number
  }


  export type PortfolioSnapshotsAvgAggregateInputType = {
    totalValue?: true
    balance?: true
    holdingsValue?: true
  }

  export type PortfolioSnapshotsSumAggregateInputType = {
    totalValue?: true
    balance?: true
    holdingsValue?: true
  }

  export type PortfolioSnapshotsMinAggregateInputType = {
    id?: true
    userId?: true
    totalValue?: true
    balance?: true
    holdingsValue?: true
    snapshotDate?: true
  }

  export type PortfolioSnapshotsMaxAggregateInputType = {
    id?: true
    userId?: true
    totalValue?: true
    balance?: true
    holdingsValue?: true
    snapshotDate?: true
  }

  export type PortfolioSnapshotsCountAggregateInputType = {
    id?: true
    userId?: true
    totalValue?: true
    balance?: true
    holdingsValue?: true
    snapshotDate?: true
    _all?: true
  }

  export type PortfolioSnapshotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioSnapshots to aggregate.
     */
    where?: PortfolioSnapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioSnapshots to fetch.
     */
    orderBy?: PortfolioSnapshotsOrderByWithRelationInput | PortfolioSnapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioSnapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioSnapshots
    **/
    _count?: true | PortfolioSnapshotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioSnapshotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSnapshotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioSnapshotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioSnapshotsMaxAggregateInputType
  }

  export type GetPortfolioSnapshotsAggregateType<T extends PortfolioSnapshotsAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioSnapshots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioSnapshots[P]>
      : GetScalarType<T[P], AggregatePortfolioSnapshots[P]>
  }




  export type PortfolioSnapshotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioSnapshotsWhereInput
    orderBy?: PortfolioSnapshotsOrderByWithAggregationInput | PortfolioSnapshotsOrderByWithAggregationInput[]
    by: PortfolioSnapshotsScalarFieldEnum[] | PortfolioSnapshotsScalarFieldEnum
    having?: PortfolioSnapshotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioSnapshotsCountAggregateInputType | true
    _avg?: PortfolioSnapshotsAvgAggregateInputType
    _sum?: PortfolioSnapshotsSumAggregateInputType
    _min?: PortfolioSnapshotsMinAggregateInputType
    _max?: PortfolioSnapshotsMaxAggregateInputType
  }

  export type PortfolioSnapshotsGroupByOutputType = {
    id: string
    userId: string
    totalValue: Decimal
    balance: Decimal
    holdingsValue: Decimal
    snapshotDate: Date
    _count: PortfolioSnapshotsCountAggregateOutputType | null
    _avg: PortfolioSnapshotsAvgAggregateOutputType | null
    _sum: PortfolioSnapshotsSumAggregateOutputType | null
    _min: PortfolioSnapshotsMinAggregateOutputType | null
    _max: PortfolioSnapshotsMaxAggregateOutputType | null
  }

  type GetPortfolioSnapshotsGroupByPayload<T extends PortfolioSnapshotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioSnapshotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioSnapshotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioSnapshotsGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioSnapshotsGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSnapshotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalValue?: boolean
    balance?: boolean
    holdingsValue?: boolean
    snapshotDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioSnapshots"]>

  export type PortfolioSnapshotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalValue?: boolean
    balance?: boolean
    holdingsValue?: boolean
    snapshotDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioSnapshots"]>

  export type PortfolioSnapshotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalValue?: boolean
    balance?: boolean
    holdingsValue?: boolean
    snapshotDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioSnapshots"]>

  export type PortfolioSnapshotsSelectScalar = {
    id?: boolean
    userId?: boolean
    totalValue?: boolean
    balance?: boolean
    holdingsValue?: boolean
    snapshotDate?: boolean
  }

  export type PortfolioSnapshotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalValue" | "balance" | "holdingsValue" | "snapshotDate", ExtArgs["result"]["portfolioSnapshots"]>
  export type PortfolioSnapshotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PortfolioSnapshotsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PortfolioSnapshotsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PortfolioSnapshotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioSnapshots"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalValue: Prisma.Decimal
      balance: Prisma.Decimal
      holdingsValue: Prisma.Decimal
      snapshotDate: Date
    }, ExtArgs["result"]["portfolioSnapshots"]>
    composites: {}
  }

  type PortfolioSnapshotsGetPayload<S extends boolean | null | undefined | PortfolioSnapshotsDefaultArgs> = $Result.GetResult<Prisma.$PortfolioSnapshotsPayload, S>

  type PortfolioSnapshotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioSnapshotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioSnapshotsCountAggregateInputType | true
    }

  export interface PortfolioSnapshotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioSnapshots'], meta: { name: 'PortfolioSnapshots' } }
    /**
     * Find zero or one PortfolioSnapshots that matches the filter.
     * @param {PortfolioSnapshotsFindUniqueArgs} args - Arguments to find a PortfolioSnapshots
     * @example
     * // Get one PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioSnapshotsFindUniqueArgs>(args: SelectSubset<T, PortfolioSnapshotsFindUniqueArgs<ExtArgs>>): Prisma__PortfolioSnapshotsClient<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortfolioSnapshots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioSnapshotsFindUniqueOrThrowArgs} args - Arguments to find a PortfolioSnapshots
     * @example
     * // Get one PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioSnapshotsFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioSnapshotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioSnapshotsClient<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSnapshotsFindFirstArgs} args - Arguments to find a PortfolioSnapshots
     * @example
     * // Get one PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioSnapshotsFindFirstArgs>(args?: SelectSubset<T, PortfolioSnapshotsFindFirstArgs<ExtArgs>>): Prisma__PortfolioSnapshotsClient<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioSnapshots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSnapshotsFindFirstOrThrowArgs} args - Arguments to find a PortfolioSnapshots
     * @example
     * // Get one PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioSnapshotsFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioSnapshotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioSnapshotsClient<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortfolioSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSnapshotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.findMany()
     * 
     * // Get first 10 PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioSnapshotsWithIdOnly = await prisma.portfolioSnapshots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioSnapshotsFindManyArgs>(args?: SelectSubset<T, PortfolioSnapshotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortfolioSnapshots.
     * @param {PortfolioSnapshotsCreateArgs} args - Arguments to create a PortfolioSnapshots.
     * @example
     * // Create one PortfolioSnapshots
     * const PortfolioSnapshots = await prisma.portfolioSnapshots.create({
     *   data: {
     *     // ... data to create a PortfolioSnapshots
     *   }
     * })
     * 
     */
    create<T extends PortfolioSnapshotsCreateArgs>(args: SelectSubset<T, PortfolioSnapshotsCreateArgs<ExtArgs>>): Prisma__PortfolioSnapshotsClient<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortfolioSnapshots.
     * @param {PortfolioSnapshotsCreateManyArgs} args - Arguments to create many PortfolioSnapshots.
     * @example
     * // Create many PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioSnapshotsCreateManyArgs>(args?: SelectSubset<T, PortfolioSnapshotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioSnapshots and returns the data saved in the database.
     * @param {PortfolioSnapshotsCreateManyAndReturnArgs} args - Arguments to create many PortfolioSnapshots.
     * @example
     * // Create many PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioSnapshots and only return the `id`
     * const portfolioSnapshotsWithIdOnly = await prisma.portfolioSnapshots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioSnapshotsCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioSnapshotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PortfolioSnapshots.
     * @param {PortfolioSnapshotsDeleteArgs} args - Arguments to delete one PortfolioSnapshots.
     * @example
     * // Delete one PortfolioSnapshots
     * const PortfolioSnapshots = await prisma.portfolioSnapshots.delete({
     *   where: {
     *     // ... filter to delete one PortfolioSnapshots
     *   }
     * })
     * 
     */
    delete<T extends PortfolioSnapshotsDeleteArgs>(args: SelectSubset<T, PortfolioSnapshotsDeleteArgs<ExtArgs>>): Prisma__PortfolioSnapshotsClient<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortfolioSnapshots.
     * @param {PortfolioSnapshotsUpdateArgs} args - Arguments to update one PortfolioSnapshots.
     * @example
     * // Update one PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioSnapshotsUpdateArgs>(args: SelectSubset<T, PortfolioSnapshotsUpdateArgs<ExtArgs>>): Prisma__PortfolioSnapshotsClient<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortfolioSnapshots.
     * @param {PortfolioSnapshotsDeleteManyArgs} args - Arguments to filter PortfolioSnapshots to delete.
     * @example
     * // Delete a few PortfolioSnapshots
     * const { count } = await prisma.portfolioSnapshots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioSnapshotsDeleteManyArgs>(args?: SelectSubset<T, PortfolioSnapshotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSnapshotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioSnapshotsUpdateManyArgs>(args: SelectSubset<T, PortfolioSnapshotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioSnapshots and returns the data updated in the database.
     * @param {PortfolioSnapshotsUpdateManyAndReturnArgs} args - Arguments to update many PortfolioSnapshots.
     * @example
     * // Update many PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioSnapshots and only return the `id`
     * const portfolioSnapshotsWithIdOnly = await prisma.portfolioSnapshots.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioSnapshotsUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioSnapshotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PortfolioSnapshots.
     * @param {PortfolioSnapshotsUpsertArgs} args - Arguments to update or create a PortfolioSnapshots.
     * @example
     * // Update or create a PortfolioSnapshots
     * const portfolioSnapshots = await prisma.portfolioSnapshots.upsert({
     *   create: {
     *     // ... data to create a PortfolioSnapshots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioSnapshots we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioSnapshotsUpsertArgs>(args: SelectSubset<T, PortfolioSnapshotsUpsertArgs<ExtArgs>>): Prisma__PortfolioSnapshotsClient<$Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PortfolioSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSnapshotsCountArgs} args - Arguments to filter PortfolioSnapshots to count.
     * @example
     * // Count the number of PortfolioSnapshots
     * const count = await prisma.portfolioSnapshots.count({
     *   where: {
     *     // ... the filter for the PortfolioSnapshots we want to count
     *   }
     * })
    **/
    count<T extends PortfolioSnapshotsCountArgs>(
      args?: Subset<T, PortfolioSnapshotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioSnapshotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSnapshotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioSnapshotsAggregateArgs>(args: Subset<T, PortfolioSnapshotsAggregateArgs>): Prisma.PrismaPromise<GetPortfolioSnapshotsAggregateType<T>>

    /**
     * Group by PortfolioSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioSnapshotsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioSnapshotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioSnapshotsGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioSnapshotsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioSnapshotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioSnapshotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioSnapshots model
   */
  readonly fields: PortfolioSnapshotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioSnapshots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioSnapshotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioSnapshots model
   */
  interface PortfolioSnapshotsFieldRefs {
    readonly id: FieldRef<"PortfolioSnapshots", 'String'>
    readonly userId: FieldRef<"PortfolioSnapshots", 'String'>
    readonly totalValue: FieldRef<"PortfolioSnapshots", 'Decimal'>
    readonly balance: FieldRef<"PortfolioSnapshots", 'Decimal'>
    readonly holdingsValue: FieldRef<"PortfolioSnapshots", 'Decimal'>
    readonly snapshotDate: FieldRef<"PortfolioSnapshots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioSnapshots findUnique
   */
  export type PortfolioSnapshotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSnapshots to fetch.
     */
    where: PortfolioSnapshotsWhereUniqueInput
  }

  /**
   * PortfolioSnapshots findUniqueOrThrow
   */
  export type PortfolioSnapshotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSnapshots to fetch.
     */
    where: PortfolioSnapshotsWhereUniqueInput
  }

  /**
   * PortfolioSnapshots findFirst
   */
  export type PortfolioSnapshotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSnapshots to fetch.
     */
    where?: PortfolioSnapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioSnapshots to fetch.
     */
    orderBy?: PortfolioSnapshotsOrderByWithRelationInput | PortfolioSnapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioSnapshots.
     */
    cursor?: PortfolioSnapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioSnapshots.
     */
    distinct?: PortfolioSnapshotsScalarFieldEnum | PortfolioSnapshotsScalarFieldEnum[]
  }

  /**
   * PortfolioSnapshots findFirstOrThrow
   */
  export type PortfolioSnapshotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSnapshots to fetch.
     */
    where?: PortfolioSnapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioSnapshots to fetch.
     */
    orderBy?: PortfolioSnapshotsOrderByWithRelationInput | PortfolioSnapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioSnapshots.
     */
    cursor?: PortfolioSnapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioSnapshots.
     */
    distinct?: PortfolioSnapshotsScalarFieldEnum | PortfolioSnapshotsScalarFieldEnum[]
  }

  /**
   * PortfolioSnapshots findMany
   */
  export type PortfolioSnapshotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioSnapshots to fetch.
     */
    where?: PortfolioSnapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioSnapshots to fetch.
     */
    orderBy?: PortfolioSnapshotsOrderByWithRelationInput | PortfolioSnapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioSnapshots.
     */
    cursor?: PortfolioSnapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioSnapshots.
     */
    distinct?: PortfolioSnapshotsScalarFieldEnum | PortfolioSnapshotsScalarFieldEnum[]
  }

  /**
   * PortfolioSnapshots create
   */
  export type PortfolioSnapshotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioSnapshots.
     */
    data: XOR<PortfolioSnapshotsCreateInput, PortfolioSnapshotsUncheckedCreateInput>
  }

  /**
   * PortfolioSnapshots createMany
   */
  export type PortfolioSnapshotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioSnapshots.
     */
    data: PortfolioSnapshotsCreateManyInput | PortfolioSnapshotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioSnapshots createManyAndReturn
   */
  export type PortfolioSnapshotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioSnapshots.
     */
    data: PortfolioSnapshotsCreateManyInput | PortfolioSnapshotsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioSnapshots update
   */
  export type PortfolioSnapshotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioSnapshots.
     */
    data: XOR<PortfolioSnapshotsUpdateInput, PortfolioSnapshotsUncheckedUpdateInput>
    /**
     * Choose, which PortfolioSnapshots to update.
     */
    where: PortfolioSnapshotsWhereUniqueInput
  }

  /**
   * PortfolioSnapshots updateMany
   */
  export type PortfolioSnapshotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioSnapshots.
     */
    data: XOR<PortfolioSnapshotsUpdateManyMutationInput, PortfolioSnapshotsUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioSnapshots to update
     */
    where?: PortfolioSnapshotsWhereInput
    /**
     * Limit how many PortfolioSnapshots to update.
     */
    limit?: number
  }

  /**
   * PortfolioSnapshots updateManyAndReturn
   */
  export type PortfolioSnapshotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioSnapshots.
     */
    data: XOR<PortfolioSnapshotsUpdateManyMutationInput, PortfolioSnapshotsUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioSnapshots to update
     */
    where?: PortfolioSnapshotsWhereInput
    /**
     * Limit how many PortfolioSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioSnapshots upsert
   */
  export type PortfolioSnapshotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioSnapshots to update in case it exists.
     */
    where: PortfolioSnapshotsWhereUniqueInput
    /**
     * In case the PortfolioSnapshots found by the `where` argument doesn't exist, create a new PortfolioSnapshots with this data.
     */
    create: XOR<PortfolioSnapshotsCreateInput, PortfolioSnapshotsUncheckedCreateInput>
    /**
     * In case the PortfolioSnapshots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioSnapshotsUpdateInput, PortfolioSnapshotsUncheckedUpdateInput>
  }

  /**
   * PortfolioSnapshots delete
   */
  export type PortfolioSnapshotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
    /**
     * Filter which PortfolioSnapshots to delete.
     */
    where: PortfolioSnapshotsWhereUniqueInput
  }

  /**
   * PortfolioSnapshots deleteMany
   */
  export type PortfolioSnapshotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioSnapshots to delete
     */
    where?: PortfolioSnapshotsWhereInput
    /**
     * Limit how many PortfolioSnapshots to delete.
     */
    limit?: number
  }

  /**
   * PortfolioSnapshots without action
   */
  export type PortfolioSnapshotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioSnapshots
     */
    select?: PortfolioSnapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioSnapshots
     */
    omit?: PortfolioSnapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioSnapshotsInclude<ExtArgs> | null
  }


  /**
   * Model Friendships
   */

  export type AggregateFriendships = {
    _count: FriendshipsCountAggregateOutputType | null
    _min: FriendshipsMinAggregateOutputType | null
    _max: FriendshipsMaxAggregateOutputType | null
  }

  export type FriendshipsMinAggregateOutputType = {
    id: string | null
    requesterId: string | null
    addresseeId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type FriendshipsMaxAggregateOutputType = {
    id: string | null
    requesterId: string | null
    addresseeId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type FriendshipsCountAggregateOutputType = {
    id: number
    requesterId: number
    addresseeId: number
    status: number
    createdAt: number
    _all: number
  }


  export type FriendshipsMinAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
  }

  export type FriendshipsMaxAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
  }

  export type FriendshipsCountAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type FriendshipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to aggregate.
     */
    where?: FriendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipsOrderByWithRelationInput | FriendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipsMaxAggregateInputType
  }

  export type GetFriendshipsAggregateType<T extends FriendshipsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendships[P]>
      : GetScalarType<T[P], AggregateFriendships[P]>
  }




  export type FriendshipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipsWhereInput
    orderBy?: FriendshipsOrderByWithAggregationInput | FriendshipsOrderByWithAggregationInput[]
    by: FriendshipsScalarFieldEnum[] | FriendshipsScalarFieldEnum
    having?: FriendshipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipsCountAggregateInputType | true
    _min?: FriendshipsMinAggregateInputType
    _max?: FriendshipsMaxAggregateInputType
  }

  export type FriendshipsGroupByOutputType = {
    id: string
    requesterId: string
    addresseeId: string
    status: string
    createdAt: Date
    _count: FriendshipsCountAggregateOutputType | null
    _min: FriendshipsMinAggregateOutputType | null
    _max: FriendshipsMaxAggregateOutputType | null
  }

  type GetFriendshipsGroupByPayload<T extends FriendshipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipsGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendships"]>

  export type FriendshipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendships"]>

  export type FriendshipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendships"]>

  export type FriendshipsSelectScalar = {
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type FriendshipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "addresseeId" | "status" | "createdAt", ExtArgs["result"]["friendships"]>
  export type FriendshipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendships"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      addressee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterId: string
      addresseeId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["friendships"]>
    composites: {}
  }

  type FriendshipsGetPayload<S extends boolean | null | undefined | FriendshipsDefaultArgs> = $Result.GetResult<Prisma.$FriendshipsPayload, S>

  type FriendshipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipsCountAggregateInputType | true
    }

  export interface FriendshipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendships'], meta: { name: 'Friendships' } }
    /**
     * Find zero or one Friendships that matches the filter.
     * @param {FriendshipsFindUniqueArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipsFindUniqueArgs>(args: SelectSubset<T, FriendshipsFindUniqueArgs<ExtArgs>>): Prisma__FriendshipsClient<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipsFindUniqueOrThrowArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipsFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipsClient<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsFindFirstArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipsFindFirstArgs>(args?: SelectSubset<T, FriendshipsFindFirstArgs<ExtArgs>>): Prisma__FriendshipsClient<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsFindFirstOrThrowArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipsFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipsClient<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendships.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipsWithIdOnly = await prisma.friendships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipsFindManyArgs>(args?: SelectSubset<T, FriendshipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendships.
     * @param {FriendshipsCreateArgs} args - Arguments to create a Friendships.
     * @example
     * // Create one Friendships
     * const Friendships = await prisma.friendships.create({
     *   data: {
     *     // ... data to create a Friendships
     *   }
     * })
     * 
     */
    create<T extends FriendshipsCreateArgs>(args: SelectSubset<T, FriendshipsCreateArgs<ExtArgs>>): Prisma__FriendshipsClient<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipsCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendships = await prisma.friendships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipsCreateManyArgs>(args?: SelectSubset<T, FriendshipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipsCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendships = await prisma.friendships.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipsWithIdOnly = await prisma.friendships.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipsCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendships.
     * @param {FriendshipsDeleteArgs} args - Arguments to delete one Friendships.
     * @example
     * // Delete one Friendships
     * const Friendships = await prisma.friendships.delete({
     *   where: {
     *     // ... filter to delete one Friendships
     *   }
     * })
     * 
     */
    delete<T extends FriendshipsDeleteArgs>(args: SelectSubset<T, FriendshipsDeleteArgs<ExtArgs>>): Prisma__FriendshipsClient<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendships.
     * @param {FriendshipsUpdateArgs} args - Arguments to update one Friendships.
     * @example
     * // Update one Friendships
     * const friendships = await prisma.friendships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipsUpdateArgs>(args: SelectSubset<T, FriendshipsUpdateArgs<ExtArgs>>): Prisma__FriendshipsClient<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipsDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipsDeleteManyArgs>(args?: SelectSubset<T, FriendshipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendships = await prisma.friendships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipsUpdateManyArgs>(args: SelectSubset<T, FriendshipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipsUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendships = await prisma.friendships.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipsWithIdOnly = await prisma.friendships.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipsUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendships.
     * @param {FriendshipsUpsertArgs} args - Arguments to update or create a Friendships.
     * @example
     * // Update or create a Friendships
     * const friendships = await prisma.friendships.upsert({
     *   create: {
     *     // ... data to create a Friendships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendships we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipsUpsertArgs>(args: SelectSubset<T, FriendshipsUpsertArgs<ExtArgs>>): Prisma__FriendshipsClient<$Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendships.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipsCountArgs>(
      args?: Subset<T, FriendshipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipsAggregateArgs>(args: Subset<T, FriendshipsAggregateArgs>): Prisma.PrismaPromise<GetFriendshipsAggregateType<T>>

    /**
     * Group by Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendshipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipsGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendships model
   */
  readonly fields: FriendshipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addressee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendships model
   */
  interface FriendshipsFieldRefs {
    readonly id: FieldRef<"Friendships", 'String'>
    readonly requesterId: FieldRef<"Friendships", 'String'>
    readonly addresseeId: FieldRef<"Friendships", 'String'>
    readonly status: FieldRef<"Friendships", 'String'>
    readonly createdAt: FieldRef<"Friendships", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendships findUnique
   */
  export type FriendshipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where: FriendshipsWhereUniqueInput
  }

  /**
   * Friendships findUniqueOrThrow
   */
  export type FriendshipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where: FriendshipsWhereUniqueInput
  }

  /**
   * Friendships findFirst
   */
  export type FriendshipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipsOrderByWithRelationInput | FriendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * Friendships findFirstOrThrow
   */
  export type FriendshipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipsOrderByWithRelationInput | FriendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * Friendships findMany
   */
  export type FriendshipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipsOrderByWithRelationInput | FriendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * Friendships create
   */
  export type FriendshipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendships.
     */
    data: XOR<FriendshipsCreateInput, FriendshipsUncheckedCreateInput>
  }

  /**
   * Friendships createMany
   */
  export type FriendshipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipsCreateManyInput | FriendshipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendships createManyAndReturn
   */
  export type FriendshipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipsCreateManyInput | FriendshipsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendships update
   */
  export type FriendshipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendships.
     */
    data: XOR<FriendshipsUpdateInput, FriendshipsUncheckedUpdateInput>
    /**
     * Choose, which Friendships to update.
     */
    where: FriendshipsWhereUniqueInput
  }

  /**
   * Friendships updateMany
   */
  export type FriendshipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipsUpdateManyMutationInput, FriendshipsUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipsWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendships updateManyAndReturn
   */
  export type FriendshipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipsUpdateManyMutationInput, FriendshipsUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipsWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendships upsert
   */
  export type FriendshipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendships to update in case it exists.
     */
    where: FriendshipsWhereUniqueInput
    /**
     * In case the Friendships found by the `where` argument doesn't exist, create a new Friendships with this data.
     */
    create: XOR<FriendshipsCreateInput, FriendshipsUncheckedCreateInput>
    /**
     * In case the Friendships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipsUpdateInput, FriendshipsUncheckedUpdateInput>
  }

  /**
   * Friendships delete
   */
  export type FriendshipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
    /**
     * Filter which Friendships to delete.
     */
    where: FriendshipsWhereUniqueInput
  }

  /**
   * Friendships deleteMany
   */
  export type FriendshipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipsWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendships without action
   */
  export type FriendshipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendships
     */
    select?: FriendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendships
     */
    omit?: FriendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipsInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    content: string
    isRead: boolean
    createdAt: Date
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "content" | "isRead" | "createdAt", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      content: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'String'>
    readonly senderId: FieldRef<"Messages", 'String'>
    readonly receiverId: FieldRef<"Messages", 'String'>
    readonly content: FieldRef<"Messages", 'String'>
    readonly isRead: FieldRef<"Messages", 'Boolean'>
    readonly createdAt: FieldRef<"Messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    body: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    body: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    body: number
    data: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    data?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    body: string
    data: JsonValue
    isRead: boolean
    createdAt: Date
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "body" | "data" | "isRead" | "createdAt", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      body: string
      data: Prisma.JsonValue
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'String'>
    readonly userId: FieldRef<"Notifications", 'String'>
    readonly type: FieldRef<"Notifications", 'String'>
    readonly title: FieldRef<"Notifications", 'String'>
    readonly body: FieldRef<"Notifications", 'String'>
    readonly data: FieldRef<"Notifications", 'Json'>
    readonly isRead: FieldRef<"Notifications", 'Boolean'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model PriceAlerts
   */

  export type AggregatePriceAlerts = {
    _count: PriceAlertsCountAggregateOutputType | null
    _avg: PriceAlertsAvgAggregateOutputType | null
    _sum: PriceAlertsSumAggregateOutputType | null
    _min: PriceAlertsMinAggregateOutputType | null
    _max: PriceAlertsMaxAggregateOutputType | null
  }

  export type PriceAlertsAvgAggregateOutputType = {
    targetPrice: Decimal | null
  }

  export type PriceAlertsSumAggregateOutputType = {
    targetPrice: Decimal | null
  }

  export type PriceAlertsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    assetId: string | null
    targetPrice: Decimal | null
    direction: string | null
    isTriggered: boolean | null
    createdAt: Date | null
  }

  export type PriceAlertsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    assetId: string | null
    targetPrice: Decimal | null
    direction: string | null
    isTriggered: boolean | null
    createdAt: Date | null
  }

  export type PriceAlertsCountAggregateOutputType = {
    id: number
    userId: number
    assetId: number
    targetPrice: number
    direction: number
    isTriggered: number
    createdAt: number
    _all: number
  }


  export type PriceAlertsAvgAggregateInputType = {
    targetPrice?: true
  }

  export type PriceAlertsSumAggregateInputType = {
    targetPrice?: true
  }

  export type PriceAlertsMinAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    targetPrice?: true
    direction?: true
    isTriggered?: true
    createdAt?: true
  }

  export type PriceAlertsMaxAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    targetPrice?: true
    direction?: true
    isTriggered?: true
    createdAt?: true
  }

  export type PriceAlertsCountAggregateInputType = {
    id?: true
    userId?: true
    assetId?: true
    targetPrice?: true
    direction?: true
    isTriggered?: true
    createdAt?: true
    _all?: true
  }

  export type PriceAlertsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAlerts to aggregate.
     */
    where?: PriceAlertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertsOrderByWithRelationInput | PriceAlertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceAlertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceAlerts
    **/
    _count?: true | PriceAlertsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAlertsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceAlertsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceAlertsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceAlertsMaxAggregateInputType
  }

  export type GetPriceAlertsAggregateType<T extends PriceAlertsAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceAlerts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceAlerts[P]>
      : GetScalarType<T[P], AggregatePriceAlerts[P]>
  }




  export type PriceAlertsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAlertsWhereInput
    orderBy?: PriceAlertsOrderByWithAggregationInput | PriceAlertsOrderByWithAggregationInput[]
    by: PriceAlertsScalarFieldEnum[] | PriceAlertsScalarFieldEnum
    having?: PriceAlertsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceAlertsCountAggregateInputType | true
    _avg?: PriceAlertsAvgAggregateInputType
    _sum?: PriceAlertsSumAggregateInputType
    _min?: PriceAlertsMinAggregateInputType
    _max?: PriceAlertsMaxAggregateInputType
  }

  export type PriceAlertsGroupByOutputType = {
    id: string
    userId: string
    assetId: string
    targetPrice: Decimal
    direction: string
    isTriggered: boolean
    createdAt: Date
    _count: PriceAlertsCountAggregateOutputType | null
    _avg: PriceAlertsAvgAggregateOutputType | null
    _sum: PriceAlertsSumAggregateOutputType | null
    _min: PriceAlertsMinAggregateOutputType | null
    _max: PriceAlertsMaxAggregateOutputType | null
  }

  type GetPriceAlertsGroupByPayload<T extends PriceAlertsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceAlertsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceAlertsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceAlertsGroupByOutputType[P]>
            : GetScalarType<T[P], PriceAlertsGroupByOutputType[P]>
        }
      >
    >


  export type PriceAlertsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    targetPrice?: boolean
    direction?: boolean
    isTriggered?: boolean
    createdAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlerts"]>

  export type PriceAlertsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    targetPrice?: boolean
    direction?: boolean
    isTriggered?: boolean
    createdAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlerts"]>

  export type PriceAlertsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assetId?: boolean
    targetPrice?: boolean
    direction?: boolean
    isTriggered?: boolean
    createdAt?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlerts"]>

  export type PriceAlertsSelectScalar = {
    id?: boolean
    userId?: boolean
    assetId?: boolean
    targetPrice?: boolean
    direction?: boolean
    isTriggered?: boolean
    createdAt?: boolean
  }

  export type PriceAlertsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "assetId" | "targetPrice" | "direction" | "isTriggered" | "createdAt", ExtArgs["result"]["priceAlerts"]>
  export type PriceAlertsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PriceAlertsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PriceAlertsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PriceAlertsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceAlerts"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      assetId: string
      targetPrice: Prisma.Decimal
      direction: string
      isTriggered: boolean
      createdAt: Date
    }, ExtArgs["result"]["priceAlerts"]>
    composites: {}
  }

  type PriceAlertsGetPayload<S extends boolean | null | undefined | PriceAlertsDefaultArgs> = $Result.GetResult<Prisma.$PriceAlertsPayload, S>

  type PriceAlertsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceAlertsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceAlertsCountAggregateInputType | true
    }

  export interface PriceAlertsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceAlerts'], meta: { name: 'PriceAlerts' } }
    /**
     * Find zero or one PriceAlerts that matches the filter.
     * @param {PriceAlertsFindUniqueArgs} args - Arguments to find a PriceAlerts
     * @example
     * // Get one PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceAlertsFindUniqueArgs>(args: SelectSubset<T, PriceAlertsFindUniqueArgs<ExtArgs>>): Prisma__PriceAlertsClient<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceAlerts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceAlertsFindUniqueOrThrowArgs} args - Arguments to find a PriceAlerts
     * @example
     * // Get one PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceAlertsFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceAlertsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceAlertsClient<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertsFindFirstArgs} args - Arguments to find a PriceAlerts
     * @example
     * // Get one PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceAlertsFindFirstArgs>(args?: SelectSubset<T, PriceAlertsFindFirstArgs<ExtArgs>>): Prisma__PriceAlertsClient<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAlerts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertsFindFirstOrThrowArgs} args - Arguments to find a PriceAlerts
     * @example
     * // Get one PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceAlertsFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceAlertsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceAlertsClient<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.findMany()
     * 
     * // Get first 10 PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceAlertsWithIdOnly = await prisma.priceAlerts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceAlertsFindManyArgs>(args?: SelectSubset<T, PriceAlertsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceAlerts.
     * @param {PriceAlertsCreateArgs} args - Arguments to create a PriceAlerts.
     * @example
     * // Create one PriceAlerts
     * const PriceAlerts = await prisma.priceAlerts.create({
     *   data: {
     *     // ... data to create a PriceAlerts
     *   }
     * })
     * 
     */
    create<T extends PriceAlertsCreateArgs>(args: SelectSubset<T, PriceAlertsCreateArgs<ExtArgs>>): Prisma__PriceAlertsClient<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceAlerts.
     * @param {PriceAlertsCreateManyArgs} args - Arguments to create many PriceAlerts.
     * @example
     * // Create many PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceAlertsCreateManyArgs>(args?: SelectSubset<T, PriceAlertsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceAlerts and returns the data saved in the database.
     * @param {PriceAlertsCreateManyAndReturnArgs} args - Arguments to create many PriceAlerts.
     * @example
     * // Create many PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceAlerts and only return the `id`
     * const priceAlertsWithIdOnly = await prisma.priceAlerts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceAlertsCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceAlertsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceAlerts.
     * @param {PriceAlertsDeleteArgs} args - Arguments to delete one PriceAlerts.
     * @example
     * // Delete one PriceAlerts
     * const PriceAlerts = await prisma.priceAlerts.delete({
     *   where: {
     *     // ... filter to delete one PriceAlerts
     *   }
     * })
     * 
     */
    delete<T extends PriceAlertsDeleteArgs>(args: SelectSubset<T, PriceAlertsDeleteArgs<ExtArgs>>): Prisma__PriceAlertsClient<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceAlerts.
     * @param {PriceAlertsUpdateArgs} args - Arguments to update one PriceAlerts.
     * @example
     * // Update one PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceAlertsUpdateArgs>(args: SelectSubset<T, PriceAlertsUpdateArgs<ExtArgs>>): Prisma__PriceAlertsClient<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceAlerts.
     * @param {PriceAlertsDeleteManyArgs} args - Arguments to filter PriceAlerts to delete.
     * @example
     * // Delete a few PriceAlerts
     * const { count } = await prisma.priceAlerts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceAlertsDeleteManyArgs>(args?: SelectSubset<T, PriceAlertsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceAlertsUpdateManyArgs>(args: SelectSubset<T, PriceAlertsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAlerts and returns the data updated in the database.
     * @param {PriceAlertsUpdateManyAndReturnArgs} args - Arguments to update many PriceAlerts.
     * @example
     * // Update many PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceAlerts and only return the `id`
     * const priceAlertsWithIdOnly = await prisma.priceAlerts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceAlertsUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceAlertsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceAlerts.
     * @param {PriceAlertsUpsertArgs} args - Arguments to update or create a PriceAlerts.
     * @example
     * // Update or create a PriceAlerts
     * const priceAlerts = await prisma.priceAlerts.upsert({
     *   create: {
     *     // ... data to create a PriceAlerts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceAlerts we want to update
     *   }
     * })
     */
    upsert<T extends PriceAlertsUpsertArgs>(args: SelectSubset<T, PriceAlertsUpsertArgs<ExtArgs>>): Prisma__PriceAlertsClient<$Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertsCountArgs} args - Arguments to filter PriceAlerts to count.
     * @example
     * // Count the number of PriceAlerts
     * const count = await prisma.priceAlerts.count({
     *   where: {
     *     // ... the filter for the PriceAlerts we want to count
     *   }
     * })
    **/
    count<T extends PriceAlertsCountArgs>(
      args?: Subset<T, PriceAlertsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceAlertsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAlertsAggregateArgs>(args: Subset<T, PriceAlertsAggregateArgs>): Prisma.PrismaPromise<GetPriceAlertsAggregateType<T>>

    /**
     * Group by PriceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceAlertsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceAlertsGroupByArgs['orderBy'] }
        : { orderBy?: PriceAlertsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceAlertsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceAlertsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceAlerts model
   */
  readonly fields: PriceAlertsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceAlerts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceAlertsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceAlerts model
   */
  interface PriceAlertsFieldRefs {
    readonly id: FieldRef<"PriceAlerts", 'String'>
    readonly userId: FieldRef<"PriceAlerts", 'String'>
    readonly assetId: FieldRef<"PriceAlerts", 'String'>
    readonly targetPrice: FieldRef<"PriceAlerts", 'Decimal'>
    readonly direction: FieldRef<"PriceAlerts", 'String'>
    readonly isTriggered: FieldRef<"PriceAlerts", 'Boolean'>
    readonly createdAt: FieldRef<"PriceAlerts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceAlerts findUnique
   */
  export type PriceAlertsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlerts to fetch.
     */
    where: PriceAlertsWhereUniqueInput
  }

  /**
   * PriceAlerts findUniqueOrThrow
   */
  export type PriceAlertsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlerts to fetch.
     */
    where: PriceAlertsWhereUniqueInput
  }

  /**
   * PriceAlerts findFirst
   */
  export type PriceAlertsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlerts to fetch.
     */
    where?: PriceAlertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertsOrderByWithRelationInput | PriceAlertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAlerts.
     */
    cursor?: PriceAlertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAlerts.
     */
    distinct?: PriceAlertsScalarFieldEnum | PriceAlertsScalarFieldEnum[]
  }

  /**
   * PriceAlerts findFirstOrThrow
   */
  export type PriceAlertsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlerts to fetch.
     */
    where?: PriceAlertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertsOrderByWithRelationInput | PriceAlertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAlerts.
     */
    cursor?: PriceAlertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAlerts.
     */
    distinct?: PriceAlertsScalarFieldEnum | PriceAlertsScalarFieldEnum[]
  }

  /**
   * PriceAlerts findMany
   */
  export type PriceAlertsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlerts to fetch.
     */
    where?: PriceAlertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertsOrderByWithRelationInput | PriceAlertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceAlerts.
     */
    cursor?: PriceAlertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAlerts.
     */
    distinct?: PriceAlertsScalarFieldEnum | PriceAlertsScalarFieldEnum[]
  }

  /**
   * PriceAlerts create
   */
  export type PriceAlertsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceAlerts.
     */
    data: XOR<PriceAlertsCreateInput, PriceAlertsUncheckedCreateInput>
  }

  /**
   * PriceAlerts createMany
   */
  export type PriceAlertsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceAlerts.
     */
    data: PriceAlertsCreateManyInput | PriceAlertsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceAlerts createManyAndReturn
   */
  export type PriceAlertsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * The data used to create many PriceAlerts.
     */
    data: PriceAlertsCreateManyInput | PriceAlertsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceAlerts update
   */
  export type PriceAlertsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceAlerts.
     */
    data: XOR<PriceAlertsUpdateInput, PriceAlertsUncheckedUpdateInput>
    /**
     * Choose, which PriceAlerts to update.
     */
    where: PriceAlertsWhereUniqueInput
  }

  /**
   * PriceAlerts updateMany
   */
  export type PriceAlertsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceAlerts.
     */
    data: XOR<PriceAlertsUpdateManyMutationInput, PriceAlertsUncheckedUpdateManyInput>
    /**
     * Filter which PriceAlerts to update
     */
    where?: PriceAlertsWhereInput
    /**
     * Limit how many PriceAlerts to update.
     */
    limit?: number
  }

  /**
   * PriceAlerts updateManyAndReturn
   */
  export type PriceAlertsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * The data used to update PriceAlerts.
     */
    data: XOR<PriceAlertsUpdateManyMutationInput, PriceAlertsUncheckedUpdateManyInput>
    /**
     * Filter which PriceAlerts to update
     */
    where?: PriceAlertsWhereInput
    /**
     * Limit how many PriceAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceAlerts upsert
   */
  export type PriceAlertsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceAlerts to update in case it exists.
     */
    where: PriceAlertsWhereUniqueInput
    /**
     * In case the PriceAlerts found by the `where` argument doesn't exist, create a new PriceAlerts with this data.
     */
    create: XOR<PriceAlertsCreateInput, PriceAlertsUncheckedCreateInput>
    /**
     * In case the PriceAlerts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceAlertsUpdateInput, PriceAlertsUncheckedUpdateInput>
  }

  /**
   * PriceAlerts delete
   */
  export type PriceAlertsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
    /**
     * Filter which PriceAlerts to delete.
     */
    where: PriceAlertsWhereUniqueInput
  }

  /**
   * PriceAlerts deleteMany
   */
  export type PriceAlertsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAlerts to delete
     */
    where?: PriceAlertsWhereInput
    /**
     * Limit how many PriceAlerts to delete.
     */
    limit?: number
  }

  /**
   * PriceAlerts without action
   */
  export type PriceAlertsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlerts
     */
    select?: PriceAlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlerts
     */
    omit?: PriceAlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AssetScalarFieldEnum: {
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

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const OrderScalarFieldEnum: {
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

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const HoldingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    assetId: 'assetId',
    quantity: 'quantity',
    avgBuyPrice: 'avgBuyPrice',
    updatedAt: 'updatedAt'
  };

  export type HoldingsScalarFieldEnum = (typeof HoldingsScalarFieldEnum)[keyof typeof HoldingsScalarFieldEnum]


  export const PortfolioSnapshotsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalValue: 'totalValue',
    balance: 'balance',
    holdingsValue: 'holdingsValue',
    snapshotDate: 'snapshotDate'
  };

  export type PortfolioSnapshotsScalarFieldEnum = (typeof PortfolioSnapshotsScalarFieldEnum)[keyof typeof PortfolioSnapshotsScalarFieldEnum]


  export const FriendshipsScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    addresseeId: 'addresseeId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type FriendshipsScalarFieldEnum = (typeof FriendshipsScalarFieldEnum)[keyof typeof FriendshipsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    content: 'content',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    body: 'body',
    data: 'data',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const PriceAlertsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    assetId: 'assetId',
    targetPrice: 'targetPrice',
    direction: 'direction',
    isTriggered: 'isTriggered',
    createdAt: 'createdAt'
  };

  export type PriceAlertsScalarFieldEnum = (typeof PriceAlertsScalarFieldEnum)[keyof typeof PriceAlertsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    oauthProvider?: StringNullableFilter<"User"> | string | null
    oauthId?: StringNullableFilter<"User"> | string | null
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    language?: StringFilter<"User"> | string
    isOnline?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    holdings?: HoldingsListRelationFilter
    portfolioSnapshots?: PortfolioSnapshotsListRelationFilter
    sentMessages?: MessagesListRelationFilter
    receivedMessages?: MessagesListRelationFilter
    sentFriendRequests?: FriendshipsListRelationFilter
    receivedFriendRequests?: FriendshipsListRelationFilter
    notifications?: NotificationsListRelationFilter
    priceAlerts?: PriceAlertsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    balance?: SortOrder
    oauthProvider?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    language?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    holdings?: HoldingsOrderByRelationAggregateInput
    portfolioSnapshots?: PortfolioSnapshotsOrderByRelationAggregateInput
    sentMessages?: MessagesOrderByRelationAggregateInput
    receivedMessages?: MessagesOrderByRelationAggregateInput
    sentFriendRequests?: FriendshipsOrderByRelationAggregateInput
    receivedFriendRequests?: FriendshipsOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    priceAlerts?: PriceAlertsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    oauthProvider?: StringNullableFilter<"User"> | string | null
    oauthId?: StringNullableFilter<"User"> | string | null
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    language?: StringFilter<"User"> | string
    isOnline?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    holdings?: HoldingsListRelationFilter
    portfolioSnapshots?: PortfolioSnapshotsListRelationFilter
    sentMessages?: MessagesListRelationFilter
    receivedMessages?: MessagesListRelationFilter
    sentFriendRequests?: FriendshipsListRelationFilter
    receivedFriendRequests?: FriendshipsListRelationFilter
    notifications?: NotificationsListRelationFilter
    priceAlerts?: PriceAlertsListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    balance?: SortOrder
    oauthProvider?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    language?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    balance?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    oauthProvider?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauthId?: StringNullableWithAggregatesFilter<"User"> | string | null
    twoFactorSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    language?: StringWithAggregatesFilter<"User"> | string
    isOnline?: BoolWithAggregatesFilter<"User"> | boolean
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    symbol?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    type?: StringFilter<"Asset"> | string
    currentPrice?: DecimalFilter<"Asset"> | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFilter<"Asset"> | Date | string
    logoUrl?: StringNullableFilter<"Asset"> | string | null
    isActive?: BoolFilter<"Asset"> | boolean
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    orders?: OrderListRelationFilter
    holdings?: HoldingsListRelationFilter
    priceAlerts?: PriceAlertsListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currentPrice?: SortOrder
    priceUpdatedAt?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    holdings?: HoldingsOrderByRelationAggregateInput
    priceAlerts?: PriceAlertsOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    name?: StringFilter<"Asset"> | string
    type?: StringFilter<"Asset"> | string
    currentPrice?: DecimalFilter<"Asset"> | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFilter<"Asset"> | Date | string
    logoUrl?: StringNullableFilter<"Asset"> | string | null
    isActive?: BoolFilter<"Asset"> | boolean
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    orders?: OrderListRelationFilter
    holdings?: HoldingsListRelationFilter
    priceAlerts?: PriceAlertsListRelationFilter
  }, "id" | "symbol">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currentPrice?: SortOrder
    priceUpdatedAt?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    symbol?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
    type?: StringWithAggregatesFilter<"Asset"> | string
    currentPrice?: DecimalWithAggregatesFilter<"Asset"> | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    logoUrl?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    isActive?: BoolWithAggregatesFilter<"Asset"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    assetId?: StringFilter<"Order"> | string
    type?: StringFilter<"Order"> | string
    orderType?: StringFilter<"Order"> | string
    quantity?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    filledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    status?: SortOrder
    filledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    asset?: AssetOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    assetId?: StringFilter<"Order"> | string
    type?: StringFilter<"Order"> | string
    orderType?: StringFilter<"Order"> | string
    quantity?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    filledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    status?: SortOrder
    filledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    assetId?: StringWithAggregatesFilter<"Order"> | string
    type?: StringWithAggregatesFilter<"Order"> | string
    orderType?: StringWithAggregatesFilter<"Order"> | string
    quantity?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Order"> | string
    filledAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type HoldingsWhereInput = {
    AND?: HoldingsWhereInput | HoldingsWhereInput[]
    OR?: HoldingsWhereInput[]
    NOT?: HoldingsWhereInput | HoldingsWhereInput[]
    id?: StringFilter<"Holdings"> | string
    userId?: StringFilter<"Holdings"> | string
    assetId?: StringFilter<"Holdings"> | string
    quantity?: DecimalFilter<"Holdings"> | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFilter<"Holdings"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"Holdings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type HoldingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    asset?: AssetOrderByWithRelationInput
  }

  export type HoldingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_assetId?: HoldingsUserIdAssetIdCompoundUniqueInput
    AND?: HoldingsWhereInput | HoldingsWhereInput[]
    OR?: HoldingsWhereInput[]
    NOT?: HoldingsWhereInput | HoldingsWhereInput[]
    userId?: StringFilter<"Holdings"> | string
    assetId?: StringFilter<"Holdings"> | string
    quantity?: DecimalFilter<"Holdings"> | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFilter<"Holdings"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"Holdings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id" | "userId_assetId">

  export type HoldingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    updatedAt?: SortOrder
    _count?: HoldingsCountOrderByAggregateInput
    _avg?: HoldingsAvgOrderByAggregateInput
    _max?: HoldingsMaxOrderByAggregateInput
    _min?: HoldingsMinOrderByAggregateInput
    _sum?: HoldingsSumOrderByAggregateInput
  }

  export type HoldingsScalarWhereWithAggregatesInput = {
    AND?: HoldingsScalarWhereWithAggregatesInput | HoldingsScalarWhereWithAggregatesInput[]
    OR?: HoldingsScalarWhereWithAggregatesInput[]
    NOT?: HoldingsScalarWhereWithAggregatesInput | HoldingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Holdings"> | string
    userId?: StringWithAggregatesFilter<"Holdings"> | string
    assetId?: StringWithAggregatesFilter<"Holdings"> | string
    quantity?: DecimalWithAggregatesFilter<"Holdings"> | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalWithAggregatesFilter<"Holdings"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeWithAggregatesFilter<"Holdings"> | Date | string
  }

  export type PortfolioSnapshotsWhereInput = {
    AND?: PortfolioSnapshotsWhereInput | PortfolioSnapshotsWhereInput[]
    OR?: PortfolioSnapshotsWhereInput[]
    NOT?: PortfolioSnapshotsWhereInput | PortfolioSnapshotsWhereInput[]
    id?: StringFilter<"PortfolioSnapshots"> | string
    userId?: StringFilter<"PortfolioSnapshots"> | string
    totalValue?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFilter<"PortfolioSnapshots"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PortfolioSnapshotsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalValue?: SortOrder
    balance?: SortOrder
    holdingsValue?: SortOrder
    snapshotDate?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PortfolioSnapshotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioSnapshotsWhereInput | PortfolioSnapshotsWhereInput[]
    OR?: PortfolioSnapshotsWhereInput[]
    NOT?: PortfolioSnapshotsWhereInput | PortfolioSnapshotsWhereInput[]
    userId?: StringFilter<"PortfolioSnapshots"> | string
    totalValue?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFilter<"PortfolioSnapshots"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PortfolioSnapshotsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalValue?: SortOrder
    balance?: SortOrder
    holdingsValue?: SortOrder
    snapshotDate?: SortOrder
    _count?: PortfolioSnapshotsCountOrderByAggregateInput
    _avg?: PortfolioSnapshotsAvgOrderByAggregateInput
    _max?: PortfolioSnapshotsMaxOrderByAggregateInput
    _min?: PortfolioSnapshotsMinOrderByAggregateInput
    _sum?: PortfolioSnapshotsSumOrderByAggregateInput
  }

  export type PortfolioSnapshotsScalarWhereWithAggregatesInput = {
    AND?: PortfolioSnapshotsScalarWhereWithAggregatesInput | PortfolioSnapshotsScalarWhereWithAggregatesInput[]
    OR?: PortfolioSnapshotsScalarWhereWithAggregatesInput[]
    NOT?: PortfolioSnapshotsScalarWhereWithAggregatesInput | PortfolioSnapshotsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortfolioSnapshots"> | string
    userId?: StringWithAggregatesFilter<"PortfolioSnapshots"> | string
    totalValue?: DecimalWithAggregatesFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalWithAggregatesFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalWithAggregatesFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeWithAggregatesFilter<"PortfolioSnapshots"> | Date | string
  }

  export type FriendshipsWhereInput = {
    AND?: FriendshipsWhereInput | FriendshipsWhereInput[]
    OR?: FriendshipsWhereInput[]
    NOT?: FriendshipsWhereInput | FriendshipsWhereInput[]
    id?: StringFilter<"Friendships"> | string
    requesterId?: StringFilter<"Friendships"> | string
    addresseeId?: StringFilter<"Friendships"> | string
    status?: StringFilter<"Friendships"> | string
    createdAt?: DateTimeFilter<"Friendships"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipsOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    requester?: UserOrderByWithRelationInput
    addressee?: UserOrderByWithRelationInput
  }

  export type FriendshipsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requesterId_addresseeId?: FriendshipsRequesterIdAddresseeIdCompoundUniqueInput
    AND?: FriendshipsWhereInput | FriendshipsWhereInput[]
    OR?: FriendshipsWhereInput[]
    NOT?: FriendshipsWhereInput | FriendshipsWhereInput[]
    requesterId?: StringFilter<"Friendships"> | string
    addresseeId?: StringFilter<"Friendships"> | string
    status?: StringFilter<"Friendships"> | string
    createdAt?: DateTimeFilter<"Friendships"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "requesterId_addresseeId">

  export type FriendshipsOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: FriendshipsCountOrderByAggregateInput
    _max?: FriendshipsMaxOrderByAggregateInput
    _min?: FriendshipsMinOrderByAggregateInput
  }

  export type FriendshipsScalarWhereWithAggregatesInput = {
    AND?: FriendshipsScalarWhereWithAggregatesInput | FriendshipsScalarWhereWithAggregatesInput[]
    OR?: FriendshipsScalarWhereWithAggregatesInput[]
    NOT?: FriendshipsScalarWhereWithAggregatesInput | FriendshipsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friendships"> | string
    requesterId?: StringWithAggregatesFilter<"Friendships"> | string
    addresseeId?: StringWithAggregatesFilter<"Friendships"> | string
    status?: StringWithAggregatesFilter<"Friendships"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Friendships"> | Date | string
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: StringFilter<"Messages"> | string
    senderId?: StringFilter<"Messages"> | string
    receiverId?: StringFilter<"Messages"> | string
    content?: StringFilter<"Messages"> | string
    isRead?: BoolFilter<"Messages"> | boolean
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    senderId?: StringFilter<"Messages"> | string
    receiverId?: StringFilter<"Messages"> | string
    content?: StringFilter<"Messages"> | string
    isRead?: BoolFilter<"Messages"> | boolean
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Messages"> | string
    senderId?: StringWithAggregatesFilter<"Messages"> | string
    receiverId?: StringWithAggregatesFilter<"Messages"> | string
    content?: StringWithAggregatesFilter<"Messages"> | string
    isRead?: BoolWithAggregatesFilter<"Messages"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: StringFilter<"Notifications"> | string
    userId?: StringFilter<"Notifications"> | string
    type?: StringFilter<"Notifications"> | string
    title?: StringFilter<"Notifications"> | string
    body?: StringFilter<"Notifications"> | string
    data?: JsonFilter<"Notifications">
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    userId?: StringFilter<"Notifications"> | string
    type?: StringFilter<"Notifications"> | string
    title?: StringFilter<"Notifications"> | string
    body?: StringFilter<"Notifications"> | string
    data?: JsonFilter<"Notifications">
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifications"> | string
    userId?: StringWithAggregatesFilter<"Notifications"> | string
    type?: StringWithAggregatesFilter<"Notifications"> | string
    title?: StringWithAggregatesFilter<"Notifications"> | string
    body?: StringWithAggregatesFilter<"Notifications"> | string
    data?: JsonWithAggregatesFilter<"Notifications">
    isRead?: BoolWithAggregatesFilter<"Notifications"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
  }

  export type PriceAlertsWhereInput = {
    AND?: PriceAlertsWhereInput | PriceAlertsWhereInput[]
    OR?: PriceAlertsWhereInput[]
    NOT?: PriceAlertsWhereInput | PriceAlertsWhereInput[]
    id?: StringFilter<"PriceAlerts"> | string
    userId?: StringFilter<"PriceAlerts"> | string
    assetId?: StringFilter<"PriceAlerts"> | string
    targetPrice?: DecimalFilter<"PriceAlerts"> | Decimal | DecimalJsLike | number | string
    direction?: StringFilter<"PriceAlerts"> | string
    isTriggered?: BoolFilter<"PriceAlerts"> | boolean
    createdAt?: DateTimeFilter<"PriceAlerts"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PriceAlertsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    targetPrice?: SortOrder
    direction?: SortOrder
    isTriggered?: SortOrder
    createdAt?: SortOrder
    asset?: AssetOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PriceAlertsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceAlertsWhereInput | PriceAlertsWhereInput[]
    OR?: PriceAlertsWhereInput[]
    NOT?: PriceAlertsWhereInput | PriceAlertsWhereInput[]
    userId?: StringFilter<"PriceAlerts"> | string
    assetId?: StringFilter<"PriceAlerts"> | string
    targetPrice?: DecimalFilter<"PriceAlerts"> | Decimal | DecimalJsLike | number | string
    direction?: StringFilter<"PriceAlerts"> | string
    isTriggered?: BoolFilter<"PriceAlerts"> | boolean
    createdAt?: DateTimeFilter<"PriceAlerts"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PriceAlertsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    targetPrice?: SortOrder
    direction?: SortOrder
    isTriggered?: SortOrder
    createdAt?: SortOrder
    _count?: PriceAlertsCountOrderByAggregateInput
    _avg?: PriceAlertsAvgOrderByAggregateInput
    _max?: PriceAlertsMaxOrderByAggregateInput
    _min?: PriceAlertsMinOrderByAggregateInput
    _sum?: PriceAlertsSumOrderByAggregateInput
  }

  export type PriceAlertsScalarWhereWithAggregatesInput = {
    AND?: PriceAlertsScalarWhereWithAggregatesInput | PriceAlertsScalarWhereWithAggregatesInput[]
    OR?: PriceAlertsScalarWhereWithAggregatesInput[]
    NOT?: PriceAlertsScalarWhereWithAggregatesInput | PriceAlertsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceAlerts"> | string
    userId?: StringWithAggregatesFilter<"PriceAlerts"> | string
    assetId?: StringWithAggregatesFilter<"PriceAlerts"> | string
    targetPrice?: DecimalWithAggregatesFilter<"PriceAlerts"> | Decimal | DecimalJsLike | number | string
    direction?: StringWithAggregatesFilter<"PriceAlerts"> | string
    isTriggered?: BoolWithAggregatesFilter<"PriceAlerts"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PriceAlerts"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutAssetInput
    holdings?: HoldingsCreateNestedManyWithoutAssetInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutAssetInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutAssetInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutAssetNestedInput
    holdings?: HoldingsUpdateManyWithoutAssetNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutAssetNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutAssetNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    asset: AssetCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    assetId: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    asset?: AssetUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    assetId: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingsCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutHoldingsInput
    asset: AssetCreateNestedOneWithoutHoldingsInput
  }

  export type HoldingsUncheckedCreateInput = {
    id?: string
    userId: string
    assetId: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
  }

  export type HoldingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHoldingsNestedInput
    asset?: AssetUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type HoldingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingsCreateManyInput = {
    id?: string
    userId: string
    assetId: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
  }

  export type HoldingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSnapshotsCreateInput = {
    id?: string
    totalValue: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    holdingsValue: Decimal | DecimalJsLike | number | string
    snapshotDate: Date | string
    user: UserCreateNestedOneWithoutPortfolioSnapshotsInput
  }

  export type PortfolioSnapshotsUncheckedCreateInput = {
    id?: string
    userId: string
    totalValue: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    holdingsValue: Decimal | DecimalJsLike | number | string
    snapshotDate: Date | string
  }

  export type PortfolioSnapshotsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfolioSnapshotsNestedInput
  }

  export type PortfolioSnapshotsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSnapshotsCreateManyInput = {
    id?: string
    userId: string
    totalValue: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    holdingsValue: Decimal | DecimalJsLike | number | string
    snapshotDate: Date | string
  }

  export type PortfolioSnapshotsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSnapshotsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipsCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    requester: UserCreateNestedOneWithoutSentFriendRequestsInput
    addressee: UserCreateNestedOneWithoutReceivedFriendRequestsInput
  }

  export type FriendshipsUncheckedCreateInput = {
    id?: string
    requesterId: string
    addresseeId: string
    status: string
    createdAt?: Date | string
  }

  export type FriendshipsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput
    addressee?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput
  }

  export type FriendshipsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipsCreateManyInput = {
    id?: string
    requesterId: string
    addresseeId: string
    status: string
    createdAt?: Date | string
  }

  export type FriendshipsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateInput = {
    id?: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateInput = {
    id?: string
    type: string
    title: string
    body: string
    data: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    body: string
    data: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    body: string
    data: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertsCreateInput = {
    id?: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
    asset: AssetCreateNestedOneWithoutPriceAlertsInput
    user: UserCreateNestedOneWithoutPriceAlertsInput
  }

  export type PriceAlertsUncheckedCreateInput = {
    id?: string
    userId: string
    assetId: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
  }

  export type PriceAlertsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutPriceAlertsNestedInput
    user?: UserUpdateOneRequiredWithoutPriceAlertsNestedInput
  }

  export type PriceAlertsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertsCreateManyInput = {
    id?: string
    userId: string
    assetId: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
  }

  export type PriceAlertsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type HoldingsListRelationFilter = {
    every?: HoldingsWhereInput
    some?: HoldingsWhereInput
    none?: HoldingsWhereInput
  }

  export type PortfolioSnapshotsListRelationFilter = {
    every?: PortfolioSnapshotsWhereInput
    some?: PortfolioSnapshotsWhereInput
    none?: PortfolioSnapshotsWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type FriendshipsListRelationFilter = {
    every?: FriendshipsWhereInput
    some?: FriendshipsWhereInput
    none?: FriendshipsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type PriceAlertsListRelationFilter = {
    every?: PriceAlertsWhereInput
    some?: PriceAlertsWhereInput
    none?: PriceAlertsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HoldingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioSnapshotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceAlertsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    balance?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabled?: SortOrder
    language?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    balance?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabled?: SortOrder
    language?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    balance?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabled?: SortOrder
    language?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currentPrice?: SortOrder
    priceUpdatedAt?: SortOrder
    logoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    currentPrice?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currentPrice?: SortOrder
    priceUpdatedAt?: SortOrder
    logoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currentPrice?: SortOrder
    priceUpdatedAt?: SortOrder
    logoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    currentPrice?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    status?: SortOrder
    filledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    status?: SortOrder
    filledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    status?: SortOrder
    filledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type HoldingsUserIdAssetIdCompoundUniqueInput = {
    userId: string
    assetId: string
  }

  export type HoldingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
  }

  export type HoldingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingsSumOrderByAggregateInput = {
    quantity?: SortOrder
    avgBuyPrice?: SortOrder
  }

  export type PortfolioSnapshotsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalValue?: SortOrder
    balance?: SortOrder
    holdingsValue?: SortOrder
    snapshotDate?: SortOrder
  }

  export type PortfolioSnapshotsAvgOrderByAggregateInput = {
    totalValue?: SortOrder
    balance?: SortOrder
    holdingsValue?: SortOrder
  }

  export type PortfolioSnapshotsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalValue?: SortOrder
    balance?: SortOrder
    holdingsValue?: SortOrder
    snapshotDate?: SortOrder
  }

  export type PortfolioSnapshotsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalValue?: SortOrder
    balance?: SortOrder
    holdingsValue?: SortOrder
    snapshotDate?: SortOrder
  }

  export type PortfolioSnapshotsSumOrderByAggregateInput = {
    totalValue?: SortOrder
    balance?: SortOrder
    holdingsValue?: SortOrder
  }

  export type FriendshipsRequesterIdAddresseeIdCompoundUniqueInput = {
    requesterId: string
    addresseeId: string
  }

  export type FriendshipsCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipsMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipsMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PriceAlertsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    targetPrice?: SortOrder
    direction?: SortOrder
    isTriggered?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceAlertsAvgOrderByAggregateInput = {
    targetPrice?: SortOrder
  }

  export type PriceAlertsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    targetPrice?: SortOrder
    direction?: SortOrder
    isTriggered?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceAlertsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assetId?: SortOrder
    targetPrice?: SortOrder
    direction?: SortOrder
    isTriggered?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceAlertsSumOrderByAggregateInput = {
    targetPrice?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type HoldingsCreateNestedManyWithoutUserInput = {
    create?: XOR<HoldingsCreateWithoutUserInput, HoldingsUncheckedCreateWithoutUserInput> | HoldingsCreateWithoutUserInput[] | HoldingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoldingsCreateOrConnectWithoutUserInput | HoldingsCreateOrConnectWithoutUserInput[]
    createMany?: HoldingsCreateManyUserInputEnvelope
    connect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
  }

  export type PortfolioSnapshotsCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioSnapshotsCreateWithoutUserInput, PortfolioSnapshotsUncheckedCreateWithoutUserInput> | PortfolioSnapshotsCreateWithoutUserInput[] | PortfolioSnapshotsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioSnapshotsCreateOrConnectWithoutUserInput | PortfolioSnapshotsCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioSnapshotsCreateManyUserInputEnvelope
    connect?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type FriendshipsCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipsCreateWithoutRequesterInput, FriendshipsUncheckedCreateWithoutRequesterInput> | FriendshipsCreateWithoutRequesterInput[] | FriendshipsUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipsCreateOrConnectWithoutRequesterInput | FriendshipsCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipsCreateManyRequesterInputEnvelope
    connect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
  }

  export type FriendshipsCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<FriendshipsCreateWithoutAddresseeInput, FriendshipsUncheckedCreateWithoutAddresseeInput> | FriendshipsCreateWithoutAddresseeInput[] | FriendshipsUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipsCreateOrConnectWithoutAddresseeInput | FriendshipsCreateOrConnectWithoutAddresseeInput[]
    createMany?: FriendshipsCreateManyAddresseeInputEnvelope
    connect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PriceAlertsCreateNestedManyWithoutUserInput = {
    create?: XOR<PriceAlertsCreateWithoutUserInput, PriceAlertsUncheckedCreateWithoutUserInput> | PriceAlertsCreateWithoutUserInput[] | PriceAlertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAlertsCreateOrConnectWithoutUserInput | PriceAlertsCreateOrConnectWithoutUserInput[]
    createMany?: PriceAlertsCreateManyUserInputEnvelope
    connect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type HoldingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HoldingsCreateWithoutUserInput, HoldingsUncheckedCreateWithoutUserInput> | HoldingsCreateWithoutUserInput[] | HoldingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoldingsCreateOrConnectWithoutUserInput | HoldingsCreateOrConnectWithoutUserInput[]
    createMany?: HoldingsCreateManyUserInputEnvelope
    connect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
  }

  export type PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioSnapshotsCreateWithoutUserInput, PortfolioSnapshotsUncheckedCreateWithoutUserInput> | PortfolioSnapshotsCreateWithoutUserInput[] | PortfolioSnapshotsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioSnapshotsCreateOrConnectWithoutUserInput | PortfolioSnapshotsCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioSnapshotsCreateManyUserInputEnvelope
    connect?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type FriendshipsUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipsCreateWithoutRequesterInput, FriendshipsUncheckedCreateWithoutRequesterInput> | FriendshipsCreateWithoutRequesterInput[] | FriendshipsUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipsCreateOrConnectWithoutRequesterInput | FriendshipsCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipsCreateManyRequesterInputEnvelope
    connect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
  }

  export type FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<FriendshipsCreateWithoutAddresseeInput, FriendshipsUncheckedCreateWithoutAddresseeInput> | FriendshipsCreateWithoutAddresseeInput[] | FriendshipsUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipsCreateOrConnectWithoutAddresseeInput | FriendshipsCreateOrConnectWithoutAddresseeInput[]
    createMany?: FriendshipsCreateManyAddresseeInputEnvelope
    connect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PriceAlertsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PriceAlertsCreateWithoutUserInput, PriceAlertsUncheckedCreateWithoutUserInput> | PriceAlertsCreateWithoutUserInput[] | PriceAlertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAlertsCreateOrConnectWithoutUserInput | PriceAlertsCreateOrConnectWithoutUserInput[]
    createMany?: PriceAlertsCreateManyUserInputEnvelope
    connect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type HoldingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<HoldingsCreateWithoutUserInput, HoldingsUncheckedCreateWithoutUserInput> | HoldingsCreateWithoutUserInput[] | HoldingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoldingsCreateOrConnectWithoutUserInput | HoldingsCreateOrConnectWithoutUserInput[]
    upsert?: HoldingsUpsertWithWhereUniqueWithoutUserInput | HoldingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HoldingsCreateManyUserInputEnvelope
    set?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    disconnect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    delete?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    connect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    update?: HoldingsUpdateWithWhereUniqueWithoutUserInput | HoldingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HoldingsUpdateManyWithWhereWithoutUserInput | HoldingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HoldingsScalarWhereInput | HoldingsScalarWhereInput[]
  }

  export type PortfolioSnapshotsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioSnapshotsCreateWithoutUserInput, PortfolioSnapshotsUncheckedCreateWithoutUserInput> | PortfolioSnapshotsCreateWithoutUserInput[] | PortfolioSnapshotsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioSnapshotsCreateOrConnectWithoutUserInput | PortfolioSnapshotsCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput | PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioSnapshotsCreateManyUserInputEnvelope
    set?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
    disconnect?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
    delete?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
    connect?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
    update?: PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput | PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput | PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioSnapshotsScalarWhereInput | PortfolioSnapshotsScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReceiverInput | MessagesUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReceiverInput | MessagesUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReceiverInput | MessagesUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type FriendshipsUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipsCreateWithoutRequesterInput, FriendshipsUncheckedCreateWithoutRequesterInput> | FriendshipsCreateWithoutRequesterInput[] | FriendshipsUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipsCreateOrConnectWithoutRequesterInput | FriendshipsCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipsUpsertWithWhereUniqueWithoutRequesterInput | FriendshipsUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipsCreateManyRequesterInputEnvelope
    set?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    disconnect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    delete?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    connect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    update?: FriendshipsUpdateWithWhereUniqueWithoutRequesterInput | FriendshipsUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipsUpdateManyWithWhereWithoutRequesterInput | FriendshipsUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipsScalarWhereInput | FriendshipsScalarWhereInput[]
  }

  export type FriendshipsUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<FriendshipsCreateWithoutAddresseeInput, FriendshipsUncheckedCreateWithoutAddresseeInput> | FriendshipsCreateWithoutAddresseeInput[] | FriendshipsUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipsCreateOrConnectWithoutAddresseeInput | FriendshipsCreateOrConnectWithoutAddresseeInput[]
    upsert?: FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput | FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: FriendshipsCreateManyAddresseeInputEnvelope
    set?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    disconnect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    delete?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    connect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    update?: FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput | FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: FriendshipsUpdateManyWithWhereWithoutAddresseeInput | FriendshipsUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: FriendshipsScalarWhereInput | FriendshipsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PriceAlertsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PriceAlertsCreateWithoutUserInput, PriceAlertsUncheckedCreateWithoutUserInput> | PriceAlertsCreateWithoutUserInput[] | PriceAlertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAlertsCreateOrConnectWithoutUserInput | PriceAlertsCreateOrConnectWithoutUserInput[]
    upsert?: PriceAlertsUpsertWithWhereUniqueWithoutUserInput | PriceAlertsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PriceAlertsCreateManyUserInputEnvelope
    set?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    disconnect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    delete?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    connect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    update?: PriceAlertsUpdateWithWhereUniqueWithoutUserInput | PriceAlertsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PriceAlertsUpdateManyWithWhereWithoutUserInput | PriceAlertsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PriceAlertsScalarWhereInput | PriceAlertsScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type HoldingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HoldingsCreateWithoutUserInput, HoldingsUncheckedCreateWithoutUserInput> | HoldingsCreateWithoutUserInput[] | HoldingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoldingsCreateOrConnectWithoutUserInput | HoldingsCreateOrConnectWithoutUserInput[]
    upsert?: HoldingsUpsertWithWhereUniqueWithoutUserInput | HoldingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HoldingsCreateManyUserInputEnvelope
    set?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    disconnect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    delete?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    connect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    update?: HoldingsUpdateWithWhereUniqueWithoutUserInput | HoldingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HoldingsUpdateManyWithWhereWithoutUserInput | HoldingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HoldingsScalarWhereInput | HoldingsScalarWhereInput[]
  }

  export type PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioSnapshotsCreateWithoutUserInput, PortfolioSnapshotsUncheckedCreateWithoutUserInput> | PortfolioSnapshotsCreateWithoutUserInput[] | PortfolioSnapshotsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioSnapshotsCreateOrConnectWithoutUserInput | PortfolioSnapshotsCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput | PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioSnapshotsCreateManyUserInputEnvelope
    set?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
    disconnect?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
    delete?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
    connect?: PortfolioSnapshotsWhereUniqueInput | PortfolioSnapshotsWhereUniqueInput[]
    update?: PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput | PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput | PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioSnapshotsScalarWhereInput | PortfolioSnapshotsScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReceiverInput | MessagesUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReceiverInput | MessagesUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReceiverInput | MessagesUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipsCreateWithoutRequesterInput, FriendshipsUncheckedCreateWithoutRequesterInput> | FriendshipsCreateWithoutRequesterInput[] | FriendshipsUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipsCreateOrConnectWithoutRequesterInput | FriendshipsCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipsUpsertWithWhereUniqueWithoutRequesterInput | FriendshipsUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipsCreateManyRequesterInputEnvelope
    set?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    disconnect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    delete?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    connect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    update?: FriendshipsUpdateWithWhereUniqueWithoutRequesterInput | FriendshipsUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipsUpdateManyWithWhereWithoutRequesterInput | FriendshipsUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipsScalarWhereInput | FriendshipsScalarWhereInput[]
  }

  export type FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<FriendshipsCreateWithoutAddresseeInput, FriendshipsUncheckedCreateWithoutAddresseeInput> | FriendshipsCreateWithoutAddresseeInput[] | FriendshipsUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipsCreateOrConnectWithoutAddresseeInput | FriendshipsCreateOrConnectWithoutAddresseeInput[]
    upsert?: FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput | FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: FriendshipsCreateManyAddresseeInputEnvelope
    set?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    disconnect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    delete?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    connect?: FriendshipsWhereUniqueInput | FriendshipsWhereUniqueInput[]
    update?: FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput | FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: FriendshipsUpdateManyWithWhereWithoutAddresseeInput | FriendshipsUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: FriendshipsScalarWhereInput | FriendshipsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PriceAlertsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PriceAlertsCreateWithoutUserInput, PriceAlertsUncheckedCreateWithoutUserInput> | PriceAlertsCreateWithoutUserInput[] | PriceAlertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAlertsCreateOrConnectWithoutUserInput | PriceAlertsCreateOrConnectWithoutUserInput[]
    upsert?: PriceAlertsUpsertWithWhereUniqueWithoutUserInput | PriceAlertsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PriceAlertsCreateManyUserInputEnvelope
    set?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    disconnect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    delete?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    connect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    update?: PriceAlertsUpdateWithWhereUniqueWithoutUserInput | PriceAlertsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PriceAlertsUpdateManyWithWhereWithoutUserInput | PriceAlertsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PriceAlertsScalarWhereInput | PriceAlertsScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutAssetInput = {
    create?: XOR<OrderCreateWithoutAssetInput, OrderUncheckedCreateWithoutAssetInput> | OrderCreateWithoutAssetInput[] | OrderUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAssetInput | OrderCreateOrConnectWithoutAssetInput[]
    createMany?: OrderCreateManyAssetInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type HoldingsCreateNestedManyWithoutAssetInput = {
    create?: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput> | HoldingsCreateWithoutAssetInput[] | HoldingsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: HoldingsCreateOrConnectWithoutAssetInput | HoldingsCreateOrConnectWithoutAssetInput[]
    createMany?: HoldingsCreateManyAssetInputEnvelope
    connect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
  }

  export type PriceAlertsCreateNestedManyWithoutAssetInput = {
    create?: XOR<PriceAlertsCreateWithoutAssetInput, PriceAlertsUncheckedCreateWithoutAssetInput> | PriceAlertsCreateWithoutAssetInput[] | PriceAlertsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: PriceAlertsCreateOrConnectWithoutAssetInput | PriceAlertsCreateOrConnectWithoutAssetInput[]
    createMany?: PriceAlertsCreateManyAssetInputEnvelope
    connect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<OrderCreateWithoutAssetInput, OrderUncheckedCreateWithoutAssetInput> | OrderCreateWithoutAssetInput[] | OrderUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAssetInput | OrderCreateOrConnectWithoutAssetInput[]
    createMany?: OrderCreateManyAssetInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type HoldingsUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput> | HoldingsCreateWithoutAssetInput[] | HoldingsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: HoldingsCreateOrConnectWithoutAssetInput | HoldingsCreateOrConnectWithoutAssetInput[]
    createMany?: HoldingsCreateManyAssetInputEnvelope
    connect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
  }

  export type PriceAlertsUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<PriceAlertsCreateWithoutAssetInput, PriceAlertsUncheckedCreateWithoutAssetInput> | PriceAlertsCreateWithoutAssetInput[] | PriceAlertsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: PriceAlertsCreateOrConnectWithoutAssetInput | PriceAlertsCreateOrConnectWithoutAssetInput[]
    createMany?: PriceAlertsCreateManyAssetInputEnvelope
    connect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutAssetNestedInput = {
    create?: XOR<OrderCreateWithoutAssetInput, OrderUncheckedCreateWithoutAssetInput> | OrderCreateWithoutAssetInput[] | OrderUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAssetInput | OrderCreateOrConnectWithoutAssetInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAssetInput | OrderUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: OrderCreateManyAssetInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAssetInput | OrderUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAssetInput | OrderUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type HoldingsUpdateManyWithoutAssetNestedInput = {
    create?: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput> | HoldingsCreateWithoutAssetInput[] | HoldingsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: HoldingsCreateOrConnectWithoutAssetInput | HoldingsCreateOrConnectWithoutAssetInput[]
    upsert?: HoldingsUpsertWithWhereUniqueWithoutAssetInput | HoldingsUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: HoldingsCreateManyAssetInputEnvelope
    set?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    disconnect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    delete?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    connect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    update?: HoldingsUpdateWithWhereUniqueWithoutAssetInput | HoldingsUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: HoldingsUpdateManyWithWhereWithoutAssetInput | HoldingsUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: HoldingsScalarWhereInput | HoldingsScalarWhereInput[]
  }

  export type PriceAlertsUpdateManyWithoutAssetNestedInput = {
    create?: XOR<PriceAlertsCreateWithoutAssetInput, PriceAlertsUncheckedCreateWithoutAssetInput> | PriceAlertsCreateWithoutAssetInput[] | PriceAlertsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: PriceAlertsCreateOrConnectWithoutAssetInput | PriceAlertsCreateOrConnectWithoutAssetInput[]
    upsert?: PriceAlertsUpsertWithWhereUniqueWithoutAssetInput | PriceAlertsUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: PriceAlertsCreateManyAssetInputEnvelope
    set?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    disconnect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    delete?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    connect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    update?: PriceAlertsUpdateWithWhereUniqueWithoutAssetInput | PriceAlertsUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: PriceAlertsUpdateManyWithWhereWithoutAssetInput | PriceAlertsUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: PriceAlertsScalarWhereInput | PriceAlertsScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<OrderCreateWithoutAssetInput, OrderUncheckedCreateWithoutAssetInput> | OrderCreateWithoutAssetInput[] | OrderUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAssetInput | OrderCreateOrConnectWithoutAssetInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAssetInput | OrderUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: OrderCreateManyAssetInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAssetInput | OrderUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAssetInput | OrderUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type HoldingsUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput> | HoldingsCreateWithoutAssetInput[] | HoldingsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: HoldingsCreateOrConnectWithoutAssetInput | HoldingsCreateOrConnectWithoutAssetInput[]
    upsert?: HoldingsUpsertWithWhereUniqueWithoutAssetInput | HoldingsUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: HoldingsCreateManyAssetInputEnvelope
    set?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    disconnect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    delete?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    connect?: HoldingsWhereUniqueInput | HoldingsWhereUniqueInput[]
    update?: HoldingsUpdateWithWhereUniqueWithoutAssetInput | HoldingsUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: HoldingsUpdateManyWithWhereWithoutAssetInput | HoldingsUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: HoldingsScalarWhereInput | HoldingsScalarWhereInput[]
  }

  export type PriceAlertsUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<PriceAlertsCreateWithoutAssetInput, PriceAlertsUncheckedCreateWithoutAssetInput> | PriceAlertsCreateWithoutAssetInput[] | PriceAlertsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: PriceAlertsCreateOrConnectWithoutAssetInput | PriceAlertsCreateOrConnectWithoutAssetInput[]
    upsert?: PriceAlertsUpsertWithWhereUniqueWithoutAssetInput | PriceAlertsUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: PriceAlertsCreateManyAssetInputEnvelope
    set?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    disconnect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    delete?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    connect?: PriceAlertsWhereUniqueInput | PriceAlertsWhereUniqueInput[]
    update?: PriceAlertsUpdateWithWhereUniqueWithoutAssetInput | PriceAlertsUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: PriceAlertsUpdateManyWithWhereWithoutAssetInput | PriceAlertsUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: PriceAlertsScalarWhereInput | PriceAlertsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type AssetCreateNestedOneWithoutOrdersInput = {
    create?: XOR<AssetCreateWithoutOrdersInput, AssetUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AssetCreateOrConnectWithoutOrdersInput
    connect?: AssetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type AssetUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<AssetCreateWithoutOrdersInput, AssetUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AssetCreateOrConnectWithoutOrdersInput
    upsert?: AssetUpsertWithoutOrdersInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutOrdersInput, AssetUpdateWithoutOrdersInput>, AssetUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHoldingsInput
    connect?: UserWhereUniqueInput
  }

  export type AssetCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<AssetCreateWithoutHoldingsInput, AssetUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutHoldingsInput
    connect?: AssetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHoldingsInput
    upsert?: UserUpsertWithoutHoldingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHoldingsInput, UserUpdateWithoutHoldingsInput>, UserUncheckedUpdateWithoutHoldingsInput>
  }

  export type AssetUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<AssetCreateWithoutHoldingsInput, AssetUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutHoldingsInput
    upsert?: AssetUpsertWithoutHoldingsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutHoldingsInput, AssetUpdateWithoutHoldingsInput>, AssetUncheckedUpdateWithoutHoldingsInput>
  }

  export type UserCreateNestedOneWithoutPortfolioSnapshotsInput = {
    create?: XOR<UserCreateWithoutPortfolioSnapshotsInput, UserUncheckedCreateWithoutPortfolioSnapshotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfolioSnapshotsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPortfolioSnapshotsNestedInput = {
    create?: XOR<UserCreateWithoutPortfolioSnapshotsInput, UserUncheckedCreateWithoutPortfolioSnapshotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfolioSnapshotsInput
    upsert?: UserUpsertWithoutPortfolioSnapshotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPortfolioSnapshotsInput, UserUpdateWithoutPortfolioSnapshotsInput>, UserUncheckedUpdateWithoutPortfolioSnapshotsInput>
  }

  export type UserCreateNestedOneWithoutSentFriendRequestsInput = {
    create?: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedFriendRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput
    upsert?: UserUpsertWithoutSentFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentFriendRequestsInput, UserUpdateWithoutSentFriendRequestsInput>, UserUncheckedUpdateWithoutSentFriendRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput
    upsert?: UserUpsertWithoutReceivedFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput, UserUpdateWithoutReceivedFriendRequestsInput>, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type AssetCreateNestedOneWithoutPriceAlertsInput = {
    create?: XOR<AssetCreateWithoutPriceAlertsInput, AssetUncheckedCreateWithoutPriceAlertsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutPriceAlertsInput
    connect?: AssetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPriceAlertsInput = {
    create?: XOR<UserCreateWithoutPriceAlertsInput, UserUncheckedCreateWithoutPriceAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutPriceAlertsNestedInput = {
    create?: XOR<AssetCreateWithoutPriceAlertsInput, AssetUncheckedCreateWithoutPriceAlertsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutPriceAlertsInput
    upsert?: AssetUpsertWithoutPriceAlertsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutPriceAlertsInput, AssetUpdateWithoutPriceAlertsInput>, AssetUncheckedUpdateWithoutPriceAlertsInput>
  }

  export type UserUpdateOneRequiredWithoutPriceAlertsNestedInput = {
    create?: XOR<UserCreateWithoutPriceAlertsInput, UserUncheckedCreateWithoutPriceAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceAlertsInput
    upsert?: UserUpsertWithoutPriceAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPriceAlertsInput, UserUpdateWithoutPriceAlertsInput>, UserUncheckedUpdateWithoutPriceAlertsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
    asset: AssetCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    assetId: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HoldingsCreateWithoutUserInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
    asset: AssetCreateNestedOneWithoutHoldingsInput
  }

  export type HoldingsUncheckedCreateWithoutUserInput = {
    id?: string
    assetId: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
  }

  export type HoldingsCreateOrConnectWithoutUserInput = {
    where: HoldingsWhereUniqueInput
    create: XOR<HoldingsCreateWithoutUserInput, HoldingsUncheckedCreateWithoutUserInput>
  }

  export type HoldingsCreateManyUserInputEnvelope = {
    data: HoldingsCreateManyUserInput | HoldingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioSnapshotsCreateWithoutUserInput = {
    id?: string
    totalValue: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    holdingsValue: Decimal | DecimalJsLike | number | string
    snapshotDate: Date | string
  }

  export type PortfolioSnapshotsUncheckedCreateWithoutUserInput = {
    id?: string
    totalValue: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    holdingsValue: Decimal | DecimalJsLike | number | string
    snapshotDate: Date | string
  }

  export type PortfolioSnapshotsCreateOrConnectWithoutUserInput = {
    where: PortfolioSnapshotsWhereUniqueInput
    create: XOR<PortfolioSnapshotsCreateWithoutUserInput, PortfolioSnapshotsUncheckedCreateWithoutUserInput>
  }

  export type PortfolioSnapshotsCreateManyUserInputEnvelope = {
    data: PortfolioSnapshotsCreateManyUserInput | PortfolioSnapshotsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutSenderInput = {
    id?: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessagesUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessagesCreateOrConnectWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesCreateManySenderInputEnvelope = {
    data: MessagesCreateManySenderInput | MessagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutReceiverInput = {
    id?: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessagesUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessagesCreateOrConnectWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput>
  }

  export type MessagesCreateManyReceiverInputEnvelope = {
    data: MessagesCreateManyReceiverInput | MessagesCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipsCreateWithoutRequesterInput = {
    id?: string
    status: string
    createdAt?: Date | string
    addressee: UserCreateNestedOneWithoutReceivedFriendRequestsInput
  }

  export type FriendshipsUncheckedCreateWithoutRequesterInput = {
    id?: string
    addresseeId: string
    status: string
    createdAt?: Date | string
  }

  export type FriendshipsCreateOrConnectWithoutRequesterInput = {
    where: FriendshipsWhereUniqueInput
    create: XOR<FriendshipsCreateWithoutRequesterInput, FriendshipsUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipsCreateManyRequesterInputEnvelope = {
    data: FriendshipsCreateManyRequesterInput | FriendshipsCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipsCreateWithoutAddresseeInput = {
    id?: string
    status: string
    createdAt?: Date | string
    requester: UserCreateNestedOneWithoutSentFriendRequestsInput
  }

  export type FriendshipsUncheckedCreateWithoutAddresseeInput = {
    id?: string
    requesterId: string
    status: string
    createdAt?: Date | string
  }

  export type FriendshipsCreateOrConnectWithoutAddresseeInput = {
    where: FriendshipsWhereUniqueInput
    create: XOR<FriendshipsCreateWithoutAddresseeInput, FriendshipsUncheckedCreateWithoutAddresseeInput>
  }

  export type FriendshipsCreateManyAddresseeInputEnvelope = {
    data: FriendshipsCreateManyAddresseeInput | FriendshipsCreateManyAddresseeInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    body: string
    data: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    body: string
    data: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsCreateManyUserInputEnvelope = {
    data: NotificationsCreateManyUserInput | NotificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PriceAlertsCreateWithoutUserInput = {
    id?: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
    asset: AssetCreateNestedOneWithoutPriceAlertsInput
  }

  export type PriceAlertsUncheckedCreateWithoutUserInput = {
    id?: string
    assetId: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
  }

  export type PriceAlertsCreateOrConnectWithoutUserInput = {
    where: PriceAlertsWhereUniqueInput
    create: XOR<PriceAlertsCreateWithoutUserInput, PriceAlertsUncheckedCreateWithoutUserInput>
  }

  export type PriceAlertsCreateManyUserInputEnvelope = {
    data: PriceAlertsCreateManyUserInput | PriceAlertsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    assetId?: StringFilter<"Order"> | string
    type?: StringFilter<"Order"> | string
    orderType?: StringFilter<"Order"> | string
    quantity?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    filledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type HoldingsUpsertWithWhereUniqueWithoutUserInput = {
    where: HoldingsWhereUniqueInput
    update: XOR<HoldingsUpdateWithoutUserInput, HoldingsUncheckedUpdateWithoutUserInput>
    create: XOR<HoldingsCreateWithoutUserInput, HoldingsUncheckedCreateWithoutUserInput>
  }

  export type HoldingsUpdateWithWhereUniqueWithoutUserInput = {
    where: HoldingsWhereUniqueInput
    data: XOR<HoldingsUpdateWithoutUserInput, HoldingsUncheckedUpdateWithoutUserInput>
  }

  export type HoldingsUpdateManyWithWhereWithoutUserInput = {
    where: HoldingsScalarWhereInput
    data: XOR<HoldingsUpdateManyMutationInput, HoldingsUncheckedUpdateManyWithoutUserInput>
  }

  export type HoldingsScalarWhereInput = {
    AND?: HoldingsScalarWhereInput | HoldingsScalarWhereInput[]
    OR?: HoldingsScalarWhereInput[]
    NOT?: HoldingsScalarWhereInput | HoldingsScalarWhereInput[]
    id?: StringFilter<"Holdings"> | string
    userId?: StringFilter<"Holdings"> | string
    assetId?: StringFilter<"Holdings"> | string
    quantity?: DecimalFilter<"Holdings"> | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFilter<"Holdings"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"Holdings"> | Date | string
  }

  export type PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput = {
    where: PortfolioSnapshotsWhereUniqueInput
    update: XOR<PortfolioSnapshotsUpdateWithoutUserInput, PortfolioSnapshotsUncheckedUpdateWithoutUserInput>
    create: XOR<PortfolioSnapshotsCreateWithoutUserInput, PortfolioSnapshotsUncheckedCreateWithoutUserInput>
  }

  export type PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput = {
    where: PortfolioSnapshotsWhereUniqueInput
    data: XOR<PortfolioSnapshotsUpdateWithoutUserInput, PortfolioSnapshotsUncheckedUpdateWithoutUserInput>
  }

  export type PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput = {
    where: PortfolioSnapshotsScalarWhereInput
    data: XOR<PortfolioSnapshotsUpdateManyMutationInput, PortfolioSnapshotsUncheckedUpdateManyWithoutUserInput>
  }

  export type PortfolioSnapshotsScalarWhereInput = {
    AND?: PortfolioSnapshotsScalarWhereInput | PortfolioSnapshotsScalarWhereInput[]
    OR?: PortfolioSnapshotsScalarWhereInput[]
    NOT?: PortfolioSnapshotsScalarWhereInput | PortfolioSnapshotsScalarWhereInput[]
    id?: StringFilter<"PortfolioSnapshots"> | string
    userId?: StringFilter<"PortfolioSnapshots"> | string
    totalValue?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFilter<"PortfolioSnapshots"> | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFilter<"PortfolioSnapshots"> | Date | string
  }

  export type MessagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
  }

  export type MessagesUpdateManyWithWhereWithoutSenderInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: StringFilter<"Messages"> | string
    senderId?: StringFilter<"Messages"> | string
    receiverId?: StringFilter<"Messages"> | string
    content?: StringFilter<"Messages"> | string
    isRead?: BoolFilter<"Messages"> | boolean
    createdAt?: DateTimeFilter<"Messages"> | Date | string
  }

  export type MessagesUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutReceiverInput, MessagesUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutReceiverInput, MessagesUncheckedUpdateWithoutReceiverInput>
  }

  export type MessagesUpdateManyWithWhereWithoutReceiverInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutReceiverInput>
  }

  export type FriendshipsUpsertWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipsWhereUniqueInput
    update: XOR<FriendshipsUpdateWithoutRequesterInput, FriendshipsUncheckedUpdateWithoutRequesterInput>
    create: XOR<FriendshipsCreateWithoutRequesterInput, FriendshipsUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipsUpdateWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipsWhereUniqueInput
    data: XOR<FriendshipsUpdateWithoutRequesterInput, FriendshipsUncheckedUpdateWithoutRequesterInput>
  }

  export type FriendshipsUpdateManyWithWhereWithoutRequesterInput = {
    where: FriendshipsScalarWhereInput
    data: XOR<FriendshipsUpdateManyMutationInput, FriendshipsUncheckedUpdateManyWithoutRequesterInput>
  }

  export type FriendshipsScalarWhereInput = {
    AND?: FriendshipsScalarWhereInput | FriendshipsScalarWhereInput[]
    OR?: FriendshipsScalarWhereInput[]
    NOT?: FriendshipsScalarWhereInput | FriendshipsScalarWhereInput[]
    id?: StringFilter<"Friendships"> | string
    requesterId?: StringFilter<"Friendships"> | string
    addresseeId?: StringFilter<"Friendships"> | string
    status?: StringFilter<"Friendships"> | string
    createdAt?: DateTimeFilter<"Friendships"> | Date | string
  }

  export type FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput = {
    where: FriendshipsWhereUniqueInput
    update: XOR<FriendshipsUpdateWithoutAddresseeInput, FriendshipsUncheckedUpdateWithoutAddresseeInput>
    create: XOR<FriendshipsCreateWithoutAddresseeInput, FriendshipsUncheckedCreateWithoutAddresseeInput>
  }

  export type FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput = {
    where: FriendshipsWhereUniqueInput
    data: XOR<FriendshipsUpdateWithoutAddresseeInput, FriendshipsUncheckedUpdateWithoutAddresseeInput>
  }

  export type FriendshipsUpdateManyWithWhereWithoutAddresseeInput = {
    where: FriendshipsScalarWhereInput
    data: XOR<FriendshipsUpdateManyMutationInput, FriendshipsUncheckedUpdateManyWithoutAddresseeInput>
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: StringFilter<"Notifications"> | string
    userId?: StringFilter<"Notifications"> | string
    type?: StringFilter<"Notifications"> | string
    title?: StringFilter<"Notifications"> | string
    body?: StringFilter<"Notifications"> | string
    data?: JsonFilter<"Notifications">
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
  }

  export type PriceAlertsUpsertWithWhereUniqueWithoutUserInput = {
    where: PriceAlertsWhereUniqueInput
    update: XOR<PriceAlertsUpdateWithoutUserInput, PriceAlertsUncheckedUpdateWithoutUserInput>
    create: XOR<PriceAlertsCreateWithoutUserInput, PriceAlertsUncheckedCreateWithoutUserInput>
  }

  export type PriceAlertsUpdateWithWhereUniqueWithoutUserInput = {
    where: PriceAlertsWhereUniqueInput
    data: XOR<PriceAlertsUpdateWithoutUserInput, PriceAlertsUncheckedUpdateWithoutUserInput>
  }

  export type PriceAlertsUpdateManyWithWhereWithoutUserInput = {
    where: PriceAlertsScalarWhereInput
    data: XOR<PriceAlertsUpdateManyMutationInput, PriceAlertsUncheckedUpdateManyWithoutUserInput>
  }

  export type PriceAlertsScalarWhereInput = {
    AND?: PriceAlertsScalarWhereInput | PriceAlertsScalarWhereInput[]
    OR?: PriceAlertsScalarWhereInput[]
    NOT?: PriceAlertsScalarWhereInput | PriceAlertsScalarWhereInput[]
    id?: StringFilter<"PriceAlerts"> | string
    userId?: StringFilter<"PriceAlerts"> | string
    assetId?: StringFilter<"PriceAlerts"> | string
    targetPrice?: DecimalFilter<"PriceAlerts"> | Decimal | DecimalJsLike | number | string
    direction?: StringFilter<"PriceAlerts"> | string
    isTriggered?: BoolFilter<"PriceAlerts"> | boolean
    createdAt?: DateTimeFilter<"PriceAlerts"> | Date | string
  }

  export type OrderCreateWithoutAssetInput = {
    id?: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutAssetInput = {
    id?: string
    userId: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutAssetInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAssetInput, OrderUncheckedCreateWithoutAssetInput>
  }

  export type OrderCreateManyAssetInputEnvelope = {
    data: OrderCreateManyAssetInput | OrderCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type HoldingsCreateWithoutAssetInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutHoldingsInput
  }

  export type HoldingsUncheckedCreateWithoutAssetInput = {
    id?: string
    userId: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
  }

  export type HoldingsCreateOrConnectWithoutAssetInput = {
    where: HoldingsWhereUniqueInput
    create: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput>
  }

  export type HoldingsCreateManyAssetInputEnvelope = {
    data: HoldingsCreateManyAssetInput | HoldingsCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type PriceAlertsCreateWithoutAssetInput = {
    id?: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPriceAlertsInput
  }

  export type PriceAlertsUncheckedCreateWithoutAssetInput = {
    id?: string
    userId: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
  }

  export type PriceAlertsCreateOrConnectWithoutAssetInput = {
    where: PriceAlertsWhereUniqueInput
    create: XOR<PriceAlertsCreateWithoutAssetInput, PriceAlertsUncheckedCreateWithoutAssetInput>
  }

  export type PriceAlertsCreateManyAssetInputEnvelope = {
    data: PriceAlertsCreateManyAssetInput | PriceAlertsCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutAssetInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutAssetInput, OrderUncheckedUpdateWithoutAssetInput>
    create: XOR<OrderCreateWithoutAssetInput, OrderUncheckedCreateWithoutAssetInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutAssetInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutAssetInput, OrderUncheckedUpdateWithoutAssetInput>
  }

  export type OrderUpdateManyWithWhereWithoutAssetInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutAssetInput>
  }

  export type HoldingsUpsertWithWhereUniqueWithoutAssetInput = {
    where: HoldingsWhereUniqueInput
    update: XOR<HoldingsUpdateWithoutAssetInput, HoldingsUncheckedUpdateWithoutAssetInput>
    create: XOR<HoldingsCreateWithoutAssetInput, HoldingsUncheckedCreateWithoutAssetInput>
  }

  export type HoldingsUpdateWithWhereUniqueWithoutAssetInput = {
    where: HoldingsWhereUniqueInput
    data: XOR<HoldingsUpdateWithoutAssetInput, HoldingsUncheckedUpdateWithoutAssetInput>
  }

  export type HoldingsUpdateManyWithWhereWithoutAssetInput = {
    where: HoldingsScalarWhereInput
    data: XOR<HoldingsUpdateManyMutationInput, HoldingsUncheckedUpdateManyWithoutAssetInput>
  }

  export type PriceAlertsUpsertWithWhereUniqueWithoutAssetInput = {
    where: PriceAlertsWhereUniqueInput
    update: XOR<PriceAlertsUpdateWithoutAssetInput, PriceAlertsUncheckedUpdateWithoutAssetInput>
    create: XOR<PriceAlertsCreateWithoutAssetInput, PriceAlertsUncheckedCreateWithoutAssetInput>
  }

  export type PriceAlertsUpdateWithWhereUniqueWithoutAssetInput = {
    where: PriceAlertsWhereUniqueInput
    data: XOR<PriceAlertsUpdateWithoutAssetInput, PriceAlertsUncheckedUpdateWithoutAssetInput>
  }

  export type PriceAlertsUpdateManyWithWhereWithoutAssetInput = {
    where: PriceAlertsScalarWhereInput
    data: XOR<PriceAlertsUpdateManyMutationInput, PriceAlertsUncheckedUpdateManyWithoutAssetInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type AssetCreateWithoutOrdersInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingsCreateNestedManyWithoutAssetInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutOrdersInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingsUncheckedCreateNestedManyWithoutAssetInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutOrdersInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutOrdersInput, AssetUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssetUpsertWithoutOrdersInput = {
    update: XOR<AssetUpdateWithoutOrdersInput, AssetUncheckedUpdateWithoutOrdersInput>
    create: XOR<AssetCreateWithoutOrdersInput, AssetUncheckedCreateWithoutOrdersInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutOrdersInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutOrdersInput, AssetUncheckedUpdateWithoutOrdersInput>
  }

  export type AssetUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingsUpdateManyWithoutAssetNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingsUncheckedUpdateManyWithoutAssetNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type UserCreateWithoutHoldingsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHoldingsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHoldingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
  }

  export type AssetCreateWithoutHoldingsInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutAssetInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutHoldingsInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutAssetInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutHoldingsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutHoldingsInput, AssetUncheckedCreateWithoutHoldingsInput>
  }

  export type UserUpsertWithoutHoldingsInput = {
    update: XOR<UserUpdateWithoutHoldingsInput, UserUncheckedUpdateWithoutHoldingsInput>
    create: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHoldingsInput, UserUncheckedUpdateWithoutHoldingsInput>
  }

  export type UserUpdateWithoutHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssetUpsertWithoutHoldingsInput = {
    update: XOR<AssetUpdateWithoutHoldingsInput, AssetUncheckedUpdateWithoutHoldingsInput>
    create: XOR<AssetCreateWithoutHoldingsInput, AssetUncheckedCreateWithoutHoldingsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutHoldingsInput, AssetUncheckedUpdateWithoutHoldingsInput>
  }

  export type AssetUpdateWithoutHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutAssetNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutAssetNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type UserCreateWithoutPortfolioSnapshotsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPortfolioSnapshotsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPortfolioSnapshotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPortfolioSnapshotsInput, UserUncheckedCreateWithoutPortfolioSnapshotsInput>
  }

  export type UserUpsertWithoutPortfolioSnapshotsInput = {
    update: XOR<UserUpdateWithoutPortfolioSnapshotsInput, UserUncheckedUpdateWithoutPortfolioSnapshotsInput>
    create: XOR<UserCreateWithoutPortfolioSnapshotsInput, UserUncheckedCreateWithoutPortfolioSnapshotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPortfolioSnapshotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPortfolioSnapshotsInput, UserUncheckedUpdateWithoutPortfolioSnapshotsInput>
  }

  export type UserUpdateWithoutPortfolioSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPortfolioSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSentFriendRequestsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentFriendRequestsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
  }

  export type UserCreateWithoutReceivedFriendRequestsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedFriendRequestsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
  }

  export type UserUpsertWithoutSentFriendRequestsInput = {
    update: XOR<UserUpdateWithoutSentFriendRequestsInput, UserUncheckedUpdateWithoutSentFriendRequestsInput>
    create: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentFriendRequestsInput, UserUncheckedUpdateWithoutSentFriendRequestsInput>
  }

  export type UserUpdateWithoutSentFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedFriendRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedFriendRequestsInput, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
    create: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedFriendRequestsInput, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
  }

  export type UserUpdateWithoutReceivedFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    priceAlerts?: PriceAlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    priceAlerts?: PriceAlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    priceAlerts?: PriceAlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    priceAlerts?: PriceAlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssetCreateWithoutPriceAlertsInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutAssetInput
    holdings?: HoldingsCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutPriceAlertsInput = {
    id?: string
    symbol: string
    name: string
    type: string
    currentPrice: Decimal | DecimalJsLike | number | string
    priceUpdatedAt: Date | string
    logoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutAssetInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutPriceAlertsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutPriceAlertsInput, AssetUncheckedCreateWithoutPriceAlertsInput>
  }

  export type UserCreateWithoutPriceAlertsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    holdings?: HoldingsCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsCreateNestedManyWithoutUserInput
    sentMessages?: MessagesCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPriceAlertsInput = {
    id?: string
    email: string
    username: string
    displayName?: string | null
    passwordHash: string
    avatarUrl?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    oauthProvider?: string | null
    oauthId?: string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    language?: string
    isOnline?: boolean
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingsUncheckedCreateNestedManyWithoutUserInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    sentFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPriceAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPriceAlertsInput, UserUncheckedCreateWithoutPriceAlertsInput>
  }

  export type AssetUpsertWithoutPriceAlertsInput = {
    update: XOR<AssetUpdateWithoutPriceAlertsInput, AssetUncheckedUpdateWithoutPriceAlertsInput>
    create: XOR<AssetCreateWithoutPriceAlertsInput, AssetUncheckedCreateWithoutPriceAlertsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutPriceAlertsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutPriceAlertsInput, AssetUncheckedUpdateWithoutPriceAlertsInput>
  }

  export type AssetUpdateWithoutPriceAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutAssetNestedInput
    holdings?: HoldingsUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutPriceAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutAssetNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type UserUpsertWithoutPriceAlertsInput = {
    update: XOR<UserUpdateWithoutPriceAlertsInput, UserUncheckedUpdateWithoutPriceAlertsInput>
    create: XOR<UserCreateWithoutPriceAlertsInput, UserUncheckedCreateWithoutPriceAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPriceAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPriceAlertsInput, UserUncheckedUpdateWithoutPriceAlertsInput>
  }

  export type UserUpdateWithoutPriceAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPriceAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingsUncheckedUpdateManyWithoutUserNestedInput
    portfolioSnapshots?: PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    sentFriendRequests?: FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    assetId: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type HoldingsCreateManyUserInput = {
    id?: string
    assetId: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
  }

  export type PortfolioSnapshotsCreateManyUserInput = {
    id?: string
    totalValue: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    holdingsValue: Decimal | DecimalJsLike | number | string
    snapshotDate: Date | string
  }

  export type MessagesCreateManySenderInput = {
    id?: string
    receiverId: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessagesCreateManyReceiverInput = {
    id?: string
    senderId: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type FriendshipsCreateManyRequesterInput = {
    id?: string
    addresseeId: string
    status: string
    createdAt?: Date | string
  }

  export type FriendshipsCreateManyAddresseeInput = {
    id?: string
    requesterId: string
    status: string
    createdAt?: Date | string
  }

  export type NotificationsCreateManyUserInput = {
    id?: string
    type: string
    title: string
    body: string
    data: JsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PriceAlertsCreateManyUserInput = {
    id?: string
    assetId: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type HoldingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSnapshotsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSnapshotsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioSnapshotsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    holdingsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipsUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressee?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput
  }

  export type FriendshipsUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipsUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipsUpdateWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput
  }

  export type FriendshipsUncheckedUpdateWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipsUncheckedUpdateManyWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutPriceAlertsNestedInput
  }

  export type PriceAlertsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyAssetInput = {
    id?: string
    userId: string
    type: string
    orderType: string
    quantity: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status: string
    filledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type HoldingsCreateManyAssetInput = {
    id?: string
    userId: string
    quantity: Decimal | DecimalJsLike | number | string
    avgBuyPrice: Decimal | DecimalJsLike | number | string
    updatedAt: Date | string
  }

  export type PriceAlertsCreateManyAssetInput = {
    id?: string
    userId: string
    targetPrice: Decimal | DecimalJsLike | number | string
    direction: string
    isTriggered?: boolean
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    filledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingsUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type HoldingsUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingsUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgBuyPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertsUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPriceAlertsNestedInput
  }

  export type PriceAlertsUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertsUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: StringFieldUpdateOperationsInput | string
    isTriggered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}