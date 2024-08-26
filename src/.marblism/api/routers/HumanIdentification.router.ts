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

        createMany: procedure.input($Schema.HumanIdentificationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).humanIdentification.createMany(input as any))),

        create: procedure.input($Schema.HumanIdentificationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).humanIdentification.create(input as any))),

        deleteMany: procedure.input($Schema.HumanIdentificationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).humanIdentification.deleteMany(input as any))),

        delete: procedure.input($Schema.HumanIdentificationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).humanIdentification.delete(input as any))),

        findFirst: procedure.input($Schema.HumanIdentificationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).humanIdentification.findFirst(input as any))),

        findMany: procedure.input($Schema.HumanIdentificationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).humanIdentification.findMany(input as any))),

        findUnique: procedure.input($Schema.HumanIdentificationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).humanIdentification.findUnique(input as any))),

        updateMany: procedure.input($Schema.HumanIdentificationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).humanIdentification.updateMany(input as any))),

        update: procedure.input($Schema.HumanIdentificationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).humanIdentification.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.HumanIdentificationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HumanIdentificationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HumanIdentificationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HumanIdentificationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.HumanIdentificationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HumanIdentificationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HumanIdentificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HumanIdentificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HumanIdentificationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HumanIdentificationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HumanIdentificationGetPayload<T>, Context>) => Promise<Prisma.HumanIdentificationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.HumanIdentificationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HumanIdentificationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HumanIdentificationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HumanIdentificationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.HumanIdentificationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HumanIdentificationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HumanIdentificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HumanIdentificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HumanIdentificationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HumanIdentificationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HumanIdentificationGetPayload<T>, Context>) => Promise<Prisma.HumanIdentificationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.HumanIdentificationFindFirstArgs, TData = Prisma.HumanIdentificationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HumanIdentificationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HumanIdentificationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HumanIdentificationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HumanIdentificationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HumanIdentificationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HumanIdentificationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.HumanIdentificationFindManyArgs, TData = Array<Prisma.HumanIdentificationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.HumanIdentificationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.HumanIdentificationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HumanIdentificationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HumanIdentificationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.HumanIdentificationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.HumanIdentificationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.HumanIdentificationFindUniqueArgs, TData = Prisma.HumanIdentificationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HumanIdentificationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HumanIdentificationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HumanIdentificationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HumanIdentificationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HumanIdentificationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HumanIdentificationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.HumanIdentificationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HumanIdentificationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HumanIdentificationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HumanIdentificationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.HumanIdentificationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HumanIdentificationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HumanIdentificationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HumanIdentificationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HumanIdentificationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HumanIdentificationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HumanIdentificationGetPayload<T>, Context>) => Promise<Prisma.HumanIdentificationGetPayload<T>>
            };

    };
}
