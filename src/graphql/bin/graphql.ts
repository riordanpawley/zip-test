/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  merchants: Array<Merchant>;
  name: Scalars['String'];
  seeAllPath?: Maybe<Scalars['String']>;
};

export type Merchant = {
  __typename?: 'Merchant';
  bubbleLogo?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  integrated?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  offer?: Maybe<MerchantOffer>;
  salesChannel?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type MerchantOffer = {
  __typename?: 'MerchantOffer';
  activationExpiry?: Maybe<Scalars['Int']>;
  additionalTerms?: Maybe<Scalars['String']>;
  cashbackId?: Maybe<Scalars['String']>;
  cashbackLimit?: Maybe<Scalars['String']>;
  dealDescription?: Maybe<Scalars['String']>;
  dealType?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
  termsAndConditions?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  searchShopFeed: ShopFeed;
};


export type QuerySearchShopFeedArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type ShopFeed = {
  __typename?: 'ShopFeed';
  categories: Array<Category>;
  name: Scalars['String'];
};

export type SearchShopFeedQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
}>;


export type SearchShopFeedQuery = { __typename?: 'Query', searchShopFeed: { __typename?: 'ShopFeed', categories: Array<{ __typename?: 'Category', name: string, merchants: Array<{ __typename?: 'Merchant', id: string, title: string, image?: string | null, href?: string | null, logo?: string | null }> }> } };


export const SearchShopFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchShopFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchShopFeed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"merchants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchShopFeedQuery, SearchShopFeedQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Merchant: ResolverTypeWrapper<Merchant>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  MerchantOffer: ResolverTypeWrapper<MerchantOffer>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  ShopFeed: ResolverTypeWrapper<ShopFeed>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  String: Scalars['String'];
  Merchant: Merchant;
  ID: Scalars['ID'];
  Boolean: Scalars['Boolean'];
  MerchantOffer: MerchantOffer;
  Int: Scalars['Int'];
  Query: {};
  ShopFeed: ShopFeed;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  merchants?: Resolver<Array<ResolversTypes['Merchant']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seeAllPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MerchantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Merchant'] = ResolversParentTypes['Merchant']> = {
  bubbleLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer?: Resolver<Maybe<ResolversTypes['MerchantOffer']>, ParentType, ContextType>;
  salesChannel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MerchantOfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['MerchantOffer'] = ResolversParentTypes['MerchantOffer']> = {
  activationExpiry?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  additionalTerms?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cashbackId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cashbackLimit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dealDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dealType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  termsAndConditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  searchShopFeed?: Resolver<ResolversTypes['ShopFeed'], ParentType, ContextType, Partial<QuerySearchShopFeedArgs>>;
};

export type ShopFeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopFeed'] = ResolversParentTypes['ShopFeed']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Merchant?: MerchantResolvers<ContextType>;
  MerchantOffer?: MerchantOfferResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ShopFeed?: ShopFeedResolvers<ContextType>;
};

