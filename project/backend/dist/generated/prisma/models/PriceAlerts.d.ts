import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PriceAlertsModel = runtime.Types.Result.DefaultSelection<Prisma.$PriceAlertsPayload>;
export type AggregatePriceAlerts = {
    _count: PriceAlertsCountAggregateOutputType | null;
    _avg: PriceAlertsAvgAggregateOutputType | null;
    _sum: PriceAlertsSumAggregateOutputType | null;
    _min: PriceAlertsMinAggregateOutputType | null;
    _max: PriceAlertsMaxAggregateOutputType | null;
};
export type PriceAlertsAvgAggregateOutputType = {
    targetPrice: runtime.Decimal | null;
};
export type PriceAlertsSumAggregateOutputType = {
    targetPrice: runtime.Decimal | null;
};
export type PriceAlertsMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    assetId: string | null;
    targetPrice: runtime.Decimal | null;
    direction: string | null;
    isTriggered: boolean | null;
    createdAt: Date | null;
};
export type PriceAlertsMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    assetId: string | null;
    targetPrice: runtime.Decimal | null;
    direction: string | null;
    isTriggered: boolean | null;
    createdAt: Date | null;
};
export type PriceAlertsCountAggregateOutputType = {
    id: number;
    userId: number;
    assetId: number;
    targetPrice: number;
    direction: number;
    isTriggered: number;
    createdAt: number;
    _all: number;
};
export type PriceAlertsAvgAggregateInputType = {
    targetPrice?: true;
};
export type PriceAlertsSumAggregateInputType = {
    targetPrice?: true;
};
export type PriceAlertsMinAggregateInputType = {
    id?: true;
    userId?: true;
    assetId?: true;
    targetPrice?: true;
    direction?: true;
    isTriggered?: true;
    createdAt?: true;
};
export type PriceAlertsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    assetId?: true;
    targetPrice?: true;
    direction?: true;
    isTriggered?: true;
    createdAt?: true;
};
export type PriceAlertsCountAggregateInputType = {
    id?: true;
    userId?: true;
    assetId?: true;
    targetPrice?: true;
    direction?: true;
    isTriggered?: true;
    createdAt?: true;
    _all?: true;
};
export type PriceAlertsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceAlertsWhereInput;
    orderBy?: Prisma.PriceAlertsOrderByWithRelationInput | Prisma.PriceAlertsOrderByWithRelationInput[];
    cursor?: Prisma.PriceAlertsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PriceAlertsCountAggregateInputType;
    _avg?: PriceAlertsAvgAggregateInputType;
    _sum?: PriceAlertsSumAggregateInputType;
    _min?: PriceAlertsMinAggregateInputType;
    _max?: PriceAlertsMaxAggregateInputType;
};
export type GetPriceAlertsAggregateType<T extends PriceAlertsAggregateArgs> = {
    [P in keyof T & keyof AggregatePriceAlerts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePriceAlerts[P]> : Prisma.GetScalarType<T[P], AggregatePriceAlerts[P]>;
};
export type PriceAlertsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceAlertsWhereInput;
    orderBy?: Prisma.PriceAlertsOrderByWithAggregationInput | Prisma.PriceAlertsOrderByWithAggregationInput[];
    by: Prisma.PriceAlertsScalarFieldEnum[] | Prisma.PriceAlertsScalarFieldEnum;
    having?: Prisma.PriceAlertsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PriceAlertsCountAggregateInputType | true;
    _avg?: PriceAlertsAvgAggregateInputType;
    _sum?: PriceAlertsSumAggregateInputType;
    _min?: PriceAlertsMinAggregateInputType;
    _max?: PriceAlertsMaxAggregateInputType;
};
export type PriceAlertsGroupByOutputType = {
    id: string;
    userId: string;
    assetId: string;
    targetPrice: runtime.Decimal;
    direction: string;
    isTriggered: boolean;
    createdAt: Date;
    _count: PriceAlertsCountAggregateOutputType | null;
    _avg: PriceAlertsAvgAggregateOutputType | null;
    _sum: PriceAlertsSumAggregateOutputType | null;
    _min: PriceAlertsMinAggregateOutputType | null;
    _max: PriceAlertsMaxAggregateOutputType | null;
};
export type GetPriceAlertsGroupByPayload<T extends PriceAlertsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PriceAlertsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PriceAlertsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PriceAlertsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PriceAlertsGroupByOutputType[P]>;
}>>;
export type PriceAlertsWhereInput = {
    AND?: Prisma.PriceAlertsWhereInput | Prisma.PriceAlertsWhereInput[];
    OR?: Prisma.PriceAlertsWhereInput[];
    NOT?: Prisma.PriceAlertsWhereInput | Prisma.PriceAlertsWhereInput[];
    id?: Prisma.StringFilter<"PriceAlerts"> | string;
    userId?: Prisma.StringFilter<"PriceAlerts"> | string;
    assetId?: Prisma.StringFilter<"PriceAlerts"> | string;
    targetPrice?: Prisma.DecimalFilter<"PriceAlerts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFilter<"PriceAlerts"> | string;
    isTriggered?: Prisma.BoolFilter<"PriceAlerts"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PriceAlerts"> | Date | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PriceAlertsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    targetPrice?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isTriggered?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    asset?: Prisma.AssetOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type PriceAlertsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PriceAlertsWhereInput | Prisma.PriceAlertsWhereInput[];
    OR?: Prisma.PriceAlertsWhereInput[];
    NOT?: Prisma.PriceAlertsWhereInput | Prisma.PriceAlertsWhereInput[];
    userId?: Prisma.StringFilter<"PriceAlerts"> | string;
    assetId?: Prisma.StringFilter<"PriceAlerts"> | string;
    targetPrice?: Prisma.DecimalFilter<"PriceAlerts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFilter<"PriceAlerts"> | string;
    isTriggered?: Prisma.BoolFilter<"PriceAlerts"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PriceAlerts"> | Date | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PriceAlertsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    targetPrice?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isTriggered?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PriceAlertsCountOrderByAggregateInput;
    _avg?: Prisma.PriceAlertsAvgOrderByAggregateInput;
    _max?: Prisma.PriceAlertsMaxOrderByAggregateInput;
    _min?: Prisma.PriceAlertsMinOrderByAggregateInput;
    _sum?: Prisma.PriceAlertsSumOrderByAggregateInput;
};
export type PriceAlertsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PriceAlertsScalarWhereWithAggregatesInput | Prisma.PriceAlertsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PriceAlertsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PriceAlertsScalarWhereWithAggregatesInput | Prisma.PriceAlertsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PriceAlerts"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"PriceAlerts"> | string;
    assetId?: Prisma.StringWithAggregatesFilter<"PriceAlerts"> | string;
    targetPrice?: Prisma.DecimalWithAggregatesFilter<"PriceAlerts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringWithAggregatesFilter<"PriceAlerts"> | string;
    isTriggered?: Prisma.BoolWithAggregatesFilter<"PriceAlerts"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PriceAlerts"> | Date | string;
};
export type PriceAlertsCreateInput = {
    id?: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutPriceAlertsInput;
    user: Prisma.UserCreateNestedOneWithoutPriceAlertsInput;
};
export type PriceAlertsUncheckedCreateInput = {
    id?: string;
    userId: string;
    assetId: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
};
export type PriceAlertsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutPriceAlertsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutPriceAlertsNestedInput;
};
export type PriceAlertsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceAlertsCreateManyInput = {
    id?: string;
    userId: string;
    assetId: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
};
export type PriceAlertsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceAlertsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceAlertsListRelationFilter = {
    every?: Prisma.PriceAlertsWhereInput;
    some?: Prisma.PriceAlertsWhereInput;
    none?: Prisma.PriceAlertsWhereInput;
};
export type PriceAlertsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PriceAlertsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    targetPrice?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isTriggered?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PriceAlertsAvgOrderByAggregateInput = {
    targetPrice?: Prisma.SortOrder;
};
export type PriceAlertsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    targetPrice?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isTriggered?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PriceAlertsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    targetPrice?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    isTriggered?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PriceAlertsSumOrderByAggregateInput = {
    targetPrice?: Prisma.SortOrder;
};
export type PriceAlertsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PriceAlertsCreateWithoutUserInput, Prisma.PriceAlertsUncheckedCreateWithoutUserInput> | Prisma.PriceAlertsCreateWithoutUserInput[] | Prisma.PriceAlertsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceAlertsCreateOrConnectWithoutUserInput | Prisma.PriceAlertsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PriceAlertsCreateManyUserInputEnvelope;
    connect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
};
export type PriceAlertsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PriceAlertsCreateWithoutUserInput, Prisma.PriceAlertsUncheckedCreateWithoutUserInput> | Prisma.PriceAlertsCreateWithoutUserInput[] | Prisma.PriceAlertsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceAlertsCreateOrConnectWithoutUserInput | Prisma.PriceAlertsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PriceAlertsCreateManyUserInputEnvelope;
    connect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
};
export type PriceAlertsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PriceAlertsCreateWithoutUserInput, Prisma.PriceAlertsUncheckedCreateWithoutUserInput> | Prisma.PriceAlertsCreateWithoutUserInput[] | Prisma.PriceAlertsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceAlertsCreateOrConnectWithoutUserInput | Prisma.PriceAlertsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PriceAlertsUpsertWithWhereUniqueWithoutUserInput | Prisma.PriceAlertsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PriceAlertsCreateManyUserInputEnvelope;
    set?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    disconnect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    delete?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    connect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    update?: Prisma.PriceAlertsUpdateWithWhereUniqueWithoutUserInput | Prisma.PriceAlertsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PriceAlertsUpdateManyWithWhereWithoutUserInput | Prisma.PriceAlertsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PriceAlertsScalarWhereInput | Prisma.PriceAlertsScalarWhereInput[];
};
export type PriceAlertsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PriceAlertsCreateWithoutUserInput, Prisma.PriceAlertsUncheckedCreateWithoutUserInput> | Prisma.PriceAlertsCreateWithoutUserInput[] | Prisma.PriceAlertsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceAlertsCreateOrConnectWithoutUserInput | Prisma.PriceAlertsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PriceAlertsUpsertWithWhereUniqueWithoutUserInput | Prisma.PriceAlertsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PriceAlertsCreateManyUserInputEnvelope;
    set?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    disconnect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    delete?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    connect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    update?: Prisma.PriceAlertsUpdateWithWhereUniqueWithoutUserInput | Prisma.PriceAlertsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PriceAlertsUpdateManyWithWhereWithoutUserInput | Prisma.PriceAlertsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PriceAlertsScalarWhereInput | Prisma.PriceAlertsScalarWhereInput[];
};
export type PriceAlertsCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.PriceAlertsCreateWithoutAssetInput, Prisma.PriceAlertsUncheckedCreateWithoutAssetInput> | Prisma.PriceAlertsCreateWithoutAssetInput[] | Prisma.PriceAlertsUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.PriceAlertsCreateOrConnectWithoutAssetInput | Prisma.PriceAlertsCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.PriceAlertsCreateManyAssetInputEnvelope;
    connect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
};
export type PriceAlertsUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.PriceAlertsCreateWithoutAssetInput, Prisma.PriceAlertsUncheckedCreateWithoutAssetInput> | Prisma.PriceAlertsCreateWithoutAssetInput[] | Prisma.PriceAlertsUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.PriceAlertsCreateOrConnectWithoutAssetInput | Prisma.PriceAlertsCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.PriceAlertsCreateManyAssetInputEnvelope;
    connect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
};
export type PriceAlertsUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.PriceAlertsCreateWithoutAssetInput, Prisma.PriceAlertsUncheckedCreateWithoutAssetInput> | Prisma.PriceAlertsCreateWithoutAssetInput[] | Prisma.PriceAlertsUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.PriceAlertsCreateOrConnectWithoutAssetInput | Prisma.PriceAlertsCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.PriceAlertsUpsertWithWhereUniqueWithoutAssetInput | Prisma.PriceAlertsUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.PriceAlertsCreateManyAssetInputEnvelope;
    set?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    disconnect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    delete?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    connect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    update?: Prisma.PriceAlertsUpdateWithWhereUniqueWithoutAssetInput | Prisma.PriceAlertsUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.PriceAlertsUpdateManyWithWhereWithoutAssetInput | Prisma.PriceAlertsUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.PriceAlertsScalarWhereInput | Prisma.PriceAlertsScalarWhereInput[];
};
export type PriceAlertsUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.PriceAlertsCreateWithoutAssetInput, Prisma.PriceAlertsUncheckedCreateWithoutAssetInput> | Prisma.PriceAlertsCreateWithoutAssetInput[] | Prisma.PriceAlertsUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.PriceAlertsCreateOrConnectWithoutAssetInput | Prisma.PriceAlertsCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.PriceAlertsUpsertWithWhereUniqueWithoutAssetInput | Prisma.PriceAlertsUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.PriceAlertsCreateManyAssetInputEnvelope;
    set?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    disconnect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    delete?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    connect?: Prisma.PriceAlertsWhereUniqueInput | Prisma.PriceAlertsWhereUniqueInput[];
    update?: Prisma.PriceAlertsUpdateWithWhereUniqueWithoutAssetInput | Prisma.PriceAlertsUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.PriceAlertsUpdateManyWithWhereWithoutAssetInput | Prisma.PriceAlertsUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.PriceAlertsScalarWhereInput | Prisma.PriceAlertsScalarWhereInput[];
};
export type PriceAlertsCreateWithoutUserInput = {
    id?: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutPriceAlertsInput;
};
export type PriceAlertsUncheckedCreateWithoutUserInput = {
    id?: string;
    assetId: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
};
export type PriceAlertsCreateOrConnectWithoutUserInput = {
    where: Prisma.PriceAlertsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceAlertsCreateWithoutUserInput, Prisma.PriceAlertsUncheckedCreateWithoutUserInput>;
};
export type PriceAlertsCreateManyUserInputEnvelope = {
    data: Prisma.PriceAlertsCreateManyUserInput | Prisma.PriceAlertsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PriceAlertsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PriceAlertsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PriceAlertsUpdateWithoutUserInput, Prisma.PriceAlertsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PriceAlertsCreateWithoutUserInput, Prisma.PriceAlertsUncheckedCreateWithoutUserInput>;
};
export type PriceAlertsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PriceAlertsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PriceAlertsUpdateWithoutUserInput, Prisma.PriceAlertsUncheckedUpdateWithoutUserInput>;
};
export type PriceAlertsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PriceAlertsScalarWhereInput;
    data: Prisma.XOR<Prisma.PriceAlertsUpdateManyMutationInput, Prisma.PriceAlertsUncheckedUpdateManyWithoutUserInput>;
};
export type PriceAlertsScalarWhereInput = {
    AND?: Prisma.PriceAlertsScalarWhereInput | Prisma.PriceAlertsScalarWhereInput[];
    OR?: Prisma.PriceAlertsScalarWhereInput[];
    NOT?: Prisma.PriceAlertsScalarWhereInput | Prisma.PriceAlertsScalarWhereInput[];
    id?: Prisma.StringFilter<"PriceAlerts"> | string;
    userId?: Prisma.StringFilter<"PriceAlerts"> | string;
    assetId?: Prisma.StringFilter<"PriceAlerts"> | string;
    targetPrice?: Prisma.DecimalFilter<"PriceAlerts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFilter<"PriceAlerts"> | string;
    isTriggered?: Prisma.BoolFilter<"PriceAlerts"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PriceAlerts"> | Date | string;
};
export type PriceAlertsCreateWithoutAssetInput = {
    id?: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPriceAlertsInput;
};
export type PriceAlertsUncheckedCreateWithoutAssetInput = {
    id?: string;
    userId: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
};
export type PriceAlertsCreateOrConnectWithoutAssetInput = {
    where: Prisma.PriceAlertsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceAlertsCreateWithoutAssetInput, Prisma.PriceAlertsUncheckedCreateWithoutAssetInput>;
};
export type PriceAlertsCreateManyAssetInputEnvelope = {
    data: Prisma.PriceAlertsCreateManyAssetInput | Prisma.PriceAlertsCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type PriceAlertsUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.PriceAlertsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PriceAlertsUpdateWithoutAssetInput, Prisma.PriceAlertsUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.PriceAlertsCreateWithoutAssetInput, Prisma.PriceAlertsUncheckedCreateWithoutAssetInput>;
};
export type PriceAlertsUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.PriceAlertsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PriceAlertsUpdateWithoutAssetInput, Prisma.PriceAlertsUncheckedUpdateWithoutAssetInput>;
};
export type PriceAlertsUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.PriceAlertsScalarWhereInput;
    data: Prisma.XOR<Prisma.PriceAlertsUpdateManyMutationInput, Prisma.PriceAlertsUncheckedUpdateManyWithoutAssetInput>;
};
export type PriceAlertsCreateManyUserInput = {
    id?: string;
    assetId: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
};
export type PriceAlertsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutPriceAlertsNestedInput;
};
export type PriceAlertsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceAlertsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceAlertsCreateManyAssetInput = {
    id?: string;
    userId: string;
    targetPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction: string;
    isTriggered?: boolean;
    createdAt?: Date | string;
};
export type PriceAlertsUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPriceAlertsNestedInput;
};
export type PriceAlertsUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceAlertsUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    direction?: Prisma.StringFieldUpdateOperationsInput | string;
    isTriggered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceAlertsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    assetId?: boolean;
    targetPrice?: boolean;
    direction?: boolean;
    isTriggered?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priceAlerts"]>;
