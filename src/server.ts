import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const PORT = process.env.PORT || 5000;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String,
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    console.log('hello resolver called');
    return 'Hello world!';
  },
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(PORT);
console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
