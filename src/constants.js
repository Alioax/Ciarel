//Strings
export const TITLE = "Ciarel";
export const SUB_TITLE = "Front-End Developer";

//framer variants
export const VARIANT_FADE_IN = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const VARIANT_H1_INTRO = {
  hidden: { x: "50%" },
  visible: { x: "0%", borderRightWidth: "1px" },
};

//try this without letterspacing

// export const VARIANT_SUB_INTRO = {
//   hidden: { x: "-50%", opacity: 0, letterSpacing: "-8px" },
//   visible: { x: "0%", opacity: 1, letterSpacing: "4px" },
// };

export const VARIANT_SUB_INTRO = {
  hidden: { x: "-50%", opacity: 0 },
  visible: { x: "0%", opacity: 1 },
};

//framer transitions
export const SPRING = {
  delay: 1,
  type: "spring",
  stiffness: 100,
  damping: 20,
};
