import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex p-4">
      {/* Profile Box 1 */}
      <div className="flex flex-col items-center flex-1 p-4 space-y-4">
        <Image
          src="/images/profile_andy.png"
          alt="Andy's Profile Picture"
          className="flex-shrink-0 object-cover overflow-hidden rounded-full h-36 md:w-48 md:h-48"
          width={200}
          height={200}
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-center">Andrew Lockyer</h2>
          <h3 className="text-sm text-center text-gray-600">Business English Coach</h3>
          <p className="pb-6 mt-2">
            Andrew is an experienced English language teacher based in Mexico with a proven record in English language teaching and academic management over the last 8 years.
          </p>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="mx-4 border border-gray-300 h-100 "></div> 

      {/* Profile Box 2 */}
      <div className="flex flex-col items-center flex-1 p-4 space-y-4">
        <Image
          src="/images/profile_james.jpg"
          alt="Profile 2"
          className="flex-shrink-0 object-cover overflow-hidden rounded-full w-36 h-36 md:w-48 md:h-48"
          width={200}
          height={200}
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-center">James Ian Caddick</h2>
          <h3 className="text-sm text-center text-gray-600">Business English Expert</h3>
          <p className="pb-6 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis dolor lacinia, vel malesuada dolor faucibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
