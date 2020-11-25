console.log(require("dotenv").config({ path: __dirname + "/../.env" }));
import Express from "express";
import Parser from "body-parser";
import cors from "cors";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import mergedSchema, { resolvers as mergeResolvers } from "./schema";

const server = Express();

server.use(Parser.urlencoded());
server.use(Parser.json({ limit: "500mb" }));
server.use(cors());

const apolloApp = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: mergedSchema,
    resolvers: mergeResolvers,
  }),
  context: async ({ req }) => {
    try {
      if (req && req.headers.authorization) {
        let user = await axios({
          method: "post", //you can set what request you want to be
          url: `${process.env.SSO_URL}/api/sso/validate`,
          headers: {
            Authorization: req.headers.authorization,
          },
        });

        if (!user) {
          throw new AuthenticationError("Must Authenticate");
        }
        // let user = null;
        return {
          user: user.data,
          db,
          pub,
        };
      }

      // throw new AuthenticationError("Must Authenticate");
    } catch (error) {
      console.log(`dapat error${JSON.stringify(error)}`);
      throw new AuthenticationError("Must Authenticate");
    }
  },
  playground: {
    endpoint: "/graphql",
  },
});

apolloApp.applyMiddleware({ app: server });

server.listen(process.env.PORT || 37567, () => {
  console.log(`Stock Manager Server Started With Port ${process.env.PORT}`);
  process.env.title = "Stock Manager";
});
