import type { CodegenConfig } from "@graphql-codegen/cli";
import { typeDefs } from "./schema";

const config: CodegenConfig = {
	schema: typeDefs,
	documents: ["src/**/*.ts*", "!src/graphql/bin/**"],
	ignoreNoDocuments: true,
	generates: {
		"./src/graphql/bin/": {
			preset: "client",
			presetConfig: {
				gqlTagName: "gql",
			},
		},
	},
};
// const config: CodegenConfig = {
//   overwrite: true,
//   schema: "https://apollo-next-poll.up.railway.app/",
//   documents: ["components/**/*.graphql"],
//   generates: {
//     "components/types.generated.ts": { plugins: ["typescript"] },
//     "components/": {
//       preset: "near-operation-file",
//       presetConfig: {
//         extension: ".generated.ts",
//         baseTypesPath: "types.generated.ts",
//       },
//       plugins: ["typescript-operations", "typed-document-node"],
//     },
//   },
// };

export default config;
