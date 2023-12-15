import { useRef } from "react";
import { motion, useAnimate } from "framer-motion";

export const useHover = () => {
  const [scope, animate] = useAnimate();
  const linkHover = (hoverInput) => {
    animate(
      `.${hoverInput}`,
      { width: "100%" },
      { type: "tween", duration: 0.1 }
    );
  };

  const linkNotHover = (hoverInput) => {
    animate(`.${hoverInput}`, { width: 0 }, { type: "tween", duration: 0.1 });
  };

  return {scope, linkHover, linkNotHover};
};
