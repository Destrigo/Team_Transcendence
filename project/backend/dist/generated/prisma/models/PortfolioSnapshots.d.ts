import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortfolioSnapshotsModel = runtime.Types.Result.DefaultSelection<Prisma.$PortfolioSnapshotsPayload>;
export type AggregatePortfolioSnapshots = {
    _count: PortfolioSnapshotsCountAggregateOutputType | null;
    _avg: PortfolioSnapshotsAvgAggregateOutputType | null;
    _sum: PortfolioSnapshotsSumAggregateOutputType | null;
    _min: PortfolioSnapshotsMinAggregateOutputType | null;
    _max: PortfolioSnapshotsMaxAggregateOutputType | null;
};
export type PortfolioSnapshotsAvgAggregateOutputType = {
    totalValue: runtime.Decimal | null;
    balance: runtime.Decimal | null;
    holdingsValue: runtime.Decimal | null;
};
export type PortfolioSnapshotsSumAggregateOutputType = {
    totalValue: runtime.Decimal | null;
    balance: runtime.Decimal | null;
    holdingsValue: runtime.Decimal | null;
};
export type PortfolioSnapshotsMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    totalValue: runtime.Decimal | null;
    balance: runtime.Decimal | null;
    holdingsValue: runtime.Decimal | null;
    snapshotDate: Date | null;
};
export type PortfolioSnapshotsMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    totalValue: runtime.Decimal | null;
    balance: runtime.Decimal | null;
    holdingsValue: runtime.Decimal | null;
    snapshotDate: Date | null;
};
export type PortfolioSnapshotsCountAggregateOutputType = {
    id: number;
    userId: number;
    totalValue: number;
    balance: number;
    holdingsValue: number;
    snapshotDate: number;
    _all: number;
};
export type PortfolioSnapshotsAvgAggregateInputType = {
    totalValue?: true;
    balance?: true;
    holdingsValue?: true;
};
export type PortfolioSnapshotsSumAggregateInputType = {
    totalValue?: true;
    balance?: true;
    holdingsValue?: true;
};
export type PortfolioSnapshotsMinAggregateInputType = {
    id?: true;
    userId?: true;
    totalValue?: true;
    balance?: true;
    holdingsValue?: true;
    snapshotDate?: true;
};
export type PortfolioSnapshotsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    totalValue?: true;
    balance?: true;
    holdingsValue?: true;
    snapshotDate?: true;
};
export type PortfolioSnapshotsCountAggregateInputType = {
    id?: true;
    userId?: true;
    totalValue?: true;
    balance?: true;
    holdingsValue?: true;
    snapshotDate?: true;
    _all?: true;
};
export type PortfolioSnapshotsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioSnapshotsWhereInput;
    orderBy?: Prisma.PortfolioSnapshotsOrderByWithRelationInput | Prisma.PortfolioSnapshotsOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioSnapshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortfolioSnapshotsCountAggregateInputType;
    _avg?: PortfolioSnapshotsAvgAggregateInputType;
    _sum?: PortfolioSnapshotsSumAggregateInputType;
    _min?: PortfolioSnapshotsMinAggregateInputType;
    _max?: PortfolioSnapshotsMaxAggregateInputType;
};
export type GetPortfolioSnapshotsAggregateType<T extends PortfolioSnapshotsAggregateArgs> = {
    [P in keyof T & keyof AggregatePortfolioSnapshots]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortfolioSnapshots[P]> : Prisma.GetScalarType<T[P], AggregatePortfolioSnapshots[P]>;
};
export type PortfolioSnapshotsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioSnapshotsWhereInput;
    orderBy?: Prisma.PortfolioSnapshotsOrderByWithAggregationInput | Prisma.PortfolioSnapshotsOrderByWithAggregationInput[];
    by: Prisma.PortfolioSnapshotsScalarFieldEnum[] | Prisma.PortfolioSnapshotsScalarFieldEnum;
    having?: Prisma.PortfolioSnapshotsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortfolioSnapshotsCountAggregateInputType | true;
    _avg?: PortfolioSnapshotsAvgAggregateInputType;
    _sum?: PortfolioSnapshotsSumAggregateInputType;
    _min?: PortfolioSnapshotsMinAggregateInputType;
    _max?: PortfolioSnapshotsMaxAggregateInputType;
};
export type PortfolioSnapshotsGroupByOutputType = {
    id: string;
    userId: string;
    totalValue: runtime.Decimal;
    balance: runtime.Decimal;
    holdingsValue: runtime.Decimal;
    snapshotDate: Date;
    _count: PortfolioSnapshotsCountAggregateOutputType | null;
    _avg: PortfolioSnapshotsAvgAggregateOutputType | null;
    _sum: PortfolioSnapshotsSumAggregateOutputType | null;
    _min: PortfolioSnapshotsMinAggregateOutputType | null;
    _max: PortfolioSnapshotsMaxAggregateOutputType | null;
};
export type GetPortfolioSnapshotsGroupByPayload<T extends PortfolioSnapshotsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortfolioSnapshotsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortfolioSnapshotsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortfolioSnapshotsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortfolioSnapshotsGroupByOutputType[P]>;
}>>;
export type PortfolioSnapshotsWhereInput = {
    AND?: Prisma.PortfolioSnapshotsWhereInput | Prisma.PortfolioSnapshotsWhereInput[];
    OR?: Prisma.PortfolioSnapshotsWhereInput[];
    NOT?: Prisma.PortfolioSnapshotsWhereInput | Prisma.PortfolioSnapshotsWhereInput[];
    id?: Prisma.StringFilter<"PortfolioSnapshots"> | string;
    userId?: Prisma.StringFilter<"PortfolioSnapshots"> | string;
    totalValue?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFilter<"PortfolioSnapshots"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PortfolioSnapshotsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    holdingsValue?: Prisma.SortOrder;
    snapshotDate?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type PortfolioSnapshotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PortfolioSnapshotsWhereInput | Prisma.PortfolioSnapshotsWhereInput[];
    OR?: Prisma.PortfolioSnapshotsWhereInput[];
    NOT?: Prisma.PortfolioSnapshotsWhereInput | Prisma.PortfolioSnapshotsWhereInput[];
    userId?: Prisma.StringFilter<"PortfolioSnapshots"> | string;
    totalValue?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFilter<"PortfolioSnapshots"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PortfolioSnapshotsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    holdingsValue?: Prisma.SortOrder;
    snapshotDate?: Prisma.SortOrder;
    _count?: Prisma.PortfolioSnapshotsCountOrderByAggregateInput;
    _avg?: Prisma.PortfolioSnapshotsAvgOrderByAggregateInput;
    _max?: Prisma.PortfolioSnapshotsMaxOrderByAggregateInput;
    _min?: Prisma.PortfolioSnapshotsMinOrderByAggregateInput;
    _sum?: Prisma.PortfolioSnapshotsSumOrderByAggregateInput;
};
export type PortfolioSnapshotsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortfolioSnapshotsScalarWhereWithAggregatesInput | Prisma.PortfolioSnapshotsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortfolioSnapshotsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortfolioSnapshotsScalarWhereWithAggregatesInput | Prisma.PortfolioSnapshotsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PortfolioSnapshots"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"PortfolioSnapshots"> | string;
    totalValue?: Prisma.DecimalWithAggregatesFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalWithAggregatesFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalWithAggregatesFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeWithAggregatesFilter<"PortfolioSnapshots"> | Date | string;
};
export type PortfolioSnapshotsCreateInput = {
    id?: string;
    totalValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPortfolioSnapshotsInput;
};
export type PortfolioSnapshotsUncheckedCreateInput = {
    id?: string;
    userId: string;
    totalValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate: Date | string;
};
export type PortfolioSnapshotsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPortfolioSnapshotsNestedInput;
};
export type PortfolioSnapshotsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioSnapshotsCreateManyInput = {
    id?: string;
    userId: string;
    totalValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate: Date | string;
};
export type PortfolioSnapshotsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioSnapshotsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioSnapshotsListRelationFilter = {
    every?: Prisma.PortfolioSnapshotsWhereInput;
    some?: Prisma.PortfolioSnapshotsWhereInput;
    none?: Prisma.PortfolioSnapshotsWhereInput;
};
export type PortfolioSnapshotsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PortfolioSnapshotsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    holdingsValue?: Prisma.SortOrder;
    snapshotDate?: Prisma.SortOrder;
};
export type PortfolioSnapshotsAvgOrderByAggregateInput = {
    totalValue?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    holdingsValue?: Prisma.SortOrder;
};
export type PortfolioSnapshotsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    holdingsValue?: Prisma.SortOrder;
    snapshotDate?: Prisma.SortOrder;
};
export type PortfolioSnapshotsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalValue?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    holdingsValue?: Prisma.SortOrder;
    snapshotDate?: Prisma.SortOrder;
};
export type PortfolioSnapshotsSumOrderByAggregateInput = {
    totalValue?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    holdingsValue?: Prisma.SortOrder;
};
export type PortfolioSnapshotsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PortfolioSnapshotsCreateWithoutUserInput, Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput> | Prisma.PortfolioSnapshotsCreateWithoutUserInput[] | Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PortfolioSnapshotsCreateOrConnectWithoutUserInput | Prisma.PortfolioSnapshotsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PortfolioSnapshotsCreateManyUserInputEnvelope;
    connect?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
};
export type PortfolioSnapshotsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PortfolioSnapshotsCreateWithoutUserInput, Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput> | Prisma.PortfolioSnapshotsCreateWithoutUserInput[] | Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PortfolioSnapshotsCreateOrConnectWithoutUserInput | Prisma.PortfolioSnapshotsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PortfolioSnapshotsCreateManyUserInputEnvelope;
    connect?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
};
export type PortfolioSnapshotsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioSnapshotsCreateWithoutUserInput, Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput> | Prisma.PortfolioSnapshotsCreateWithoutUserInput[] | Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PortfolioSnapshotsCreateOrConnectWithoutUserInput | Prisma.PortfolioSnapshotsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput | Prisma.PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PortfolioSnapshotsCreateManyUserInputEnvelope;
    set?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
    disconnect?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
    delete?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
    connect?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
    update?: Prisma.PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput | Prisma.PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput | Prisma.PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PortfolioSnapshotsScalarWhereInput | Prisma.PortfolioSnapshotsScalarWhereInput[];
};
export type PortfolioSnapshotsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioSnapshotsCreateWithoutUserInput, Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput> | Prisma.PortfolioSnapshotsCreateWithoutUserInput[] | Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PortfolioSnapshotsCreateOrConnectWithoutUserInput | Prisma.PortfolioSnapshotsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput | Prisma.PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PortfolioSnapshotsCreateManyUserInputEnvelope;
    set?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
    disconnect?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
    delete?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
    connect?: Prisma.PortfolioSnapshotsWhereUniqueInput | Prisma.PortfolioSnapshotsWhereUniqueInput[];
    update?: Prisma.PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput | Prisma.PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput | Prisma.PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PortfolioSnapshotsScalarWhereInput | Prisma.PortfolioSnapshotsScalarWhereInput[];
};
export type PortfolioSnapshotsCreateWithoutUserInput = {
    id?: string;
    totalValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate: Date | string;
};
export type PortfolioSnapshotsUncheckedCreateWithoutUserInput = {
    id?: string;
    totalValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate: Date | string;
};
export type PortfolioSnapshotsCreateOrConnectWithoutUserInput = {
    where: Prisma.PortfolioSnapshotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioSnapshotsCreateWithoutUserInput, Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput>;
};
export type PortfolioSnapshotsCreateManyUserInputEnvelope = {
    data: Prisma.PortfolioSnapshotsCreateManyUserInput | Prisma.PortfolioSnapshotsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PortfolioSnapshotsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PortfolioSnapshotsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortfolioSnapshotsUpdateWithoutUserInput, Prisma.PortfolioSnapshotsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PortfolioSnapshotsCreateWithoutUserInput, Prisma.PortfolioSnapshotsUncheckedCreateWithoutUserInput>;
};
export type PortfolioSnapshotsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PortfolioSnapshotsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortfolioSnapshotsUpdateWithoutUserInput, Prisma.PortfolioSnapshotsUncheckedUpdateWithoutUserInput>;
};
export type PortfolioSnapshotsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PortfolioSnapshotsScalarWhereInput;
    data: Prisma.XOR<Prisma.PortfolioSnapshotsUpdateManyMutationInput, Prisma.PortfolioSnapshotsUncheckedUpdateManyWithoutUserInput>;
};
export type PortfolioSnapshotsScalarWhereInput = {
    AND?: Prisma.PortfolioSnapshotsScalarWhereInput | Prisma.PortfolioSnapshotsScalarWhereInput[];
    OR?: Prisma.PortfolioSnapshotsScalarWhereInput[];
    NOT?: Prisma.PortfolioSnapshotsScalarWhereInput | Prisma.PortfolioSnapshotsScalarWhereInput[];
    id?: Prisma.StringFilter<"PortfolioSnapshots"> | string;
    userId?: Prisma.StringFilter<"PortfolioSnapshots"> | string;
    totalValue?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFilter<"PortfolioSnapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFilter<"PortfolioSnapshots"> | Date | string;
};
export type PortfolioSnapshotsCreateManyUserInput = {
    id?: string;
    totalValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate: Date | string;
};
export type PortfolioSnapshotsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioSnapshotsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioSnapshotsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    holdingsValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshotDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioSnapshotsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    totalValue?: boolean;
    balance?: boolean;
    holdingsValue?: boolean;
    snapshotDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioSnapshots"]>;