export type PriceAlertsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    assetId?: boolean;
    targetPrice?: boolean;
    direction?: boolean;
    isTriggered?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priceAlerts"]>;
export type PriceAlertsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    assetId?: boolean;
    targetPrice?: boolean;
    direction?: boolean;
    isTriggered?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priceAlerts"]>;
export type PriceAlertsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    assetId?: boolean;
    targetPrice?: boolean;
    direction?: boolean;
    isTriggered?: boolean;
    createdAt?: boolean;
};
export type PriceAlertsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "assetId" | "targetPrice" | "direction" | "isTriggered" | "createdAt", ExtArgs["result"]["priceAlerts"]>;
export type PriceAlertsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PriceAlertsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PriceAlertsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PriceAlertsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PriceAlerts";
    objects: {
        asset: Prisma.$AssetPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        assetId: string;
        targetPrice: runtime.Decimal;
        direction: string;
        isTriggered: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["priceAlerts"]>;
    composites: {};
};
export type PriceAlertsGetPayload<S extends boolean | null | undefined | PriceAlertsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload, S>;
export type PriceAlertsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PriceAlertsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PriceAlertsCountAggregateInputType | true;
};
export interface PriceAlertsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PriceAlerts'];
        meta: {
            name: 'PriceAlerts';
        };
    };
    findUnique<T extends PriceAlertsFindUniqueArgs>(args: Prisma.SelectSubset<T, PriceAlertsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PriceAlertsClient<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PriceAlertsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PriceAlertsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceAlertsClient<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PriceAlertsFindFirstArgs>(args?: Prisma.SelectSubset<T, PriceAlertsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PriceAlertsClient<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PriceAlertsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PriceAlertsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceAlertsClient<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PriceAlertsFindManyArgs>(args?: Prisma.SelectSubset<T, PriceAlertsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PriceAlertsCreateArgs>(args: Prisma.SelectSubset<T, PriceAlertsCreateArgs<ExtArgs>>): Prisma.Prisma__PriceAlertsClient<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PriceAlertsCreateManyArgs>(args?: Prisma.SelectSubset<T, PriceAlertsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PriceAlertsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PriceAlertsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PriceAlertsDeleteArgs>(args: Prisma.SelectSubset<T, PriceAlertsDeleteArgs<ExtArgs>>): Prisma.Prisma__PriceAlertsClient<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PriceAlertsUpdateArgs>(args: Prisma.SelectSubset<T, PriceAlertsUpdateArgs<ExtArgs>>): Prisma.Prisma__PriceAlertsClient<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PriceAlertsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PriceAlertsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PriceAlertsUpdateManyArgs>(args: Prisma.SelectSubset<T, PriceAlertsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PriceAlertsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PriceAlertsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PriceAlertsUpsertArgs>(args: Prisma.SelectSubset<T, PriceAlertsUpsertArgs<ExtArgs>>): Prisma.Prisma__PriceAlertsClient<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PriceAlertsCountArgs>(args?: Prisma.Subset<T, PriceAlertsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PriceAlertsCountAggregateOutputType> : number>;
    aggregate<T extends PriceAlertsAggregateArgs>(args: Prisma.Subset<T, PriceAlertsAggregateArgs>): Prisma.PrismaPromise<GetPriceAlertsAggregateType<T>>;
    groupBy<T extends PriceAlertsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PriceAlertsGroupByArgs['orderBy'];
    } : {
        orderBy?: PriceAlertsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PriceAlertsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceAlertsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PriceAlertsFieldRefs;
}
export interface Prisma__PriceAlertsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PriceAlertsFieldRefs {
    readonly id: Prisma.FieldRef<"PriceAlerts", 'String'>;
    readonly userId: Prisma.FieldRef<"PriceAlerts", 'String'>;
    readonly assetId: Prisma.FieldRef<"PriceAlerts", 'String'>;
    readonly targetPrice: Prisma.FieldRef<"PriceAlerts", 'Decimal'>;
    readonly direction: Prisma.FieldRef<"PriceAlerts", 'String'>;
    readonly isTriggered: Prisma.FieldRef<"PriceAlerts", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PriceAlerts", 'DateTime'>;
}
export type PriceAlertsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    where: Prisma.PriceAlertsWhereUniqueInput;
};
export type PriceAlertsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    where: Prisma.PriceAlertsWhereUniqueInput;
};
export type PriceAlertsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    where?: Prisma.PriceAlertsWhereInput;
    orderBy?: Prisma.PriceAlertsOrderByWithRelationInput | Prisma.PriceAlertsOrderByWithRelationInput[];
    cursor?: Prisma.PriceAlertsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PriceAlertsScalarFieldEnum | Prisma.PriceAlertsScalarFieldEnum[];
};
export type PriceAlertsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    where?: Prisma.PriceAlertsWhereInput;
    orderBy?: Prisma.PriceAlertsOrderByWithRelationInput | Prisma.PriceAlertsOrderByWithRelationInput[];
    cursor?: Prisma.PriceAlertsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PriceAlertsScalarFieldEnum | Prisma.PriceAlertsScalarFieldEnum[];
};
export type PriceAlertsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    where?: Prisma.PriceAlertsWhereInput;
    orderBy?: Prisma.PriceAlertsOrderByWithRelationInput | Prisma.PriceAlertsOrderByWithRelationInput[];
    cursor?: Prisma.PriceAlertsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PriceAlertsScalarFieldEnum | Prisma.PriceAlertsScalarFieldEnum[];
};
export type PriceAlertsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PriceAlertsCreateInput, Prisma.PriceAlertsUncheckedCreateInput>;
};
export type PriceAlertsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PriceAlertsCreateManyInput | Prisma.PriceAlertsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PriceAlertsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    data: Prisma.PriceAlertsCreateManyInput | Prisma.PriceAlertsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PriceAlertsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PriceAlertsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PriceAlertsUpdateInput, Prisma.PriceAlertsUncheckedUpdateInput>;
    where: Prisma.PriceAlertsWhereUniqueInput;
};
export type PriceAlertsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PriceAlertsUpdateManyMutationInput, Prisma.PriceAlertsUncheckedUpdateManyInput>;
    where?: Prisma.PriceAlertsWhereInput;
    limit?: number;
};
export type PriceAlertsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PriceAlertsUpdateManyMutationInput, Prisma.PriceAlertsUncheckedUpdateManyInput>;
    where?: Prisma.PriceAlertsWhereInput;
    limit?: number;
    include?: Prisma.PriceAlertsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PriceAlertsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    where: Prisma.PriceAlertsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceAlertsCreateInput, Prisma.PriceAlertsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PriceAlertsUpdateInput, Prisma.PriceAlertsUncheckedUpdateInput>;
};
export type PriceAlertsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
    where: Prisma.PriceAlertsWhereUniqueInput;
};
export type PriceAlertsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceAlertsWhereInput;
    limit?: number;
};
export type PriceAlertsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PriceAlertsSelect<ExtArgs> | null;
    omit?: Prisma.PriceAlertsOmit<ExtArgs> | null;
    include?: Prisma.PriceAlertsInclude<ExtArgs> | null;
};
