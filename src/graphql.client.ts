/* import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const clientConfig = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/api/graphql'
  })
});

const apolloClient = new ApolloClient ({
  link: new HttpLink({
    uri: '/api/graphql'
  }),
  connectToDevTools: true,
})

export function client(): ApolloClient {
  return clientConfig;
} */
