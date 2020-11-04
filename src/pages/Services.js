import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomTopCard from "./components/BottomTopCard";
import TopBottomCard from "./components/TopBottomCard";
import ClientCard from "./components/ClientCard";
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
            <BottomTopCard
              header="UX Audit"
              text="A UX audit is a series of steps carried out to help determine why your product is encountering issues or not performing at its intended capacity. Our comprehensive UX audit will provide you with hard data and actionable recommendations that will improve the user experience of your product."
              color="ffc72a"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2804bf75f5426781b9618d_serv%207-min.png"
            />
            <TopBottomCard
              header="UX Research"
              text="User experience research is a systematic, customer-centred study, that validates the development of a product from concept to delivery. Our arsenal as UX researchers is our vast domain experience and well honed set of research methods in our tool kit. Investing in user experience research for your business guarantees higher ROI."
              color="1fb58d"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2bb410e11b968ce7e65bfc_ux%20research%20(1).png"
            />
            <BottomTopCard
              header="Visual Facelift"
              text="Think your product or website is working fine but feels like the visual elements are not hitting the right notes? That’s when you come to us for a visual facelift, pretty much like a cosmetic surgeon we will amp up only the look and feel of your product without getting into the nitty-gritty of code and functionality."
              color="ff811d"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2804bfe4fc88210d6da184_serv%208-min.png"
            />
          </div>
          <div className="services-page--business__row">
            <TopBottomCard
              header="Heuristic Evaluation"
              text="Heuristic evaluation helps identify usability issues through a thorough assessment of the product's user interface. When usability improves, it translates into more engagement with the product and eventually a higher ROI. At Twist Open UX, our highly experienced team of UX researchers can conduct a heuristic evaluation of your product."
              color="3d9eff"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2804bf5e5f02620983989b_serv%2010-min.png"
            />
            <BottomTopCard
              header="Communication Strategy"
              text="In order to build a successful product, one needs an effective communication strategy. This helps you define your audience and generate high quality and precise content to help your customers engage successfully with your product. We at Twist Open UX can help you create an impactful communication strategy for your business."
              color="ff811d"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f24ee1393206c213d57ddc4_desktop%20serv%203.png"
            />
            <TopBottomCard
              header="Usability Testing"
              text="Is your product being used effectively? Is there scope for improvement? Usability testing is a method of testing a product or service on a target group of users to identify usability problems. We capture the insights and provide an effective action plan towards creating a successful product or service."
              color="1fb58d"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2804bfe4fc889d336da185_serv%206-min.png"
            />
          </div>
          <div className="services-page--business__row">
            <TopBottomCard
              header="Service Design"
              text="Organisations have to adapt quickly to ever evolving business needs, where control is literally in the hands of a customer. Service design is the process of improving the people, processes, culture, and assets of an organisation to improve the quality and interaction of service users as well as service providers."
              color="1fb58d"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2804be7cfa4443eeeeea35_serv%202-min.png"
            />
            <BottomTopCard
              header="Intranet Interfaces"
              text="Intelligent design and development of intranet interfaces ensures the success of good organizational network. We can help you design interfaces that are intuitive, easy to navigate and do not require resources to train employees."
              color="3d9eff"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2bb405b5ddee51767affe0_intranet%20interfaces.png"
            />
            <TopBottomCard header="" text="" color="" imageSource="" />
          </div>
          <div className="services-page--business__row">
            <BottomTopCard
              header="UX for SaaS Products"
              text="Software as a service is a cloud based hosting of a software application that grants users licence to this software on a subscription model. We can help you develop a phenomenal SaaS product from scratch, for your customers."
              color="1fb58d"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2804c0eb5bb41c48fcec00_service%201-min.png"
            />
            <BottomTopCard
              header="UX for Enterprise Apps"
              text="Enterprise apps are software applications designed specifically for enterprises. They digitise entire business processes through a single software to maximise efficiency and reduce dependencies. Our expertise in the field can help change the game for your business."
              color="f7c331"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2bb42057718dfb961e9a4a_ux%20for%20enterprise%20app.png"
            />
            <TopBottomCard
              header="UX for Mobile & Web Apps"
              text="A mobile app is a software application developed for smaller mobile gadgets like phones, watches and tablets while a web application runs on a web browser rather than directly on the mobile device. Looking to develop a web or mobile app? Our in-house UX capabilities ensure top notch mobile and web app development."
              color="ff811d"
              imageSource="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2804c03d8704ed4d93ee17_serv%2011-min.png"
            />
          </div>
        </div>
        <div className="services-page--capabilities"></div>
        <div className="services-page--clients">
          <ClientCard
            header="FINTECH & BANKING"
            image_1="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf0a8a91163bb99d8e8_Axis%20bank-min.jpg"
            image_2="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf2c4e0a78a1bce2195_standard%20charted%20bank-min.jpg"
            image_3="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf128d6427e7525f8ed_max%20life%20insurance-min.jpg"
            image_4="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf0cbf7b2a7aa2e750a_absa-min.jpg"
            image_5="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf08fa5cb7edd78f417_crayon-min.jpg"
            image_6="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf15472f815ae0a9a1c_national%20development%20bank-min.jpg"
          />
          <ClientCard
            header="CONSUMER RETAIL"
            image_1="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf0bfcb0921f0c3536e_google-min.jpg"
            image_2="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf0bd4fdb01a9afd6e0_ajio-min.jpg"
            image_3="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf3dc40b4f194246056_swoo-min.jpg"
            image_4="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f33abf23d3b2d5607d225a6_swigy-min.png"
            image_5=""
            image_6=""
          />
          {/* <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
