const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

// this file is storing all the queries for the shopify store. To successfully remove the dummydata we'll have to write new queries for the new products and collections. We'll have to comment out or delete the dummydata queries.

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-07/graphql.json`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken, // From the shopify.dev api docs.
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error("Products not fetched")
  }
}

export async function getProductsInCollection() {
  const query = `
  {
    collectionByHandle(handle: "frontpage") {
      title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    originalSrc
                    altText
                  }                          }
                }
              }
            }
          }
        }
      }`
  const response = await ShopifyData(query)

  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : []

  return allProducts
}

export async function getAllProducts() {
  const query = `{
    products(first:25) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`
  const response = await ShopifyData(query)

  const slugs = response.data.products.edges ? response.data.products.edges : []

  return slugs
}

export async function getProduct(handle) {
  const query = `
  {
    productByHandle(handle: "${handle}") {
    collections(first: 1){
      edges{
        node{
          products(first: 5){
            edges{  
              node{
                priceRange{
                  minVariantPrice{
                    amount
                  }
                }
                handle
                title
                id
                images(first: 5){
                  edges{
                    node{
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
      id
      title
      handle
      description
      images(first: 5){
        edges{
          node{
            originalSrc
            altText
          }
        }
      }
      options{
        name
        values
        id
      }
      variants(first: 25){
        edges{
          node{
            selectedOptions{
              name
              value
            }
            image{
              originalSrc
              altText
            }
            title
            id
            priceV2{
              amount
            }
          }
        }
      }
    }
  }`
  const response = await ShopifyData(query)

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : []

  return product
}

export async function createCheckout(id, quantity) {
  const query = `
  mutation{
    checkoutCreate(input: {
      lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
    }){
      checkout {
        id
        webUrl
      }
    }
  }`

  const response = await ShopifyData(query)

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : []
  return checkout
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity: ${item.variantQuantity}
    }`
  })

  const query = `
    mutation {
      checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
          edges {
              node{
                id
                title
                quantity
              }
            }
          }
        }
      }
    }`

  const response = await ShopifyData(query)

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : []

  return checkout
}
