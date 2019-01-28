import React, { Component } from "react";

class Follow extends Component {
  render() {
    return (
      <div id="follow" className="grey darken-3 container-flex">
        <div className="row">
          <div className="col s12 center white-text">
            <h3>Follow Avila Media Group</h3>
            <p className="white-text">
              Follow us on social media for the latest news and updates
            </p>
            <div className="socialLinks">
              <i class="fab fa-facebook fa-4x" />
              <i class="fab fa-linkedin fa-4x" />
              <i class="fab fa-youtube fa-4x" />
              <i class="fab fa-instagram fa-4x" />
              <i class="fab fa-twitter fa-4x" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Follow;
