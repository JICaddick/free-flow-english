import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";
import Link from "next/link";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Modern eCommerce Course</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Build + Deploy your first Headless Shopify Storefront with Next.js + Tailwind in as little as a day." />
        <meta property="og:title" content="Modern eCommerce Course" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la-psicologa-perinatal.vercel.app/" />
        <meta property="og:image" content="https://la-psicologa-perinatal.vercel.app/images/la-psicologa.png" />
        <meta property="og:description" content="Build + Deploy your first Headless Shopify Storefront with Next.js + Tailwind in as little as a day" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Modern eCommerce Course" />
      </Head>
      <Hero />
      {/* Start of "about the company" section */}
      <section className="py-10 bg-gray-100 border border-b-gray-300">
        <div className="container mx-auto bd-">
          {/* About the company content */}
          <h2 className="mb-6 text-3xl font-semibold">About Our Company</h2>
          <div className="text-lg text-gray-700">
            <p className="mb-4">
              We're Andy and James, and we offer private Business English Communication Classes to help you develop your language skills and feel more confident when communicating in a business environment.
            </p>
            <ul className="pl-6 mb-4 list-disc">
              <li>
                <span className="font-semibold">Free Get-To-Know-You Class:</span> This will help you identify your goals so that we can create the pathway to achieve them.
              </li>
              <li>
                <span className="font-semibold">Private Sessions:</span> One-to-one sessions ensure that the sessions are specific to your circumstances & needs, so that you achieve your goals more quickly.
              </li>
              <li>
                <span className="font-semibold">Flexible Scheduling:</span> Organize your sessions around your work and family life with options in the mornings, evenings, and weekends.
              </li>
              <li>
                <span className="font-semibold">In-session Feedback:</span> Develop language skills immediately to help you speak more concisely and confidently.
              </li>
              <li>
                <span className="font-semibold">Personalized Sessions:</span> Topics will be specific to your needs and knowledge areas.
              </li>
            </ul>
            <p className="mb-4">
              Sign up today and make an impact on the rest of your career!
            </p>
            <p className="mb-4">
              Learn more about the coaches <Link href="/about"><a className="text-blue-500">here</a></Link>.
            </p>
            <p>
              To schedule a free 30-minute consultation, please click <Link href="/Contact"><a className="text-blue-500">here</a></Link>.
            </p>
          </div>
        </div>
      </section>
      {/* End of "about the company" section */}
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // Will be passed to the page component as props
  };
}
