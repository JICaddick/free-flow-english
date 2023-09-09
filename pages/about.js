import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-3xl font-semibold text-center">About Us</h1>

        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8">
          {/* Profile Box 1 */}
          <div className="flex-shrink-0 overflow-hidden rounded-full w-36 h-36 md:w-48 md:h-48">
            <img
              src="/path-to-profile-image-1.jpg"
              alt="Profile 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">John Doe</h2>
            <h3 className="text-sm text-gray-600">English Tutor</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida urna quis dolor lacinia, vel malesuada dolor faucibus.
            </p>
          </div>

          {/* Profile Box 2 */}
          <div className="flex-shrink-0 overflow-hidden rounded-full w-36 h-36 md:w-48 md:h-48">
            <img
              src="/path-to-profile-image-2.jpg"
              alt="Profile 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Jane Smith</h2>
            <h3 className="text-sm text-gray-600">Business English Expert</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              gravida urna quis dolor lacinia, vel malesuada dolor faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
