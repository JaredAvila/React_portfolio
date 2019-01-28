import React, { Component } from "react";
import "../App.css";
import Background_1 from "../static/coding.jpeg";
import Background_2 from "../static/foodie.jpeg";
import Background_3 from "../static/business.jpeg";

import Contact from "./Contact";
import ServiceBoxes from "./serviceBoxes";
import Testimonial from "./Testimonial";

class Home extends Component {
  render() {
    return (
      <div>
        <section class="slider">
          <ul class="slides">
            <li>
              <img src={Background_1} alt="" />
              <div class="caption center-align">
                <h2>Modern Responsive Design</h2>
                <h5 class="hide-on-small-only">
                  Our goal is to deliver beautiful, fully responsive,
                  interactive, unique and modern products and services that will
                  engage clients/customers.
                </h5>
                <a
                  href="#contact"
                  class="btn btn-large pink accent-3 waves-effect waves-light"
                >
                  Free quote
                </a>
              </div>
            </li>
            <li>
              <img src={Background_2} alt="" />
              <div class="caption left-align">
                <h2>Experience Speaks</h2>
                <h5 class="light grey-text text-lighten-3 hide-on-small-only">
                  "This will be someones testimonial when I eventually get one.
                  When I do it will be the best! Woo hoo!"
                  <br />
                  <br /> -Person McPeoplson
                </h5>
                <a
                  href="/projects"
                  class="btn btn-large purple accent-3 waves-effect waves-red"
                >
                  More Reviews
                </a>
              </div>
            </li>
            <li>
              <img src={Background_3} alt="" />
              <div class="caption right-align">
                <h2>Seach Engine Optimization</h2>
                <h5 class="light grey-text text-lighten-3 hide-on-small-only">
                  Get your website on the radar! We offer more than just a
                  webpage. Our Web Services packages offer "SEO" (Serach Engine
                  Optimiztaion) friendly sites, social media mangement,
                  marketing and more!
                </h5>
                <a
                  href="/services"
                  class="btn btn-large light-blue lighten-2 waves-effect waves-light"
                >
                  Learn More
                </a>
              </div>
            </li>
          </ul>
        </section>
        <section className="section section-testimonial">
          <Testimonial />
        </section>
        <section className="section section-contact">
          <div className="row">
            <div className="col s12 m6">
              <Contact />
            </div>
            <div className="col s12 m6">
              <ServiceBoxes />
            </div>
          </div>
        </section>
        <footer className="grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <ul className="collection with-header">
                  <li className="collection-header grey darken-2">
                    <h4>Avila Media Group</h4>
                  </li>
                  <li className="collection-item grey lighten-1">
                    AvilaMediaGroup@gmail.com
                  </li>
                  <li className="collection-item grey lighten-1">
                    (408) 368-7292
                  </li>
                  <li className="collection-item grey lighten-1">
                    228 Florence St.
                  </li>
                  <li className="collection-item grey lighten-1">
                    Sunnyvale, CA, 94086
                  </li>
                </ul>
              </div>
              <div className="col s12 m6">
                <h4>Social Links</h4>
                <hr />
                <div className="socialLinks">
                  <i class="fab fa-facebook fa-4x pink-text text-accent-3" />
                  <i class="fab fa-linkedin fa-4x light-blue-text text-darken-2" />
                  <i class="fab fa-youtube fa-4x deep-orange-text" />
                  <i class="fab fa-instagram fa-4x green-text text-darken-1" />
                  <i class="fab fa-twitter fa-4x purple-text text-accent-3" />
                </div>
              </div>
            </div>
          </div>
          <p className="grey darken-2 footerText">
            {" "}
            &copy; 2019 | Avila Media Group{" "}
          </p>
        </footer>
      </div>
    );
  }
}

export default Home;
