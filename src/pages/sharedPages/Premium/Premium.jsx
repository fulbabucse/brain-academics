import React from "react";
import { useLoaderData } from "react-router-dom";
import "../../../assets/style.css";

const Premium = () => {
  const premiumAccess = useLoaderData();
  const { picture, title } = premiumAccess;
  return (
    <div className="px-2 lg:px-20 lg:my-10 flex flex-col items-center">
      <h3 className="text-xl lg:text-4xl text-center font-bold text-slate-700 my-3">
        {title}
      </h3>
      <img className="w-60 h-66" src={picture} alt={title} />
      <h3 className="text-xl lg:text-4xl font-bold text-slate-700">
        Welcome, to Enroll in this Course.
      </h3>
    </div>
  );
};

export default Premium;
