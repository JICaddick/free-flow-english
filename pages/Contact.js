import React from 'react';

const Contact = () => {
  const emailAddress = 'freeflowbusinessenglish@gmail.com';

  const handleContactClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-4 text-3xl font-semibold">Contact Us</h1>
        <p className="mb-4">
          If you have a question, need further assistance, or would like to schedule a free consultation please feel free to reach out to us via
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
