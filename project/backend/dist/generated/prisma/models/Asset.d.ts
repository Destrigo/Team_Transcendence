import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetPayload>;
export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type AssetAvgAggregateOutputType = {
    currentPrice: runtime.Decimal | null;
};
export type AssetSumAggregateOutputType = {
    currentPrice: runtime.Decimal | null;
};
export type AssetMinAggregateOutputType = {
    id: string | null;
    symbol: string | null;
    name: string | null;
    type: string | null;
    currentPrice: runtime.Decimal | null;
    priceUpdatedAt: Date | null;
    logoUrl: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AssetMaxAggregateOutputType = {
    id: string | null;
    symbol: string | null;
    name: string | null;
    type: string | null;
    currentPrice: runtime.Decimal | null;
    priceUpdatedAt: Date | null;
    logoUrl: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AssetCountAggregateOutputType = {
    id: number;
    symbol: number;
    name: number;
    type: number;
    currentPrice: number;
    priceUpdatedAt: number;
    logoUrl: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AssetAvgAggregateInputType = {
    currentPrice?: true;
};
export type AssetSumAggregateInputType = {
    currentPrice?: true;
};
export type AssetMinAggregateInputType = {
    id?: true;
    symbol?: true;
    name?: true;
    type?: true;
    currentPrice?: true;
    priceUpdatedAt?: true;
    logoUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AssetMaxAggregateInputType = {
    id?: true;
    symbol?: true;
    name?: true;
    type?: true;
    currentPrice?: true;
    priceUpdatedAt?: true;
    logoUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AssetCountAggregateInputType = {
    id?: true;
    symbol?: true;
    name?: true;
    type?: true;
    currentPrice?: true;
    priceUpdatedAt?: true;
    logoUrl?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetCountAggregateInputType;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
    [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAsset[P]> : Prisma.GetScalarType<T[P], AggregateAsset[P]>;
};
export type AssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithAggregationInput | Prisma.AssetOrderByWithAggregationInput[];
    by: Prisma.AssetScalarFieldEnum[] | Prisma.AssetScalarFieldEnum;
    having?: Prisma.AssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetCountAggregateInputType | true;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type AssetGroupByOutputType = {
    id: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal;
    priceUpdatedAt: Date;
    logoUrl: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]>;
}>>;
export type AssetWhereInput = {
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    id?: Prisma.StringFilter<"Asset"> | string;
    symbol?: Prisma.StringFilter<"Asset"> | string;
    name?: Prisma.StringFilter<"Asset"> | string;
    type?: Prisma.StringFilter<"Asset"> | string;
    currentPrice?: Prisma.DecimalFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    logoUrl?: Prisma.StringNullableFilter<"Asset"> | string | null;
    isActive?: Prisma.BoolFilter<"Asset"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
    holdings?: Prisma.HoldingsListRelationFilter;
    priceAlerts?: Prisma.PriceAlertsListRelationFilter;
};
export type AssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    priceUpdatedAt?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    holdings?: Prisma.HoldingsOrderByRelationAggregateInput;
    priceAlerts?: Prisma.PriceAlertsOrderByRelationAggregateInput;
};
export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    symbol?: string;
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    name?: Prisma.StringFilter<"Asset"> | string;
    type?: Prisma.StringFilter<"Asset"> | string;
    currentPrice?: Prisma.DecimalFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    logoUrl?: Prisma.StringNullableFilter<"Asset"> | string | null;
    isActive?: Prisma.BoolFilter<"Asset"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
    holdings?: Prisma.HoldingsListRelationFilter;
    priceAlerts?: Prisma.PriceAlertsListRelationFilter;
}, "id" | "symbol">;
export type AssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    priceUpdatedAt?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AssetCountOrderByAggregateInput;
    _avg?: Prisma.AssetAvgOrderByAggregateInput;
    _max?: Prisma.AssetMaxOrderByAggregateInput;
    _min?: Prisma.AssetMinOrderByAggregateInput;
    _sum?: Prisma.AssetSumOrderByAggregateInput;
};
export type AssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    symbol?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    currentPrice?: Prisma.DecimalWithAggregatesFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string;
    logoUrl?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Asset"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string;
};
export type AssetCreateInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutAssetInput;
    holdings?: Prisma.HoldingsCreateNestedManyWithoutAssetInput;
    priceAlerts?: Prisma.PriceAlertsCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutAssetInput;
    holdings?: Prisma.HoldingsUncheckedCreateNestedManyWithoutAssetInput;
    priceAlerts?: Prisma.PriceAlertsUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutAssetNestedInput;
    holdings?: Prisma.HoldingsUpdateManyWithoutAssetNestedInput;
    priceAlerts?: Prisma.PriceAlertsUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutAssetNestedInput;
    holdings?: Prisma.HoldingsUncheckedUpdateManyWithoutAssetNestedInput;
    priceAlerts?: Prisma.PriceAlertsUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateManyInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    priceUpdatedAt?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetAvgOrderByAggregateInput = {
    currentPrice?: Prisma.SortOrder;
};
export type AssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    priceUpdatedAt?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    priceUpdatedAt?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetSumOrderByAggregateInput = {
    currentPrice?: Prisma.SortOrder;
};
export type AssetScalarRelationFilter = {
    is?: Prisma.AssetWhereInput;
    isNot?: Prisma.AssetWhereInput;
};
export type AssetCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutOrdersInput, Prisma.AssetUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutOrdersInput, Prisma.AssetUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.AssetUpsertWithoutOrdersInput;
    connect?: Prisma.AssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutOrdersInput, Prisma.AssetUpdateWithoutOrdersInput>, Prisma.AssetUncheckedUpdateWithoutOrdersInput>;
};
export type AssetCreateNestedOneWithoutHoldingsInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutHoldingsInput, Prisma.AssetUncheckedCreateWithoutHoldingsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutHoldingsInput;
    connect?: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutHoldingsInput, Prisma.AssetUncheckedCreateWithoutHoldingsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutHoldingsInput;
    upsert?: Prisma.AssetUpsertWithoutHoldingsInput;
    connect?: Prisma.AssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutHoldingsInput, Prisma.AssetUpdateWithoutHoldingsInput>, Prisma.AssetUncheckedUpdateWithoutHoldingsInput>;
};
export type AssetCreateNestedOneWithoutPriceAlertsInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutPriceAlertsInput, Prisma.AssetUncheckedCreateWithoutPriceAlertsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutPriceAlertsInput;
    connect?: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateOneRequiredWithoutPriceAlertsNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutPriceAlertsInput, Prisma.AssetUncheckedCreateWithoutPriceAlertsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutPriceAlertsInput;
    upsert?: Prisma.AssetUpsertWithoutPriceAlertsInput;
    connect?: Prisma.AssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutPriceAlertsInput, Prisma.AssetUpdateWithoutPriceAlertsInput>, Prisma.AssetUncheckedUpdateWithoutPriceAlertsInput>;
};
export type AssetCreateWithoutOrdersInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    holdings?: Prisma.HoldingsCreateNestedManyWithoutAssetInput;
    priceAlerts?: Prisma.PriceAlertsCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutOrdersInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    holdings?: Prisma.HoldingsUncheckedCreateNestedManyWithoutAssetInput;
    priceAlerts?: Prisma.PriceAlertsUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutOrdersInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutOrdersInput, Prisma.AssetUncheckedCreateWithoutOrdersInput>;
};
export type AssetUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.AssetUpdateWithoutOrdersInput, Prisma.AssetUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutOrdersInput, Prisma.AssetUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.AssetWhereInput;
};
export type AssetUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.AssetWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutOrdersInput, Prisma.AssetUncheckedUpdateWithoutOrdersInput>;
};
export type AssetUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    holdings?: Prisma.HoldingsUpdateManyWithoutAssetNestedInput;
    priceAlerts?: Prisma.PriceAlertsUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    holdings?: Prisma.HoldingsUncheckedUpdateManyWithoutAssetNestedInput;
    priceAlerts?: Prisma.PriceAlertsUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateWithoutHoldingsInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutAssetInput;
    priceAlerts?: Prisma.PriceAlertsCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutHoldingsInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutAssetInput;
    priceAlerts?: Prisma.PriceAlertsUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutHoldingsInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutHoldingsInput, Prisma.AssetUncheckedCreateWithoutHoldingsInput>;
};
export type AssetUpsertWithoutHoldingsInput = {
    update: Prisma.XOR<Prisma.AssetUpdateWithoutHoldingsInput, Prisma.AssetUncheckedUpdateWithoutHoldingsInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutHoldingsInput, Prisma.AssetUncheckedCreateWithoutHoldingsInput>;
    where?: Prisma.AssetWhereInput;
};
export type AssetUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: Prisma.AssetWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutHoldingsInput, Prisma.AssetUncheckedUpdateWithoutHoldingsInput>;
};
export type AssetUpdateWithoutHoldingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutAssetNestedInput;
    priceAlerts?: Prisma.PriceAlertsUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutHoldingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutAssetNestedInput;
    priceAlerts?: Prisma.PriceAlertsUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateWithoutPriceAlertsInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutAssetInput;
    holdings?: Prisma.HoldingsCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutPriceAlertsInput = {
    id?: string;
    symbol: string;
    name: string;
    type: string;
    currentPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt: Date | string;
    logoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutAssetInput;
    holdings?: Prisma.HoldingsUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutPriceAlertsInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutPriceAlertsInput, Prisma.AssetUncheckedCreateWithoutPriceAlertsInput>;
};
export type AssetUpsertWithoutPriceAlertsInput = {
    update: Prisma.XOR<Prisma.AssetUpdateWithoutPriceAlertsInput, Prisma.AssetUncheckedUpdateWithoutPriceAlertsInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutPriceAlertsInput, Prisma.AssetUncheckedCreateWithoutPriceAlertsInput>;
    where?: Prisma.AssetWhereInput;
};
export type AssetUpdateToOneWithWhereWithoutPriceAlertsInput = {
    where?: Prisma.AssetWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutPriceAlertsInput, Prisma.AssetUncheckedUpdateWithoutPriceAlertsInput>;
};
export type AssetUpdateWithoutPriceAlertsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutAssetNestedInput;
    holdings?: Prisma.HoldingsUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutPriceAlertsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    currentPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceUpdatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutAssetNestedInput;
    holdings?: Prisma.HoldingsUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCountOutputType = {
    orders: number;
    holdings: number;
    priceAlerts: number;
};
export type AssetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | AssetCountOutputTypeCountOrdersArgs;
    holdings?: boolean | AssetCountOutputTypeCountHoldingsArgs;
    priceAlerts?: boolean | AssetCountOutputTypeCountPriceAlertsArgs;
};
export type AssetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCountOutputTypeSelect<ExtArgs> | null;
};
export type AssetCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type AssetCountOutputTypeCountHoldingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HoldingsWhereInput;
};
export type AssetCountOutputTypeCountPriceAlertsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceAlertsWhereInput;
};
export type AssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    symbol?: boolean;
    name?: boolean;
    type?: boolean;
    currentPrice?: boolean;
    priceUpdatedAt?: boolean;
    logoUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    orders?: boolean | Prisma.Asset$ordersArgs<ExtArgs>;
    holdings?: boolean | Prisma.Asset$holdingsArgs<ExtArgs>;
    priceAlerts?: boolean | Prisma.Asset$priceAlertsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    symbol?: boolean;
    name?: boolean;
    type?: boolean;
    currentPrice?: boolean;
    priceUpdatedAt?: boolean;
    logoUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    symbol?: boolean;
    name?: boolean;
    type?: boolean;
    currentPrice?: boolean;
    priceUpdatedAt?: boolean;
    logoUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectScalar = {
    id?: boolean;
    symbol?: boolean;
    name?: boolean;
    type?: boolean;
    currentPrice?: boolean;
    priceUpdatedAt?: boolean;
    logoUrl?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "symbol" | "name" | "type" | "currentPrice" | "priceUpdatedAt" | "logoUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>;
export type AssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.Asset$ordersArgs<ExtArgs>;
    holdings?: boolean | Prisma.Asset$holdingsArgs<ExtArgs>;
    priceAlerts?: boolean | Prisma.Asset$priceAlertsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Asset";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
        holdings: Prisma.$HoldingsPayload<ExtArgs>[];
        priceAlerts: Prisma.$PriceAlertsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        symbol: string;
        name: string;
        type: string;
        currentPrice: runtime.Decimal;
        priceUpdatedAt: Date;
        logoUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["asset"]>;
    composites: {};
};
export type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetPayload, S>;
export type AssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetCountAggregateInputType | true;
};
export interface AssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Asset'];
        meta: {
            name: 'Asset';
        };
    };
    findUnique<T extends AssetFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetFindManyArgs>(args?: Prisma.SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetCreateArgs>(args: Prisma.SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetDeleteArgs>(args: Prisma.SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetUpdateArgs>(args: Prisma.SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetUpsertArgs>(args: Prisma.SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetCountArgs>(args?: Prisma.Subset<T, AssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetCountAggregateOutputType> : number>;
    aggregate<T extends AssetAggregateArgs>(args: Prisma.Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>;
    groupBy<T extends AssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetFieldRefs;
}
export interface Prisma__AssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.Asset$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    holdings<T extends Prisma.Asset$holdingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HoldingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    priceAlerts<T extends Prisma.Asset$priceAlertsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$priceAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceAlertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetFieldRefs {
    readonly id: Prisma.FieldRef<"Asset", 'String'>;
    readonly symbol: Prisma.FieldRef<"Asset", 'String'>;
    readonly name: Prisma.FieldRef<"Asset", 'String'>;
    readonly type: Prisma.FieldRef<"Asset", 'String'>;
    readonly currentPrice: Prisma.FieldRef<"Asset", 'Decimal'>;
    readonly priceUpdatedAt: Prisma.FieldRef<"Asset", 'DateTime'>;
    readonly logoUrl: Prisma.FieldRef<"Asset", 'String'>;
    readonly isActive: Prisma.FieldRef<"Asset", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Asset", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Asset", 'DateTime'>;
}
export type AssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
};
export type AssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type AssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type AssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
};
export type AssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type Asset$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type Asset$holdingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Asset$priceAlertsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
};
