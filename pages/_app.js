import 'tailwindcss/tailwind.css'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
// using the router allows our dynamic product pages to add invividual products to the cart. We don't need to save the state on each one. 
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  const router = useRouter()
// setting the key to the route will allow us to keep the state of the cart on each page. State management won't get confused when we switch between pages.
  return (
    <ShopProvider>
      <Layout>
        <Head>
          <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com"
          />
          <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com" 
            crossOrigin="anonymous"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@100;200;300;400;500;600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
            rel="stylesheet"
          />
          <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com"
          />
          <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com" 
            crossorigin="anonymous"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@100;200;300;400;500;600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} key ={router.asPath}/>
      </Layout>
    </ShopProvider>
  )
}

export default MyApp
