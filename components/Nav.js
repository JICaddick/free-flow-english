import Link from "next/link"
import { useContext } from "react"
import { CartContext } from '../context/shopContext'
import MiniCart from "./MiniCart"

export default function Nav() {

  const {cart, cartOpen, setCartOpen} = useContext(CartContext)
// here we're creating a quantity counter that will show the number of items in the cart. 
  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })


  return (
    <header className="sticky top-0 z-20 border border-gray-500 bg-sky-100">
      <div className="flex items-center justify-between max-w-6xl px-4 pt-4 pb-2 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="pt-1 text-lg font-bold">
              Home
            </span>
          </a>
        </Link>
        <a className="font-bold cursor-pointer text-md"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>    
    </header>
  )
}
