import React from "react";
import { useLoaderData } from "react-router-dom";
import "../../../assets/style.css";
import { FaStar, FaBookReader } from "react-icons/fa";

const Premium = () => {
  //   const [openTab, setOpenTab] = React.useState(1);
  const premiumAccess = useLoaderData();
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
    price,
    sub_title,
  } = premiumAccess;
  return (
    <div className="course-details-container px-2 lg:px-20 my-4">
      <div className="text-slate-600">
        <h2 className="text-xl lg:text-4xl font-bold mb-3">{title}</h2>
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
          <h2 className="text-3xl font-bold text-slate-700 flex gap-2 items-center">
            <span>
              <FaBookReader></FaBookReader>
            </span>
            Course Content
          </h2>

          {course_content?.html_css && (
            <div>
              <h3 className="font-bold text-2xl mt-3">HTML & CSS</h3>
              {course_content?.html_css?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.javascript && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Tailwind</h3>
              {course_content?.tailwind?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.javaScript && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Javascript</h3>
              {course_content?.javaScript?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.machine_learning && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Machine Learning</h3>
              {course_content?.machine_learning?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.python && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Python</h3>
              {course_content?.python?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.nodejs && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Node JS</h3>
              {course_content?.nodejs?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.nodejs && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Node JS</h3>
              {course_content?.nodejs?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.nodejs && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Node JS</h3>
              {course_content?.nodejs?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.nodejs && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Node JS</h3>
              {course_content?.nodejs?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.c && (
            <div>
              <h3 className="font-bold text-2xl mt-3">C Programming</h3>
              {course_content?.c?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.cplus && (
            <div>
              <h3 className="font-bold text-2xl mt-3">C++</h3>
              {course_content?.cplus?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.google_flutter && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Google Flutter</h3>
              {course_content?.google_flutter?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.ios && (
            <div>
              <h3 className="font-bold text-2xl mt-3">iOS Development</h3>
              {course_content?.ios?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}
          {course_content?.react_native && (
            <div>
              <h3 className="font-bold text-2xl mt-3">React Native</h3>
              {course_content?.react_native?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.mongodb && (
            <div>
              <h3 className="font-bold text-2xl mt-3">mongoDB</h3>
              {course_content?.mongodb?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.mysql && (
            <div>
              <h3 className="font-bold text-2xl mt-3">MySQL</h3>
              {course_content?.mysql?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.data_structure && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Data Structure</h3>
              {course_content?.data_structure?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}

          {course_content?.software_architecture && (
            <div>
              <h3 className="font-bold text-2xl mt-3">Software Architecture</h3>
              {course_content?.software_architecture?.map((content, idx) => (
                <tbody key={idx}>
                  <tr className="lg:flex-none md:flex-none flex flex-col my-1">
                    <td className="font-bold">{content.title}</td>
                    <td className="text-md font-semibold text-slate-700">
                      {content.desc}
                    </td>
                  </tr>
                </tbody>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Premium;
