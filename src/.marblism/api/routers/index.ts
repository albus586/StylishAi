/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createHumanIdentificationRouter from "./HumanIdentification.router";
import createRecommendationRouter from "./Recommendation.router";
import createOutfitRouter from "./Outfit.router";
import createVirtualTryOnRouter from "./VirtualTryOn.router";
import createChatbotConversationRouter from "./ChatbotConversation.router";
import createRagVectorRouter from "./RagVector.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as HumanIdentificationClientType } from "./HumanIdentification.router";
import { ClientType as RecommendationClientType } from "./Recommendation.router";
import { ClientType as OutfitClientType } from "./Outfit.router";
import { ClientType as VirtualTryOnClientType } from "./VirtualTryOn.router";
import { ClientType as ChatbotConversationClientType } from "./ChatbotConversation.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        humanIdentification: createHumanIdentificationRouter(router, procedure),
        recommendation: createRecommendationRouter(router, procedure),
        outfit: createOutfitRouter(router, procedure),
        virtualTryOn: createVirtualTryOnRouter(router, procedure),
        chatbotConversation: createChatbotConversationRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    humanIdentification: HumanIdentificationClientType<AppRouter>;
    recommendation: RecommendationClientType<AppRouter>;
    outfit: OutfitClientType<AppRouter>;
    virtualTryOn: VirtualTryOnClientType<AppRouter>;
    chatbotConversation: ChatbotConversationClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
}
