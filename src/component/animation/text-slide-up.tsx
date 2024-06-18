import { animate, motion, stagger, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface TextUpAnimationProp {
  text: string;
  z: number;
  italic?: boolean;
}

export default function TextUpAnimation({
  text,
  z,
  italic,
}: TextUpAnimationProp) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        ".t",
        { y: 0 },
        {
          delay: stagger(0.1),
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        },
      );
    }
  }, [isInView]);

  return (
    <motion.div className="relative" style={{ zIndex: z }}>
      <div ref={ref}>
        {text.split(" ").map((t: string) => {
          return (
            <>
              <motion.h1
                className="text-black font-bold inline-block t text-5xl sm:text-9xl tracking-[-0.06em]"
                initial={{ y: "100%" }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.95] }}
                style={{ fontStyle: italic ? "italic" : "" }}
              >
                {t}
              </motion.h1>
              <span className="whitespace-break-spaces">{"   "} </span>
            </>
          );
        })}
      </div>
      <motion.div
        style={{
          zIndex: z + 0.5,
        }}
        className="bg-gray-50 text-black h-[150px] w-full absolute"
      />
    </motion.div>
  );
}
