import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductList"
import Hero from "../components/Hero"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Home({ products }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Free Flow English</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Free Flow Business English: An application for the promotions and sales of Free Flow Business English's bespoke business English coaching sessions"
        />
        <meta property="og:title" content="Free Flow Business English" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://la-psicologa-perinatal.vercel.app/"
        />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="An application for the promotions and sales of Free Flow Business English's bespoke coaching sessions"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Free Flow Business English" />
      </Head>
      <Hero />
      {/* Start of "about the company" section */}
      <section className="py-10 bg-gray-100 border border-b-gray-300">
        <div className="container px-10 pb-10 mx-auto">
          {/* About the company content */}
          <h2 className="mb-6 text-4xl font-bold font-playfair">Our Mission</h2>
          <div className="text-lg text-gray-600">
            <p className="mb-4 font-roboto">
              Meet Andrew and James, your partners in mastering Business English
              Communication. Our mission is to empower you with the language
              skills and confidence you need to excel in the professional world.
            </p>

            <div className="grid grid-cols-1 pb-10 my-8 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 xl:gap-x-8">
              <div>
                <Image
                  src="/images/remote_meeting.svg"
                  alt="flags of the UK and South Korea"
                  width="72"
                  height="72"
                  quality={100}
                />
                <h2 className="font-bold text-gray-900">Free Get-To-Know-You Class:</h2>
                <p className="text-gray-600">
                  Uncover your goals, and together, we'll chart the course to
                  achieve them.
                </p>
              </div>
              <div>
                <Image
                  src="/images/meeting.svg"
                  alt="flags of the UK and South Korea"
                  width="72"
                  height="72"
                  quality={100}
                />
                <h2 className="font-bold text-gray-900"> Private Sessions:</h2>
                <p className="text-gray-600">
                  Tailored exclusively to your unique circumstances and
                  objectives, ensuring rapid progress.
                </p>
              </div>
              <div>
                <Image
                  src="/images/time_management.svg"
                  alt="flags of the UK and South Korea"
                  width="72"
                  height="72"
                  quality={100}
                />
                <h2 className="font-bold text-gray-900">Flexible Scheduling:</h2>
                <p className="text-gray-600">
                  We adapt to your busy life, with sessions available mornings,
                  evenings, and weekends.
                </p>
              </div>
              <div>
                <Image
                  src="/images/feedback.svg"
                  alt="flags of the UK and South Korea"
                  width="72"
                  height="72"
                  quality={100}
                />
                <h2 className="font-bold text-gray-900">In-session Feedback:</h2>
                <p className="text-gray-600">
                  Instantly enhance your language skills, enabling more concise
                  and confident communication.
                </p>
              </div>
              <div>
                <Image
                  src="/images/personal_goals.svg"
                  alt="flags of the UK and South Korea"
                  width="72"
                  height="72"
                  quality={100}
                />
                <h2 className="font-bold text-gray-900">Personalized Sessions:</h2>
                <p className="text-gray-600">
                  Dive deep into topics relevant to your specific needs and
                  areas of expertise.
                </p>
              </div>
              <div>
                <Image
                  src="/uk_korea.png"
                  alt="flags of the UK and South Korea"
                  width={140}
                  height="72"
                  quality={100}
                />
                <h2 className="font-bold text-gray-900">Country-Specific Coaching</h2>
                <p className="text-gray-600">
                  Gain insights on country-specific points of cross-cultural
                  business to enhance your global business interactions.
                </p>
              </div>
            </div>
            {/* Buttons off-center below sm */}
            <div className="grid grid-cols-1 py-8 pl-8 border border-gray-300 rounded-md shadow-lg sm:grid-cols-2 sm:pl-0 md:pl-8 xl:pl-8 bg-slate-100">
              <div>
                <p className="pl-4 mb-2 text-3xl font-semibold text-gray-900 sm:text-3xl md:text-3xl lg:text-4xl xl:text-3xl">
                  Curious to learn more about your coaches?
                </p>
                <p className="pl-4 text-xl font-normal text-gray-600 sm:text-xl md:text-xl lg:text-2xl xl:text-xl">
                  Discover the dedicated coaches ready to guide and empower you
                  on your upskilling journey.
                </p>
              </div>
              <button
                onClick={() => router.push("/about")}
                className="px-8 mt-4 mr-16 text-lg text-white bg-blue-500 rounded-lg w-fit hover:bg-blue-600 xl:justify-self-end 2xl:justify-self-end xl:max-h-12 lg:max-h-12 md:max-h-12 sm:max-h-16 sm:mx-4 md:mx-8 lg:mx-auto xl:mr-16 min-h-fit md:mt-2 sm:mt-2 justify-self-center"
              >
                Meet Andrew and James
              </button>
            </div>
            <div className="grid grid-cols-1 py-8 pl-8 mt-10 border border-gray-300 rounded-md shadow-lg sm:grid-cols-2 sm:pl-0 md:pl-8 xl:pl-8 bg-slate-100">
              <div>
                <p className="pl-4 mb-2 text-3xl font-semibold text-gray-900 sm:text-3xl md:text-3xl lg:text-4xl xl:text-3xl">
                  Ready to take the first step?
                </p>
                <p className="pl-4 text-xl font-normal text-gray-600 sm:text-xl md:text-xl lg:text-2xl xl:text-xl">
                  Join us today, and transform your career journey.
                </p>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/freeflowbusinessenglish/complimentary-strategy-session",
                    "_blank",
                  )
                }
                className="px-8 mt-4 mr-16 text-lg text-white bg-blue-500 rounded-lg md:mt-1 w-fit hover:bg-blue-600 justify-self-end xl:max-h-12 lg:max-h-12 md:max-h-16 sm:max-h-20 sm:mx-4 md:mx-8 lg:mx-auto xl:mr-16 sm:mt-1"
              >
                Schedule free 30-minute consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // Will be passed to the page component as props
  }
}
