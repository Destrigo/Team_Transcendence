import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HoldingsModel = runtime.Types.Result.DefaultSelection<Prisma.$HoldingsPayload>;
export type AggregateHoldings = {
    _count: HoldingsCountAggregateOutputType | null;
    _avg: HoldingsAvgAggregateOutputType | null;
    _sum: HoldingsSumAggregateOutputType | null;
    _min: HoldingsMinAggregateOutputType | null;
    _max: HoldingsMaxAggregateOutputType | null;
};
export type HoldingsAvgAggregateOutputType = {
    quantity: runtime.Decimal | null;
    avgBuyPrice: runtime.Decimal | null;
};
export type HoldingsSumAggregateOutputType = {
    quantity: runtime.Decimal | null;
    avgBuyPrice: runtime.Decimal | null;
};
export type HoldingsMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    assetId: string | null;
    quantity: runtime.Decimal | null;
    avgBuyPrice: runtime.Decimal | null;
    updatedAt: Date | null;
};
export type HoldingsMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    assetId: string | null;
    quantity: runtime.Decimal | null;
    avgBuyPrice: runtime.Decimal | null;
    updatedAt: Date | null;
};
export type HoldingsCountAggregateOutputType = {
    id: number;
    userId: number;
    assetId: number;
    quantity: number;
    avgBuyPrice: number;
    updatedAt: number;
    _all: number;
};
export type HoldingsAvgAggregateInputType = {
    quantity?: true;
    avgBuyPrice?: true;
};
export type HoldingsSumAggregateInputType = {
    quantity?: true;
    avgBuyPrice?: true;
};
export type HoldingsMinAggregateInputType = {
    id?: true;
    userId?: true;
    assetId?: true;
    quantity?: true;
    avgBuyPrice?: true;
    updatedAt?: true;
};
export type HoldingsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    assetId?: true;
    quantity?: true;
    avgBuyPrice?: true;
    updatedAt?: true;
};
export type HoldingsCountAggregateInputType = {
    id?: true;
    userId?: true;
    assetId?: true;
    quantity?: true;
    avgBuyPrice?: true;
    updatedAt?: true;
    _all?: true;
};
export type HoldingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HoldingsWhereInput;
    orderBy?: Prisma.HoldingsOrderByWithRelationInput | Prisma.HoldingsOrderByWithRelationInput[];
    cursor?: Prisma.HoldingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HoldingsCountAggregateInputType;
    _avg?: HoldingsAvgAggregateInputType;
    _sum?: HoldingsSumAggregateInputType;
    _min?: HoldingsMinAggregateInputType;
    _max?: HoldingsMaxAggregateInputType;
};
export type GetHoldingsAggregateType<T extends HoldingsAggregateArgs> = {
    [P in keyof T & keyof AggregateHoldings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHoldings[P]> : Prisma.GetScalarType<T[P], AggregateHoldings[P]>;
};
export type HoldingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HoldingsWhereInput;
    orderBy?: Prisma.HoldingsOrderByWithAggregationInput | Prisma.HoldingsOrderByWithAggregationInput[];
    by: Prisma.HoldingsScalarFieldEnum[] | Prisma.HoldingsScalarFieldEnum;
    having?: Prisma.HoldingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HoldingsCountAggregateInputType | true;
    _avg?: HoldingsAvgAggregateInputType;
    _sum?: HoldingsSumAggregateInputType;
    _min?: HoldingsMinAggregateInputType;
    _max?: HoldingsMaxAggregateInputType;
};
export type HoldingsGroupByOutputType = {
    id: string;
    userId: string;
    assetId: string;
    quantity: runtime.Decimal;
    avgBuyPrice: runtime.Decimal;
    updatedAt: Date;
    _count: HoldingsCountAggregateOutputType | null;
    _avg: HoldingsAvgAggregateOutputType | null;
    _sum: HoldingsSumAggregateOutputType | null;
    _min: HoldingsMinAggregateOutputType | null;
    _max: HoldingsMaxAggregateOutputType | null;
};
export type GetHoldingsGroupByPayload<T extends HoldingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HoldingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HoldingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HoldingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HoldingsGroupByOutputType[P]>;
}>>;
export type HoldingsWhereInput = {
    AND?: Prisma.HoldingsWhereInput | Prisma.HoldingsWhereInput[];
    OR?: Prisma.HoldingsWhereInput[];
    NOT?: Prisma.HoldingsWhereInput | Prisma.HoldingsWhereInput[];
    id?: Prisma.StringFilter<"Holdings"> | string;
    userId?: Prisma.StringFilter<"Holdings"> | string;
    assetId?: Prisma.StringFilter<"Holdings"> | string;
    quantity?: Prisma.DecimalFilter<"Holdings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFilter<"Holdings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFilter<"Holdings"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
};
export type HoldingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    avgBuyPrice?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    asset?: Prisma.AssetOrderByWithRelationInput;
};
export type HoldingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_assetId?: Prisma.HoldingsUserIdAssetIdCompoundUniqueInput;
    AND?: Prisma.HoldingsWhereInput | Prisma.HoldingsWhereInput[];
    OR?: Prisma.HoldingsWhereInput[];
    NOT?: Prisma.HoldingsWhereInput | Prisma.HoldingsWhereInput[];
    userId?: Prisma.StringFilter<"Holdings"> | string;
    assetId?: Prisma.StringFilter<"Holdings"> | string;
    quantity?: Prisma.DecimalFilter<"Holdings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFilter<"Holdings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFilter<"Holdings"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
}, "id" | "userId_assetId">;
export type HoldingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    avgBuyPrice?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HoldingsCountOrderByAggregateInput;
    _avg?: Prisma.HoldingsAvgOrderByAggregateInput;
    _max?: Prisma.HoldingsMaxOrderByAggregateInput;
    _min?: Prisma.HoldingsMinOrderByAggregateInput;
    _sum?: Prisma.HoldingsSumOrderByAggregateInput;
};
export type HoldingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.HoldingsScalarWhereWithAggregatesInput | Prisma.HoldingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.HoldingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HoldingsScalarWhereWithAggregatesInput | Prisma.HoldingsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Holdings"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Holdings"> | string;
    assetId?: Prisma.StringWithAggregatesFilter<"Holdings"> | string;
    quantity?: Prisma.DecimalWithAggregatesFilter<"Holdings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalWithAggregatesFilter<"Holdings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Holdings"> | Date | string;
};
export type HoldingsCreateInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
    user: Prisma.UserCreateNestedOneWithoutHoldingsInput;
    asset: Prisma.AssetCreateNestedOneWithoutHoldingsInput;
};
export type HoldingsUncheckedCreateInput = {
    id?: string;
    userId: string;
    assetId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
};
export type HoldingsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutHoldingsNestedInput;
    asset?: Prisma.AssetUpdateOneRequiredWithoutHoldingsNestedInput;
};
export type HoldingsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HoldingsCreateManyInput = {
    id?: string;
    userId: string;
    assetId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
};
export type HoldingsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HoldingsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HoldingsListRelationFilter = {
    every?: Prisma.HoldingsWhereInput;
    some?: Prisma.HoldingsWhereInput;
    none?: Prisma.HoldingsWhereInput;
};
export type HoldingsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HoldingsUserIdAssetIdCompoundUniqueInput = {
    userId: string;
    assetId: string;
};
export type HoldingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    avgBuyPrice?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HoldingsAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    avgBuyPrice?: Prisma.SortOrder;
};
export type HoldingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    avgBuyPrice?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HoldingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    avgBuyPrice?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HoldingsSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    avgBuyPrice?: Prisma.SortOrder;
};
export type HoldingsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HoldingsCreateWithoutUserInput, Prisma.HoldingsUncheckedCreateWithoutUserInput> | Prisma.HoldingsCreateWithoutUserInput[] | Prisma.HoldingsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HoldingsCreateOrConnectWithoutUserInput | Prisma.HoldingsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HoldingsCreateManyUserInputEnvelope;
    connect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
};
export type HoldingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HoldingsCreateWithoutUserInput, Prisma.HoldingsUncheckedCreateWithoutUserInput> | Prisma.HoldingsCreateWithoutUserInput[] | Prisma.HoldingsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HoldingsCreateOrConnectWithoutUserInput | Prisma.HoldingsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HoldingsCreateManyUserInputEnvelope;
    connect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
};
export type HoldingsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HoldingsCreateWithoutUserInput, Prisma.HoldingsUncheckedCreateWithoutUserInput> | Prisma.HoldingsCreateWithoutUserInput[] | Prisma.HoldingsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HoldingsCreateOrConnectWithoutUserInput | Prisma.HoldingsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HoldingsUpsertWithWhereUniqueWithoutUserInput | Prisma.HoldingsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HoldingsCreateManyUserInputEnvelope;
    set?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    disconnect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    delete?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    connect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    update?: Prisma.HoldingsUpdateWithWhereUniqueWithoutUserInput | Prisma.HoldingsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HoldingsUpdateManyWithWhereWithoutUserInput | Prisma.HoldingsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HoldingsScalarWhereInput | Prisma.HoldingsScalarWhereInput[];
};
export type HoldingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HoldingsCreateWithoutUserInput, Prisma.HoldingsUncheckedCreateWithoutUserInput> | Prisma.HoldingsCreateWithoutUserInput[] | Prisma.HoldingsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HoldingsCreateOrConnectWithoutUserInput | Prisma.HoldingsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HoldingsUpsertWithWhereUniqueWithoutUserInput | Prisma.HoldingsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HoldingsCreateManyUserInputEnvelope;
    set?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    disconnect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    delete?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    connect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    update?: Prisma.HoldingsUpdateWithWhereUniqueWithoutUserInput | Prisma.HoldingsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HoldingsUpdateManyWithWhereWithoutUserInput | Prisma.HoldingsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HoldingsScalarWhereInput | Prisma.HoldingsScalarWhereInput[];
};
export type HoldingsCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.HoldingsCreateWithoutAssetInput, Prisma.HoldingsUncheckedCreateWithoutAssetInput> | Prisma.HoldingsCreateWithoutAssetInput[] | Prisma.HoldingsUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.HoldingsCreateOrConnectWithoutAssetInput | Prisma.HoldingsCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.HoldingsCreateManyAssetInputEnvelope;
    connect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
};
export type HoldingsUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.HoldingsCreateWithoutAssetInput, Prisma.HoldingsUncheckedCreateWithoutAssetInput> | Prisma.HoldingsCreateWithoutAssetInput[] | Prisma.HoldingsUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.HoldingsCreateOrConnectWithoutAssetInput | Prisma.HoldingsCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.HoldingsCreateManyAssetInputEnvelope;
    connect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
};
export type HoldingsUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.HoldingsCreateWithoutAssetInput, Prisma.HoldingsUncheckedCreateWithoutAssetInput> | Prisma.HoldingsCreateWithoutAssetInput[] | Prisma.HoldingsUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.HoldingsCreateOrConnectWithoutAssetInput | Prisma.HoldingsCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.HoldingsUpsertWithWhereUniqueWithoutAssetInput | Prisma.HoldingsUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.HoldingsCreateManyAssetInputEnvelope;
    set?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    disconnect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    delete?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    connect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    update?: Prisma.HoldingsUpdateWithWhereUniqueWithoutAssetInput | Prisma.HoldingsUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.HoldingsUpdateManyWithWhereWithoutAssetInput | Prisma.HoldingsUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.HoldingsScalarWhereInput | Prisma.HoldingsScalarWhereInput[];
};
export type HoldingsUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.HoldingsCreateWithoutAssetInput, Prisma.HoldingsUncheckedCreateWithoutAssetInput> | Prisma.HoldingsCreateWithoutAssetInput[] | Prisma.HoldingsUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.HoldingsCreateOrConnectWithoutAssetInput | Prisma.HoldingsCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.HoldingsUpsertWithWhereUniqueWithoutAssetInput | Prisma.HoldingsUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.HoldingsCreateManyAssetInputEnvelope;
    set?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    disconnect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    delete?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    connect?: Prisma.HoldingsWhereUniqueInput | Prisma.HoldingsWhereUniqueInput[];
    update?: Prisma.HoldingsUpdateWithWhereUniqueWithoutAssetInput | Prisma.HoldingsUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.HoldingsUpdateManyWithWhereWithoutAssetInput | Prisma.HoldingsUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.HoldingsScalarWhereInput | Prisma.HoldingsScalarWhereInput[];
};
export type HoldingsCreateWithoutUserInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutHoldingsInput;
};
export type HoldingsUncheckedCreateWithoutUserInput = {
    id?: string;
    assetId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
};
export type HoldingsCreateOrConnectWithoutUserInput = {
    where: Prisma.HoldingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.HoldingsCreateWithoutUserInput, Prisma.HoldingsUncheckedCreateWithoutUserInput>;
};
export type HoldingsCreateManyUserInputEnvelope = {
    data: Prisma.HoldingsCreateManyUserInput | Prisma.HoldingsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type HoldingsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.HoldingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.HoldingsUpdateWithoutUserInput, Prisma.HoldingsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.HoldingsCreateWithoutUserInput, Prisma.HoldingsUncheckedCreateWithoutUserInput>;
};
export type HoldingsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.HoldingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.HoldingsUpdateWithoutUserInput, Prisma.HoldingsUncheckedUpdateWithoutUserInput>;
};
export type HoldingsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.HoldingsScalarWhereInput;
    data: Prisma.XOR<Prisma.HoldingsUpdateManyMutationInput, Prisma.HoldingsUncheckedUpdateManyWithoutUserInput>;
};
export type HoldingsScalarWhereInput = {
    AND?: Prisma.HoldingsScalarWhereInput | Prisma.HoldingsScalarWhereInput[];
    OR?: Prisma.HoldingsScalarWhereInput[];
    NOT?: Prisma.HoldingsScalarWhereInput | Prisma.HoldingsScalarWhereInput[];
    id?: Prisma.StringFilter<"Holdings"> | string;
    userId?: Prisma.StringFilter<"Holdings"> | string;
    assetId?: Prisma.StringFilter<"Holdings"> | string;
    quantity?: Prisma.DecimalFilter<"Holdings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFilter<"Holdings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFilter<"Holdings"> | Date | string;
};
export type HoldingsCreateWithoutAssetInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
    user: Prisma.UserCreateNestedOneWithoutHoldingsInput;
};
export type HoldingsUncheckedCreateWithoutAssetInput = {
    id?: string;
    userId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
};
export type HoldingsCreateOrConnectWithoutAssetInput = {
    where: Prisma.HoldingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.HoldingsCreateWithoutAssetInput, Prisma.HoldingsUncheckedCreateWithoutAssetInput>;
};
export type HoldingsCreateManyAssetInputEnvelope = {
    data: Prisma.HoldingsCreateManyAssetInput | Prisma.HoldingsCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type HoldingsUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.HoldingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.HoldingsUpdateWithoutAssetInput, Prisma.HoldingsUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.HoldingsCreateWithoutAssetInput, Prisma.HoldingsUncheckedCreateWithoutAssetInput>;
};
export type HoldingsUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.HoldingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.HoldingsUpdateWithoutAssetInput, Prisma.HoldingsUncheckedUpdateWithoutAssetInput>;
};
export type HoldingsUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.HoldingsScalarWhereInput;
    data: Prisma.XOR<Prisma.HoldingsUpdateManyMutationInput, Prisma.HoldingsUncheckedUpdateManyWithoutAssetInput>;
};
export type HoldingsCreateManyUserInput = {
    id?: string;
    assetId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
};
export type HoldingsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutHoldingsNestedInput;
};
export type HoldingsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HoldingsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HoldingsCreateManyAssetInput = {
    id?: string;
    userId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt: Date | string;
};
export type HoldingsUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutHoldingsNestedInput;
};
export type HoldingsUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HoldingsUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avgBuyPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HoldingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    assetId?: boolean;
    quantity?: boolean;
    avgBuyPrice?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["holdings"]>;
