//important stuff
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Navbar } from "react-materialize";

//styles
import "./App.css";

//components
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Home from "./components/Home";
import NavItem from "react-materialize/lib/NavItem";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            brand="Avila Media Group"
            className="grey darken-3 blue-text"
            right
          >
            <NavItem>
              <Link
                to="/services"
                className="btn deep-purple waves-effect waves-light"
              >
                Services
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/projects"
                className="btn deep-orange waves-effect waves-light"
              >
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="btn">
                About
              </Link>
            </NavItem>
          </Navbar>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/projects" component={Projects} />
          <Route exact={true} path="/services" component={Services} />
          <Route exact={true} path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
