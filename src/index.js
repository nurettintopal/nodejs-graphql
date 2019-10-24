import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import { PORT, APP_URL } from './config';
import { resolvers } from './resolvers';

const typeDefs = importSchema('./src/schema.graphql');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log();
    console.log(`Server ready at ${APP_URL}:${PORT}${server.graphqlPath}`);
    console.log();
});