"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot-sm z-0" />

      {/* Content */}
      <div className="relative z-10 font-secondary flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-5xl sm:text-8xl font-bold text-foreground mb-4 font-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          HackPrinceton 20XX
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-sm sm:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          A short, catchy tagline about the hackathon.
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl text-accent mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          Date 1 - Date 2, 20XX
        </motion.p>
        <motion.a
          href="https://my.hackprinceton.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-accent/90 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
        >
          Apply
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
