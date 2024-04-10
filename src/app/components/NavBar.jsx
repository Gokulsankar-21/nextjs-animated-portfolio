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
// menu list animation - bouncing
const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
  },
};

// list item animation - staggered / lama dev enaketha dev - intha maari learning ku reason ah iruku - enakatha dev and miga chirantha vali
const listItemVariants = {
closed:{
  
}
}
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
          className=" bg-black p-1 rounded-md text-sm font-semibold flex items-center justify-center "
        >
          <span className=" text-white pr-1">Gokul</span>
          <span className="bg-white w-12 h-8 text-black rounded flex justify-center items-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3  md:justify-end ">
        <Link href="https://github.com/Gokulsankar-21">
          <Image src="/github.png" width={24} height={24} alt="github" />
        </Link>
        <Link href="https://github.com/Gokulsankar-21">
          <Image src="/linkedin.png" width={24} height={24} alt="linkedin" />
        </Link>

        <Link href="https://github.com/Gokulsankar-21">
          <Image src="/instagram.png" width={24} height={24} alt="instagram" />
        </Link>

        <Link href="https://github.com/Gokulsankar-21">
          <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        </Link>

        <Link href="https://github.com/Gokulsankar-21">
          <Image src="/dribbble.png" width={24} height={24} alt="dribbble" />
        </Link>

        <Link href="https://github.com/Gokulsankar-21">
          <Image src="/pinterest.png" width={24} height={24} alt="pinterest" />
        </Link>
      </div>

      {/* RESPONSIVE MENU  */}
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
        <motion.div className="absolute bg-black text-white top-0 left-0 w-screen h-screen flex flex-col justify-center items-center gap-8 text-4xl z-30 overflow-hidden m-0 p-0"
        variants={listVariants}
        initial='closed'
        animate={open ? 'opened':"closed"}
        >
          {links.map((link) => (
            <Link key={link.title} href={link.url}>
              {link.title}
            </Link>
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
 */
