import { motion } from "framer-motion";
import { useRef } from "react";
import useIsChildInCenter from "./hook/useIsChildCenter";

//TODO: adjust highlight area move upper

export default function About() {
  return (
    <div className="bg-gray-50 z-20">
      <motion.div className="border-1 relative page-container mx-auto py-16">
        <AboutP />
      </motion.div>
    </div>
  );
}

function AboutP() {
  const ref = useRef(null);

  return (
    <p
      ref={ref}
      className="grid grid-cols-1 gap-8 text-zinc-700 text-3xl sm:text-6xl about-parent leading-[1.3em] sm:leading-[1.5em] tracking-normal"
    >
      <p
        className="p1"
        style={{ opacity: useIsChildInCenter(ref, ".p1") ? 1 : 0.05 }}
      >
        I graduated from Industrial Engineering at Chulalongkorn University
        focusing on
      </p>
      <p
        className="p2"
        style={{ opacity: useIsChildInCenter(ref, ".p2") ? 1 : 0.05 }}
      >
        <span className="font-semibold text-zinc-800 italic">
          User Experience and Usability Improvement.
        </span>{" "}
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p3") ? 1 : 0.05 }}
        className="p3"
      >
        My passion is about improving work process by digitalizing the physical
        works.
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p4") ? 1 : 0.05 }}
        className="p4 "
      >
        I experienced in many languages and tools.
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p5") ? 1 : 0.05 }}
        className="p5"
      >
        For examples,
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p6") ? 1 : 0.05 }}
        className="p6"
      >
        HTML, CSS, JavaScript, TypeScript, React, Node, GO, antd, framer-motion,
        etc.
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p10") ? 1 : 0.05 }}
        className="p10"
      >
        I think it's difficult to explain someone's skills because they
        continuously grow.
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p7") ? 1 : 0.05 }}
        className="p7"
      >
        And I'm one of those who keep learning new skill too, so
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p11") ? 1 : 0.05 }}
        className="p11"
      >
        if you're interesting in having me in your team.
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p8") ? 1 : 0.05 }}
        className="p8"
      >
        let's disscuss.
      </p>
      <p
        style={{ opacity: useIsChildInCenter(ref, ".p9") ? 2 : 0.05 }}
        className="p9"
      >
        <ul>
          <li>email: puriwatds@gmail.com</li>
          <li>tel: 080-429-2884</li>
        </ul>
      </p>
    </p>
  );
}
