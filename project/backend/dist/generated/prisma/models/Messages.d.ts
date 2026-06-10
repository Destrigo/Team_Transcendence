import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MessagesModel = runtime.Types.Result.DefaultSelection<Prisma.$MessagesPayload>;
export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null;
    _min: MessagesMinAggregateOutputType | null;
    _max: MessagesMaxAggregateOutputType | null;
};
export type MessagesMinAggregateOutputType = {
    id: string | null;
    senderId: string | null;
    receiverId: string | null;
    content: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type MessagesMaxAggregateOutputType = {
    id: string | null;
    senderId: string | null;
    receiverId: string | null;
    content: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type MessagesCountAggregateOutputType = {
    id: number;
    senderId: number;
    receiverId: number;
    content: number;
    isRead: number;
    createdAt: number;
    _all: number;
};
export type MessagesMinAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    content?: true;
    isRead?: true;
    createdAt?: true;
};
export type MessagesMaxAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    content?: true;
    isRead?: true;
    createdAt?: true;
};
export type MessagesCountAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    content?: true;
    isRead?: true;
    createdAt?: true;
    _all?: true;
};
export type MessagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessagesWhereInput;
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    cursor?: Prisma.MessagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessagesCountAggregateInputType;
    _min?: MessagesMinAggregateInputType;
    _max?: MessagesMaxAggregateInputType;
};
export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
    [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessages[P]> : Prisma.GetScalarType<T[P], AggregateMessages[P]>;
};
export type MessagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessagesWhereInput;
    orderBy?: Prisma.MessagesOrderByWithAggregationInput | Prisma.MessagesOrderByWithAggregationInput[];
    by: Prisma.MessagesScalarFieldEnum[] | Prisma.MessagesScalarFieldEnum;
    having?: Prisma.MessagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessagesCountAggregateInputType | true;
    _min?: MessagesMinAggregateInputType;
    _max?: MessagesMaxAggregateInputType;
};
export type MessagesGroupByOutputType = {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    isRead: boolean;
    createdAt: Date;
    _count: MessagesCountAggregateOutputType | null;
    _min: MessagesMinAggregateOutputType | null;
    _max: MessagesMaxAggregateOutputType | null;
};
export type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessagesGroupByOutputType[P]>;
}>>;
export type MessagesWhereInput = {
    AND?: Prisma.MessagesWhereInput | Prisma.MessagesWhereInput[];
    OR?: Prisma.MessagesWhereInput[];
    NOT?: Prisma.MessagesWhereInput | Prisma.MessagesWhereInput[];
    id?: Prisma.StringFilter<"Messages"> | string;
    senderId?: Prisma.StringFilter<"Messages"> | string;
    receiverId?: Prisma.StringFilter<"Messages"> | string;
    content?: Prisma.StringFilter<"Messages"> | string;
    isRead?: Prisma.BoolFilter<"Messages"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Messages"> | Date | string;
    sender?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    receiver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MessagesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    sender?: Prisma.UserOrderByWithRelationInput;
    receiver?: Prisma.UserOrderByWithRelationInput;
};
export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MessagesWhereInput | Prisma.MessagesWhereInput[];
    OR?: Prisma.MessagesWhereInput[];
    NOT?: Prisma.MessagesWhereInput | Prisma.MessagesWhereInput[];
    senderId?: Prisma.StringFilter<"Messages"> | string;
    receiverId?: Prisma.StringFilter<"Messages"> | string;
    content?: Prisma.StringFilter<"Messages"> | string;
    isRead?: Prisma.BoolFilter<"Messages"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Messages"> | Date | string;
    sender?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    receiver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type MessagesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MessagesCountOrderByAggregateInput;
    _max?: Prisma.MessagesMaxOrderByAggregateInput;
    _min?: Prisma.MessagesMinOrderByAggregateInput;
};
export type MessagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessagesScalarWhereWithAggregatesInput | Prisma.MessagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessagesScalarWhereWithAggregatesInput | Prisma.MessagesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Messages"> | string;
    senderId?: Prisma.StringWithAggregatesFilter<"Messages"> | string;
    receiverId?: Prisma.StringWithAggregatesFilter<"Messages"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Messages"> | string;
    isRead?: Prisma.BoolWithAggregatesFilter<"Messages"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Messages"> | Date | string;
};
export type MessagesCreateInput = {
    id?: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSentMessagesInput;
    receiver: Prisma.UserCreateNestedOneWithoutReceivedMessagesInput;
};
export type MessagesUncheckedCreateInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type MessagesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSentMessagesNestedInput;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceivedMessagesNestedInput;
};
export type MessagesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessagesCreateManyInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type MessagesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessagesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessagesListRelationFilter = {
    every?: Prisma.MessagesWhereInput;
    some?: Prisma.MessagesWhereInput;
    none?: Prisma.MessagesWhereInput;
};
export type MessagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MessagesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessagesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessagesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MessagesCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput> | Prisma.MessagesCreateWithoutSenderInput[] | Prisma.MessagesUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutSenderInput | Prisma.MessagesCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.MessagesCreateManySenderInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesCreateNestedManyWithoutReceiverInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutReceiverInput, Prisma.MessagesUncheckedCreateWithoutReceiverInput> | Prisma.MessagesCreateWithoutReceiverInput[] | Prisma.MessagesUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutReceiverInput | Prisma.MessagesCreateOrConnectWithoutReceiverInput[];
    createMany?: Prisma.MessagesCreateManyReceiverInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput> | Prisma.MessagesCreateWithoutSenderInput[] | Prisma.MessagesUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutSenderInput | Prisma.MessagesCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.MessagesCreateManySenderInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutReceiverInput, Prisma.MessagesUncheckedCreateWithoutReceiverInput> | Prisma.MessagesCreateWithoutReceiverInput[] | Prisma.MessagesUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutReceiverInput | Prisma.MessagesCreateOrConnectWithoutReceiverInput[];
    createMany?: Prisma.MessagesCreateManyReceiverInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput> | Prisma.MessagesCreateWithoutSenderInput[] | Prisma.MessagesUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutSenderInput | Prisma.MessagesCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutSenderInput | Prisma.MessagesUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.MessagesCreateManySenderInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutSenderInput | Prisma.MessagesUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutSenderInput | Prisma.MessagesUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesUpdateManyWithoutReceiverNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutReceiverInput, Prisma.MessagesUncheckedCreateWithoutReceiverInput> | Prisma.MessagesCreateWithoutReceiverInput[] | Prisma.MessagesUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutReceiverInput | Prisma.MessagesCreateOrConnectWithoutReceiverInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutReceiverInput | Prisma.MessagesUpsertWithWhereUniqueWithoutReceiverInput[];
    createMany?: Prisma.MessagesCreateManyReceiverInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutReceiverInput | Prisma.MessagesUpdateWithWhereUniqueWithoutReceiverInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutReceiverInput | Prisma.MessagesUpdateManyWithWhereWithoutReceiverInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput> | Prisma.MessagesCreateWithoutSenderInput[] | Prisma.MessagesUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutSenderInput | Prisma.MessagesCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutSenderInput | Prisma.MessagesUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.MessagesCreateManySenderInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutSenderInput | Prisma.MessagesUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutSenderInput | Prisma.MessagesUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutReceiverInput, Prisma.MessagesUncheckedCreateWithoutReceiverInput> | Prisma.MessagesCreateWithoutReceiverInput[] | Prisma.MessagesUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutReceiverInput | Prisma.MessagesCreateOrConnectWithoutReceiverInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutReceiverInput | Prisma.MessagesUpsertWithWhereUniqueWithoutReceiverInput[];
    createMany?: Prisma.MessagesCreateManyReceiverInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutReceiverInput | Prisma.MessagesUpdateWithWhereUniqueWithoutReceiverInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutReceiverInput | Prisma.MessagesUpdateManyWithWhereWithoutReceiverInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesCreateWithoutSenderInput = {
    id?: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
    receiver: Prisma.UserCreateNestedOneWithoutReceivedMessagesInput;
};
export type MessagesUncheckedCreateWithoutSenderInput = {
    id?: string;
    receiverId: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type MessagesCreateOrConnectWithoutSenderInput = {
    where: Prisma.MessagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput>;
};
export type MessagesCreateManySenderInputEnvelope = {
    data: Prisma.MessagesCreateManySenderInput | Prisma.MessagesCreateManySenderInput[];
    skipDuplicates?: boolean;
};
export type MessagesCreateWithoutReceiverInput = {
    id?: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSentMessagesInput;
};
export type MessagesUncheckedCreateWithoutReceiverInput = {
    id?: string;
    senderId: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type MessagesCreateOrConnectWithoutReceiverInput = {
    where: Prisma.MessagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutReceiverInput, Prisma.MessagesUncheckedCreateWithoutReceiverInput>;
};
export type MessagesCreateManyReceiverInputEnvelope = {
    data: Prisma.MessagesCreateManyReceiverInput | Prisma.MessagesCreateManyReceiverInput[];
    skipDuplicates?: boolean;
};
export type MessagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: Prisma.MessagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessagesUpdateWithoutSenderInput, Prisma.MessagesUncheckedUpdateWithoutSenderInput>;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput>;
};
export type MessagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: Prisma.MessagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessagesUpdateWithoutSenderInput, Prisma.MessagesUncheckedUpdateWithoutSenderInput>;
};
export type MessagesUpdateManyWithWhereWithoutSenderInput = {
    where: Prisma.MessagesScalarWhereInput;
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyWithoutSenderInput>;
};
export type MessagesScalarWhereInput = {
    AND?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
    OR?: Prisma.MessagesScalarWhereInput[];
    NOT?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
    id?: Prisma.StringFilter<"Messages"> | string;
    senderId?: Prisma.StringFilter<"Messages"> | string;
    receiverId?: Prisma.StringFilter<"Messages"> | string;
    content?: Prisma.StringFilter<"Messages"> | string;
    isRead?: Prisma.BoolFilter<"Messages"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Messages"> | Date | string;
};
export type MessagesUpsertWithWhereUniqueWithoutReceiverInput = {
    where: Prisma.MessagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessagesUpdateWithoutReceiverInput, Prisma.MessagesUncheckedUpdateWithoutReceiverInput>;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutReceiverInput, Prisma.MessagesUncheckedCreateWithoutReceiverInput>;
};
export type MessagesUpdateWithWhereUniqueWithoutReceiverInput = {
    where: Prisma.MessagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessagesUpdateWithoutReceiverInput, Prisma.MessagesUncheckedUpdateWithoutReceiverInput>;
};
export type MessagesUpdateManyWithWhereWithoutReceiverInput = {
    where: Prisma.MessagesScalarWhereInput;
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyWithoutReceiverInput>;
};
export type MessagesCreateManySenderInput = {
    id?: string;
    receiverId: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type MessagesCreateManyReceiverInput = {
    id?: string;
    senderId: string;
    content: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type MessagesUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceivedMessagesNestedInput;
};
export type MessagesUncheckedUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessagesUncheckedUpdateManyWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessagesUpdateWithoutReceiverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSentMessagesNestedInput;
};
export type MessagesUncheckedUpdateWithoutReceiverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessagesUncheckedUpdateManyWithoutReceiverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    content?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type MessagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    content?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type MessagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    content?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type MessagesSelectScalar = {
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    content?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
};
export type MessagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "senderId" | "receiverId" | "content" | "isRead" | "createdAt", ExtArgs["result"]["messages"]>;
export type MessagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MessagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MessagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Messages";
    objects: {
        sender: Prisma.$UserPayload<ExtArgs>;
        receiver: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        senderId: string;
        receiverId: string;
        content: string;
        isRead: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["messages"]>;
    composites: {};
};
export type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessagesPayload, S>;
export type MessagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessagesCountAggregateInputType | true;
};
export interface MessagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Messages'];
        meta: {
            name: 'Messages';
        };
    };
    findUnique<T extends MessagesFindUniqueArgs>(args: Prisma.SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MessagesFindFirstArgs>(args?: Prisma.SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MessagesFindManyArgs>(args?: Prisma.SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MessagesCreateArgs>(args: Prisma.SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MessagesCreateManyArgs>(args?: Prisma.SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MessagesDeleteArgs>(args: Prisma.SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MessagesUpdateArgs>(args: Prisma.SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MessagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MessagesUpdateManyArgs>(args: Prisma.SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MessagesUpsertArgs>(args: Prisma.SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MessagesCountArgs>(args?: Prisma.Subset<T, MessagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessagesCountAggregateOutputType> : number>;
    aggregate<T extends MessagesAggregateArgs>(args: Prisma.Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>;
    groupBy<T extends MessagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessagesGroupByArgs['orderBy'];
    } : {
        orderBy?: MessagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MessagesFieldRefs;
}
export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sender<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    receiver<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MessagesFieldRefs {
    readonly id: Prisma.FieldRef<"Messages", 'String'>;
    readonly senderId: Prisma.FieldRef<"Messages", 'String'>;
    readonly receiverId: Prisma.FieldRef<"Messages", 'String'>;
    readonly content: Prisma.FieldRef<"Messages", 'String'>;
    readonly isRead: Prisma.FieldRef<"Messages", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Messages", 'DateTime'>;
}
export type MessagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where: Prisma.MessagesWhereUniqueInput;
};
export type MessagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where: Prisma.MessagesWhereUniqueInput;
};
export type MessagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where?: Prisma.MessagesWhereInput;
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    cursor?: Prisma.MessagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
export type MessagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where?: Prisma.MessagesWhereInput;
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    cursor?: Prisma.MessagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
export type MessagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where?: Prisma.MessagesWhereInput;
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    cursor?: Prisma.MessagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
export type MessagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessagesCreateInput, Prisma.MessagesUncheckedCreateInput>;
};
export type MessagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MessagesCreateManyInput | Prisma.MessagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    data: Prisma.MessagesCreateManyInput | Prisma.MessagesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MessagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MessagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessagesUpdateInput, Prisma.MessagesUncheckedUpdateInput>;
    where: Prisma.MessagesWhereUniqueInput;
};
export type MessagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyInput>;
    where?: Prisma.MessagesWhereInput;
    limit?: number;
};
export type MessagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyInput>;
    where?: Prisma.MessagesWhereInput;
    limit?: number;
    include?: Prisma.MessagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MessagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where: Prisma.MessagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessagesCreateInput, Prisma.MessagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MessagesUpdateInput, Prisma.MessagesUncheckedUpdateInput>;
};
export type MessagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where: Prisma.MessagesWhereUniqueInput;
};
export type MessagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessagesWhereInput;
    limit?: number;
};
export type MessagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    include?: Prisma.MessagesInclude<ExtArgs> | null;
};
