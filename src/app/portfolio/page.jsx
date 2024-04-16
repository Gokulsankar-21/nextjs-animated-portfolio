"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    color: "from-red-200 to-blue-200",
    title: "Mern Blog App",
    desc: "Developed a Single Page Personal Blog App using the MERN stack, Implemented user authentication and authorization with Admin Dashboard",
    img: "/Project_Images/Blog.png",
    link: "https://blog.gokuldev.in",
  },
  {
    id: 2,
    color: "from-blue-200 to-violet-200",
    title: "Book Store App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam quis, iste dignissimos doloribus voluptatem aspernatur ",
    img: "/Project_Images/Blog.png",
    link: "https://book.gokuldev.in",
  },
  {
    id: 3,
    color: "from-violet-200 to-purple-200",
    title: "IMDB Clone App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam quis, iste dignissimos doloribus voluptatem aspernatur ",
    img: "/Project_Images/Blog.png",
    link: "https://movie.gokuldev.in",
  },
  {
    id: 4,
    color: "from-purple-200 to-red-200",
    title: "Socio Pedia App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam quis, iste dignissimos doloribus voluptatem aspernatur ",
    img: "/Project_Images/Blog.png",
    link: "https://social.gokuldev.in",
  },
  {
    id: 5,
    color: "from-purple-200 to-red-200",
    title: "Amazon UI Clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam quis, iste dignissimos doloribus voluptatem aspernatur ",
    img: "/Project_Images/Blog.png",
    link: "https://amazon.gokuldev.in",
  },
];

export default function Portfolio() {
  // Horizandal scroll animation
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]); //inga nama x la - ku move padnrom ex:-100px y values vechi x la % moolima ana horizontal ah move panna porom.
  // sticky moolima nama x axis la move pannuvom but background la ethuvum iruakthu sticky nala athu z-index la top la irukum
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      className="h-full"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="h-[600vh] relative w-screen" ref={ref}>
        {/* Intro Section */}
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center  ">
          <span className="text-8xl text-center">My Works</span>

          {/* BIOGRAPHY SCROLL SVG  */}
          <div className=" pt-10 scale-125 md:scale-150">
            <motion.svg
              initial={{ opacity: 0.2, y: "0" }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
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

        {/* PROJECT SECTION - remaining -500vh - Ithu vanthu height 100vh la set pandrathuku parent div*/}
        <div className="sticky top-0  h-screen flex gap-4 items-center overflow-hidden">
          {/* ------1ST SECTION------- */}
          {/* ithu ennoa project list ah flex ah mathi horizondal ah set poandrthuku so ennoda project container ovvonum 100vh 100vw so total ah 400vw eduthukum overflow ah irukum*/}

          {/* Intha container than move panna poren */}
          <motion.div className="flex " style={{ x }}>
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-red-200" />

            {/* PROJECT LIST CONTAINER*/}
            {projects.map((project) => (
              // PROJECT CONTAINER -project container ovvonum 100vh 100vw - itha than nama flex items ah vekrom
              <div
                key={project.id}
                className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r rounderd ${project.color}`}
              >
                {/* PROJECT INFO */}
                <div className="flex flex-col gap-8 text-white">
                  {/* PROJECT TITLE */}
                  <h1 className="text-3xl font-bold  md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-gray-700 ">
                    {project.title}
                  </h1>

                  {/* PROJECT IMAGE */}
                  <div className="relative w-80 h-48 md:w-[390px] md:h-60 lg:w-[460px] lg:h-[270px] xl:w-[510px] xl:h-[300px] 2xl:w-[570px] 2xl:h-[350px] ">
                    <Image src={project.img} alt={project.title} fill />
                    {/* Next js la imaeg intha maari optimize pannalam */}
                  </div>

                  {/* PROJECT DESC */}
                  <p className="lg:text-xl w-80 md:w-96 lg:w-[400px] xl:w-[500px] 2xl:w-[600px] text-slate-700 font-normal">
                    {project.desc}
                  </p>
                  <div className=" flex justify-end lg:translate-x-1/3">
                    <Link href={project.link} target="_blank">
                      <button className="p-2 text-sm  font-semibold text-slate-600 md:p-4 md:text-lg lg:p-6 xl:p-8 rounded bg-white hover:scale-110 transition duration-300 hover:shadow-sm ">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
          Do you have a projects?
        </h1>
        <div className="relative">
          {/* SVG Element */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 8, repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:h-[500px] md:w-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath
                xlinkHref="#circlePath"
                className="text-[17px] md:text-[19px"
              >
                Front End Developer and Back End Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href={"/contact"}
            className="w-20 h-20 md:h-28 md:w-28 xl:h-32 xl:w-32 bg-red-500 text-white  rounded-full flex items-center justify-center text-center m-auto absolute top-0 left-0 right-0 bottom-0 cursor-pointer text-sm md:text-lg"
            style={{ zIndex: "1000" }}
          >
            Hire Me
          </Link>
          {/* it's that easy - but i make a lot of mistakes */}
        </div>
      </div>
    </motion.div>
  );
}
/**
 * nama nextjs la first complie agi second time cache la irunthu send aguratha explicit ah pathen- athu pakkava irunthathu
 */
/**
 * @SVG_Element
 * svg um HTML element maari athukum thani tags iruku
 * so athu oru thani markup language for creating images and canvas
 */
/*
    <div className="relative border w-full flex items-center justify-center ">

        <Link
        href={"/contact"}
        className="w-16 h-16 md:h-28 md:w-28 bg-black text-white  rounded-full flex items-center justify-center text-center m-auto "
        >
        Hire Me
    </Link>
  ithu maari pandratha avru innoru way la panni irukaru

*/
