import React from "react";
import error from "../../assets/ErrorPage/error.png";
import error2 from "../../assets/ErrorPage/error2.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white h-screen flex flex-col items-center justify-center">
      {/* Floating & Bouncing Images */}
      <div className="flex items-center md:gap-x-10 justify-center">
        <motion.img
          src={error2}
          alt="error"
          className="w-[300px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        
        <motion.img
          src={error}
          alt="error"
          className="w-[200px] drop-shadow-[0_0_20px_rgba(234,106,18,0.8)]"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        
        <motion.img
          src={error2}
          alt="error"
          className="w-[300px]"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      {/* Text Animation */}
      <motion.h3
        className="md:text-6xl text-3xl font-bold mt-8"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Page Not Found
      </motion.h3>

      {/* Button with Glow & Hover Animation */}
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.15, boxShadow: "0px 0px 20px rgba(234,106,18,0.9)" }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ["0px 0px 0px rgba(234,106,18,0)", "0px 0px 20px rgba(234,106,18,0.8)"] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-6 py-3 px-10 rounded-xl bg-[#EA6A12] text-white font-semibold text-lg md:text-2xl cursor-pointer"
        >
          Back To Home
        </motion.button>
      </Link>
    </div>
  );
};

export default ErrorPage;
