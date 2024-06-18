import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import ParagraphSlideAnimation from "./animation/paragraph-slide-animation";
import HR from "./animation/hr";

export default function Skill() {
  return (
    <motion.div className="page-container mx-auto h-svh mt-64 sm:mt-96 mb-32">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <ParagraphSlideAnimation p="— I experienced in" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <SkillList text="HTML" />
          <SkillList text="CSS" />
          <SkillList text="JavaScript" />
          <SkillList text="TypeScript" />
          <SkillList text="React" />
          <SkillList text="Node" />
          <SkillList text="TailwindCSS" />
          <SkillList text="Framer-Motion" />
        </div>
      </div>
    </motion.div>
  );
}

interface SkillListProp {
  text: string;
}

// TODO: make skill animation stagger

function SkillList({ text }: SkillListProp) {
  return (
    <>
      <motion.div className="text-3xl sm:text-5xl italic font-bold whitespace-break-spaces skill-list">
        <motion.div
          className="inline-block"
          initial={{ x: -50, y: -50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <BsArrowDownRight />
        </motion.div>
        <motion.div
          className="inline-block text-zinc-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {"  "} {text}
        </motion.div>
      </motion.div>
      <HR />
    </>
  );
}
