import { buildConfig } from "payload/config";
import path from "path";
import TodoLists from "../collections/TodoLists";
import Users from "../collections/Users";

export default buildConfig({
  // serverURL: "https://render-payload-cms.onrender.com",
  admin: {
    user: Users.slug,
  },
  cors: "*",
  collections: [TodoLists, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
