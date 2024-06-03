// Define the User type
export const typeDefs = `#graphql
  type MerchantOffer {
    dealType: String
    endDate: String
    promoCode: String
    additionalTerms: String
    termsAndConditions: String
    cashbackLimit: String
    dealDescription: String
    cashbackId: String
    activationExpiry: Int
  }

	type Merchant {
    title: String!
    id: ID!
    image: String
    href: String
    logo: String
    bubbleLogo: String
    salesChannel: String
    integrated: Boolean
    offer: MerchantOffer
    headline: String
    type: String
  }

  type Category {
    name: String!
    seeAllPath: String
    merchants: [Merchant!]!
  }
  type ShopFeed {
    name: String!
    categories: [Category!]!
  }

  type Query {
    # getShopFeed: ShopFeed!
    searchShopFeed(query: String): ShopFeed!
  }

  schema {
    query: Query
  }
`;
