import { motion } from "framer-motion";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Portfolio from "./portfolio";
import Contact from "./contact";
import About from "./about";

import Title from "../components/title";

import * as C from "../constants";

const Home = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <>
      <Title isHome={isHome} />

      <div className="row margin-top-55vh mx-0 mt-5 row-cols-auto justify-content-center w-100">
        <div className="col text-center">
          <Link
            to="/portfolio"
            className="btn btn-lg btn-secondary fw-light  rounded-0"
          >
            Portfolioooooo
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

      <div className={(isHome ? "on" : "") + " switch"} onClick={toggleSwitch}>
        <motion.div className="handle" layout />
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
    </>
  );
};

export default Home;
