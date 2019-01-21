import React, { Component } from "react";
import "../App.css";
import Background_1 from "../static/coding.jpeg";
import Background_2 from "../static/foodie.jpeg";
import Background_3 from "../static/business.jpeg";

class Home extends Component {
  render() {
    return (
      <section class="slider container">
        <ul class="slides">
          <li>
            <img src={Background_1} alt="" />
            <div class="caption center-align">
              <h2>Serving the Silicon Valley</h2>
              <h5 class="hide-on-small-only">
                The goal of my teaching is to impart to my students an
                appreciation, understanding and a love for music.
              </h5>
              <a
                href="#contact"
                class="btn btn-large teal waves-effect waves-light"
              >
                Contact Me
              </a>
            </div>
          </li>
          <li>
            <img src={Background_2} alt="" />
            <div class="caption left-align">
              <h2>Solid Foundation</h2>
              <h5 class="light grey-text text-lighten-3 hide-on-small-only">
                Whether the student is a beginner or a more advanced player,
                musical skills and technique must be built on a “solid
                foundation” to achieve musical mastery in every technical aspect
                and at every playing level.
              </h5>
              <a
                href="/projects"
                class="btn btn-large deep-purple waves-effect waves-red"
              >
                See Projects
              </a>
            </div>
          </li>
          <li>
            <img src={Background_3} alt="" />
            <div class="caption right-align">
              <h2>Years of Professional Experience</h2>
              <h5 class="light grey-text text-lighten-3 hide-on-small-only">
                Utilizing my “solid foundation” method, my students are given
                the best opportunity to be successful in their musical training
                and development.
              </h5>
              <a
                href="/about"
                class="btn btn-large deep-orange waves-effect waves-light"
              >
                Learn More
              </a>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Home;
