"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const topBarVariants = {
  // animation variants
  // two state handle panna porom - 1st inial , 2nd interction - handburger opeb
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "#fff",
  },
};
const centerBarVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
    backgroundColor: "#fff",
  },
};
const bottomBarVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "#fff",
  },
};
// menu list animation - bouncing -  default
const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    when: "beforeChildren", // ithu first parent animate agum aprm children animate ahum
    transition: {
      staggerChildren: 0.2, // antha children la irukur open variant animate agum - tricky - minga opened la irukum bothu children layum open animation than nadakum
    },
  },
};

// list item animation - staggered / lama dev enaketha dev - intha maari learning ku reason ah iruku - enakatha dev and miga chirantha vali
const listItemVariants = {
  closed: {
    opacity: 0,
    x: -10,
  },
  opened: {
    opacity: 1,
    x: 0,
  },
  /**
   * children ku animation panna oru props iruku athu animateEffect oda varum
   * @StaggeredChildren - ithu children ah oru interval la animate pannuom - wave maari irukum
   * 
   ithu maari kudukum bothu children ku separate ah inital and animate panna theva ila - parent la irunthu athu animate agum

   ivlo neram thani thani elment ku animate pannom 
   ipa nama parent element la irunthu children elements ku animate pandrom
   so, athu inherit agum - ithu kandupidichidalam
   */
};
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center h-full justify-between px-4 sm:px-8 md:px-12  lg:px-24 xl:px-28 ">
      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-4 text-xl md:w-1/3">
        {links.map((link) => (
          <NavItem link={link} key={link.title} />
        ))}
      </div>

      <div className=" md:hidden lg:flex lg:w-1/3  lg:justify-center ">
        {/* LOGO */}
        <Link
          href="/"
          className=" bg-black p-1  rounded-md text-[17px] font-semibold flex items-center justify-center "
        >
          <span className=" text-white  pr-1">Gokul</span>
          <span className="bg-white w-12 h-8 text-black rounded flex justify-center items-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-8 w-1/3  md:justify-end ">
        <Link href="https://github.com/Gokulsankar-21" target="_blank">
          <Image src="/github.png" width={24} height={24} alt="github" />
        </Link>
        <Link
          href="https://linkedin.com/in/gokulsankar-thangaraj"
          target="_blank"
        >
          <Image src="/linkedin.png" width={24} height={24} alt="linkedin" />
        </Link>
        <span>
          <a
            href="/GokulDev_Resume.pdf"
            download
            className="ring-black ring-1 bg-transparent text-black hover:bg-black hover:text-white text-lg  px-2 py-2 rounded-md"
          >
            Resume
          </a>
        </span>

        {/* Dark Theme */}
        {/* Download CV */}
      </div>

      {/* RESPONSIVE MENU BUTTON */}
      <div className="md:hidden ">
        <motion.button
          className="flex flex-col  items-center  justify-between w-10 h-8  z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topBarVariants}
            initial="closed"
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded-full origin-left"
          ></motion.div>

          <motion.div
            className="w-10 h-1 bg-black rounded-full origin-left"
            variants={centerBarVariants}
            initial="closed"
            animate={open ? "opened" : "closed"}
          ></motion.div>

          <motion.div
            className="w-10 h-1 bg-black rounded-full origin-left"
            variants={bottomBarVariants}
            initial="closed"
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </motion.button>
      </div>
      {/*  MENU LIST */}
      {open && (
        <motion.div
          className="absolute bg-black text-white top-0 left-0 w-screen h-screen flex flex-col justify-center items-center gap-8 text-4xl z-40 overflow-hidden m-0 p-0"
          variants={listVariants}
          initial="closed"
          animate={open ? "opened" : "closed"}
        >
          {links.map((link) => (
            <motion.div
              className=""
              key={link.title}
              variants={listItemVariants}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
/**
 * @z_index
 * z-index relative kudutha than work agum
 * absolute kudutha z-index work agum
 *
 * @explain
 *  => animate={open ? "opened" : "closed"}
 *     inga open ah iruntha opened var animate agum
 *     open ilatha time-close pannum bothu closed animate agum
 *
 *  @framer_motion
 *    @default - Bouncing Effect
 *    @staggered
 *
 * @nextjs _@framer_motion
 *    Link la motion add panna mudiyathu
 *   orae vali div la wrap pandrthu thaan
 */
/**
 * ithu pakkavana learning
 * lama dev naala nama intha alavuku learn panni iruken
 * enaku intha maari learning than siranthathu enaku ethathu
 * Big Thanks to lama dev
 * he makes life easier
 * avaru developing style clean and easier ever
 * intha maari developer naala than neraya puthu vithamana learning enmakula urvagum
 * this is memerable day
 * intha maari learning experince enaku pakkkvana feelings ah tharuthu
 * na oru kurikol oda itha senjitu irunthen - intha maari ninukama ah learn pannalam
 * itha intha maari way la than kathukanum nu pannen
 * ithu enaku oru inspiration -  intha part enaku oru inspiration
 * intha maari learnigs thaan enaku theva - ithuku na kathutu iurpen
 */
/**
 * switched main branch
 */
