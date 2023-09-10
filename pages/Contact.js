import React from 'react';

const Contact = () => {
  const emailAddress = 'info@example.com';

  const handleContactClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-4 text-3xl font-semibold">Contact Us</h1>
        <p className="mb-4">
          Have a question or need assistance? Feel free to reach out to us via
          email.
        </p>
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={handleContactClick}
        >
          Email Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
