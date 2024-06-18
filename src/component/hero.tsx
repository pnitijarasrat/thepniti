import {
  motion,
  animate,
  stagger,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import TextUpAnimation from "./animation/text-slide-up";
import ParagraphSlideAnimation from "./animation/paragraph-slide-animation";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useScroll(ref);

  useEffect(() => {
    animate("li", { opacity: 1 }, { delay: stagger(0.2, { startDelay: 1.5 }) });
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setOpacity(latest);
  });

  return (
    <div ref={ref} className="h-[70vh] relative sm:h-svh">
      <motion.div
        className="sticky top-0"
        style={{
          opacity: Math.max(1 - opacity / 300, 0.05),
          transform: `translateY(-${opacity / 4}px)`,
          filter: `blur(${opacity / 50}px)`,
        }}
      >
        <div className="page-container font-extrabold sm:absolute mt-[10vh] top-12 left-0 right-0 mx-auto">
          <TextUpAnimation text="HEY" italic z={1} />
          <TextUpAnimation text="IM PURIWAT" italic z={2} />
          <ul className="relative z-10 flex flex-row gap-4 text-sm pt-2 pb-4 text-zinc-400">
            <motion.li initial={{ opacity: 0 }}>fullstack</motion.li>
            <motion.li initial={{ opacity: 0 }}>reader</motion.li>
            <motion.li initial={{ opacity: 0 }}>learner</motion.li>
          </ul>
          <br />
          <ParagraphSlideAnimation p="hi, my name is Puriwat. I'm software engineer" />
          <div className="my-16" />
          <div className="text-right">
            <ParagraphSlideAnimation toLeft p="I design and develop website" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
