const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { importSchema } = require('graphql-import')

const { resolvers } = require('./resolvers');
const typeDefs = importSchema('./src/schema.graphql')

const port = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}/graphql`);
});