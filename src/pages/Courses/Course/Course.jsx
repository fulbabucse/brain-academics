import React from "react";

const Course = ({ course }) => {
  const { id, name, img } = course;
  console.log(course);
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
            <button className="btn btn-sm btn-outline btn-secondary rounded-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
