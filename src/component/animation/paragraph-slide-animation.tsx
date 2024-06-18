import { motion } from "framer-motion";

interface ParagraphSlideAnimationProp {
  p: string;
  delay?: number;
  bold?: boolean;
  toLeft?: boolean;
}

export default function ParagraphSlideAnimation({
  p,
  bold,
  delay,
  toLeft,
}: ParagraphSlideAnimationProp) {
  if (delay === undefined) {
    delay = 0;
  }
  return (
    <div className="relative z-20 text-xl sm:text-3xl text-zinc-500">
      <motion.div style={{ fontWeight: bold ? "bold" : "" }}>{p}</motion.div>
      <motion.div
        style={{ transformOrigin: toLeft ? "0% 50%" : "100% 50%" }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7 + delay * 0.5,
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        }}
        className="border-none bg-zinc-500 absolute inset-0"
      />
      <motion.div
        style={{ transformOrigin: toLeft ? "0% 50%" : "100% 50%" }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5 + delay * 0.5,
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        }}
        className="border-none bg-gray-50 z-10 absolute inset-0"
      />
    </div>
  );
}
