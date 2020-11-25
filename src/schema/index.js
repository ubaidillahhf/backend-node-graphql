import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import fs from "fs";

const files = fs.readdirSync(__dirname);
const list_types = [];
const list_resolvers = [];

// # Disable console.log while prod
if (process.env.MODE === "production") {
  console.log = function () {};
}

files.forEach((file) => {
  if (file === "index.js") return;
  if (file.indexOf(".js") < 0) return;
  if (file.indexOf(".test.js") >= 0) return;
  if (file.indexOf("resolvers.js") >= 0) {
    if (file === "resolvers.js") return;
    console.log("Loading Resolvers file", file);
    list_resolvers.push(require(__dirname + "/" + file).default);
    return;
  }
  console.log("Loading Schema file", file);
  const schema = require(__dirname + "/" + file).default;
  if (!schema) return;
  list_types.push(schema);
});

const mergedSchema = mergeTypes(list_types, { all: true });
fs.writeFileSync("cache.graphql", mergedSchema);
export default mergedSchema;

export const resolvers = mergeResolvers(list_resolvers);
