import React, { Component } from "react";
import "../App.css";

import Contact from "./Contact";
import ServiceBoxes from "./serviceBoxes";
import Testimonial from "./Testimonial";
import Follow from "./Follow";
import Slider from "./Slider";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="sliderContent">
          <Slider />
        </div>
        <section className="section section-testimonial">
          <Testimonial />
        </section>
        <section className="section section-follow">
          <Follow />
        </section>
        <section className="section-contact">
          <div className="row">
            <div className="col s12 m6">
              <Contact />
            </div>
            <div className="col s12 m6">
              <ServiceBoxes />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
