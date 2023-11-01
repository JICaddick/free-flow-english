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
    <div ref={observe} className="relative h-[40rem]">
      <Image
      style={{filter: "blur(1px)", transform: "scale(1.1)", opacity: "0.95", position: "absolute", top: "0", left: "0", width: "100%", height: "75%",}}
        src="/sky_line.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center font-extrabold text-center text-white text-stroke-4 text-stroke-black">
        <p className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl lg:pt-10 font-lora" style={{ textShadow: "25px 25px 25px black" }}>
          Free Flow Business English
        </p>
      </div>
    </div>
  );
};

export default Hero;
