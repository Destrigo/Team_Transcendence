import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NotificationsModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationsPayload>;
export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null;
    _min: NotificationsMinAggregateOutputType | null;
    _max: NotificationsMaxAggregateOutputType | null;
};
export type NotificationsMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    title: string | null;
    body: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type NotificationsMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    title: string | null;
    body: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type NotificationsCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    title: number;
    body: number;
    data: number;
    isRead: number;
    createdAt: number;
    _all: number;
};
export type NotificationsMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    title?: true;
    body?: true;
    isRead?: true;
    createdAt?: true;
};
export type NotificationsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    title?: true;
    body?: true;
    isRead?: true;
    createdAt?: true;
};
export type NotificationsCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    title?: true;
    body?: true;
    data?: true;
    isRead?: true;
    createdAt?: true;
    _all?: true;
};
export type NotificationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationsWhereInput;
    orderBy?: Prisma.NotificationsOrderByWithRelationInput | Prisma.NotificationsOrderByWithRelationInput[];
    cursor?: Prisma.NotificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationsCountAggregateInputType;
    _min?: NotificationsMinAggregateInputType;
    _max?: NotificationsMaxAggregateInputType;
};
export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
    [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotifications[P]> : Prisma.GetScalarType<T[P], AggregateNotifications[P]>;
};
export type NotificationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationsWhereInput;
    orderBy?: Prisma.NotificationsOrderByWithAggregationInput | Prisma.NotificationsOrderByWithAggregationInput[];
    by: Prisma.NotificationsScalarFieldEnum[] | Prisma.NotificationsScalarFieldEnum;
    having?: Prisma.NotificationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationsCountAggregateInputType | true;
    _min?: NotificationsMinAggregateInputType;
    _max?: NotificationsMaxAggregateInputType;
};
export type NotificationsGroupByOutputType = {
    id: string;
    userId: string;
    type: string;
    title: string;
    body: string;
    data: runtime.JsonValue;
    isRead: boolean;
    createdAt: Date;
    _count: NotificationsCountAggregateOutputType | null;
    _min: NotificationsMinAggregateOutputType | null;
    _max: NotificationsMaxAggregateOutputType | null;
};
export type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationsGroupByOutputType[P]>;
}>>;
export type NotificationsWhereInput = {
    AND?: Prisma.NotificationsWhereInput | Prisma.NotificationsWhereInput[];
    OR?: Prisma.NotificationsWhereInput[];
    NOT?: Prisma.NotificationsWhereInput | Prisma.NotificationsWhereInput[];
    id?: Prisma.StringFilter<"Notifications"> | string;
    userId?: Prisma.StringFilter<"Notifications"> | string;
    type?: Prisma.StringFilter<"Notifications"> | string;
    title?: Prisma.StringFilter<"Notifications"> | string;
    body?: Prisma.StringFilter<"Notifications"> | string;
    data?: Prisma.JsonFilter<"Notifications">;
    isRead?: Prisma.BoolFilter<"Notifications"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Notifications"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type NotificationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NotificationsWhereInput | Prisma.NotificationsWhereInput[];
    OR?: Prisma.NotificationsWhereInput[];
    NOT?: Prisma.NotificationsWhereInput | Prisma.NotificationsWhereInput[];
    userId?: Prisma.StringFilter<"Notifications"> | string;
    type?: Prisma.StringFilter<"Notifications"> | string;
    title?: Prisma.StringFilter<"Notifications"> | string;
    body?: Prisma.StringFilter<"Notifications"> | string;
    data?: Prisma.JsonFilter<"Notifications">;
    isRead?: Prisma.BoolFilter<"Notifications"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Notifications"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type NotificationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.NotificationsCountOrderByAggregateInput;
    _max?: Prisma.NotificationsMaxOrderByAggregateInput;
    _min?: Prisma.NotificationsMinOrderByAggregateInput;
};
export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationsScalarWhereWithAggregatesInput | Prisma.NotificationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationsScalarWhereWithAggregatesInput | Prisma.NotificationsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Notifications"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Notifications"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Notifications"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Notifications"> | string;
    body?: Prisma.StringWithAggregatesFilter<"Notifications"> | string;
    data?: Prisma.JsonWithAggregatesFilter<"Notifications">;
    isRead?: Prisma.BoolWithAggregatesFilter<"Notifications"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Notifications"> | Date | string;
};
export type NotificationsCreateInput = {
    id?: string;
    type: string;
    title: string;
    body: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutNotificationsInput;
};
export type NotificationsUncheckedCreateInput = {
    id?: string;
    userId: string;
    type: string;
    title: string;
    body: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type NotificationsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationsCreateManyInput = {
    id?: string;
    userId: string;
    type: string;
    title: string;
    body: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationsListRelationFilter = {
    every?: Prisma.NotificationsWhereInput;
    some?: Prisma.NotificationsWhereInput;
    none?: Prisma.NotificationsWhereInput;
};
export type NotificationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationsCreateWithoutUserInput, Prisma.NotificationsUncheckedCreateWithoutUserInput> | Prisma.NotificationsCreateWithoutUserInput[] | Prisma.NotificationsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationsCreateOrConnectWithoutUserInput | Prisma.NotificationsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificationsCreateManyUserInputEnvelope;
    connect?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
};
export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationsCreateWithoutUserInput, Prisma.NotificationsUncheckedCreateWithoutUserInput> | Prisma.NotificationsCreateWithoutUserInput[] | Prisma.NotificationsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationsCreateOrConnectWithoutUserInput | Prisma.NotificationsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificationsCreateManyUserInputEnvelope;
    connect?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
};
export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationsCreateWithoutUserInput, Prisma.NotificationsUncheckedCreateWithoutUserInput> | Prisma.NotificationsCreateWithoutUserInput[] | Prisma.NotificationsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationsCreateOrConnectWithoutUserInput | Prisma.NotificationsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificationsUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificationsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificationsCreateManyUserInputEnvelope;
    set?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
    disconnect?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
    delete?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
    connect?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
    update?: Prisma.NotificationsUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificationsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificationsUpdateManyWithWhereWithoutUserInput | Prisma.NotificationsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificationsScalarWhereInput | Prisma.NotificationsScalarWhereInput[];
};
export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationsCreateWithoutUserInput, Prisma.NotificationsUncheckedCreateWithoutUserInput> | Prisma.NotificationsCreateWithoutUserInput[] | Prisma.NotificationsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationsCreateOrConnectWithoutUserInput | Prisma.NotificationsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificationsUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificationsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificationsCreateManyUserInputEnvelope;
    set?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
    disconnect?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
    delete?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
    connect?: Prisma.NotificationsWhereUniqueInput | Prisma.NotificationsWhereUniqueInput[];
    update?: Prisma.NotificationsUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificationsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificationsUpdateManyWithWhereWithoutUserInput | Prisma.NotificationsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificationsScalarWhereInput | Prisma.NotificationsScalarWhereInput[];
};
export type NotificationsCreateWithoutUserInput = {
    id?: string;
    type: string;
    title: string;
    body: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationsUncheckedCreateWithoutUserInput = {
    id?: string;
    type: string;
    title: string;
    body: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationsCreateOrConnectWithoutUserInput = {
    where: Prisma.NotificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationsCreateWithoutUserInput, Prisma.NotificationsUncheckedCreateWithoutUserInput>;
};
export type NotificationsCreateManyUserInputEnvelope = {
    data: Prisma.NotificationsCreateManyUserInput | Prisma.NotificationsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationsUpdateWithoutUserInput, Prisma.NotificationsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.NotificationsCreateWithoutUserInput, Prisma.NotificationsUncheckedCreateWithoutUserInput>;
};
export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationsUpdateWithoutUserInput, Prisma.NotificationsUncheckedUpdateWithoutUserInput>;
};
export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.NotificationsScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationsUpdateManyMutationInput, Prisma.NotificationsUncheckedUpdateManyWithoutUserInput>;
};
export type NotificationsScalarWhereInput = {
    AND?: Prisma.NotificationsScalarWhereInput | Prisma.NotificationsScalarWhereInput[];
    OR?: Prisma.NotificationsScalarWhereInput[];
    NOT?: Prisma.NotificationsScalarWhereInput | Prisma.NotificationsScalarWhereInput[];
    id?: Prisma.StringFilter<"Notifications"> | string;
    userId?: Prisma.StringFilter<"Notifications"> | string;
    type?: Prisma.StringFilter<"Notifications"> | string;
    title?: Prisma.StringFilter<"Notifications"> | string;
    body?: Prisma.StringFilter<"Notifications"> | string;
    data?: Prisma.JsonFilter<"Notifications">;
    isRead?: Prisma.BoolFilter<"Notifications"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Notifications"> | Date | string;
};
export type NotificationsCreateManyUserInput = {
    id?: string;
    type: string;
    title: string;
    body: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    data?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type NotificationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    data?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    data?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type NotificationsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    data?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
};
export type NotificationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "type" | "title" | "body" | "data" | "isRead" | "createdAt", ExtArgs["result"]["notifications"]>;
export type NotificationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $NotificationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Notifications";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        type: string;
        title: string;
        body: string;
        data: runtime.JsonValue;
        isRead: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["notifications"]>;
    composites: {};
};
export type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationsPayload, S>;
export type NotificationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationsCountAggregateInputType | true;
};
export interface NotificationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Notifications'];
        meta: {
            name: 'Notifications';
        };
    };
    findUnique<T extends NotificationsFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationsClient<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationsClient<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationsFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationsClient<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationsClient<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationsFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationsCreateArgs>(args: Prisma.SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationsClient<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationsCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotificationsDeleteArgs>(args: Prisma.SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationsClient<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationsUpdateArgs>(args: Prisma.SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationsClient<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationsUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotificationsUpsertArgs>(args: Prisma.SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationsClient<runtime.Types.Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificationsCountArgs>(args?: Prisma.Subset<T, NotificationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationsCountAggregateOutputType> : number>;
    aggregate<T extends NotificationsAggregateArgs>(args: Prisma.Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>;
    groupBy<T extends NotificationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationsGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationsFieldRefs;
}
export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationsFieldRefs {
    readonly id: Prisma.FieldRef<"Notifications", 'String'>;
    readonly userId: Prisma.FieldRef<"Notifications", 'String'>;
    readonly type: Prisma.FieldRef<"Notifications", 'String'>;
    readonly title: Prisma.FieldRef<"Notifications", 'String'>;
    readonly body: Prisma.FieldRef<"Notifications", 'String'>;
    readonly data: Prisma.FieldRef<"Notifications", 'Json'>;
    readonly isRead: Prisma.FieldRef<"Notifications", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Notifications", 'DateTime'>;
}
export type NotificationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    where: Prisma.NotificationsWhereUniqueInput;
};
export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    where: Prisma.NotificationsWhereUniqueInput;
};
export type NotificationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    where?: Prisma.NotificationsWhereInput;
    orderBy?: Prisma.NotificationsOrderByWithRelationInput | Prisma.NotificationsOrderByWithRelationInput[];
    cursor?: Prisma.NotificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type NotificationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    where?: Prisma.NotificationsWhereInput;
    orderBy?: Prisma.NotificationsOrderByWithRelationInput | Prisma.NotificationsOrderByWithRelationInput[];
    cursor?: Prisma.NotificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type NotificationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    where?: Prisma.NotificationsWhereInput;
    orderBy?: Prisma.NotificationsOrderByWithRelationInput | Prisma.NotificationsOrderByWithRelationInput[];
    cursor?: Prisma.NotificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type NotificationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationsCreateInput, Prisma.NotificationsUncheckedCreateInput>;
};
export type NotificationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationsCreateManyInput | Prisma.NotificationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    data: Prisma.NotificationsCreateManyInput | Prisma.NotificationsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotificationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotificationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationsUpdateInput, Prisma.NotificationsUncheckedUpdateInput>;
    where: Prisma.NotificationsWhereUniqueInput;
};
export type NotificationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationsUpdateManyMutationInput, Prisma.NotificationsUncheckedUpdateManyInput>;
    where?: Prisma.NotificationsWhereInput;
    limit?: number;
};
export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationsUpdateManyMutationInput, Prisma.NotificationsUncheckedUpdateManyInput>;
    where?: Prisma.NotificationsWhereInput;
    limit?: number;
    include?: Prisma.NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotificationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    where: Prisma.NotificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationsCreateInput, Prisma.NotificationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationsUpdateInput, Prisma.NotificationsUncheckedUpdateInput>;
};
export type NotificationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
    where: Prisma.NotificationsWhereUniqueInput;
};
export type NotificationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationsWhereInput;
    limit?: number;
};
export type NotificationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsSelect<ExtArgs> | null;
    omit?: Prisma.NotificationsOmit<ExtArgs> | null;
    include?: Prisma.NotificationsInclude<ExtArgs> | null;
};
