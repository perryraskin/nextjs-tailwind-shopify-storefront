import { NextPage } from "next"
import Head from "next/head"
import React, { useState, useEffect, useContext } from "react"

import MenuBar from "./MenuBar"
import Footer from "./Footer"
import Cart from "../Cart/Cart"
import CartContext from "../Cart/CartContext"

interface Props {
  children: any
}

const Layout: NextPage<Props> = ({ children }) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#556cd6" />
        <link
          rel="icon"
          href="https://cdn.shopify.com/assets/images/logos/shopify-bag.png"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title>Next Shopify Storefront</title>
        <meta
          name="description"
          content="A Shopping Cart built with TypeScript, NextJS, React, Apollo Client, Shopify Storefront GraphQL API, and TailwindCSS."
        />
      </Head>
      <div className="antialiased text-gray-900">
        <div className="h-screen flex overflow-hidden">
          <div className="flex-1 flex-col relative z-0 overflow-y-auto">
            <MenuBar />
            <br />
            <br />
            <br />
            <br />
            {children}
            <Cart />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
