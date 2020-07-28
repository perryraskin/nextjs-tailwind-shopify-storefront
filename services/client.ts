import { setContext } from "@apollo/client/link/context"
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink
} from "@apollo/client"

const httpLink = createHttpLink({
  uri: "https://empire-covers.myshopify.com/api/graphql"
})

const middlewareLink = setContext(() => ({
  headers: {
    "X-Shopify-Storefront-Access-Token": "d87927b8f71650768af77036bee6ca03"
  }
}))

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
