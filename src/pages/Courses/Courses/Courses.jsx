import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../../../assets/style.css";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="courses-container px-2 lg:px-20">
      <div>
        {courses.map((course) => (
          <p key={course.id}>
            <Link to={`/course/${course.category_id}`}>{course.name}</Link>
          </p>
        ))}
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
