import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTh, FaTimes } from "react-icons/fa";
import UserThumb from "../../../assets/user2.png";

function Header() {
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

              <li className="text-white/90 text-center hover:text-white transition-all duration-500 uppercase text-sm font-bold">
                <Link to="/profile">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={UserThumb}
                    alt="User"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
