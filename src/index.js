const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const port = 2020;

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World! - GraphQL Server Boilerplate for Node.js',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

const app = express();
server.applyMiddleware({ app });

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}/graphql`);
  });