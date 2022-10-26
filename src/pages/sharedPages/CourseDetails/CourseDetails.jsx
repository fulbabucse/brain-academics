import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../../../assets/style.css";
import Pdf from "react-to-pdf";
import {
  FaStar,
  FaInfoCircle,
  FaBookReader,
  FaCheck,
  FaDownload,
} from "react-icons/fa";

const ref = createRef();

const CourseDetails = () => {
  const courseDetailsData = useLoaderData()[0];
  const {
    id,
    author,
    course_name,
    author_img,
    picture,
    published_date,
    student,
    rating,
    title,
    price,
    course_overview,
    desc,
  } = courseDetailsData;
  return (
    <div className="course-details-container px-2 lg:px-20 my-4" ref={ref}>
      <div className="text-slate-600">
        <div className="flex justify-between">
          <h2 className="text-2xl text-center lg:text-start lg:text-4xl font-bold mb-3">
            {title}
          </h2>
          <Pdf targetRef={ref} filename="details.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="btn btn-sm btn-outline btn-primary rounded-sm"
              >
                <FaDownload className="mx-1"></FaDownload> Download
              </button>
            )}
          </Pdf>
        </div>
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
          <h4 className="text-xl font-bold flex gap-1 items-center">
            <FaInfoCircle></FaInfoCircle> Descriptions
          </h4>
          <p>{desc}</p>
          <h4 className="text-xl font-bold flex gap-1 items-center mt-4">
            <FaBookReader></FaBookReader> Everything you will learn from this
            course
          </h4>
          <div className="mt-1">
            {course_overview.map((item, idx) => (
              <p key={idx} className="flex gap-1 items-center">
                <FaCheck></FaCheck> {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3 lg:mb-0">
        <div className="card card-compact lg:w-3/4 mx-auto rounded-md bg-base-100 shadow-xl">
          <figure>
            <img className="course-thumb" src={picture} alt={course_name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{course_name}</h2>
            <h4 className="text-xl font-bold">${price}</h4>
            <div className="card-actions">
              <Link to={`/course/checkout/${id}`} className="w-full">
                <button className="btn btn-sm btn-outline w-full rounded-md btn-secondary">
                  Get Premium Access
                </button>
              </Link>
            </div>
            <div className="text-center">
              <h4>15-Day Money-Back Guarantee</h4>
              <p>Full Lifetime Access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
