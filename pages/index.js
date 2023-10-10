import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";
import Link from "next/link";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Free Flow English</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Build + Deploy your first Headless Shopify Storefront with Next.js + Tailwind in as little as a day." />
        <meta property="og:title" content="Free Flow Business English" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la-psicologa-perinatal.vercel.app/" />
        <meta property="og:image" content="https://la-psicologa-perinatal.vercel.app/images/la-psicologa.png" />
        <meta property="og:description" content="An application for the promotions and sales of Free Flow Business English's bespoke coaching sessions" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Free Flow Business English" />
      </Head>
      <Hero />
      {/* Start of "about the company" section */}
      <section className="py-10 bg-gray-100 border border-b-gray-300">
        <div className="container mx-auto">
          {/* About the company content */}
          <h2 className="mb-6 text-4xl font-bold font-playfair">Our Mission</h2>
          <div className="text-lg text-gray-700">
  <p className="mb-4 font-roboto">
    Meet Andrew and James, your partners in mastering Business English Communication. Our mission is to empower you with the language skills and confidence you need to excel in the professional world.
  </p>

  <ul className="pl-6 mb-4 list-disc">
    <li>
      <span className="font-semibold">🚀 Free Get-To-Know-You Class:</span> Uncover your goals, and together, we'll chart the course to achieve them.
    </li>
    <li>
      <span className="font-semibold">🌟 Private Sessions:</span> Tailored exclusively to your unique circumstances and objectives, ensuring rapid progress.
    </li>
    <li>
      <span className="font-semibold">⏰ Flexible Scheduling:</span> We adapt to your busy life, with sessions available mornings, evenings, and weekends.
    </li>
    <li>
      <span className="font-semibold">🗣️ In-session Feedback:</span> Instantly enhance your language skills, enabling more concise and confident communication.
    </li>
    <li>
      <span className="font-semibold">🎯 Personalized Sessions:</span> Dive deep into topics relevant to your specific needs and areas of expertise.
    </li>
  </ul>
  <p className="mb-4">
    Join us today, and transform your career journey.
  </p>
  <p className="mb-4">
    Curious to learn more about your coaches? <Link href="/about"><a className="text-blue-500">Meet Andrew and James here</a></Link>.
  </p>
  <p>
    Ready to take the first step? <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/freeflowbusinessenglish/complimentary-strategy-session"><span className="text-blue-500">Schedule your free 30-minute consultation now</span></a>.
  </p>
</div>
</div>
</section>

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
