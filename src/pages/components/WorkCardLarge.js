import React, { Component } from "react";

class WorkCardLarge extends Component {
  render() {
    return (
      <div className="work-card-large">
        {this.props.source ? (
          <img src={this.props.source} alt="" />
        ) : (
          <h3>Dying to see more? Give us a shout!</h3>
        )}

        {this.props.header ? (
          <h2>{this.props.header}</h2>
        ) : (
          <input
            className="work-card-large--input"
            type="text"
            placeholder="Enter your email address"
          />
        )}

        {this.props.description ? (
          <h2 className="work-card-large--description">
            {this.props.description}
          </h2>
        ) : (
          <button className="work-card-large--btn">Shout</button>
        )}
      </div>
    );
  }
}

export default WorkCardLarge;
