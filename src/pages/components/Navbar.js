import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar--logo">
        <img
          src="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f27dcf75c4db807583ae44c_logo.png"
          alt=""
        />
      </div>
      <div className="navbar--nav">
        <p className="navbar--nav__item">Home</p>
        <Link to="/work" className="navbar--nav__item">
          Work
        </Link>
        <Link to="/services" className="navbar--nav__item">
          Services
        </Link>
        <p className="navbar--nav__item">About</p>
        <p className="navbar--nav__item">Blog</p>
        <p className="navbar--nav__item">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
