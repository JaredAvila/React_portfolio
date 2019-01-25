import React, { Component } from "react";

class serviceBoxes extends Component {
  render() {
    return (
      <div className="servicBoxes">
        <div className="row">
          <div className="col m12 l6">
            <div className="card grey darken-3">
              <div className="card-content">
                <span className="card-title center">Analytics</span>
                <p className="centered">
                  <i className="fas fa-chart-pie fa-4x" />{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  maxime soluta laboriosam autem facilis vel nesciunt voluptate
                  perspiciatis, quae saepe.
                </p>
              </div>
            </div>
          </div>
          <div className="col m12 l6">
            <div className="card grey darken-3">
              <div className="card-content">
                <span className="card-title center">Get Better Results</span>
                <p className="centered">
                  <i class="fas fa-chart-line fa-4x" />
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid tenetur voluptatibus omnis eius voluptates dolorem
                  aliquam sapiente asperiores, ipsum nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m12 l6">
            <div className="card grey darken-3">
              <div className="card-content">
                <span className="card-title center">
                  Search Engine Optimization
                </span>
                <p className="centered">
                  <i class="fas fa-search-dollar fa-4x" />
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, ipsum! Sed quo neque necessitatibus, incidunt
                  delectus itaque ipsa. Ipsam, a.
                </p>
              </div>
            </div>
          </div>
          <div className="col m12 l6">
            <div className="card grey darken-3">
              <div className="card-content">
                <span className="card-title center">Hosting Options</span>
                <p className="centered">
                  <i class="fas fa-sitemap fa-4x" />
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                  dolor aliquam est maiores asperiores fuga nam expedita eum
                  atque officiis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default serviceBoxes;
