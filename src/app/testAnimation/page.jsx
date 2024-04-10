"use client";

import React from "react";
import { motion } from "framer-motion";
export default function AnimationTest() {
  return (
    <div
      className="w-full h-full flex justify-center 
    gap-4 items-center bg-slate-200"
    >
      {/* <motion.div
        className="w-20 h-20 bg-red-400 "
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      ></motion.div> */}

      {/* initial to animate  */}
      <motion.div
        className="w-20 h-20 bg-blue-400 text-sm flex items-center justify-center text-center"
        initial={{ x: -100, y: 200 }}
        animate={{ x: 0, y: 0 }}
      >
        initial to animate{" "}
      </motion.div>
      {/** page load agum bothu - starting pos */}
      {/* page load anathuku aprm initial ethu kuduthomo athula irunthu animate pos - inga 0 0 - Own pos */}

      {/* initial only - ithoda start pos and default ana pos ah maridum - nama element la style panni irunthalum - inga kudutha athu maridum */}
      <motion.div
        className="w-20 h-20 bg-green-400 "
        initial={{ x: 300, y: -200 }}
      ></motion.div>

      {/* Animate only */}
      <motion.div
        className="w-20 h-20 bg-yellow-400 "
        animate={{ x: -100, y: 200 }}
      ></motion.div>
    </div>
  );
}
/**
 * start pos - enga venalum irukalam , 8 side la irukalam
 * own pos - element oda pos -  athu default pos
 * animate - same enga venalum place pannalam
 * ithu ellam pos base panni try panni iruken
 *
 *  @framer_motion
 *   # page load anthuku aprm than animation start agum
 *
 */
