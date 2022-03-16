import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://yj3cate4.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

export default client;
