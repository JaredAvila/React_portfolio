import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
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
              <h4>Follow Us</h4>
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
    );
  }
}

export default Footer;
