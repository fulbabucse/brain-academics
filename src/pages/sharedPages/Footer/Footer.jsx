import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer px-2 lg:px-20 py-3 lg:py-6 bg-base-200 text-base-content">
        <div>
          <span className="footer-title text-2xl">Brains and Academics</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
        </div>
        <div>
          <span to="terms-conditions" className="footer-title">
            Legal
          </span>
          <Link to="terms-conditions" className="link link-hover">
            Terms of use
          </Link>
          <Link to="terms-conditions" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="terms-conditions" className="link link-hover">
            Cookie policy
          </Link>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="info@brain-academics.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
