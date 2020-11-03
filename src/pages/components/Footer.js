import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--logo">
          <img
            src="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f27dcf7c26368f592003d76_footer%20logo.png"
            alt="company logo"
          />
          <div className="social-icons">
            <img
              src="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f27dcf72edf618681499dd9_linked%20in.png"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f27dcf757d2ed2ff7afe4e3_instagram.png"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f27dcf690a4d08836bb5a25_behance.png"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f27dcf72edf61ade1499dd8_dribbble.png"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f27dcf80311fc84e30590ce_twitter.png"
              alt=""
            />
          </div>
        </div>
        <div className="footer--nav">
          <p>Home</p>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
    );
  }
}

export default Footer;
