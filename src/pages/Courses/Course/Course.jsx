import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, img, category_id, price } = course;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl rounded-sm">
        <figure>
          <img className="course-thumb" src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-between items-center">
            <h3 className="text-xl lg:text-2xl font-bold text-pink-400">
              ${price}
            </h3>
            <Link to={`/course/${category_id}`}>
              <button className="btn btn-sm btn-outline btn-secondary rounded-sm">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
