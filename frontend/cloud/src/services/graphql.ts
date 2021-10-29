import { InMemoryCache, gql } from '@apollo/client/core/core.cjs.js';
import { SvelteApolloClient } from "svelte-apollo-client";

import { Config } from '$config/index';

export const client = SvelteApolloClient({
  uri: String(Config.get("GRAPHQL_URL")),
  credentials: 'include',
  cache: new InMemoryCache(),
});

export { gql };