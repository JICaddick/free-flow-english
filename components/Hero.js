import Image from "next/image";
import useDimensions from 'react-cool-dimensions';
import arrayCeil from '../lib/arrayCeil';
import React, { useState } from 'react'

const Hero = () => {

  const [heroImage, setHeroImage] = useState()
  const imageSizes = [600, 1280, 1920]  
  
  const { observe } = useDimensions({
    onResize: ({ observe, unobserve, width, height }) => {
      setHeroImage(`hero-${arrayCeil(imageSizes, width, height)}.jpg`)

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });


  return (
    <div ref={observe} className="px-4 mx-auto my-48 text-center max-w-7xl sm:mt-24 md:mt-72">
      <Image
        style={{filter: "blur(1px)", transform: "scale(1.1)", opacity: "0.8", position: "absolute", top: "0", left: "0", width: "100%", height: "100%",}}
          src={'/hero_image.png'}
          alt="Hero Image"
          className="object-cover"
          layout="fill"
          quality={100}
      />
      <div className="relative content-end">
        <h1 className="font-extrabold font-lora">
          <p className="object-cover py-4 mt-24 text-white text-7xl bg-gradient-to-r sm:text-6xl md:text-7xl lg:text-8xl lg:pt-10 text-stroke-4 text-stroke-black .font-lora" style= {{textShadow:"20px 20px 25px black"}}>
            FUCKINNNN BUSINESS INGLISH MATEEEEE
          </p>
        </h1>

      </div>
    </div>
  );
};

export default Hero