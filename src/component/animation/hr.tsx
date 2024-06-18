import { motion } from "framer-motion";

export default function HR() {
  return (
    <motion.hr
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ delay: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        transformOrigin: "0% 50%",
        border: "1px solid rgb(31,41,55)",
      }}
    />
  );
}
