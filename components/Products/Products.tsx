import { NextPage } from "next"
import React from "react"
import _ from "lodash"
import Head from "next/head"

import Product from "../Product/Product"

interface Props {
  products: any
  checkout: any
}

const Products: NextPage<Props> = ({ products, checkout }) => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.edges.map(product => (
            <Product
              // addVariantToCart={addVariantToCart}
              checkout={checkout}
              key={product.node.id.toString()}
              product={product.node}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
