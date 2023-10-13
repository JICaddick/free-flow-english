import { useState, useContext, useEffect } from "react"
import { formatter } from "../utils/helpers"
import ProductOptions from "./ProductOptions"
import { CartContext } from "../context/shopContext"
import useSWR from "swr"
import axios from "axios"
 
const fetcher = (url, id) => (
    axios.get(url, {
        params: {
            id: id
        }
    }).then((res) => res.data)
) 

export default function ProductForm({ product }) {

    const { data: productInventory } = useSWR(
        ['/api/available', product.handle],
        (url, id) => fetcher(url, id),
        { errorRetryCount: 3 }
    )
    // we handle variant availability here with state (useState).
    const [available, setAvailable] = useState(true)

    const { addToCart } = useContext(CartContext)

    const allVariantOptions = product.variants.edges?.map(variant => {
        const allOptions = {}
        variant.node.selectedOptions.map(item => {
            allOptions[item.name] = item.value
        })

        return {
            id: variant.node.id,
            title: product.title,
            handle: product.handle,
            image: variant.node.image?.originalSrc,
            options: allOptions,
            variantTitle: variant.node.title,
            variantPrice: variant.node.priceV2.amount,
            // many stores create a non-dynamic options selector. It's able to adjust to options on a specific prouct. 
            variantQuantity: 1,
        }
    })
    // on page load we want options selector to select the first value. 
    const defaultValues = {}
    product.options.map(item => {
        defaultValues[item.name] = item.values[0]
    })
// Next, we'll create a state variable to hold the selected options.
    const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
    const [selectedOptions, setSelectedOptions] = useState(defaultValues)

    function setOptions(name, value) {
        setSelectedOptions(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })

        const selection = {
            ...selectedOptions,
            [name]: value
        }

        allVariantOptions.map(item => {
            // we stringify here as we're comparing arrays.
            if  (JSON.stringify(item.options) === JSON.stringify(selection)) {
                setSelectedVariant(item)
            }
        })
    }

      useEffect(() => {
        if(productInventory) {
          const checkAvailable = productInventory?.variants.edges.filter
            (item => item.node.id === selectedVariant.id)

          if(checkAvailable[0]?.node.availableForSale) {
            setAvailable(true)
          } else {
            setAvailable(false)
          }
        }
      }, [productInventory, selectedVariant])
    

      return (
        <div className="flex flex-col w-full p-2 shadow-lg rounded-2xl md:w-1/2">
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p className="my-4 text-base text-gray-600">{product.description}</p>
          <span>
            {formatter.format(product.variants.edges[0].node.priceV2.amount)}
          </span>
      {/* {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        /> */}
      {/* ))} */}
    {
        available ? 
            <button
                      onClick={() => {
                          addToCart(selectedVariant)
                      }}
                className="px-2 py-3 mt-3 text-white bg-black rounded-lg hover:bg-gray-800"
            >
          Add to cart
        </button> : 
        <button
          className="px-2 py-3 mt-3 text-white bg-gray-800 rounded-lg cursor-not-allowed">
          Sold out!
        </button>
      }
    </div>
  )
}
