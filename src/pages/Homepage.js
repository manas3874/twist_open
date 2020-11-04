import React, { Component } from "react";
import { Link } from "react-router-dom";
class Homepage extends Component {
  render() {
    return (
      <div className="welcome-homepage">
        <h2 className="welcome-homepage--header">Welcome</h2>

        <h3 className="welcome-homepage--subheader-1">
          This is a clone of{" "}
          <Link
            to={{ pathname: "https://www.twistopen.in/" }}
            target="_blank"
            className="welcome-homepage--important"
          >
            twistopen.com
          </Link>
        </h3>
        <h2 className="welcome-homepage--subheader-2">
          The project is developed using
          <span className="welcome-homepage--important"> React.js</span>
        </h2>
        <h2 className="welcome-homepage--subheader-3">
          Please use the{" "}
          <span className="welcome-homepage--important"> navigator</span> above
          to check the two developed pages!
        </h2>
      </div>
    );
  }
}

export default Homepage;
