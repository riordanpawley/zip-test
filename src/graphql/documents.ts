import { gql } from "@/graphql/bin/gql";

export const searchShopFeedDocument = gql(`
  query searchShopFeed($query: String) {
    searchShopFeed(query: $query) {
      categories {
				name
				merchants {
					id
					title
					image
					href
				  logo
				}
			}
    }
  }
`);
