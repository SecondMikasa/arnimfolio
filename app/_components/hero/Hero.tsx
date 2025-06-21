"use client";
import React, {
  useEffect,
  useRef
} from "react"
import Image from "next/image"

import { useInView } from "react-intersection-observer"
import "intersection-observer";

import {
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useView } from "@/contexts/viewContext";

export const Hero = () => {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 2,
      ease: easeInOut,
      repeat: 0,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["2rem", "0px"],
    transition: {
      delay: 0.8,
      duration: 0.9,
      ease: "easeOut",
    },
  };

  const animateIn2 = {
    opacity: [0, 1],
    y: ["2rem", "0px"],
    transition: {
      delay: 1.3,
      duration: 0.9,
      ease: "easeOut",
    },
  };

  const animateIn3 = {
    opacity: [0, 1],
    y: ["2rem", "0px"],
    transition: {
      delay: 1.8,
      duration: 0.9,
      ease: "easeOut",
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative pt-20 xs:pt-24 sm:pt-0 flex flex-col sm:flex-row min-h-screen sm:h-dvh items-center gap-6 sm:justify-between overflow-hidden pb-8 sm:pb-0"
      id="home"
    >
      <div className="absolute inset-0 hero-glow opacity-70"/>
      <div className="text w-full sm:w-[60%] z-10 px-4 sm:px-0">
        <motion.div
          className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-white/70 text-lg xs:text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6 whitespace-nowrap font-light">
            Hey, there
          </p>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
            className="col-span-3"
          >
            <Image
              src="/hand-wave.svg"
              width={25}
              height={25}
              alt="hand-waving"
              className="drop-shadow-lg xs:w-[30px] xs:h-[30px]"
            />
          </motion.div>
        </motion.div>
        
        <motion.h1
          className="text-[28px] xs:text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/70 inline font-light"> I&apos;m </p>
          <span
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-extrabold"
          >
            Kumar Arnim
          </span>
          <p>a Web Developer</p>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/60 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 max-w-2xl"
        >
          currently focused on building web apps that enhance user experience.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start"
          animate={animateIn3}
        >
          <a 
            href="#contact" 
            className="btn-primary py-3 px-6 rounded-full text-white font-medium tracking-wide text-lg shadow-lg hover:shadow-cyan-500/20 text-center"
          >
            Get in touch
          </a>
          <a 
            href="#work" 
            className="py-3 px-6 rounded-full text-white/80 font-medium tracking-wide text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 text-center"
          >
            See my work
          </a>
        </motion.div>
      </div>
      
      {/* IMAGE */}
      <motion.div 
        data-blobity-tooltip="The Tech Guy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="relative w-full sm:w-auto flex justify-center sm:justify-end"
      >
        <motion.div
          ref={imgRef}
          style={{ rotate, scale, opacity: imgOpacity }}
          className="h-image flex items-center w-[320px] h-[380px] xs:w-[350px] xs:h-[420px] sm:w-[340px] sm:h-[410px] md:w-[360px] md:h-[430px] lg:w-[380px] lg:h-[450px] xl:w-[390px] xl:h-[470px] justify-center relative"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-radial opacity-80"></div>
          
          <Image
            src="/arnim.png"
            priority
            fill
            alt="Arnim's picture"
            className="bg-image-radial px-10 pt-20 drop-shadow-2xl"
          />
          
          {/* Decorative orbital element */}
          <motion.div 
            className="absolute -bottom-4 xs:-bottom-6 -right-4 xs:-right-6 w-20 h-20 xs:w-24 xs:h-24 rounded-full border border-white/10 flex items-center justify-center"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-16 h-16 xs:w-20 xs:h-20 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-12 h-12 xs:w-16 xs:h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-sm"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}