import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetailsData = useLoaderData()[0];
  console.log(courseDetailsData);
  return (
    <div>
      <h1>Course Details pages</h1>
    </div>
  );
};

export default CourseDetails;
