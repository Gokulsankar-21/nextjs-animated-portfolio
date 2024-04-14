"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function TransitionProvider({ children }) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 "
      >
        {/* 1st div */}
        <motion.div
          className="bg-black w-screen h-screen fixed z-30 rounded-b-[100px]"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh", backgroundColor: "rgb(0,0,0)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* PATH NAME */}
        <motion.div
          className=" m-auto text-white text-8xl fixed top-0 left-0 bottom-0 right-0 w-fit h-fit "
          initial={{ opacity: 1, zIndex: 30 }}
          animate={{ opacity: 0, zIndex: 40 }}
          exit={{}}
          transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        >
          {pathName === "/"
            ? "Home"
            : pathName
                .substring(1)
                .charAt(0)
                .toUpperCase()
                .concat(pathName.substring(2))}
          {/**ithuku exit animation theva ila */}
        </motion.div>

        {/*ithu top to bottom vanthutu mela poidum */}
        {/* 2nd DIV */}
        <motion.div
          className="bg-black w-screen h-screen  fixed bottom-0 z-30 rounded-t-[100px]"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        />
        {/*inga nama 2nd div ah order ah animate pannum bothu takkunu vanthu w-100 h-100 nu bg-black la set panni h-reduce pannuvom to the b */}
        {/* children */}
        <div className=" h-20 sm:h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
          {/* inga en animation tharalana inga animation one-by-one ah than nadakum - ithu work aganum - na ethoru edathula mistake pandren*/}
        </div>
      </div>
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
 *  initial - comp load agum bothu
 *  animate - page load, interaction
 *  exit - comp unload agum pothu
 *
 *
 * inga animation sequence ah iruku
 * page load agum bothu page transition nadakum- athu maari than animation kuduthu irukom
 *
 * @Crucial_Info
 * inga oru div la rendu vidhamana animation pandrom
 * onu page load agum bothu 1st 100vh , animate - 0vh
 * aduthu antha comp exit agum bothu inga animate - 0 vh  -exit 140vh again next comp start from initial
 *
 * initial,animate ,exite ellathukum thani thaniya delay and duration kuduthukalam
 *
 * takeaway - inital la ena animation nadakanum , interction - exit la ena animation nadakanum
 *
 * itha understand panannum - inga sequence ah understand pandren - atha easy ah puriyum - intha way la think pannanum - intha way la first initial and animate ah addd pannitu then exit animation ah add panalam
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
/**
 * @PULL_Req
 *        initial={{ opacity: 1, zIndex: 30 }}
          animate={{ opacity: 0, zIndex: 40 }}
 */
/**
 * add some delay in responsive menu list -  exit animation add pannalam - Pending
 * z index - menulist and pathname in page transition - solved
 */
