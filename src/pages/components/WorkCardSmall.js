import React, { Component } from "react";

class WorkCardSmall extends Component {
  render() {
    return (
      <div className="work-card-small">
        <img src={this.props.source} alt="" />
        <h2 className="work-card-small__header">{this.props.header}</h2>
        <h2 className="work-card-small__description">
          {this.props.description}
        </h2>
      </div>
    );
  }
}

export default WorkCardSmall;
