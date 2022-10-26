import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTh, FaTimes } from "react-icons/fa";
import UserThumb from "../../../assets/user2.png";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserProvider";

function Header() {
  const { user, signOutUser } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-slate-700">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <Link
                to="/"
                className="text-xl lg:text-3xl font-bold text-white/80 hover:text-white transition-colors duration-400"
              >
                Brains and Academics
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaTimes></FaTimes> : <FaTh></FaTh>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-sm font-bold">
                <Link to="/home">Home</Link>
              </li>

              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-sm font-bold">
                <Link to="/about">About</Link>
              </li>

              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-sm font-bold">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-sm font-bold">
                <Link to="/blog">Blog</Link>
              </li>

              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-sm font-bold">
                <Link to="/faq">FAQ</Link>
              </li>

              <li className="text-slate-500 text-center hover:text-slate-700 transition-all duration-500 uppercase text-sm font-bold">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={user?.photoURL || UserThumb}
                        alt={user?.displayName || "User"}
                        title={user?.displayName || "User Profile"}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-3 menu menu-compact dropdown-content bg-base-100 shadow-xl rounded-md w-52"
                  >
                    {user?.uid ? (
                      <li>
                        <Link to="/profile" className="justify-center">
                          {user?.displayName || "User Profile"}
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/profile" className="justify-center">
                          Profile
                        </Link>
                      </li>
                    )}
                    {user?.uid || user?.email ? (
                      <button
                        onClick={signOutUser}
                        className="btn btn-sm btn-secondary rounded-sm my-2"
                      >
                        Log Out
                      </button>
                    ) : (
                      <Link to="/login" className="my-2">
                        <button className="btn btn-sm btn-secondary rounded-sm w-full">
                          Log In
                        </button>
                      </Link>
                    )}

                    <Link to="/register">
                      <button className="btn btn-sm btn-outline rounded-sm btn-secondary w-full">
                        Register
                      </button>
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
