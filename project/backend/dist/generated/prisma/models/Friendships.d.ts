import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FriendshipsModel = runtime.Types.Result.DefaultSelection<Prisma.$FriendshipsPayload>;
export type AggregateFriendships = {
    _count: FriendshipsCountAggregateOutputType | null;
    _min: FriendshipsMinAggregateOutputType | null;
    _max: FriendshipsMaxAggregateOutputType | null;
};
export type FriendshipsMinAggregateOutputType = {
    id: string | null;
    requesterId: string | null;
    addresseeId: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type FriendshipsMaxAggregateOutputType = {
    id: string | null;
    requesterId: string | null;
    addresseeId: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type FriendshipsCountAggregateOutputType = {
    id: number;
    requesterId: number;
    addresseeId: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type FriendshipsMinAggregateInputType = {
    id?: true;
    requesterId?: true;
    addresseeId?: true;
    status?: true;
    createdAt?: true;
};
export type FriendshipsMaxAggregateInputType = {
    id?: true;
    requesterId?: true;
    addresseeId?: true;
    status?: true;
    createdAt?: true;
};
export type FriendshipsCountAggregateInputType = {
    id?: true;
    requesterId?: true;
    addresseeId?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type FriendshipsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FriendshipsWhereInput;
    orderBy?: Prisma.FriendshipsOrderByWithRelationInput | Prisma.FriendshipsOrderByWithRelationInput[];
    cursor?: Prisma.FriendshipsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FriendshipsCountAggregateInputType;
    _min?: FriendshipsMinAggregateInputType;
    _max?: FriendshipsMaxAggregateInputType;
};
export type GetFriendshipsAggregateType<T extends FriendshipsAggregateArgs> = {
    [P in keyof T & keyof AggregateFriendships]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFriendships[P]> : Prisma.GetScalarType<T[P], AggregateFriendships[P]>;
};
export type FriendshipsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FriendshipsWhereInput;
    orderBy?: Prisma.FriendshipsOrderByWithAggregationInput | Prisma.FriendshipsOrderByWithAggregationInput[];
    by: Prisma.FriendshipsScalarFieldEnum[] | Prisma.FriendshipsScalarFieldEnum;
    having?: Prisma.FriendshipsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FriendshipsCountAggregateInputType | true;
    _min?: FriendshipsMinAggregateInputType;
    _max?: FriendshipsMaxAggregateInputType;
};
export type FriendshipsGroupByOutputType = {
    id: string;
    requesterId: string;
    addresseeId: string;
    status: string;
    createdAt: Date;
    _count: FriendshipsCountAggregateOutputType | null;
    _min: FriendshipsMinAggregateOutputType | null;
    _max: FriendshipsMaxAggregateOutputType | null;
};
export type GetFriendshipsGroupByPayload<T extends FriendshipsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FriendshipsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FriendshipsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FriendshipsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FriendshipsGroupByOutputType[P]>;
}>>;
export type FriendshipsWhereInput = {
    AND?: Prisma.FriendshipsWhereInput | Prisma.FriendshipsWhereInput[];
    OR?: Prisma.FriendshipsWhereInput[];
    NOT?: Prisma.FriendshipsWhereInput | Prisma.FriendshipsWhereInput[];
    id?: Prisma.StringFilter<"Friendships"> | string;
    requesterId?: Prisma.StringFilter<"Friendships"> | string;
    addresseeId?: Prisma.StringFilter<"Friendships"> | string;
    status?: Prisma.StringFilter<"Friendships"> | string;
    createdAt?: Prisma.DateTimeFilter<"Friendships"> | Date | string;
    requester?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    addressee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FriendshipsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    addresseeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    requester?: Prisma.UserOrderByWithRelationInput;
    addressee?: Prisma.UserOrderByWithRelationInput;
};
export type FriendshipsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    requesterId_addresseeId?: Prisma.FriendshipsRequesterIdAddresseeIdCompoundUniqueInput;
    AND?: Prisma.FriendshipsWhereInput | Prisma.FriendshipsWhereInput[];
    OR?: Prisma.FriendshipsWhereInput[];
    NOT?: Prisma.FriendshipsWhereInput | Prisma.FriendshipsWhereInput[];
    requesterId?: Prisma.StringFilter<"Friendships"> | string;
    addresseeId?: Prisma.StringFilter<"Friendships"> | string;
    status?: Prisma.StringFilter<"Friendships"> | string;
    createdAt?: Prisma.DateTimeFilter<"Friendships"> | Date | string;
    requester?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    addressee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "requesterId_addresseeId">;
export type FriendshipsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    addresseeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FriendshipsCountOrderByAggregateInput;
    _max?: Prisma.FriendshipsMaxOrderByAggregateInput;
    _min?: Prisma.FriendshipsMinOrderByAggregateInput;
};
export type FriendshipsScalarWhereWithAggregatesInput = {
    AND?: Prisma.FriendshipsScalarWhereWithAggregatesInput | Prisma.FriendshipsScalarWhereWithAggregatesInput[];
    OR?: Prisma.FriendshipsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FriendshipsScalarWhereWithAggregatesInput | Prisma.FriendshipsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Friendships"> | string;
    requesterId?: Prisma.StringWithAggregatesFilter<"Friendships"> | string;
    addresseeId?: Prisma.StringWithAggregatesFilter<"Friendships"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Friendships"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Friendships"> | Date | string;
};
export type FriendshipsCreateInput = {
    id?: string;
    status: string;
    createdAt?: Date | string;
    requester: Prisma.UserCreateNestedOneWithoutSentFriendRequestsInput;
    addressee: Prisma.UserCreateNestedOneWithoutReceivedFriendRequestsInput;
};
export type FriendshipsUncheckedCreateInput = {
    id?: string;
    requesterId: string;
    addresseeId: string;
    status: string;
    createdAt?: Date | string;
};
export type FriendshipsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requester?: Prisma.UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput;
    addressee?: Prisma.UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput;
};
export type FriendshipsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    addresseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendshipsCreateManyInput = {
    id?: string;
    requesterId: string;
    addresseeId: string;
    status: string;
    createdAt?: Date | string;
};
export type FriendshipsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendshipsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    addresseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendshipsListRelationFilter = {
    every?: Prisma.FriendshipsWhereInput;
    some?: Prisma.FriendshipsWhereInput;
    none?: Prisma.FriendshipsWhereInput;
};
export type FriendshipsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FriendshipsRequesterIdAddresseeIdCompoundUniqueInput = {
    requesterId: string;
    addresseeId: string;
};
export type FriendshipsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    addresseeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FriendshipsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    addresseeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FriendshipsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    addresseeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FriendshipsCreateNestedManyWithoutRequesterInput = {
    create?: Prisma.XOR<Prisma.FriendshipsCreateWithoutRequesterInput, Prisma.FriendshipsUncheckedCreateWithoutRequesterInput> | Prisma.FriendshipsCreateWithoutRequesterInput[] | Prisma.FriendshipsUncheckedCreateWithoutRequesterInput[];
    connectOrCreate?: Prisma.FriendshipsCreateOrConnectWithoutRequesterInput | Prisma.FriendshipsCreateOrConnectWithoutRequesterInput[];
    createMany?: Prisma.FriendshipsCreateManyRequesterInputEnvelope;
    connect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
};
export type FriendshipsCreateNestedManyWithoutAddresseeInput = {
    create?: Prisma.XOR<Prisma.FriendshipsCreateWithoutAddresseeInput, Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput> | Prisma.FriendshipsCreateWithoutAddresseeInput[] | Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput[];
    connectOrCreate?: Prisma.FriendshipsCreateOrConnectWithoutAddresseeInput | Prisma.FriendshipsCreateOrConnectWithoutAddresseeInput[];
    createMany?: Prisma.FriendshipsCreateManyAddresseeInputEnvelope;
    connect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
};
export type FriendshipsUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: Prisma.XOR<Prisma.FriendshipsCreateWithoutRequesterInput, Prisma.FriendshipsUncheckedCreateWithoutRequesterInput> | Prisma.FriendshipsCreateWithoutRequesterInput[] | Prisma.FriendshipsUncheckedCreateWithoutRequesterInput[];
    connectOrCreate?: Prisma.FriendshipsCreateOrConnectWithoutRequesterInput | Prisma.FriendshipsCreateOrConnectWithoutRequesterInput[];
    createMany?: Prisma.FriendshipsCreateManyRequesterInputEnvelope;
    connect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
};
export type FriendshipsUncheckedCreateNestedManyWithoutAddresseeInput = {
    create?: Prisma.XOR<Prisma.FriendshipsCreateWithoutAddresseeInput, Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput> | Prisma.FriendshipsCreateWithoutAddresseeInput[] | Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput[];
    connectOrCreate?: Prisma.FriendshipsCreateOrConnectWithoutAddresseeInput | Prisma.FriendshipsCreateOrConnectWithoutAddresseeInput[];
    createMany?: Prisma.FriendshipsCreateManyAddresseeInputEnvelope;
    connect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
};
export type FriendshipsUpdateManyWithoutRequesterNestedInput = {
    create?: Prisma.XOR<Prisma.FriendshipsCreateWithoutRequesterInput, Prisma.FriendshipsUncheckedCreateWithoutRequesterInput> | Prisma.FriendshipsCreateWithoutRequesterInput[] | Prisma.FriendshipsUncheckedCreateWithoutRequesterInput[];
    connectOrCreate?: Prisma.FriendshipsCreateOrConnectWithoutRequesterInput | Prisma.FriendshipsCreateOrConnectWithoutRequesterInput[];
    upsert?: Prisma.FriendshipsUpsertWithWhereUniqueWithoutRequesterInput | Prisma.FriendshipsUpsertWithWhereUniqueWithoutRequesterInput[];
    createMany?: Prisma.FriendshipsCreateManyRequesterInputEnvelope;
    set?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    disconnect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    delete?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    connect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    update?: Prisma.FriendshipsUpdateWithWhereUniqueWithoutRequesterInput | Prisma.FriendshipsUpdateWithWhereUniqueWithoutRequesterInput[];
    updateMany?: Prisma.FriendshipsUpdateManyWithWhereWithoutRequesterInput | Prisma.FriendshipsUpdateManyWithWhereWithoutRequesterInput[];
    deleteMany?: Prisma.FriendshipsScalarWhereInput | Prisma.FriendshipsScalarWhereInput[];
};
export type FriendshipsUpdateManyWithoutAddresseeNestedInput = {
    create?: Prisma.XOR<Prisma.FriendshipsCreateWithoutAddresseeInput, Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput> | Prisma.FriendshipsCreateWithoutAddresseeInput[] | Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput[];
    connectOrCreate?: Prisma.FriendshipsCreateOrConnectWithoutAddresseeInput | Prisma.FriendshipsCreateOrConnectWithoutAddresseeInput[];
    upsert?: Prisma.FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput | Prisma.FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput[];
    createMany?: Prisma.FriendshipsCreateManyAddresseeInputEnvelope;
    set?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    disconnect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    delete?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    connect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    update?: Prisma.FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput | Prisma.FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput[];
    updateMany?: Prisma.FriendshipsUpdateManyWithWhereWithoutAddresseeInput | Prisma.FriendshipsUpdateManyWithWhereWithoutAddresseeInput[];
    deleteMany?: Prisma.FriendshipsScalarWhereInput | Prisma.FriendshipsScalarWhereInput[];
};
export type FriendshipsUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: Prisma.XOR<Prisma.FriendshipsCreateWithoutRequesterInput, Prisma.FriendshipsUncheckedCreateWithoutRequesterInput> | Prisma.FriendshipsCreateWithoutRequesterInput[] | Prisma.FriendshipsUncheckedCreateWithoutRequesterInput[];
    connectOrCreate?: Prisma.FriendshipsCreateOrConnectWithoutRequesterInput | Prisma.FriendshipsCreateOrConnectWithoutRequesterInput[];
    upsert?: Prisma.FriendshipsUpsertWithWhereUniqueWithoutRequesterInput | Prisma.FriendshipsUpsertWithWhereUniqueWithoutRequesterInput[];
    createMany?: Prisma.FriendshipsCreateManyRequesterInputEnvelope;
    set?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    disconnect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    delete?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    connect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    update?: Prisma.FriendshipsUpdateWithWhereUniqueWithoutRequesterInput | Prisma.FriendshipsUpdateWithWhereUniqueWithoutRequesterInput[];
    updateMany?: Prisma.FriendshipsUpdateManyWithWhereWithoutRequesterInput | Prisma.FriendshipsUpdateManyWithWhereWithoutRequesterInput[];
    deleteMany?: Prisma.FriendshipsScalarWhereInput | Prisma.FriendshipsScalarWhereInput[];
};
export type FriendshipsUncheckedUpdateManyWithoutAddresseeNestedInput = {
    create?: Prisma.XOR<Prisma.FriendshipsCreateWithoutAddresseeInput, Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput> | Prisma.FriendshipsCreateWithoutAddresseeInput[] | Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput[];
    connectOrCreate?: Prisma.FriendshipsCreateOrConnectWithoutAddresseeInput | Prisma.FriendshipsCreateOrConnectWithoutAddresseeInput[];
    upsert?: Prisma.FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput | Prisma.FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput[];
    createMany?: Prisma.FriendshipsCreateManyAddresseeInputEnvelope;
    set?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    disconnect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    delete?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    connect?: Prisma.FriendshipsWhereUniqueInput | Prisma.FriendshipsWhereUniqueInput[];
    update?: Prisma.FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput | Prisma.FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput[];
    updateMany?: Prisma.FriendshipsUpdateManyWithWhereWithoutAddresseeInput | Prisma.FriendshipsUpdateManyWithWhereWithoutAddresseeInput[];
    deleteMany?: Prisma.FriendshipsScalarWhereInput | Prisma.FriendshipsScalarWhereInput[];
};
export type FriendshipsCreateWithoutRequesterInput = {
    id?: string;
    status: string;
    createdAt?: Date | string;
    addressee: Prisma.UserCreateNestedOneWithoutReceivedFriendRequestsInput;
};
export type FriendshipsUncheckedCreateWithoutRequesterInput = {
    id?: string;
    addresseeId: string;
    status: string;
    createdAt?: Date | string;
};
export type FriendshipsCreateOrConnectWithoutRequesterInput = {
    where: Prisma.FriendshipsWhereUniqueInput;
    create: Prisma.XOR<Prisma.FriendshipsCreateWithoutRequesterInput, Prisma.FriendshipsUncheckedCreateWithoutRequesterInput>;
};
export type FriendshipsCreateManyRequesterInputEnvelope = {
    data: Prisma.FriendshipsCreateManyRequesterInput | Prisma.FriendshipsCreateManyRequesterInput[];
    skipDuplicates?: boolean;
};
export type FriendshipsCreateWithoutAddresseeInput = {
    id?: string;
    status: string;
    createdAt?: Date | string;
    requester: Prisma.UserCreateNestedOneWithoutSentFriendRequestsInput;
};
export type FriendshipsUncheckedCreateWithoutAddresseeInput = {
    id?: string;
    requesterId: string;
    status: string;
    createdAt?: Date | string;
};
export type FriendshipsCreateOrConnectWithoutAddresseeInput = {
    where: Prisma.FriendshipsWhereUniqueInput;
    create: Prisma.XOR<Prisma.FriendshipsCreateWithoutAddresseeInput, Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput>;
};
export type FriendshipsCreateManyAddresseeInputEnvelope = {
    data: Prisma.FriendshipsCreateManyAddresseeInput | Prisma.FriendshipsCreateManyAddresseeInput[];
    skipDuplicates?: boolean;
};
export type FriendshipsUpsertWithWhereUniqueWithoutRequesterInput = {
    where: Prisma.FriendshipsWhereUniqueInput;
    update: Prisma.XOR<Prisma.FriendshipsUpdateWithoutRequesterInput, Prisma.FriendshipsUncheckedUpdateWithoutRequesterInput>;
    create: Prisma.XOR<Prisma.FriendshipsCreateWithoutRequesterInput, Prisma.FriendshipsUncheckedCreateWithoutRequesterInput>;
};
export type FriendshipsUpdateWithWhereUniqueWithoutRequesterInput = {
    where: Prisma.FriendshipsWhereUniqueInput;
    data: Prisma.XOR<Prisma.FriendshipsUpdateWithoutRequesterInput, Prisma.FriendshipsUncheckedUpdateWithoutRequesterInput>;
};
export type FriendshipsUpdateManyWithWhereWithoutRequesterInput = {
    where: Prisma.FriendshipsScalarWhereInput;
    data: Prisma.XOR<Prisma.FriendshipsUpdateManyMutationInput, Prisma.FriendshipsUncheckedUpdateManyWithoutRequesterInput>;
};
export type FriendshipsScalarWhereInput = {
    AND?: Prisma.FriendshipsScalarWhereInput | Prisma.FriendshipsScalarWhereInput[];
    OR?: Prisma.FriendshipsScalarWhereInput[];
    NOT?: Prisma.FriendshipsScalarWhereInput | Prisma.FriendshipsScalarWhereInput[];
    id?: Prisma.StringFilter<"Friendships"> | string;
    requesterId?: Prisma.StringFilter<"Friendships"> | string;
    addresseeId?: Prisma.StringFilter<"Friendships"> | string;
    status?: Prisma.StringFilter<"Friendships"> | string;
    createdAt?: Prisma.DateTimeFilter<"Friendships"> | Date | string;
};
export type FriendshipsUpsertWithWhereUniqueWithoutAddresseeInput = {
    where: Prisma.FriendshipsWhereUniqueInput;
    update: Prisma.XOR<Prisma.FriendshipsUpdateWithoutAddresseeInput, Prisma.FriendshipsUncheckedUpdateWithoutAddresseeInput>;
    create: Prisma.XOR<Prisma.FriendshipsCreateWithoutAddresseeInput, Prisma.FriendshipsUncheckedCreateWithoutAddresseeInput>;
};
export type FriendshipsUpdateWithWhereUniqueWithoutAddresseeInput = {
    where: Prisma.FriendshipsWhereUniqueInput;
    data: Prisma.XOR<Prisma.FriendshipsUpdateWithoutAddresseeInput, Prisma.FriendshipsUncheckedUpdateWithoutAddresseeInput>;
};
export type FriendshipsUpdateManyWithWhereWithoutAddresseeInput = {
    where: Prisma.FriendshipsScalarWhereInput;
    data: Prisma.XOR<Prisma.FriendshipsUpdateManyMutationInput, Prisma.FriendshipsUncheckedUpdateManyWithoutAddresseeInput>;
};
export type FriendshipsCreateManyRequesterInput = {
    id?: string;
    addresseeId: string;
    status: string;
    createdAt?: Date | string;
};
export type FriendshipsCreateManyAddresseeInput = {
    id?: string;
    requesterId: string;
    status: string;
    createdAt?: Date | string;
};
export type FriendshipsUpdateWithoutRequesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addressee?: Prisma.UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput;
};
export type FriendshipsUncheckedUpdateWithoutRequesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    addresseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendshipsUncheckedUpdateManyWithoutRequesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    addresseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendshipsUpdateWithoutAddresseeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requester?: Prisma.UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput;
};
export type FriendshipsUncheckedUpdateWithoutAddresseeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendshipsUncheckedUpdateManyWithoutAddresseeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendshipsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requesterId?: boolean;
    addresseeId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    requester?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    addressee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["friendships"]>;
