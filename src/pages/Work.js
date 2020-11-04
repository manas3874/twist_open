import React, { Component } from "react";
import Footer from "./components/Footer";
import WorkCardSmall from "./components/WorkCardSmall";
import WorkCardLarge from "./components/WorkCardLarge";
import Navbar from "./components/Navbar";
class Work extends Component {
  render() {
    return (
      <div className="work-page">
        <div className="work-page--banner">
          <Navbar />
          <img
            src="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f24ee1393206ce40457de01_The%20fruits%20of.png"
            alt=""
          />
          <h2>our labour</h2>
        </div>
        <div className="work-page--works">
          <div className="work-page--row">
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f6235f23fd9b55d1ffcff00_str8bat.jpg"
              header="Str8bat"
              description="Mobile App"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f6235fe81d341a513b9f0c6_maya.jpg"
              header="Maya"
              description="Enterprise App"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f62360948dd704d12940833_pitch%20invasion.jpg"
              header="Pitch Invasion"
              description="Corporate Website"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f7575c444d1a7521219b483_testimonial.png"
              header=""
              description=""
            />
          </div>
          <div className="work-page--row work-page--row-left-large">
            <WorkCardLarge
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f6248599dd40308bb8e9c4b_Easy%20Onboarding%201.png"
              header="What makes great Mobile App UX"
              description="Find Out"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f50c25705b94b7ae6e3a674_scoryboard%20(1).jpg"
              header="Scoryboard"
              description="Web Product"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2bbcb957718d09441ea759_marketsN%20-%20work%20page.jpg"
              header="marketsN"
              description="Corporate Website"
            />
          </div>
          <div className="work-page--row">
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f4cac443b1d415e753008f0_core%20ebook.jpg"
              header="The Economy"
              description="Digital eBook"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f52336673ba236788e398fb_joule%20iq%20tile%20(1).jpg"
              header="JouleiQ"
              description="Enterprise App"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f35153ee484acf316c46823_immersion%20(1).jpg"
              header="Immersion UX"
              description="Corporate Website"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f3d2b9e6c019f10d02d7c92_ferroli%20(1).jpg"
              header="Ferroli"
              description="Corporate Website"
            />
          </div>
          <div className="work-page--row work-page--row-middle-large">
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f4f470caeab470f97920d44_gram%20vikas%20(1).jpg"
              header="Gram Vikas"
              description="NGO Website"
            />
            <WorkCardLarge
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f621bdfa6ebd53c89fb18ab_Cross%20Device%20Experience.png"
              header="What leads to awesome Enterprise App UX"
              description="Find Out"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f3f58cbd9f60a2792bc04a7_fertility%20tracker%20(1).jpg"
              header="IZiel Healthcare"
              description="Mobile App"
            />
          </div>
          <div className="work-page--row work-page--row-left-large">
            <WorkCardLarge
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f75739388adac01b1a3813c_UX%20research.png"
              header="How to use UX research to extract insights"
              description="Find Out"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2a977bd1340069c88ff5b3_koinearth%20home%20page.jpg"
              header="Koinearth"
              description="Corporate Website"
            />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f2c118af176cd0bbfe3c3a8_marketsN%20product%20-%20home%20page.jpg"
              header="marketsN"
              description="Enterprise App"
            />
          </div>
          <div className="work-page--row work-page--row-middle-large">
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f4f479733ab64ad61c8b03a_core%20(1).jpg"
              header="The CORE project"
              description="Promotional Website"
            />
            <WorkCardLarge source="" header="" description="" />
            <WorkCardSmall
              source="https://uploads-ssl.webflow.com/5f24ee1393206c44cc57dcb0/5f623e834d5916a2ec4dda73_Stay%20Relevant.png"
              header="How communication comes alive on a website"
              description="Find Out"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Work;
