import React from "react"
import { NextPage } from "next"
import Router from "next/router"
import withLayout from "../../hocs/withLayout"
import utilities from "../../utilities"

import Button from "../Elements/Button"
import BestSellers from "../Products/BestSellers"

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <div className="text-center">
      <h1>Next.js Shopify Storefront</h1>
      <p>
        A Shopping Cart built with TypeScript, NextJS, React, Apollo Client,
        Shopify Storefront GraphQL API, and TailwindCSS
      </p>
      <Button
        text="Browse Products"
        extend="bg-blue-600 hover:bg-blue-500 text-white"
        onClick={() => utilities.link({ path: "/products" })}
      />
      <a
        href="https://github.com/perryraskin/nextjs-tailwind-shopify-storefront"
        target="_blank"
      >
        <Button
          text="Get Source Code"
          extend="bg-gray-600 hover:bg-gray-500 text-white"
        />
      </a>
      <BestSellers />
    </div>
  )
}

export default withLayout(Home)
