/* eslint-disable */
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
};

export type Merchant = {
  __typename?: 'Merchant';
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getShopFeed: ShopFeed;
};

export type ShopFeed = {
  __typename?: 'ShopFeed';
  categories: Array<Category>;
  name: Scalars['String'];
};

export type GetShopFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShopFeedQuery = { __typename?: 'Query', getShopFeed: { __typename?: 'ShopFeed', categories: Array<{ __typename?: 'Category', name: string, merchants: Array<{ __typename?: 'Merchant', id: string, title: string, image?: string | null, href?: string | null }> }> } };


export const GetShopFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getShopFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getShopFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"merchants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetShopFeedQuery, GetShopFeedQueryVariables>;