export type PortfolioSnapshotsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    totalValue?: boolean;
    balance?: boolean;
    holdingsValue?: boolean;
    snapshotDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioSnapshots"]>;
export type PortfolioSnapshotsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    totalValue?: boolean;
    balance?: boolean;
    holdingsValue?: boolean;
    snapshotDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioSnapshots"]>;
export type PortfolioSnapshotsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    totalValue?: boolean;
    balance?: boolean;
    holdingsValue?: boolean;
    snapshotDate?: boolean;
};
export type PortfolioSnapshotsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "totalValue" | "balance" | "holdingsValue" | "snapshotDate", ExtArgs["result"]["portfolioSnapshots"]>;
export type PortfolioSnapshotsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PortfolioSnapshotsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PortfolioSnapshotsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PortfolioSnapshotsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortfolioSnapshots";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        totalValue: runtime.Decimal;
        balance: runtime.Decimal;
        holdingsValue: runtime.Decimal;
        snapshotDate: Date;
    }, ExtArgs["result"]["portfolioSnapshots"]>;
    composites: {};
};
export type PortfolioSnapshotsGetPayload<S extends boolean | null | undefined | PortfolioSnapshotsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload, S>;
export type PortfolioSnapshotsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortfolioSnapshotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortfolioSnapshotsCountAggregateInputType | true;
};
export interface PortfolioSnapshotsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortfolioSnapshots'];
        meta: {
            name: 'PortfolioSnapshots';
        };
    };
    findUnique<T extends PortfolioSnapshotsFindUniqueArgs>(args: Prisma.SelectSubset<T, PortfolioSnapshotsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortfolioSnapshotsClient<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortfolioSnapshotsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortfolioSnapshotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioSnapshotsClient<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortfolioSnapshotsFindFirstArgs>(args?: Prisma.SelectSubset<T, PortfolioSnapshotsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortfolioSnapshotsClient<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortfolioSnapshotsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortfolioSnapshotsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioSnapshotsClient<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortfolioSnapshotsFindManyArgs>(args?: Prisma.SelectSubset<T, PortfolioSnapshotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortfolioSnapshotsCreateArgs>(args: Prisma.SelectSubset<T, PortfolioSnapshotsCreateArgs<ExtArgs>>): Prisma.Prisma__PortfolioSnapshotsClient<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortfolioSnapshotsCreateManyArgs>(args?: Prisma.SelectSubset<T, PortfolioSnapshotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortfolioSnapshotsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortfolioSnapshotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortfolioSnapshotsDeleteArgs>(args: Prisma.SelectSubset<T, PortfolioSnapshotsDeleteArgs<ExtArgs>>): Prisma.Prisma__PortfolioSnapshotsClient<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortfolioSnapshotsUpdateArgs>(args: Prisma.SelectSubset<T, PortfolioSnapshotsUpdateArgs<ExtArgs>>): Prisma.Prisma__PortfolioSnapshotsClient<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortfolioSnapshotsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortfolioSnapshotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortfolioSnapshotsUpdateManyArgs>(args: Prisma.SelectSubset<T, PortfolioSnapshotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortfolioSnapshotsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortfolioSnapshotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortfolioSnapshotsUpsertArgs>(args: Prisma.SelectSubset<T, PortfolioSnapshotsUpsertArgs<ExtArgs>>): Prisma.Prisma__PortfolioSnapshotsClient<runtime.Types.Result.GetResult<Prisma.$PortfolioSnapshotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortfolioSnapshotsCountArgs>(args?: Prisma.Subset<T, PortfolioSnapshotsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortfolioSnapshotsCountAggregateOutputType> : number>;
    aggregate<T extends PortfolioSnapshotsAggregateArgs>(args: Prisma.Subset<T, PortfolioSnapshotsAggregateArgs>): Prisma.PrismaPromise<GetPortfolioSnapshotsAggregateType<T>>;
    groupBy<T extends PortfolioSnapshotsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortfolioSnapshotsGroupByArgs['orderBy'];
    } : {
        orderBy?: PortfolioSnapshotsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortfolioSnapshotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioSnapshotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortfolioSnapshotsFieldRefs;
}
export interface Prisma__PortfolioSnapshotsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortfolioSnapshotsFieldRefs {
    readonly id: Prisma.FieldRef<"PortfolioSnapshots", 'String'>;
    readonly userId: Prisma.FieldRef<"PortfolioSnapshots", 'String'>;
    readonly totalValue: Prisma.FieldRef<"PortfolioSnapshots", 'Decimal'>;
    readonly balance: Prisma.FieldRef<"PortfolioSnapshots", 'Decimal'>;
    readonly holdingsValue: Prisma.FieldRef<"PortfolioSnapshots", 'Decimal'>;
    readonly snapshotDate: Prisma.FieldRef<"PortfolioSnapshots", 'DateTime'>;
}
export type PortfolioSnapshotsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    where: Prisma.PortfolioSnapshotsWhereUniqueInput;
};
export type PortfolioSnapshotsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    where: Prisma.PortfolioSnapshotsWhereUniqueInput;
};
export type PortfolioSnapshotsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    where?: Prisma.PortfolioSnapshotsWhereInput;
    orderBy?: Prisma.PortfolioSnapshotsOrderByWithRelationInput | Prisma.PortfolioSnapshotsOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioSnapshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioSnapshotsScalarFieldEnum | Prisma.PortfolioSnapshotsScalarFieldEnum[];
};
export type PortfolioSnapshotsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    where?: Prisma.PortfolioSnapshotsWhereInput;
    orderBy?: Prisma.PortfolioSnapshotsOrderByWithRelationInput | Prisma.PortfolioSnapshotsOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioSnapshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioSnapshotsScalarFieldEnum | Prisma.PortfolioSnapshotsScalarFieldEnum[];
};
export type PortfolioSnapshotsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    where?: Prisma.PortfolioSnapshotsWhereInput;
    orderBy?: Prisma.PortfolioSnapshotsOrderByWithRelationInput | Prisma.PortfolioSnapshotsOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioSnapshotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioSnapshotsScalarFieldEnum | Prisma.PortfolioSnapshotsScalarFieldEnum[];
};
export type PortfolioSnapshotsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioSnapshotsCreateInput, Prisma.PortfolioSnapshotsUncheckedCreateInput>;
};
export type PortfolioSnapshotsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortfolioSnapshotsCreateManyInput | Prisma.PortfolioSnapshotsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortfolioSnapshotsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    data: Prisma.PortfolioSnapshotsCreateManyInput | Prisma.PortfolioSnapshotsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PortfolioSnapshotsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PortfolioSnapshotsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioSnapshotsUpdateInput, Prisma.PortfolioSnapshotsUncheckedUpdateInput>;
    where: Prisma.PortfolioSnapshotsWhereUniqueInput;
};
export type PortfolioSnapshotsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortfolioSnapshotsUpdateManyMutationInput, Prisma.PortfolioSnapshotsUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioSnapshotsWhereInput;
    limit?: number;
};
export type PortfolioSnapshotsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioSnapshotsUpdateManyMutationInput, Prisma.PortfolioSnapshotsUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioSnapshotsWhereInput;
    limit?: number;
    include?: Prisma.PortfolioSnapshotsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PortfolioSnapshotsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    where: Prisma.PortfolioSnapshotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioSnapshotsCreateInput, Prisma.PortfolioSnapshotsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortfolioSnapshotsUpdateInput, Prisma.PortfolioSnapshotsUncheckedUpdateInput>;
};
export type PortfolioSnapshotsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
    where: Prisma.PortfolioSnapshotsWhereUniqueInput;
};
export type PortfolioSnapshotsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioSnapshotsWhereInput;
    limit?: number;
};
export type PortfolioSnapshotsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioSnapshotsSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioSnapshotsOmit<ExtArgs> | null;
    include?: Prisma.PortfolioSnapshotsInclude<ExtArgs> | null;
};
