import * as C from "../constants";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Title = (props) => {
  return (
    <div
      className={
        (props.isHome ? " justify-content-center" : "") +
        " justify-content-start d-flex my-4 align-items-center margin-top-40vh w-100"
      }
    >
      <motion.h1
        layout
        // variants={C.VARIANT_H1_INTRO}
        // initial="hidden"
        // animate="visible"
        transition={C.SPRING}
        className="border-potential-right bg-white px-4 z-index-1 fw-bolder mb-0 display-1"
      >
        <Link to="/">{C.TITLE}</Link>
      </motion.h1>

      <motion.span
        layout
        // variants={C.VARIANT_SUB_INTRO}
        // initial="hidden"
        // animate="visible"
        transition={C.SPRING}
        className="overflow-hidden px-4 text-nowrap fw-light fs-3"
      >
        {C.SUB_TITLE}
      </motion.span>
    </div>
  );
};

export default Title;
