import React from "react";

const Blog = () => {
  return (
    <div className="my-3 text-justify">
      <div className="w-full lg:w-2/4 mx-auto px-2 my-2 text-slate-700">
        <h3 className="text-xl font-bold italic">Q1: What is cors?</h3>
        <p className="text-md font-semibold">
          <strong className="italic">Answer: </strong>Cross-Origin Resource
          Sharing (CORS) is an HTTP-header based mechanism that allows a server
          to indicate any origins (domain, scheme, or port) other than its own
          from which a browser should permit loading resources.
        </p>
      </div>

      <div className="w-full lg:w-2/4 mx-auto px-2 my-2 text-slate-700">
        <h3 className="text-xl font-bold italic">
          Q1: Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p className="text-md font-semibold">
          <strong className="italic">Answer: </strong>Firebase Authentication
          provides backend services, easy-to-use SDKs, and ready-made UI
          libraries to authenticate users to your app. It supports
          authentication using passwords, phone numbers, popular federated
          identity providers like Google, Facebook and Twitter, and more.
        </p>
      </div>

      <div className="w-full lg:w-2/4 mx-auto px-2 my-2 text-slate-700">
        <h3 className="text-xl font-bold italic">
          Q1: How does the private route work??
        </h3>
        <p className="text-md font-semibold">
          <strong className="italic">Answer: </strong>The private route
          component is similar to the public route, the only change is that
          redirect URL and authenticate condition. If the user is not
          authenticated he will be redirected to the login page and the user can
          only access the authenticated routes If he is authenticated (Logged
          in).
        </p>
      </div>

      <div className="w-full lg:w-2/4 mx-auto px-2 my-2 text-slate-700">
        <h3 className="text-xl font-bold italic">
          Q1: What is Node? How does Node work?
        </h3>
        <p className="text-md font-semibold">
          <strong className="italic">Answer: </strong>It is a used as backend
          service where javascript works on the server-side of the application.
          This way javascript is used on both frontend and backend. Node. js
          runs on chrome v8 engine which converts javascript code into machine
          code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
