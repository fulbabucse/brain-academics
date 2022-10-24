import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "courses", element: <Courses></Courses> },
      { path: "blog", element: <Blog></Blog> },
      { path: "contact", element: <Contact></Contact> },
    ],
  },
]);
