import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomTopCard from "./components/BottomTopCard";
import TopBottomCard from "./components/TopBottomCard";
class Services extends Component {
  render() {
    return (
      <div className="services-page">
        <div className="services-page--banner">
          <Navbar />
          <img src="" alt="" />
          <h2>our labour</h2>
        </div>
        <div className="services-page--slider"></div>
        <div className="services-page--business">
          <div className="services-page--business__row">
            <BottomTopCard />
            <TopBottomCard />
            <BottomTopCard />
          </div>
        </div>
        <div className="services-page--capabilities"></div>
        <div className="services-page--clients"></div>
        <Footer />
      </div>
    );
  }
}

export default Services;
