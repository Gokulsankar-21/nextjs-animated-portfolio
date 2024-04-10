"use client";

import React from "react";
import { motion } from "framer-motion";
export default function AnimationTest() {
  return (
    <>
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
          className="w-20 h-20 bg-green-400 text-sm flex items-center justify-center text-center"
          initial={{ x: 300, y: -200 }}
        >
          initial only
        </motion.div>

        {/* Animate only - no intial | inga inial ilatha nala athoda default pos la irunthu move agum*/}
        <motion.div
          className="w-20 h-20 bg-yellow-400 text-sm flex items-center justify-center text-center"
          animate={{ x: -50, y: 50 }}
        >
          Animate only - no intial
        </motion.div>
      </div>

      {/* --trans-- */}
      <div
        className="w-full h-full flex justify-center 
    gap-4 items-center bg-slate-300 border-t"
      >
        {/* trans - easeInOut */}
        <motion.div
          className="w-20 h-20 bg-yellow-400 text-sm flex items-center justify-center text-center"
          initial={{ x: -100, y: 0 }}
          animate={{ x: 100, y: 100 }}
          transition={{ delay: 1, duration: 3, ease: "easeInOut" }}
        >
          easeInOut
        </motion.div>

        {/* trans - backInOut */}
        <motion.div
          className="w-20 h-20 bg-pink-400 text-sm flex items-center justify-center text-center"
          initial={{ x: -100, y: 0 }}
          animate={{ x: 100, y: 100 }}
          transition={{ delay: 5, duration: 3, ease: "backInOut" }}
        >
          backInOut
        </motion.div>

        {/* trans - circInOut */}
        <motion.div
          className="w-20 h-20 bg-orange-400 text-sm flex items-center justify-center text-center"
          initial={{ x: -100, y: 0 }}
          animate={{ x: 100, y: 100 }}
          transition={{ delay: 9, duration: 3, ease: "circInOut" }}
        >
          circInOut
        </motion.div>
      </div>

      {/* --var - condional animation-- */}
      <div
        className="w-full h-full flex justify-center 
    gap-4 items-center bg-slate-300 border-t"
      >
        <motion.div
          className="w-20 h-20 bg-orange-400 text-sm flex items-center justify-center text-center"
          initial={{ x: -100, y: 0 }}
          animate={{
            x: 100,
            y: 100,
            transition: {
              delay: 9,
              duration: 3,
              ease: "circInOut",
              opacity: 1,
            },
          }}
          transition={{}}
        >
          {/*it works */}
          trans
        </motion.div>
      </div>
    </>
  );
}
/**
 *  Animation - workflow - usage
 * 1st - Page load agum bothu nadakurathu
 * 2nd - Interaction oda nadakurathu
 *        intha interaction
 *        onclick
 *        scroll
 *        other actions base panni irukum
 * 3rd - timing base panni nadalam -
 * 4th - infinite
 *
 * ithula than nama animation ah add pannuvom
 *
 * @Animation - movement(x,y) transtion transform ellam senthu irukurthu
 * @transion - opacity,fadein, speed variation ah irukurathu , duration delay irukurathu
 * @transform - shape ah mathurarhu
 *
 * 
 ----------------------
 * @framer_motion useEffect() and useState() use pannvom - so athu nextjs la client component ah declare pannanum
 *
 ----------------------
 * 
 * start pos - enga venalum irukalam , 8 side la irukalam
 * own pos - element oda pos -  athu default pos
 * animate - same enga venalum place pannalam
 * ithu ellam pos base panni try panni iruken
 *
 *  @framer_motion
 *   # page load anthuku aprm than animation start agum
 *   # initial and animate kudutha - enga irunthu enga move aganum nu namalae set pannuvom
 *   # initial kuduitha - default pos pathila athu marum -athu default pos ah maridum
 *   # animate kudutha default la irunthu animate pos ku marum
 *
 *   @transition
 *   # transition kudutkrathu ellame animation kula
 *   # animate ilamayum transion ithula pannalam
 *
 *  @transition
 *      @delay
 *      @duration
 *      @ease -  transion speed/variation
 *          @easeIn -  start slow remaining fast
 *          @eastOut - end slow remaining fast
 *          @eastInOut - start and end slow inbetween fast
 *          @linear - linear - same speed
 *           ------- add on in framer-motion------
 *          @backIn
 *          @backOut
 *          @backInOut  --- ithu ellam animate agum bothu back pogitu animate agum - same ease method la
 *
 *        @circInOut - ithu mid la sema fast ah move aguthu - ithu familiar agalam
 *
 *      @transition_Type
 *          @spring - default -
 *          @staggered - wave form
 *
 ----------------------
 * 
 * @animnate -  ellame props um ithukula irukum
 *        @x
 *        @y
 *        @scale
 *
 *
 * ithae than ella animation kum
 */
