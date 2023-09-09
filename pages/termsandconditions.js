import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-3xl font-semibold text-center">
          Terms and Conditions
        </h1>

        <div className="prose">
          <h2>1. Introduction</h2>
          <p>
            Welcome to our website. These terms and conditions apply to your
            use of this website. By using this website, you accept these terms
            and conditions in full. If you disagree with these terms and
            conditions or any part of these terms and conditions, you must not
            use this website.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, we or our licensors own the intellectual
            property rights in the website and material on the website. Subject
            to the license below, all these intellectual property rights are
            reserved.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
