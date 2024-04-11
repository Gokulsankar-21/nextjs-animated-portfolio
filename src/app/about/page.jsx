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
    { skill: "Redux" },
    { skill: "Flow-bite" },
    { skill: "Material UI" },
  ];
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      className="h-full"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="h-full overflow-scroll lg:flex lg:flex-row">
        {/* --TEXT CONTAINER--  */}
        <div className="p-4 sm:p-8 md:p-12  lg:p-24 xl:p-28 flex flex-col gap-24 md:gap-32 xl:gap-48 lg:w-1/2 lg:pr-0">
          {/* BIOGRAPHY - 1*/}
          <div className="flex flex-col gap-12 justify-center">
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
              "I am Always Working on Projects."
            </span>

            {/* BIOGRAPHY SIGNATURE */}
            <div className="pl-60 self-center">
              <Image
                src="/signature.png"
                alt="signature"
                width={200}
                height={100}
                className="object-contain scale-150"
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

          {/* SKILLS - 2 */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITLE */}
            <h1 className="text-2xl font-bold">SKILLS</h1>

            {/* SKILL LIST */}
            <ul className="flex gap-4 md:gap-6 flex-wrap">
              {/* SKILL LIST ITEM */}
              {skills.map((skill) => (
                <li
                  key={skill.skill}
                  className="p-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer
                rounded"
                >
                  {skill.skill}
                </li>
              ))}
            </ul>
          </div>

          {/* EXPERIENCE - 3*/}
          <div className="flex flex-col gap-12 justify-center">
            {/* EXPERIENCE TITLE */}
            <h1 className="text-2xl font-bold">EXPERIENCE</h1>
            {/* EXPERIENCE LIST CONTAINER */}
            <div className="">
              {/* EXPERIENCE LIST ITEM - 1 */}
              <div className="w-full flex gap-8">
                {/* LEFT */}
                <div className="w-1/3 flex flex-col gap-2">
                  {/* JOB TITLE */}
                  <div className="p-3 font-bold text-black bg-white rounded-s-lg rounded-b-lg">
                    JavaScript Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* JOB TIME */}
                  <div className="p-1 text-sm font-bold text-red-400">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 text-sm bg-white font-bold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 flex justify-center bg-gray-600 h-full relative">
                    {/* LINE CIRCLE */}
                    <div
                      className="w-5 h-5 bg-white rounded-full
                     border-2 border-red-400 absolute top-0"
                    ></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">{/*EMPTY */}</div>
              </div>

              {/* EXPERIENCE LIST ITEM - 2 */}
              <div className="w-full flex gap-8">
                {/* LEFT */}
                <div className="w-1/3 ">{/*EMPTY */}</div>

                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 flex justify-center bg-gray-600 h-full relative">
                    {/* LINE CIRCLE */}
                    <div
                      className="w-5 h-5 bg-white rounded-full
                     border-2 border-red-400 absolute top-0"
                    ></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 flex flex-col gap-2">
                  {/* JOB TITLE */}
                  <div className="p-3 font-bold text-black bg-white rounded-s-lg rounded-b-lg">
                    JavaScript Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* JOB TIME */}
                  <div className="p-1 text-sm font-bold text-red-400">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 text-sm bg-white font-bold w-fit">
                    Apple
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM - 3 */}
              <div className="w-full flex gap-8">
                {/* LEFT */}
                <div className="w-1/3 flex flex-col gap-2">
                  {/* JOB TITLE */}
                  <div className="p-3 font-bold text-black bg-white rounded-s-lg rounded-b-lg">
                    JavaScript Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* JOB TIME */}
                  <div className="p-1 text-sm font-bold text-red-400">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 text-sm bg-white font-bold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 flex justify-center bg-gray-600 h-full relative">
                    {/* LINE CIRCLE */}
                    <div
                      className="w-5 h-5 bg-white rounded-full
                     border-2 border-red-400 absolute top-0"
                    ></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">{/*EMPTY */}</div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG CONTAINER  */}
        <div className="hidden lg:block lg:w-1/2 h-full bg-blue-400"></div>
      </div>
    </motion.div>
  );
}
/**
 * @Improvement
 * experience la content production ku varum bothu changes pananum
 *
 */
