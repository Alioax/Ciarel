import { motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Portfolio from "./portfolio";
import Contact from "./contact";
import About from "./about";

import Title from "../components/title";

import * as C from "../constants";

const Home = () => {
  return (
    <div>
      <Title />

      <div className="row mt-5 row-cols-auto justify-content-center w-100 position-absolute  top-50">
        <div className="col text-center">
          <Link
            to="/portfolio"
            className="btn btn-lg btn-secondary fw-light  rounded-0"
          >
            Portfolio
          </Link>
        </div>
        <div className="col text-center">
          <Link
            to="/contact"
            className="btn btn-lg btn-secondary fw-light  rounded-0"
          >
            Contact
          </Link>
        </div>
        <div to="/about" className="col text-center">
          <Link
            to="/about"
            className="btn btn-lg btn-secondary fw-light  rounded-0"
          >
            About
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
