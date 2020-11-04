import React, { Component } from "react";

// ! props -- header, header color, text, imageSource
class TopBottomCard extends Component {
  render() {
    return (
      <div className="top-bottom-card">
        <h2
          className="top-bottom-card--header"
          style={{ color: `#${this.props.color}` }}
        >
          {this.props.header}
        </h2>
        <p className="top-bottom-card--text">{this.props.text}</p>
        <img
          src={this.props.imageSource}
          alt=""
          className="top-bottom-card--img"
        />
      </div>
    );
  }
}

export default TopBottomCard;
