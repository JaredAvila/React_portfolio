import React, { Component } from "react";

import SWM from "../static/secondWinds.png";
import SMP from "../static/selfmadeprogramer.png";

class Testimonial extends Component {
  render() {
    return (
      <div id="testimonial" className="testimonialContainer">
        <h3 className="center">Professional Reviews</h3>
        <hr />
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
          <div className="col s12 m7 testiTestimonial">
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
            <p>-Richard, business owner - Second Winds Music</p>
          </div>
        </div>
        <div className="row testimonialCard testimonial-right">
          <div className="col s12 m7 testiTestimonial">
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
          <div className="col s12 m7 testiTestimonial">
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
        <div className="row">
          <div className="col s12 center">
            <h5>View more work by Avila Media Group</h5>
            <a href="/projects" className="btn blue lighten-1">
              Projects
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
