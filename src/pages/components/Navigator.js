import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navigator extends Component {
  render() {
    return (
      <div className="navigator">
        <Link to="/work">Work page</Link>
        <Link to="/services">Services page</Link>
      </div>
    );
  }
}

export default Navigator;
