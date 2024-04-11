"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      className="h-full"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div>Portfolio</div>
    </motion.div>
  );
}
