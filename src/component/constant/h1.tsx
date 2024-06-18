import { motion } from "framer-motion";

interface H1Prop {
  title: string;
}

export default function H1({ title }: H1Prop) {
  return <motion.h1 className="font-bold text-5xl">{title}</motion.h1>;
}
