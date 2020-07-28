import React, { useState, useEffect, useContext } from "react"
import { NextPage } from "next"
import { useQuery, useMutation } from "@apollo/react-hooks"
// import Product from './components/Product';
// import Cart from './components/Cart';
// import CustomerAuthWithMutation from './components/CustomerAuth';
import gql from "graphql-tag"
import {
  useCheckoutEffect,
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate
} from "../../services/checkout"

import Products from "../../components/Products/Products"
import Layout from "../../components/Layout/Layout"
import CartContext from "../../components/Cart/CartContext"

interface Props {}

const query = gql`
  query query {
    shop {
      name
      description
      products(first: 20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            handle
            options {
              id
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

const ProductsPage: NextPage<Props> = ({}) => {
  const { isCartOpen, setIsCartOpen, checkout, setCheckout } = useContext(
    CartContext
  )
  const [isNewCustomer, setNewCustomer] = useState(false)
  const [isCustomerAuthOpen, setCustomerAuthOpen] = useState(false)
  const [
    showAccountVerificationMessage,
    setAccountVerificationMessage
  ] = useState(false)

  const [customerAccessToken, setCustomerAccessToken] = useState(null)

  const [
    createCheckoutMutation,
    {
      data: createCheckoutData,
      loading: createCheckoutLoading,
      error: createCheckoutError
    }
  ] = useMutation(createCheckout)

  const [
    lineItemAddMutation,
    {
      data: lineItemAddData,
      loading: lineItemAddLoading,
      error: lineItemAddError
    }
  ] = useMutation(checkoutLineItemsAdd)

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

  const { loading: shopLoading, error: shopError, data: shopData } = useQuery(
    query
  )

  useEffect(() => {
    const variables = { input: {} }
    createCheckoutMutation({ variables }).then(
      res => {
        console.log(res)
      },
      err => {
        console.log("create checkout error", err)
      }
    )
  }, [])

  useCheckoutEffect(createCheckoutData, "checkoutCreate", setCheckout)
  useCheckoutEffect(lineItemAddData, "checkoutLineItemsAdd", setCheckout)
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

  const addVariantToCart = (variantId, quantity) => {
    const variables = {
      checkoutId: checkout.id,
      lineItems: [{ variantId, quantity: parseInt(quantity, 10) }]
    }
    // TODO replace for each mutation in the checkout thingy. can we export them from there???
    // create your own custom hook???

    lineItemAddMutation({ variables }).then(res => {
      setIsCartOpen(true)
    })
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

  if (shopLoading) {
    return <p>Loading ...</p>
  }

  if (shopError) {
    return <p>{shopError.message}</p>
  }

  return (
    <Layout>
      <Products products={shopData.shop.products} />
    </Layout>
  )
}

export default ProductsPage
