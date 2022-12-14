import React from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserProvider";

const Login = () => {
  const {
    signInUser,
    signInGoogleUser,
    signInGithubUser,
    signInFacebookUser,
    userPasswordReset,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleUserSignIn = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
        toast.success("Successfully logged your account!!");
      })
      .catch((err) => {
        console.error(err);
        if (err.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found");
        } else if (err.message === "Firebase: Error (auth/wrong-password).") {
          setError("You are entering the wrong password");
        }
      });
  };
  const handleGoogleSignIn = () => {
    signInGoogleUser().then((res) => {
      console.log(res.user);
      navigate(from, { replace: true });
      toast.success("Successfully logged with your Google Account!!");
    });
  };

  const handleGithubSignIn = () => {
    signInGithubUser()
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
        toast.success("Successfully logged with your Github Account!!");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const handleFacebookSignIn = () => {
    signInFacebookUser()
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
        toast.success("Successfully logged with your Facebook Account!!");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const handleBlurEmailAddress = (e) => {
    const email = e.target.value;
    setEmailAddress(email);
  };

  const handleResetPassword = () => {
    if (!emailAddress) {
      toast.error("Please enter your email address");
      return;
    }
    userPasswordReset(emailAddress)
      .then((res) => {
        toast.success(
          "Password reset email has sent, Please check Inbox or Spam"
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Log In
        </h1>
        <p className="text-center text-purple-700">
          Sign in to access your account
        </p>
        <form onSubmit={handleUserSignIn} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onBlur={handleBlurEmailAddress}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          <div className="mt-3">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Log In
            </button>
          </div>
          <p className="text-red-400 mt-1">{error}</p>
        </form>
        <span className="text-sm text-purple-600 mt-2">
          <button onClick={handleResetPassword}>Forget Password?</button>
        </span>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex flex-col mt-4 gap-y-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            Continue with Google
            <FaGoogle className="ml-2"></FaGoogle>
          </button>
          <button
            onClick={handleGithubSignIn}
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            Continue with Github
            <FaGithub className="ml-2"></FaGithub>
          </button>

          <button
            onClick={handleFacebookSignIn}
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            Continue with Facebook
            <FaFacebook className="ml-2"></FaFacebook>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-purple-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
