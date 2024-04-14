"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoSendSharp } from "react-icons/io5";

export default function Contact() {
  const text = "Say  Hello";
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      className="h-full"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* TEXT CONTAINER  */}
      <div className="flex flex-col h-full lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12  lg:px-24 xl:px-28">
        <div className="h-1/3 lg:h-full lg:w-1/2 text-4xl md:text-6xl flex items-center justify-center gap-1">
          {text.split("").map((letter, index) => (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: index * 0.1 }}
              key={index}
            >
              {letter}
            </motion.span>
          ))}
          <span className="ml-2"> 😊</span>
        </div>
        {/* FORM CONTAINER  */}
        <form className="h-full w-full lg:h-full lg:w-1/2 bg-red-50 flex flex-col gap-8 justify-center p-12 lg:p-24 rounded-lg">
          <span className="text-xl ">Dear Gokul Dev,</span>
          <textarea
            rows={5}
            className="bg-transparent  border-b-2 border-b-black resize-none outline-none"
          />
          <span className="text-xl ">My mail address is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span className="text-xl ">Regards</span>
          <button className="p-4 font-semibold bg-purple-300 text-gray-600 rounded-lg hover:bg-purple-400 hover:text-white hover:scale-105 transition duration-300 flex gap-4 items-center justify-center text-lg md:text-xl">
            Send <IoSendSharp className="text-xl"/>
          </button>
        </form>
      </div>
    </motion.div>
  );
}
/**
 *
 * inga staggered animation aha nama Pure JS method la pandra maari 1.1 2.1 delay vechi animate pannitom
 */
