import gql from "graphql-tag"
import { ProductQueryVariables } from "../models"
import client from "./client"

const GET_FIRST_PRODUCTS = gql`
  query {
    products(sortKey: TITLE, first: 250) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          handle
          updatedAt
        }
      }
    }
  }
`

const GET_NEXT_PRODUCTS = gql`
  query getProds($cursor: String!) {
    products(sortKey: TITLE, first: 250, after: $cursor) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          handle
          updatedAt
        }
      }
    }
  }
`
export async function getProductsInfo() {
  var products = []
  async function getProductsFromQuery() {
    var newCursor = ""

    async function getNextProds(cursor) {
      return await client
        .query({
          query: GET_NEXT_PRODUCTS,
          variables: { cursor: cursor }
        })
        .then(result => {
          products = products.concat(result.data.products.edges)
          if (result.data.products.pageInfo.hasNextPage) {
            newCursor =
              result.data.products.edges[result.data.products.edges.length - 1]
                .cursor
            return getNextProds(newCursor)
          } else {
            return products
          }
        })
        .catch(err => console.log(err, { url: "sitemap generator" }))
    }

    await client
      .query({
        query: GET_FIRST_PRODUCTS
      })
      .then(result => {
        products = products.concat(result.data.products.edges)
        if (result.data.products.pageInfo.hasNextPage) {
          newCursor =
            result.data.products.edges[result.data.products.edges.length - 1]
              .cursor
          return getNextProds(newCursor)
        } else {
          return products
        }
      })
      .catch(err => console.log(err, { url: "sitemap generator" }))
  }
  await getProductsFromQuery()
  return products
}
