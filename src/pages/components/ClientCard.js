import React, { Component } from "react";

// ! Props -- header, required images
class ClientCard extends Component {
  render() {
    return (
      <div className="client-card">
        <h2 className="client-card--header">{this.props.header}</h2>
        <div className="client-card--img">
          <img src={this.props.image_1} alt="" />
          <img src={this.props.image_2} alt="" />
          <img src={this.props.image_3} alt="" />
          <img src={this.props.image_4} alt="" />
          <img src={this.props.image_5} alt="" />
          <img src={this.props.image_6} alt="" />
        </div>
      </div>
    );
  }
}

export default ClientCard;
