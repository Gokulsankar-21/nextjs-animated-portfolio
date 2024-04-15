"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      className="h-full"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12  lg:px-24 xl:px-28 ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            alt="profile"
            src={"/hero.png"}
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 md:gap-8 justify-center items-center p-2 ">
          {/* TITLE */}
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="lg:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 pt-1 sm:pt-0 ">
            <Link href={"/portfolio"}>
              <button className="p-2 md:p-4 text-white bg-black rounded-lg ring-1 ring-black hover:scale-105 transition duration-300">
                View My Work
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="p-2 md:p-4 text-black rounded-lg ring-1 ring-black hover:scale-105 transition duration-300 hover:bg-black hover:text-white">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
