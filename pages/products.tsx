import React from "react"
import { NextPage } from "next"
import Products from "../components/Products/Products"
// import services from "../services"
import isServer from "detect-node"
import { ProductSortKeys } from "../models"

interface Props {
  query: {
    query: string
    reverse: boolean
    sortKey: ProductSortKeys
    sortIndex: number
  }
}

const ProductsPage: NextPage<Props> = ({}) => {
  return <Products />
}

export default ProductsPage
