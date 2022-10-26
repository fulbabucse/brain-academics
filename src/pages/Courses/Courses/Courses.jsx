import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../../../assets/style.css";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import Course from "../Course/Course";

const Courses = () => {
  const { theme } = useContext(ThemeContext);
  const courses = useLoaderData();
  return (
    <div className="courses-container px-2 lg:px-20" id={theme}>
      <div>
        {courses.map((course) => (
          <p key={course.id} className="my-2">
            <Link to={`/course/${course.category_id}`}>
              <button className="btn btn-sm w-full btn-outline btn-secondary rounded-sm">
                {course.name}
              </button>
            </Link>
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
