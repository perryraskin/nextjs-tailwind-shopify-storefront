import gql from "graphql-tag"
import { ProductQueryVariables } from "../models"
import client from "./client"

const PRODUCT_FRAGMENT = gql`
  fragment product on Product {
    title
    description
    images(first: 1) {
      edges {
        node {
          altText
          transformedSrc
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
      }
    }
    options {
      id
      name
      values
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`

export const PRODUCT_QUERY = gql`
  ${PRODUCT_FRAGMENT}
  query product($handle: String!) {
    productByHandle(handle: $handle) {
      ...product
    }
  }
`

export async function get(variables: ProductQueryVariables) {
  const { data } = await client.query({
    query: PRODUCT_QUERY,
    variables
  })

  return data
}
