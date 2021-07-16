import * as C from "../constants";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="position-fixed d-flex align-items-center justify-content-center w-100 h-100">
      <div className="position-relative top-n15">
        <motion.h1
          variants={C.VARIANT_H1_INTRO}
          initial="hidden"
          animate="visible"
          transition={C.SPRING}
          className="position-absolute border-potential-right bg-white px-4 z-index-1 fw-bolder mb-0 display-1"
        >
          <Link to="/">{C.TITLE}</Link>
        </motion.h1>
        <motion.span
          variants={C.VARIANT_SUB_INTRO}
          initial="hidden"
          animate="visible"
          transition={C.SPRING}
          className="position-absolute overflow-hidden px-4 text-nowrap fw-light fs-3"
        >
          {C.SUB_TITLE}
        </motion.span>
      </div>
    </div>
  );
};

export default Title;
