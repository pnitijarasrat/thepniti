import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
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
    <>
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
          <span className="font-semibold text-zinc-800">
            User Experience and Usability Improvement.
          </span>{" "}
        </p>
        <p
          style={{ opacity: useIsChildInCenter(ref, ".p3") ? 1 : 0.05 }}
          className="p3"
        >
          My passion is about improving work process by digitalizing the
          physical works.
        </p>
        {/* <p */}
        {/*   style={{ opacity: useIsChildInCenter(ref, ".p4") ? 1 : 0.05 }} */}
        {/*   className="p4 " */}
        {/* > */}
        {/*   I experienced in many languages and tools. */}
        {/* </p> */}
        {/* <p */}
        {/*   style={{ opacity: useIsChildInCenter(ref, ".p5") ? 1 : 0.05 }} */}
        {/*   className="p5" */}
        {/* > */}
        {/*   For examples, */}
        {/* </p> */}
        {/* <p */}
        {/*   style={{ opacity: useIsChildInCenter(ref, ".p6") ? 1 : 0.05 }} */}
        {/*   className="p6" */}
        {/* > */}
        {/*   HTML, CSS, JavaScript, TypeScript, React, Node, GO, antd, */}
        {/*   framer-motion, etc. */}
        {/* </p> */}
        <p
          style={{ opacity: useIsChildInCenter(ref, ".p99") ? 1 : 0.05 }}
          className="p99"
        >
          <span className="font-bold">My previous works include</span>
          <ul>
            <WorkList text="Customer Journey Map" />
            <WorkList text="User Interface Design" />
            <WorkList text="Fullstack Development" />
            <WorkList text="Usability Testing" />
          </ul>
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
          <div className="flex justify-center">
            <Link to="/home">
              <button className="mt-16 border-2 px-4 py-2 font-bold hover:cursor-pointer border-zinc-400">
                View More
              </button>
            </Link>
          </div>
        </p>
      </p>
    </>
  );
}

interface WorkListProp {
  text: string;
}

function WorkList({ text }: WorkListProp) {
  return (
    <li className="pl-8">
      <span className="italic">{text} </span>
      <span className="inline-block">
        <BsArrowUpRight />
      </span>
    </li>
  );
}