export type FriendshipsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requesterId?: boolean;
    addresseeId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    requester?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    addressee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["friendships"]>;
export type FriendshipsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requesterId?: boolean;
    addresseeId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    requester?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    addressee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["friendships"]>;
export type FriendshipsSelectScalar = {
    id?: boolean;
    requesterId?: boolean;
    addresseeId?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type FriendshipsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requesterId" | "addresseeId" | "status" | "createdAt", ExtArgs["result"]["friendships"]>;
export type FriendshipsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requester?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    addressee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FriendshipsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requester?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    addressee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FriendshipsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requester?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    addressee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FriendshipsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Friendships";
    objects: {
        requester: Prisma.$UserPayload<ExtArgs>;
        addressee: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requesterId: string;
        addresseeId: string;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["friendships"]>;
    composites: {};
};
export type FriendshipsGetPayload<S extends boolean | null | undefined | FriendshipsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload, S>;
export type FriendshipsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FriendshipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FriendshipsCountAggregateInputType | true;
};
export interface FriendshipsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Friendships'];
        meta: {
            name: 'Friendships';
        };
    };
    findUnique<T extends FriendshipsFindUniqueArgs>(args: Prisma.SelectSubset<T, FriendshipsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FriendshipsClient<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FriendshipsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FriendshipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FriendshipsClient<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FriendshipsFindFirstArgs>(args?: Prisma.SelectSubset<T, FriendshipsFindFirstArgs<ExtArgs>>): Prisma.Prisma__FriendshipsClient<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FriendshipsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FriendshipsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FriendshipsClient<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FriendshipsFindManyArgs>(args?: Prisma.SelectSubset<T, FriendshipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FriendshipsCreateArgs>(args: Prisma.SelectSubset<T, FriendshipsCreateArgs<ExtArgs>>): Prisma.Prisma__FriendshipsClient<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FriendshipsCreateManyArgs>(args?: Prisma.SelectSubset<T, FriendshipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FriendshipsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FriendshipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FriendshipsDeleteArgs>(args: Prisma.SelectSubset<T, FriendshipsDeleteArgs<ExtArgs>>): Prisma.Prisma__FriendshipsClient<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FriendshipsUpdateArgs>(args: Prisma.SelectSubset<T, FriendshipsUpdateArgs<ExtArgs>>): Prisma.Prisma__FriendshipsClient<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FriendshipsDeleteManyArgs>(args?: Prisma.SelectSubset<T, FriendshipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FriendshipsUpdateManyArgs>(args: Prisma.SelectSubset<T, FriendshipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FriendshipsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FriendshipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FriendshipsUpsertArgs>(args: Prisma.SelectSubset<T, FriendshipsUpsertArgs<ExtArgs>>): Prisma.Prisma__FriendshipsClient<runtime.Types.Result.GetResult<Prisma.$FriendshipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FriendshipsCountArgs>(args?: Prisma.Subset<T, FriendshipsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FriendshipsCountAggregateOutputType> : number>;
    aggregate<T extends FriendshipsAggregateArgs>(args: Prisma.Subset<T, FriendshipsAggregateArgs>): Prisma.PrismaPromise<GetFriendshipsAggregateType<T>>;
    groupBy<T extends FriendshipsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FriendshipsGroupByArgs['orderBy'];
    } : {
        orderBy?: FriendshipsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FriendshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FriendshipsFieldRefs;
}
export interface Prisma__FriendshipsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    requester<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    addressee<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FriendshipsFieldRefs {
    readonly id: Prisma.FieldRef<"Friendships", 'String'>;
    readonly requesterId: Prisma.FieldRef<"Friendships", 'String'>;
    readonly addresseeId: Prisma.FieldRef<"Friendships", 'String'>;
    readonly status: Prisma.FieldRef<"Friendships", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Friendships", 'DateTime'>;
}
export type FriendshipsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    where: Prisma.FriendshipsWhereUniqueInput;
};
export type FriendshipsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    where: Prisma.FriendshipsWhereUniqueInput;
};
export type FriendshipsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    where?: Prisma.FriendshipsWhereInput;
    orderBy?: Prisma.FriendshipsOrderByWithRelationInput | Prisma.FriendshipsOrderByWithRelationInput[];
    cursor?: Prisma.FriendshipsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FriendshipsScalarFieldEnum | Prisma.FriendshipsScalarFieldEnum[];
};
export type FriendshipsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    where?: Prisma.FriendshipsWhereInput;
    orderBy?: Prisma.FriendshipsOrderByWithRelationInput | Prisma.FriendshipsOrderByWithRelationInput[];
    cursor?: Prisma.FriendshipsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FriendshipsScalarFieldEnum | Prisma.FriendshipsScalarFieldEnum[];
};
export type FriendshipsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    where?: Prisma.FriendshipsWhereInput;
    orderBy?: Prisma.FriendshipsOrderByWithRelationInput | Prisma.FriendshipsOrderByWithRelationInput[];
    cursor?: Prisma.FriendshipsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FriendshipsScalarFieldEnum | Prisma.FriendshipsScalarFieldEnum[];
};
export type FriendshipsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FriendshipsCreateInput, Prisma.FriendshipsUncheckedCreateInput>;
};
export type FriendshipsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FriendshipsCreateManyInput | Prisma.FriendshipsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FriendshipsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    data: Prisma.FriendshipsCreateManyInput | Prisma.FriendshipsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FriendshipsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FriendshipsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FriendshipsUpdateInput, Prisma.FriendshipsUncheckedUpdateInput>;
    where: Prisma.FriendshipsWhereUniqueInput;
};
export type FriendshipsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FriendshipsUpdateManyMutationInput, Prisma.FriendshipsUncheckedUpdateManyInput>;
    where?: Prisma.FriendshipsWhereInput;
    limit?: number;
};
export type FriendshipsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FriendshipsUpdateManyMutationInput, Prisma.FriendshipsUncheckedUpdateManyInput>;
    where?: Prisma.FriendshipsWhereInput;
    limit?: number;
    include?: Prisma.FriendshipsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FriendshipsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    where: Prisma.FriendshipsWhereUniqueInput;
    create: Prisma.XOR<Prisma.FriendshipsCreateInput, Prisma.FriendshipsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FriendshipsUpdateInput, Prisma.FriendshipsUncheckedUpdateInput>;
};
export type FriendshipsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
    where: Prisma.FriendshipsWhereUniqueInput;
};
export type FriendshipsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FriendshipsWhereInput;
    limit?: number;
};
export type FriendshipsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendshipsSelect<ExtArgs> | null;
    omit?: Prisma.FriendshipsOmit<ExtArgs> | null;
    include?: Prisma.FriendshipsInclude<ExtArgs> | null;
};
