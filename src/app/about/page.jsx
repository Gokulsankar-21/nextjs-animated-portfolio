"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const skills = [
    { skill: "JavaScript" },
    { skill: "React.js" },
    { skill: "Node.js" },
    { skill: "Next.js" },
    { skill: "Express.js" },
    { skill: "Tailwind CSS" },
    { skill: "Mongo DB" },
    { skill: "Web Socket" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Docker" },
    { skill: "AWS " },
    { skill: "Firebase" },
    { skill: "VS Code" },
    { skill: "Framer Motion" },
    { skill: "Webpack" },
    { skill: "Vite" },
    { skill: "Framer Motion" },
  ];
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      className="h-full"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="">
        {/* --TEST CONTAINER--  */}
        <div className="p-4 sm:p-8 md:p-12  lg:p-24 xl:p-28 flex flex-col gap-24 md:gap-32 xl:gap-48">
          {/* BIOGRAPHY - 1*/}
          <div className="flex flex-col gap-8">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              As a frontend developer and UI designer, I'm dedicated to creating
              seamless digital experiences. I focus on user-centric design
              principles to craft elegant interfaces that blend aesthetics with
              functionality. My passion lies in shaping the digital landscape
              with purpose and innovation.
            </p>

            {/* BIOGRAPHY QUOTES */}
            <span className="italic text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>

            {/* BIOGRAPHY SIGNATURE */}
            <div className="self-end">
              <Image
                src="/signature.png"
                alt="signature"
                width={200}
                height={100}
              />
            </div>

            {/* BIOGRAPHY SCROLL SVG  */}
            <div className="">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
          {/* SKILLS */}
          <div className="">
            {/* SKILL TITLE */}
            <h1>SKILLS</h1>
            <div className=""></div>
          </div>
          {/* EXPERIENCE */}
          <div className="">EXPERIENCE</div>
        </div>

        {/* SVG CONTAINER  */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
}
