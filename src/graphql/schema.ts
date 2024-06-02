// Define the User type
export const typeDefs = `#graphql
	type Merchant {
    title: String!
    id: ID!
    image: String
    href: String
  }

  type Category {
    name: String!
    merchants: [Merchant!]!
  }
  type ShopFeed {
    name: String!
    categories: [Category!]!
  }

  type Query {
    getShopFeed: ShopFeed!
  }

  schema {
    query: Query
  }
`;
