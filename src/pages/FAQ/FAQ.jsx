import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="w-full px-8 mx-auto my-3 lg:my-20 space-y-2 shadow lg:w-3/4">
        <details className="p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold">
            How long will it take to complete each course?
          </summary>
          <div className="mt-3">
            <p className="text-sm ml-4 leading-6 text-gray-600">
              Each course will take at least 3 months to complete
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold">What do I need?</summary>
          <div className="mt-3">
            <p className="text-sm ml-4 leading-6 text-gray-600">
              First, it takes dedicated time. Secondly, you will need a laptop
              or a computer
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold">
            What to do if you don't understand anything while doing the course?
          </summary>
          <div className="mt-3">
            <p className="text-sm ml-4 leading-6 text-gray-600">
              If you don't understand something well, it will be explained.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold">How can I contact you??</summary>
          <div className="mt-3">
            <p className="text-sm ml-4 leading-6 text-gray-600">
              You can contact us in many ways.
              <a
                href="mailto:info@brains-academics.com"
                className="underline text-blue-500 mx-2"
              >
                info@brains-academics.com
              </a>
              <a href="tel:01700000000" className="underline text-blue-500">
                01700000000
              </a>
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
