import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import CourseDetails from "../pages/sharedPages/CourseDetails/CourseDetails";
import Premium from "../pages/sharedPages/Premium/Premium";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      {
        path: "courses",
        loader: () => fetch("http://localhost:5000/courseCategory"),
        element: <Courses></Courses>,
      },
      { path: "blog", element: <Blog></Blog> },
      { path: "faq", element: <FAQ></FAQ> },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/premium/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/single-courses/${params.id}`),
        element: <Premium></Premium>,
      },
    ],
  },
]);
