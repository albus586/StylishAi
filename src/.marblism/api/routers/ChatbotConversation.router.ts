/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ChatbotConversationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatbotConversation.createMany(input as any))),

        create: procedure.input($Schema.ChatbotConversationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatbotConversation.create(input as any))),

        deleteMany: procedure.input($Schema.ChatbotConversationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatbotConversation.deleteMany(input as any))),

        delete: procedure.input($Schema.ChatbotConversationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatbotConversation.delete(input as any))),

        findFirst: procedure.input($Schema.ChatbotConversationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).chatbotConversation.findFirst(input as any))),

        findMany: procedure.input($Schema.ChatbotConversationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).chatbotConversation.findMany(input as any))),

        findUnique: procedure.input($Schema.ChatbotConversationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).chatbotConversation.findUnique(input as any))),

        updateMany: procedure.input($Schema.ChatbotConversationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatbotConversation.updateMany(input as any))),

        update: procedure.input($Schema.ChatbotConversationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatbotConversation.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ChatbotConversationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatbotConversationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatbotConversationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatbotConversationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ChatbotConversationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatbotConversationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChatbotConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChatbotConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatbotConversationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatbotConversationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChatbotConversationGetPayload<T>, Context>) => Promise<Prisma.ChatbotConversationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ChatbotConversationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatbotConversationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatbotConversationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatbotConversationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ChatbotConversationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatbotConversationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChatbotConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChatbotConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatbotConversationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatbotConversationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChatbotConversationGetPayload<T>, Context>) => Promise<Prisma.ChatbotConversationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ChatbotConversationFindFirstArgs, TData = Prisma.ChatbotConversationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ChatbotConversationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ChatbotConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChatbotConversationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ChatbotConversationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ChatbotConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ChatbotConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ChatbotConversationFindManyArgs, TData = Array<Prisma.ChatbotConversationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ChatbotConversationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ChatbotConversationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChatbotConversationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ChatbotConversationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ChatbotConversationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ChatbotConversationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ChatbotConversationFindUniqueArgs, TData = Prisma.ChatbotConversationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ChatbotConversationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ChatbotConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChatbotConversationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ChatbotConversationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ChatbotConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ChatbotConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ChatbotConversationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatbotConversationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatbotConversationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatbotConversationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ChatbotConversationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatbotConversationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChatbotConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChatbotConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatbotConversationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatbotConversationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChatbotConversationGetPayload<T>, Context>) => Promise<Prisma.ChatbotConversationGetPayload<T>>
            };

    };
}
