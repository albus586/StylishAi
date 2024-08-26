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

        createMany: procedure.input($Schema.OutfitInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).outfit.createMany(input as any))),

        create: procedure.input($Schema.OutfitInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).outfit.create(input as any))),

        deleteMany: procedure.input($Schema.OutfitInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).outfit.deleteMany(input as any))),

        delete: procedure.input($Schema.OutfitInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).outfit.delete(input as any))),

        findFirst: procedure.input($Schema.OutfitInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).outfit.findFirst(input as any))),

        findMany: procedure.input($Schema.OutfitInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).outfit.findMany(input as any))),

        findUnique: procedure.input($Schema.OutfitInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).outfit.findUnique(input as any))),

        updateMany: procedure.input($Schema.OutfitInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).outfit.updateMany(input as any))),

        update: procedure.input($Schema.OutfitInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).outfit.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.OutfitCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OutfitCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OutfitCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OutfitCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.OutfitCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OutfitCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OutfitGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OutfitGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OutfitCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OutfitCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OutfitGetPayload<T>, Context>) => Promise<Prisma.OutfitGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.OutfitDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OutfitDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OutfitDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OutfitDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.OutfitDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OutfitDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OutfitGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OutfitGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OutfitDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OutfitDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OutfitGetPayload<T>, Context>) => Promise<Prisma.OutfitGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.OutfitFindFirstArgs, TData = Prisma.OutfitGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.OutfitFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.OutfitGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OutfitFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OutfitFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.OutfitGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.OutfitGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.OutfitFindManyArgs, TData = Array<Prisma.OutfitGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.OutfitFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.OutfitGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OutfitFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OutfitFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.OutfitGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.OutfitGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.OutfitFindUniqueArgs, TData = Prisma.OutfitGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.OutfitFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.OutfitGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OutfitFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OutfitFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.OutfitGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.OutfitGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.OutfitUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OutfitUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OutfitUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OutfitUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.OutfitUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OutfitUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OutfitGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OutfitGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OutfitUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OutfitUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OutfitGetPayload<T>, Context>) => Promise<Prisma.OutfitGetPayload<T>>
            };

    };
}
