import React, { Component } from "react";
import "../App.css";
import Background_1 from "../static/coding.jpeg";
import Background_2 from "../static/foodie.jpeg";
import Background_3 from "../static/business.jpeg";

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
                  class="btn btn-large deep-purple waves-effect waves-red"
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
                  class="btn btn-large deep-orange waves-effect waves-light"
                >
                  Learn More
                </a>
              </div>
            </li>
          </ul>
        </section>
        <section className="section">
          <i class="fas fa-chart-pie fa-4x" />
          <i class="fas fa-chart-line fa-4x" />
          <i class="fas fa-search-dollar fa-4x" />
          <i class="fas fa-sitemap fa-4x" />
        </section>
      </div>
    );
  }
}

export default Home;
