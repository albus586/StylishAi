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

        createMany: procedure.input($Schema.VirtualTryOnInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).virtualTryOn.createMany(input as any))),

        create: procedure.input($Schema.VirtualTryOnInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).virtualTryOn.create(input as any))),

        deleteMany: procedure.input($Schema.VirtualTryOnInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).virtualTryOn.deleteMany(input as any))),

        delete: procedure.input($Schema.VirtualTryOnInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).virtualTryOn.delete(input as any))),

        findFirst: procedure.input($Schema.VirtualTryOnInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).virtualTryOn.findFirst(input as any))),

        findMany: procedure.input($Schema.VirtualTryOnInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).virtualTryOn.findMany(input as any))),

        findUnique: procedure.input($Schema.VirtualTryOnInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).virtualTryOn.findUnique(input as any))),

        updateMany: procedure.input($Schema.VirtualTryOnInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).virtualTryOn.updateMany(input as any))),

        update: procedure.input($Schema.VirtualTryOnInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).virtualTryOn.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.VirtualTryOnCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VirtualTryOnCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VirtualTryOnCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VirtualTryOnCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.VirtualTryOnCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VirtualTryOnCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VirtualTryOnGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VirtualTryOnGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VirtualTryOnCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VirtualTryOnCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VirtualTryOnGetPayload<T>, Context>) => Promise<Prisma.VirtualTryOnGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.VirtualTryOnDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VirtualTryOnDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VirtualTryOnDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VirtualTryOnDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.VirtualTryOnDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VirtualTryOnDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VirtualTryOnGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VirtualTryOnGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VirtualTryOnDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VirtualTryOnDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VirtualTryOnGetPayload<T>, Context>) => Promise<Prisma.VirtualTryOnGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.VirtualTryOnFindFirstArgs, TData = Prisma.VirtualTryOnGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VirtualTryOnFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VirtualTryOnGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VirtualTryOnFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VirtualTryOnFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VirtualTryOnGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VirtualTryOnGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.VirtualTryOnFindManyArgs, TData = Array<Prisma.VirtualTryOnGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.VirtualTryOnFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.VirtualTryOnGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VirtualTryOnFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VirtualTryOnFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.VirtualTryOnGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.VirtualTryOnGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.VirtualTryOnFindUniqueArgs, TData = Prisma.VirtualTryOnGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VirtualTryOnFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VirtualTryOnGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VirtualTryOnFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VirtualTryOnFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VirtualTryOnGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VirtualTryOnGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.VirtualTryOnUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VirtualTryOnUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VirtualTryOnUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VirtualTryOnUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.VirtualTryOnUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VirtualTryOnUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VirtualTryOnGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VirtualTryOnGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VirtualTryOnUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VirtualTryOnUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VirtualTryOnGetPayload<T>, Context>) => Promise<Prisma.VirtualTryOnGetPayload<T>>
            };

    };
}
