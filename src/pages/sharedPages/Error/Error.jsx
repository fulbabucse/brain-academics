import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-24">
      <div className="mb-4">
        <h1 className="text-9xl text-slate-600 font-bold">
          4<span className="text-pink-500">0</span>4
        </h1>
        <h3 className="font-bold text-xl uppercase">
          The page you requested could not Found
        </h3>
      </div>
      <Link to="/">
        <button className="btn btn-sm btn-outline btn-secondary rounded-sm">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
