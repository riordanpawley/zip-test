import { gql } from "../graphql/bin/gql";

export const getShopFeedDocument = gql(`
  query getShopFeed {
    getShopFeed {
      categories {
				name
				merchants {
					id
					title
					image
					href
				}
			}
    }
  }
`);
