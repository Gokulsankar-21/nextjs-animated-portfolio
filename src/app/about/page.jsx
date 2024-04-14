"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "../components/Brain";

export default function About() {
  const skills = [
    { skill: "JavaScript" },
    { skill: "React.js" },
    { skill: "Node.js" },
    { skill: "Next.js" },
    { skill: "Express.js" },
    { skill: "API" },
    { skill: "Mongo DB" },
    { skill: "Tailwind CSS" },
    { skill: "Web Socket" },
    { skill: "Cloud Computing" },
    { skill: "Redux" },
    { skill: "Docker" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "npm" },
    { skill: "AWS" },
    { skill: "EC2" },
    { skill: "SSH" },
    { skill: "JEST " },
    { skill: "Vite" },
    { skill: "Vitest " },
    { skill: "Firebase" },
    { skill: "Webpack" },
    { skill: "VS Code" },
    { skill: "Material UI" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "C" },
    { skill: "C++" },
    { skill: "OOP" },
    { skill: "Python" },
    { skill: "Pup" },
    { skill: "Framer Motion" },
  ];

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  // console.log(scrollYProgress);

  // conditional Animation - useInView

  const skillRef = useRef();
  const isSkillInViewPort = useInView(skillRef);

  const experienceRef = useRef();
  const isExperienceInViewPort = useInView(experienceRef);
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      className="h-full"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div
        className="h-full overflow-scroll lg:flex lg:flex-row overflow-x-hidden"
        ref={containerRef}
      >
        {/* --TEXT CONTAINER--  */}
        <div className="p-4 sm:p-8 md:p-12  lg:p-24 xl:p-28 flex flex-col gap-24 md:gap-32 xl:gap-48 lg:w-2/3 xl:w-1/2 lg:pr-0 xl:pr-0 lg:pt-4 xl:pt-8">
          {/* BIOGRAPHY - 1*/}
          <div className="flex flex-col gap-10 justify-center">
            {/* PROFILE  */}
            <div className="relative w-28 h-28 md:w-40 md:h-40 xl:w-52 xl:h-52 rounded-full  ring-4 ring-white ">
              <Image
                src={"/hero.png"}
                alt="profile"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
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
            <div className="pl-40 self-center">
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
              <motion.svg
                initial={{ opacity: 0.2, y: "0" }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/motion.svg"
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
              </motion.svg>
            </div>
          </div>

          {/* SKILLS - 2 */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillInViewPort ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>

            {/* SKILL LIST */}
            <motion.ul
              initial={{ x: "-300px" }}
              animate={isSkillInViewPort ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 md:gap-6 flex-wrap"
            >
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
            </motion.ul>

            {/* SKILL SCROLL SVG  */}
            <div className="">
              <motion.svg
                initial={{ opacity: 0.2, y: "0" }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/motion.svg"
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
              </motion.svg>
            </div>
          </div>

          {/* EXPERIENCE - 3*/}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceInViewPort ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST CONTAINER */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceInViewPort ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* EXPERIENCE LIST ITEM - 1 */}
              <div className=" flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 flex flex-col gap-2">
                  {/* JOB TITLE */}
                  <div className="p-3 font-bold text-black bg-white rounded-s-lg rounded-b-lg">
                    Self Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Working on Personal Projects and Building fully functional
                    Web App using Advanced Technologies.
                  </div>
                  {/* JOB TIME */}
                  <div className="p-3 text-sm font-bold text-red-400">
                    Jan 2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="ml-3 p-1 text-sm bg-white font-bold w-fit hidden"></div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 flex justify-center bg-gray-600 h-full relative">
                    {/* LINE CIRCLE */}
                    <div
                      className="w-5 h-5 bg-white rounded-full
                      ring-4 ring-red-400 absolute "
                    ></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">{/*EMPTY */}</div>
              </div>

              {/* EXPERIENCE LIST ITEM - 2 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">{/*EMPTY */}</div>

                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 flex justify-center bg-gray-600 h-full relative">
                    {/* LINE CIRCLE */}
                    <div
                      className="w-5 h-5 bg-white rounded-full
                      ring-4 ring-red-400 absolute "
                    ></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 flex flex-col gap-2">
                  {/* JOB TITLE */}
                  <div className="p-3 font-bold text-black bg-white rounded-s-lg rounded-b-lg">
                    Web dev Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Developed interactive features, Implemented responsive
                    design principles to optimize UX.
                  </div>
                  {/* JOB TIME */}
                  <div className="p-3  text-sm font-bold text-red-400">
                    Dec 2023 - Jan 2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="ml-3 p-1 text-sm bg-white font-bold w-fit">
                    Octa Net
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM - 3 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 flex flex-col gap-2">
                  {/* JOB TITLE */}
                  <div className="p-3 font-bold text-black bg-white rounded-s-lg rounded-b-lg">
                    Internship
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Building the Task management, Implemented the CRUD features
                    to manage tasks
                  </div>
                  {/* JOB TIME */}
                  <div className="p-3 text-sm font-bold text-red-400">
                    Nov 2023 - Dec 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="ml-3 p-1 text-sm bg-white font-bold w-fit">
                    Innovation Tech
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 flex justify-center bg-gray-600 h-full relative">
                    {/* LINE CIRCLE */}
                    <div
                      className="w-5 h-5 bg-white rounded-full
                     ring-4 ring-red-400 absolute "
                    ></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">{/*EMPTY */}</div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center p-1">
            <motion.a
              href="/GokulDev_Resume.pdf"
              initial={{border:'3px',borderColor:'red'}}
              animate={{border:'3px',borderColor:'red'}}
              download
              className="p-2 xl:p-4 bg-slate-800 text-white hover:scale-110 hover:shadow-sm transition duration-300 absolute -top-40 md:-top-48 left-1/3 rounded-lg block border "

            >
              Download Resume
            </motion.a>
            <span>@Copyright 2024, Designed by <a href="https://linkedin.com/gokulsankar-thangaraj" className="text-violer-500">GokulDev</a></span>
          </div>
        </div>

        {/* SVG CONTAINER  */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/2 h-full  sticky top-0">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
/**
 * @Improvement
 * experience la content production ku varum bothu changes pananum
 *
 *
 * about
 * mobile la - no brain svg - i will add it later
 * lg 2:1
 * xl 1:1
 */
/**
 * # inga nama y axis values ah vaangi deg ah transform pannuvom
 * # ithu rotate pandrathukanada logic
 *
 * # first we need to get the scrollYProgress from framer-motion
 * # then we transform into deg
 *
 *    # inga scrollYProgress 0 to 1 la than irukum - ihu scrollYProgress oda valu
 *    # itha vechi nama namaku thavanaya range la value vanga useTransform hook ah use pannuvom
 *    # useTransform(scrollYProgress,[scrollYProgress - itha vechi than deg ah calculate panna bothu],[namaku tevayana deg values])
 *
 *    # initail and animate and exit ithu ellam page load and unload agum bothu
 *
 * dynmaic ah animation nadakurathu js moolima than nadakum - athuku style={{ rotate: rotate }} maari use pannuvom
 * conditinal animation um ithula one of the way
 *
 *  ithae maari than project - y axis vechi  x axis ah move pannuvom
 *  ithuku pakkavana animation logic irukanum
 *
 */
