"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    color: "from-red-100 to-blue-100",
    title: "Mern Blog App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam quis, iste dignissimos doloribus voluptatem aspernatur ",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://gokuldev.in",
  },
  {
    id: 2,
    color: "from-blue-100 to-violet-100",
    title: "Book Store App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam quis, iste dignissimos doloribus voluptatem aspernatur ",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://gokuldev.in",
  },
  {
    id: 3,
    color: "from-violet-100 to-purple-100",
    title: "IMDB Clone App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam quis, iste dignissimos doloribus voluptatem aspernatur ",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://gokuldev.in",
  },
  {
    id: 4,
    color: "from-purple-100 to-red-100",
    title: "Socio Pedia App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam quis, iste dignissimos doloribus voluptatem aspernatur ",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://gokuldev.in",
  },
];

export default function Portfolio() {
  // Horizandal scroll animation
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]); //inga nama x la - ku move padnrom ex:-100px y values vechi x la % moolima ana horizontal ah move panna porom.
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
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>

        {/* PROJECT SECTION - remaining -500vh - Ithu vanthu height 100vh la set pandrathuku parent div*/}
        <div className="sticky top-0  h-screen flex gap-4 items-center overflow-hidden">
          {/* ------1ST SECTION------- */}
          {/* ithu ennoa project list ah flex ah mathi horizondal ah set poandrthuku so ennoda project container ovvonum 100vh 100vw so total ah 400vw eduthukum overflow ah irukum*/}

          {/* Intha container than move panna poren */}
          <motion.div className="flex " style={{ x }}>
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-red-100" />

            {/* PROJECT LIST CONTAINER*/}
            {projects.map((project) => (
              // PROJECT CONTAINER -project container ovvonum 100vh 100vw - itha than nama flex items ah vekrom
              <div
                key={project.id}
                className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
              >
                {/* PROJECT INFO */}
                <div className="flex flex-col gap-8 text-white">
                  {/* PROJECT TITLE */}
                  <h1 className="text-3xl font-bold  md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-gray-700">
                    {project.title}
                  </h1>

                  {/* PROJECT IMAGE */}
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[300px] xl:w-[500px] xl:h-[350px] 2xl:w-[600px] 2xl:h-[420px]">
                    <Image src={project.img} alt={project.title} fill />
                    {/* Next js la imaeg intha maari optimize pannalam */}
                  </div>

                  {/* PROJECT DESC */}
                  <p className="lg:text-xl w-80 md:w-96 lg:w-[400px] xl:w-[500px] 2xl:w-[600px] text-slate-700 font-normal">
                    {project.desc}
                  </p>
                  <div className=" flex justify-end lg:translate-x-1/3">
                    <Link href={project.link}>
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
            className="w-16 h-16 md:h-28 md:w-28 bg-black text-white  rounded-full flex items-center justify-center text-center m-auto absolute top-0 left-0 right-0 bottom-0 "
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
