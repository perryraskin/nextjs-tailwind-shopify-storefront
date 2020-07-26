import React from "react"
import Head from "next/head"
import App from "next/app"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"

import "../styles/tailwind.css"

const httpLink = createHttpLink({ uri: process.env.REACT_APP_STORE_URI })

const middlewareLink = setContext(() => ({
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_TOKEN
  }
}))

export const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache()
})

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          ></meta>
          {/* General tags */}
          <meta
            key="description"
            property="description"
            content="Next.js Shopify Storefront"
          />
          <title key="title">Next.js Shopify Storefront</title>
          {/* OpenGraph tags */}
          <meta
            key="og:url"
            property="og:url"
            content="https://github.com/perryraskin/nextjs-tailwind-shopify-storefront"
          />
          <meta
            key="og:title"
            property="og:title"
            content="Next.js Shopify Storefront"
          />
          <meta
            key="og:description"
            property="og:description"
            content="Next.js Shopify Storefront"
          />
          {/* <meta key="og:image" property="og:image" content="" /> */}
          <meta key="og:type" property="og:type" content="website" />
          {/* Twitter Card tags */}
          <meta
            key="twitter:title"
            property="twitter:title"
            content="Next.js Shopify Storefront"
          />
          <meta
            key="twitter:description"
            property="twitter:description"
            content="Next.js Shopify Storefront"
          />
          {/* <meta key="twitter:image" property="twitter:image" content="" /> */}
          <meta key="twitter:card" property="twitter:card" content="summary" />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default MyApp
