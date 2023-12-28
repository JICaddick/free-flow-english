import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Free Flow English</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Free Flow Business English: An application for the promotions and sales of Free Flow Business English's bespoke business English coaching sessions" />
        <meta property="og:title" content="Free Flow Business English" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la-psicologa-perinatal.vercel.app/" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="An application for the promotions and sales of Free Flow Business English's bespoke coaching sessions" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Free Flow Business English" />
      </Head>
      <Hero />
      {/* Start of "about the company" section */}
      <section className="py-10 bg-gray-100 border border-b-gray-300">
        <div className="container px-10 mx-auto">
          {/* About the company content */}
          <h2 className="mb-6 text-4xl font-bold font-playfair">Our Mission</h2>
          <div className="text-lg text-gray-700">
  <p className="mb-4 font-roboto">
    Meet Andrew and James, your partners in mastering Business English Communication. Our mission is to empower you with the language skills and confidence you need to excel in the professional world.
  </p>


  <div className="grid grid-cols-1 my-8 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 xl:gap-x-8">
    <div>
      <Image
      src="/images/remote_meeting.svg"
        alt="flags of the UK and South Korea"
        width="72"
        height="72"
        quality={100}
      />
        <h2 className="font-bold">Free Get-To-Know-You Class:</h2>
        <p>Uncover your goals, and together, we'll chart the course to achieve them.</p>
    </div>
    <div>
    <Image
      src="/images/meeting.svg"
        alt="flags of the UK and South Korea"
        width="72"
        height="72"
        quality={100}
      />
        <h2 className="font-bold"> Private Sessions:</h2>
        <p>Tailored exclusively to your unique circumstances and objectives, ensuring rapid progress.</p>
    </div>
    <div>
    <Image
      src="/images/time_management.svg"
        alt="flags of the UK and South Korea"
        width="72"
        height="72"
        quality={100}
      />
        <h2 className="font-bold">Flexible Scheduling:</h2>
        <p>We adapt to your busy life, with sessions available mornings, evenings, and weekends.</p>
    </div>
    <div>
    <Image
      src="/images/feedback.svg"
        alt="flags of the UK and South Korea"
        width="72"
        height="72"
        quality={100}
      />
        <h2 className="font-bold">In-session Feedback:</h2>
        <p>Instantly enhance your language skills, enabling more concise and confident communication.</p>
    </div>
    <div>
    <Image
      src="/images/personal_goals.svg"
        alt="flags of the UK and South Korea"
        width="72"
        height="72"
        quality={100}
      />
        <h2 className="font-bold">Personalized Sessions:</h2>
        <p>Dive deep into topics relevant to your specific needs and areas of expertise.</p>
    </div>
    <div>
    <Image
      src="/uk_korea.png"
        alt="flags of the UK and South Korea"
        width={140}
        height="72"
        quality={100}
      />
        <h2 className="font-bold">Country-Specific Coaching</h2>
        <p>Gain insights on country-specific points of cross-cultural business to enhance your global business interactions.</p>
    </div>
    </div>


  <p className="mb-4">
    Curious to learn more about your coaches? <Link href="/about"><a className="text-blue-500">Meet Andrew and James here</a></Link>.
  </p>
  <p>
    Ready to take the first step? Join us today, and transform your career journey. <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/freeflowbusinessenglish/complimentary-strategy-session"><span className="text-blue-500">Schedule your free 30-minute consultation now</span></a>.
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