export type HoldingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    assetId?: boolean;
    quantity?: boolean;
    avgBuyPrice?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["holdings"]>;
export type HoldingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    assetId?: boolean;
    quantity?: boolean;
    avgBuyPrice?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["holdings"]>;
export type HoldingsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    assetId?: boolean;
    quantity?: boolean;
    avgBuyPrice?: boolean;
    updatedAt?: boolean;
};
export type HoldingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "assetId" | "quantity" | "avgBuyPrice" | "updatedAt", ExtArgs["result"]["holdings"]>;
export type HoldingsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type HoldingsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type HoldingsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type $HoldingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Holdings";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        asset: Prisma.$AssetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        assetId: string;
        quantity: runtime.Decimal;
        avgBuyPrice: runtime.Decimal;
        updatedAt: Date;
    }, ExtArgs["result"]["holdings"]>;
    composites: {};
};
export type HoldingsGetPayload<S extends boolean | null | undefined | HoldingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HoldingsPayload, S>;
export type HoldingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HoldingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HoldingsCountAggregateInputType | true;
};
export interface HoldingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Holdings'];
        meta: {
            name: 'Holdings';
        };
    };
    findUnique<T extends HoldingsFindUniqueArgs>(args: Prisma.SelectSubset<T, HoldingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HoldingsClient<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HoldingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HoldingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HoldingsClient<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HoldingsFindFirstArgs>(args?: Prisma.SelectSubset<T, HoldingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__HoldingsClient<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HoldingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HoldingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HoldingsClient<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HoldingsFindManyArgs>(args?: Prisma.SelectSubset<T, HoldingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HoldingsCreateArgs>(args: Prisma.SelectSubset<T, HoldingsCreateArgs<ExtArgs>>): Prisma.Prisma__HoldingsClient<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HoldingsCreateManyArgs>(args?: Prisma.SelectSubset<T, HoldingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HoldingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HoldingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HoldingsDeleteArgs>(args: Prisma.SelectSubset<T, HoldingsDeleteArgs<ExtArgs>>): Prisma.Prisma__HoldingsClient<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HoldingsUpdateArgs>(args: Prisma.SelectSubset<T, HoldingsUpdateArgs<ExtArgs>>): Prisma.Prisma__HoldingsClient<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HoldingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, HoldingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HoldingsUpdateManyArgs>(args: Prisma.SelectSubset<T, HoldingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HoldingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HoldingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HoldingsUpsertArgs>(args: Prisma.SelectSubset<T, HoldingsUpsertArgs<ExtArgs>>): Prisma.Prisma__HoldingsClient<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HoldingsCountArgs>(args?: Prisma.Subset<T, HoldingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HoldingsCountAggregateOutputType> : number>;
    aggregate<T extends HoldingsAggregateArgs>(args: Prisma.Subset<T, HoldingsAggregateArgs>): Prisma.PrismaPromise<GetHoldingsAggregateType<T>>;
    groupBy<T extends HoldingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HoldingsGroupByArgs['orderBy'];
    } : {
        orderBy?: HoldingsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HoldingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoldingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HoldingsFieldRefs;
}
export interface Prisma__HoldingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HoldingsFieldRefs {
    readonly id: Prisma.FieldRef<"Holdings", 'String'>;
    readonly userId: Prisma.FieldRef<"Holdings", 'String'>;
    readonly assetId: Prisma.FieldRef<"Holdings", 'String'>;
    readonly quantity: Prisma.FieldRef<"Holdings", 'Decimal'>;
    readonly avgBuyPrice: Prisma.FieldRef<"Holdings", 'Decimal'>;
    readonly updatedAt: Prisma.FieldRef<"Holdings", 'DateTime'>;
}
export type HoldingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    where: Prisma.HoldingsWhereUniqueInput;
};
export type HoldingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    where: Prisma.HoldingsWhereUniqueInput;
};
export type HoldingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    where?: Prisma.HoldingsWhereInput;
    orderBy?: Prisma.HoldingsOrderByWithRelationInput | Prisma.HoldingsOrderByWithRelationInput[];
    cursor?: Prisma.HoldingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HoldingsScalarFieldEnum | Prisma.HoldingsScalarFieldEnum[];
};
export type HoldingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    where?: Prisma.HoldingsWhereInput;
    orderBy?: Prisma.HoldingsOrderByWithRelationInput | Prisma.HoldingsOrderByWithRelationInput[];
    cursor?: Prisma.HoldingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HoldingsScalarFieldEnum | Prisma.HoldingsScalarFieldEnum[];
};
export type HoldingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    where?: Prisma.HoldingsWhereInput;
    orderBy?: Prisma.HoldingsOrderByWithRelationInput | Prisma.HoldingsOrderByWithRelationInput[];
    cursor?: Prisma.HoldingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HoldingsScalarFieldEnum | Prisma.HoldingsScalarFieldEnum[];
};
export type HoldingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HoldingsCreateInput, Prisma.HoldingsUncheckedCreateInput>;
};
export type HoldingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HoldingsCreateManyInput | Prisma.HoldingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HoldingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    data: Prisma.HoldingsCreateManyInput | Prisma.HoldingsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HoldingsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HoldingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HoldingsUpdateInput, Prisma.HoldingsUncheckedUpdateInput>;
    where: Prisma.HoldingsWhereUniqueInput;
};
export type HoldingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HoldingsUpdateManyMutationInput, Prisma.HoldingsUncheckedUpdateManyInput>;
    where?: Prisma.HoldingsWhereInput;
    limit?: number;
};
export type HoldingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HoldingsUpdateManyMutationInput, Prisma.HoldingsUncheckedUpdateManyInput>;
    where?: Prisma.HoldingsWhereInput;
    limit?: number;
    include?: Prisma.HoldingsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HoldingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    where: Prisma.HoldingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.HoldingsCreateInput, Prisma.HoldingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HoldingsUpdateInput, Prisma.HoldingsUncheckedUpdateInput>;
};
export type HoldingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
    where: Prisma.HoldingsWhereUniqueInput;
};
export type HoldingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HoldingsWhereInput;
    limit?: number;
};
export type HoldingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HoldingsSelect<ExtArgs> | null;
    omit?: Prisma.HoldingsOmit<ExtArgs> | null;
    include?: Prisma.HoldingsInclude<ExtArgs> | null;
};
