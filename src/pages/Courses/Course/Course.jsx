import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, img, category_id } = course;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl rounded-sm">
        <figure>
          <img className="course-thumb" src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={`/course/${category_id}`}>
              <button className="btn btn-sm btn-outline btn-secondary rounded-sm">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
