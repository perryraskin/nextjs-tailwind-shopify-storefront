import React, { useState, useEffect, useRef, useContext } from "react"
import { NextPage } from "next"
import Head from "next/head"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Cookies from "js-cookie"
import {
  useCheckoutEffect,
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate
} from "../../services/checkout"

import CartContext from "./CartContext"
import LineItem from "./LineItem"

interface Props {}

const Cart: NextPage<Props> = ({}) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
  const node = useRef(null)
  const [checkout, setCheckout] = useState({
    id: "",
    lineItems: { edges: [] },
    webUrl: "",
    subtotalPrice: 0,
    totalTax: 0,
    totalPrice: 0
  })
  const [customerAccessToken, setCustomerAccessToken] = useState(null)
  const [isNewCustomer, setNewCustomer] = useState(false)
  const [isCustomerAuthOpen, setCustomerAuthOpen] = useState(false)
  const [
    showAccountVerificationMessage,
    setAccountVerificationMessage
  ] = useState(false)
  const checkoutId = Cookies.get("checkoutId")

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setIsCartOpen(false)
  }

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCartOpen])

  const openCheckout = () => {
    window.open(checkout.webUrl)
  }

  const [
    createCheckoutMutation,
    {
      data: createCheckoutData,
      loading: createCheckoutLoading,
      error: createCheckoutError
    }
  ] = useMutation(createCheckout)

  const [
    lineItemUpdateMutation,
    {
      data: lineItemUpdateData,
      loading: lineItemUpdateLoading,
      error: lineItemUpdateError
    }
  ] = useMutation(checkoutLineItemsUpdate)

  const [
    lineItemRemoveMutation,
    {
      data: lineItemRemoveData,
      loading: lineItemRemoveLoading,
      error: lineItemRemoveError
    }
  ] = useMutation(checkoutLineItemsRemove)

  const [
    customerAssociateMutation,
    {
      data: customerAssociateData,
      loading: customerAssociateLoading,
      error: customerAssociateError
    }
  ] = useMutation(checkoutCustomerAssociate)

  useEffect(() => {
    const variables = { input: {} }
    createCheckoutMutation({ variables }).then(
      res => {
        console.log("checkout:", res)
        const checkout = res.data.checkoutCreate.checkout
        if (!checkoutId) Cookies.set("checkoutId", checkout.id)
      },
      err => {
        console.log("create checkout error", err)
      }
    )
  }, [])

  useCheckoutEffect(createCheckoutData, "checkoutCreate", setCheckout)

  useCheckoutEffect(lineItemUpdateData, "checkoutLineItemsUpdate", setCheckout)
  useCheckoutEffect(lineItemRemoveData, "checkoutLineItemsRemove", setCheckout)
  useCheckoutEffect(
    customerAssociateData,
    "checkoutCustomerAssociate",
    setCheckout
  )

  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  const openCustomerAuth = event => {
    if (event.target.getAttribute("data-customer-type") === "new-customer") {
      setNewCustomer(true)
      setCustomerAuthOpen(true)
    } else {
      setNewCustomer(false)
      setCustomerAuthOpen(true)
    }
  }

  const accountVerificationMessage = () => {
    setAccountVerificationMessage(true)
    setTimeout(() => {
      setAccountVerificationMessage(false)
    }, 5000)
  }

  const closeCustomerAuth = () => {
    setCustomerAuthOpen(false)
  }

  const updateLineItemInCart = (lineItemId, quantity) => {
    const variables = {
      checkoutId: checkout.id,
      lineItems: [{ id: lineItemId, quantity: parseInt(quantity, 10) }]
    }
    lineItemUpdateMutation({ variables })
  }

  const removeLineItemInCart = lineItemId => {
    const variables = { checkoutId: checkout.id, lineItemIds: [lineItemId] }
    lineItemRemoveMutation({ variables })
  }

  const associateCustomerCheckout = customerAccessToken => {
    const variables = {
      checkoutId: checkout.id,
      customerAccessToken: customerAccessToken
    }
    customerAssociateMutation({ variables }).then(res => {
      setCustomerAuthOpen(false)
    })
  }

  let line_items = checkout.lineItems.edges.map(line_item => {
    return (
      <LineItem
        removeLineItemInCart={removeLineItemInCart}
        updateLineItemInCart={updateLineItemInCart}
        key={line_item.node.id.toString()}
        line_item={line_item.node}
      />
    )
  })

  return (
    <div ref={node} className={`z-40 Cart ${isCartOpen ? "Cart--open" : ""}`}>
      <header className="Cart__header">
        <h2 className="mb-0">Shopping Cart</h2>
        <button onClick={handleCartClose} className="Cart__close">
          ×
        </button>
      </header>
      <ul className="Cart__line-items">{line_items}</ul>
      <footer className="Cart__footer">
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Subtotal</div>
          <div className="Cart-info__pricing">
            <span className="pricing">${checkout.subtotalPrice}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Taxes</div>
          <div className="Cart-info__pricing">
            <span className="pricing">${checkout.totalTax}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Total</div>
          <div className="Cart-info__pricing">
            <span className="pricing">${checkout.totalPrice}</span>
          </div>
        </div>
        <button
          className="Cart__checkout bg-blue-600 text-white my-4 py-2"
          onClick={openCheckout}
        >
          Checkout
        </button>
      </footer>
    </div>
  )
}

export default Cart
