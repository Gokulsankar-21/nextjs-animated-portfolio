"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionProvider({ children }) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      {/* 1st div */}
      <motion.div
        key={pathName}
        className="bg-black w-screen absolute z-50 rounded-[100px]"
        initial={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ delay: 0.2, duration: 1 }}
      />
      {/*ithu top to bottom vanthutu mela poidum */}
      {/* 2nd DIV */}
      <motion.div
        key={pathName}
        className="bg-red-500 w-screen absolute bottom-0 z-50 rounded-[100px]"
        animate={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      {/* CHILDREN */}
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  );
}
/**
 * page transition ideas
 * core ideas - top la irunthu bottom ku page animate pandrathu
 * 2 div use pannuvom - technical ah irukum
 * mid la pathname use pannuvom
 * ithu 1str div mela irunthu keela vanthu mela poidum
 * 2nd div keela irunthu mela bogum poitu keela verum contrast ah nadakum
 *
 *  @framer_motion
 *  @Animate_presense
 *    # ithu react tree la irunthu remove agum bothu - render ah unload agum bothu intha animation nadakum
 *    # athuku nama exit ah provide pannanum
 *    # ithulayum nama initial animation ah kuduthukalam
 *
 *    @exit_props
 *        ithulayum ella animation props kudukutharalam
 *
 *    # Animate presense la initaila ah onu, animate agum bothu onnu ,antha element la irunthu move agum bothu oru animation
 *      ithula neraya advantage iruku
 *
 * @animation_variations
 *  initial={{ height: "0vh" }}
 *  animate={{ height: "0vh" }}   => ithu rendum initial animation
 *
 *  exit={{height:'100vh'}} => ithu final animation
 *
 * -----
 * @react_key
 *      # react la nama key vechi than comp ah identify panna mudyum
 *      # athu multiple copy la comp ah render pannum - update comp - comp recycle
 *       # itha vechi than page ah change pannum bothu animate pannuvom, antha page react vd tree la remove agum athu key vechi than identify panna mudiyum
 */
