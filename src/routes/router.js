import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import CourseDetails from "../pages/sharedPages/CourseDetails/CourseDetails";
import Error from "../pages/sharedPages/Error/Error";
import Premium from "../pages/sharedPages/Premium/Premium";
import Login from "../pages/UserActivities/Login/Login";
import Profile from "../pages/UserActivities/Profile/Profile";
import Register from "../pages/UserActivities/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        loader: () =>
          fetch(
            "https://brains-and-academics-server.vercel.app/courseCategory"
          ),
        element: <Courses></Courses>,
      },
      { path: "blog", element: <Blog></Blog> },
      { path: "faq", element: <FAQ></FAQ> },
      {
        path: "/course/:id",
        errorElement: <Error></Error>,
        loader: async ({ params }) =>
          fetch(
            `https://brains-and-academics-server.vercel.app/course/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/course/checkout/:id",
        errorElement: <Error></Error>,
        loader: async ({ params }) =>
          fetch(
            `https://brains-and-academics-server.vercel.app/single-courses/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Premium></Premium>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
    ],
  },
  { path: "*", element: <Error></Error> },
]);
