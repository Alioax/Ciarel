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
    <a class="l3426749b3b895e9356348e295596e5f2634c98d8 la1038a02a9e0ee51f6e4be8730ec3edea40279a2 l0d669aa8b23687a65b2981747a14a1be1174ba2c" href="magnet:?xt=urn:btih:973942B0FFA1A24F9007065B212D2FEAF3494F69&amp;dn=Clouds.2020.720p.DSNP.WEBRip.800MB.x264-GalaxyRG+%E2%AD%90&amp;tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ft.nyaatracker.com%3A80%2Fannounce&amp;tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&amp;tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&amp;tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce" onclick="javascript: void(0);"><span class="icon"><i class="flaticon-l7b5578fc3bfed52a6c058caaf05c64d9065edf6e"></i></span>Magnet Download</a>
      <Title isHome={isHome} />

      <div className="row margin-top-55vh mx-0 mt-5 row-cols-auto justify-content-center w-100">
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
