import React, { Component } from "react";

import SWM from "../static/secondWinds.png";
import SMP from "../static/selfmadeprogramer.png";

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonialContainer">
        <h3>What are others saying about Avila Media Group</h3>
        <hr />
        <br />
        <div className="row testimonialCard">
          <div className="col s12 m5 imgTestimonial">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://www.secondwindsmusic.com/"
            >
              <img className="responsive-img" src={SWM} alt="" />
              <p className="center">view website</p>
            </a>
          </div>
          <div className="col s12 m7">
            <h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.secondwindsmusic.com/"
              >
                Second Winds Music
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              autem laborum nisi? A neque qui nobis, quo dolor porro laboriosam
              vel est dicta doloribus modi autem esse, deserunt molestiae iusto
              libero obcaecati assumenda aliquam aperiam.
            </p>
            <br />
            <p>-Richard, business owner of Second Winds Music</p>
          </div>
        </div>
        <div className="row testimonialCard">
          <div className="col s12 m7">
            <h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.selfmadeprogramer.com/"
              >
                Software Developer Portfolio
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              autem laborum nisi? A neque qui nobis, quo dolor porro laboriosam
              vel est dicta doloribus modi autem esse, deserunt molestiae iusto
              libero obcaecati assumenda aliquam aperiam.
            </p>
            <br />
            <p>-Jared, Software Developer/Entrepreneur</p>
          </div>
          <div className="col s12 m5 imgTestimonial">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://www.selfmadeprogramer.com/"
            >
              <img className="responsive-img" src={SMP} alt="" />
              <p className="center">view website</p>
            </a>
          </div>
        </div>
        <div className="row testimonialCard">
          <div className="col s12 m5 imgTestimonial">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://www.secondwindsmusic.com/"
            >
              <img className="responsive-img" src={SMP} alt="" />
              <p className="center">view website</p>
            </a>
          </div>
          <div className="col s12 m7">
            <h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.secondwindsmusic.com/"
              >
                Second Winds Music
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              autem laborum nisi? A neque qui nobis, quo dolor porro laboriosam
              vel est dicta doloribus modi autem esse, deserunt molestiae iusto
              libero obcaecati assumenda aliquam aperiam.
            </p>
            <br />
            <p>-Richard, business owner of Second Winds Music</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
