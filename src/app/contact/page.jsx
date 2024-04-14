"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoSendSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const text = "Say  Hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    setError(false);
    setSuccess(false);
    e.preventDefault();
    if (!formRef.current[0].value || !formRef.current[1].value) {
      setError("Please fill required fields ...!");
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY }
      )
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => setError(error.text));
  };
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      className="h-full"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* TEXT CONTAINER  */}
      <div className="flex flex-col h-full lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12  lg:px-24 xl:px-28">
        <div className="h-1/3 lg:h-full lg:w-1/2 text-4xl md:text-6xl flex items-center justify-center gap-1 my-4 md:my-0">
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
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="h-full w-full lg:h-full lg:w-1/2 bg-red-50 flex flex-col gap-8 justify-center p-12 lg:p-24 rounded-lg"
        >
          <span className="text-xl ">Dear Gokul Dev,</span>
          <textarea
            rows={5}
            className="bg-transparent  border-b-2 border-b-black resize-none outline-none"
            name="user_message"
          />
          <span className="text-xl ">My mail address is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_email"
          />
          <span className="text-xl ">Regards</span>
          <button className="p-4 font-semibold bg-purple-300 text-gray-600 rounded-lg hover:bg-purple-400 hover:text-white hover:scale-105 transition duration-300 flex gap-4 items-center justify-center text-lg md:text-xl">
            Send <IoSendSharp className="text-xl" />
          </button>
          {success && (
            <span className="font-semibold text-green-600">
              Email Send Successfully !
            </span>
          )}
          {error && (
            <span className="font-semibold text-red-600">
              {error || "Something went wrong. Please Try Again !"}
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
/**
 *
 * inga staggered animation aha nama Pure JS method la pandra maari 1.1 2.1 delay vechi animate pannitom
 */

/**
 * Next la nama env variables ah NEXT_PUBLIC keyword use panni add pannuvom
 *
 * EmailJS - Email as a service
 *  so nama manaual ah backend la irunthu email ah namaku anupuvom so nama backend ilama intha services ah use pannikalam
 * athula Service - nama entha services ah choose pandrom  -Gmail or Outlook
 * athula public key for authentication
 * template id - athu email oda template
 * nama kudutha detailes ah vechi nama account la irukura service id and template id ah vechi athu namaku email aha send pannum
 */
/**
 * to me
 * ennoda emailjs account la gokulsankar2002t@gmail.com kuduthu iruken
 * athula yaru email anupuranagaloa athu vaangi template la vechi anga kudutha email (gokulsankar2002t@gmail.com) ennoda email (gokulsankar2002t@gmail.com) la irunthu ennoda email kae varum
 */
