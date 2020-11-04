import React, { Component } from "react";

// ! props -- header, header color, text, imageSource
class BottomTopCard extends Component {
  render() {
    return (
      <div className="bottom-top-card">
        <img
          src={this.props.imageSource}
          alt=""
          className="bottom-top-card--img"
        />
        <h2
          className="bottom-top-card--header"
          style={{ color: `#${this.props.color}` }}
        >
          {this.props.header}
        </h2>

        {this.props.text ? (
          <p className="bottom-top-card--text">{this.props.text}</p>
        ) : (
          <button className="bottom-top-card--btn">Contact</button>
        )}
      </div>
    );
  }
}

export default BottomTopCard;
