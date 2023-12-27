import { motion } from "framer-motion";

export default function Badge({ caption }) {
  return (
    <motion.span
      animate={{ scale: [1, 1.2, 1], transition: 0.4 }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
}
