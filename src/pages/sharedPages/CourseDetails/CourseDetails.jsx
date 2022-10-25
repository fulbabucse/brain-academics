import React from "react";
import { useLoaderData } from "react-router-dom";
import "../../../assets/style.css";
import { FaStar, FaBookReader } from "react-icons/fa";

const CourseDetails = () => {
  //   const [openTab, setOpenTab] = React.useState(1);
  const courseDetailsData = useLoaderData()[0];
  const {
    id,
    category_id,
    author,
    course_content,
    course_name,
    author_img,
    picture,
    published_date,
    student,
    rating,
    title,
  } = courseDetailsData;
  console.log(course_content.html_css);
  return (
    <div className="course-details-container px-2 lg:px-20 my-4">
      <div className="text-slate-600">
        <h2 className="text-4xl font-bold mb-3">{title}</h2>
        <div className="flex gap-2">
          <img
            className="w-12 h-12 rounded-full"
            src={author_img}
            alt={author}
          />
          <div>
            <h5 className="text-xl font-bold">{author}</h5>
            <p>{published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 lg:w-1/4 justify-between">
          <h4 className="font-semibold">Student: {student}</h4>
          <span className="flex gap-1 items-center">
            <FaStar className="text-pink-600"></FaStar>
            <p>{rating}</p>
          </span>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-slate-700 flex gap-2 items-center">
            <span>
              <FaBookReader></FaBookReader>
            </span>
            Course Content
          </h2>
          <div>
            {course_content?.html_css?.map((content, idx) => (
              <div key={idx}>
                <div>
                  <tbody>
                    <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                      <td className="font-bold">{content.title}</td>
                      <td className="text-md font-semibold text-slate-700">
                        {content.desc}
                      </td>
                    </tr>
                  </tbody>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis a
          reprehenderit reiciendis accusantium voluptate explicabo totam
          doloribus nam dolore repudiandae!
        </h2>
      </div>
    </div>
  );
};

export default CourseDetails;
