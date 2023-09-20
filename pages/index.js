import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductList"
import Hero from "../components/Hero"
import Head from "next/head"

// we could make our Head dynamic by creating a new SEO component and passing in props (data) as the title.
// lines 14 - 38 give us all the SEO we need for a perfect score. 

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>Modern eCommerce Course</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Build + Deploy your first Headless Shopify Storefront with Next.js + Tailwind in as little as a day."
        />
        <meta property="og:title" content="Modern eCommerce Course" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content=" https://la-psicologa-perinatal.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://la-psicologa-perinatal.vercel.app/images/la-psicologa.png"
        />
        <meta
          property="og:description"
          content="Build + Deploy your first Headless Shopify Storefront with Next.js + Tailwind in as little as a day"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Modern eCommerce Course" />
      </Head>
      <Hero />
    {/* Start of "about the company" section */}
    <div className="py-10 bg-white">
      <div className="container mx-auto">
        {/* About the company content */}
        <h2 className="mb-4 text-3xl font-semibold">About Our Company</h2>
        <p className="text-lg text-gray-700">
        We're Andy and James and We offer private Business English Communication Classes to help you develop your language skills and feel more confident when communicating in a Business environment.

Free Get-To-Know-You Class
This will help you identify your goals so that we can create the pathway to achieve them.

Private Sessions
One-to-one sessions ensure that the sessions are specific to your circumstances & needs, so that you achieve your goals more quickly.

Flexible Scheduling to meet your needs (mornings, evenings and weekends)
Organise your sessions around your work and family life.

In-session Feedback
Develop language immediately to help you speak more concisely and confidently.

Personalised Sessions
Topics will be specific to your needs and knowledge areas

Sign up today and make an impact on the rest of your career!

Learn more about the coaches here*.
        </p>
      </div>
    </div>
    {/* End of "about the company" section */}
      <ProductList products={products} />
    </div>
  ) 
} 

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: {products}, //will be passed to the page component as props
  }
}
