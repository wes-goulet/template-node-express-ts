import express from "express";
import expressGraphql from "express-graphql";
import { buildSchema } from "graphql";

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
    // tslint:disable-next-line:no-console
    console.log("hello resolver called");
    return "Hello world!";
  }
};

const app = express();
app.use(
  "/graphql",
  expressGraphql({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(PORT);
// tslint:disable-next-line:no-console
console.log(`Running a GraphQL API server at localhost:${PORT}/graphql !`);
