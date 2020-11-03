import React, { Component } from "react";

class WorkCardLarge extends Component {
  render() {
    return (
      <div className="work-card-large">
        <img src={this.props.source} alt="" />
        <h2>{this.props.header}</h2>
        <h2>{this.props.description}</h2>
      </div>
    );
  }
}

export default WorkCardLarge;
