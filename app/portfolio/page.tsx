"use client";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section className="px-4 py-36">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-6 max-w-3xl"
      >
        <h2 className="text-5xl font-medium pb-6">Portfolio</h2>
      </motion.div>
    </section>
  );
}
