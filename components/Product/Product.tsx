import { NextPage } from "next"
import React, { useState } from "react"
import Link from "next/link"

interface Props {
  product: any
}

const Product: NextPage<Props> = ({ product }) => {
  let defaultOptionValues = {}

  product.options.forEach(selector => {
    defaultOptionValues[selector.name] = selector.values[0]
  })

  const [selectedOptions, setSelectedOptions] = useState(defaultOptionValues)

  const [variantImage, setVariantImage] = useState(product.images.edges[0] ? product.images.edges[0].node : "")
  const [variant, setVariant] = useState(product.variants.edges[0].node)
  const [variantQuantity, setVariantQuantity] = useState(1)

  const findImage = (images, variantId) => {
    const primary = images[0]

    const image = images.filter(function(image) {
      return image.variant_ids.includes(variantId)
    })[0]

    return (image || primary).src
  }
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={`/products/${product.handle}`}>
        <a className="block relative h-48 rounded overflow-hidden">
          {product.images.edges.length ? (
            <img
              className="object-cover object-center w-full h-full block"
              src={variantImage.src}
              alt={`${product.title} product shot`}
            />
          ) : null}
        </a>
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 border-0 mb-1 title-font text-lg font-medium">
          {product.title}
        </h2>
        <p className="mt-1">${variant.price}</p>
      </div>
    </div>
  )
}

export default Product
