"use client";
import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Syne } from "next/font/google";

import { useView } from "@/contexts/viewContext";

import "intersection-observer";
import { useInView } from "react-intersection-observer";

import AnimatedTitle from "../ui/AnimatedTitle";

import { Icon } from "@iconify/react/dist/iconify.js";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();
  const [emailDisplay, setEmailDisplay] = useState<boolean>(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const contactEmail = "kumararnim1@vivaldi.net";
  const emailSubject = "Project Inquiry";
  const emailBody = "Hi, I'd like to discuss a project with you.";

  const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const socialLinks = [
    {
      name: "GitHub",
      icon: "mdi:github",
      url: "https://github.com/SecondMikasa",
      color: "#37912"
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/kumar-arnim-705088268",
      color: "#0077B5"
    },
    {
       name: "Instagram",
      icon: "mdi:instagram",
      url: "https://www.instagram.com/arnim_kun",
      color: "#EA4C89"
    },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      url: "https://twitter.com/KumarArnim1",
      color: "#1DA1F2"
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.15, // Reduced threshold for mobile
    rootMargin: "-50px 0px", // Reduced margin for mobile
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEmailDisplay(!emailDisplay);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slightly faster for mobile
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced movement for mobile
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden mt-8 sm:mt-12 md:mt-16 lg:mt-[100px] px-3 sm:px-4"
    >
      {/* Animated background elements - smaller for mobile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        style={{
          transform: `${emailDisplay
            ? "perspective(800px) rotateY(180deg)"
            : "perspective(800px) rotateY(0deg)"
            }`,
        }}
        className="card px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-16 lg:px-16 lg:py-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#d9d9d91f] via-[#7373731f] to-[#4a4a4a1f] backdrop-blur-sm border border-white/10 shadow-2xl"
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {!emailDisplay ? (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className={`${syne.className} flex flex-col justify-between w-full`}
          >
            {/* Header Section - Mobile optimized */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <motion.div variants={itemVariants}>
                <AnimatedTitle
                  wordSpace="mr-1 sm:mr-2 md:mr-[12px]"
                  charSpace="mr-[0.001em]"
                  className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[42px] xl:text-[52px] font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight pb-1 sm:pb-2"
                >
                  LET&apos;S CREATE SOMETHING
                </AnimatedTitle>
                <AnimatedTitle
                  wordSpace="mr-1 sm:mr-2 md:mr-[12px]"
                  charSpace="mr-[0.001em]"
                  className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[42px] xl:text-[52px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight pb-1 sm:pb-2"
                >
                  AMAZING TOGETHER
                </AnimatedTitle>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 mb-2 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
              >
                Ready to bring your vision to life? I&apos;m passionate about crafting exceptional digital experiences
                that make a lasting impact. Let&apos;s collaborate and turn your ideas into reality.
              </motion.p>
            </div>

            {/* Main Content - Mobile-first layout */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Contact Info - Mobile optimized */}
              <motion.div variants={itemVariants} className="w-full space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <motion.div
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -1 }} // Reduced hover effect for mobile
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon icon="mdi:email-outline" className="text-white text-lg sm:text-xl" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-xs sm:text-sm">Email me at</p>
                      <p className="text-white font-medium text-sm sm:text-base break-all">{contactEmail}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -1 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon icon="mdi:clock-outline" className="text-white text-lg sm:text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Response time</p>
                      <p className="text-white font-medium text-sm sm:text-base">Within 24 hours</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -1 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon icon="mdi:calendar-outline" className="text-white text-lg sm:text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Availability</p>
                      <p className="text-white font-medium text-sm sm:text-base">Open for new projects</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links - Mobile optimized */}
                <motion.div variants={itemVariants} className="pt-3 sm:pt-4">
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Connect with me</p>
                  <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
                    {
                      socialLinks.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: `${social.color}20`,
                            borderColor: social.color
                          }}
                          whileTap={{ scale: 0.95 }}
                          onHoverStart={() => setHoveredSocial(social.name)}
                          onHoverEnd={() => setHoveredSocial(null)}
                          data-blobity-radius="12"
                        >
                          <Icon
                            icon={social.icon}
                            className={`text-lg sm:text-xl transition-colors duration-300 ${hoveredSocial === social.name ? 'text-white' : 'text-gray-400'
                              }`}
                          />
                        </motion.a>
                      ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button - Mobile optimized */}
              <motion.div variants={itemVariants} className="flex flex-col items-center w-full lg:items-end mt-4 sm:mt-6 lg:mt-0">
                <div className="text-center lg:text-right mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Ready to start?</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Click below to get in touch</p>
                </div>

                <motion.button
                  className="group relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl sm:rounded-2xl font-bold text-white text-base sm:text-lg md:text-xl overflow-hidden shadow-2xl w-full sm:w-auto max-w-xs"
                  data-blobity-radius="20"
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.02 }} // Reduced hover effect for mobile
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.5, delay: 1.0 }} // Faster for mobile
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Button content */}
                  <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                    <span>LET&apos;S TALK</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }} // Reduced movement for mobile
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <Icon icon="mdi:arrow-right" className="text-lg sm:text-xl" />
                    </motion.div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, rotateY: -180 }}
              animate={{ opacity: 1, rotateY: -180 }}
              exit={{ opacity: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                transform: `perspective(800px) rotateY(-180deg)`,
              }}
              className="w-full relative"
            >
              {/* Close button - Mobile optimized */}
              <motion.div
                className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                  onClick={() => setEmailDisplay(false)}
                  data-blobity-radius="8"
                >
                  <Icon icon="mdi:close" className="text-lg sm:text-xl" />
                </button>
              </motion.div>

              <div className="flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px] py-8 sm:py-12 px-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 sm:mb-8"
                >
                  <Icon icon="mdi:email-send-outline" className="text-white text-2xl sm:text-3xl" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={`${syne.className} text-center mb-6 sm:mb-8 px-2`}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    LET&apos;S CONNECT
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg mb-2 max-w-sm mx-auto">
                    Ready to discuss your project? I&apos;m excited to hear your ideas!
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Click the button below to send me an email directly
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-3 sm:space-y-4 w-full max-w-xs"
                >
                  <motion.a
                    href={mailtoLink}
                    className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl font-bold text-white text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 w-full"
                    data-blobity-radius="16"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon icon="mdi:email-outline" className="text-lg sm:text-xl" />
                    <span>Send Email</span>
                    <motion.div
                      animate={{ x: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <Icon icon="mdi:arrow-right" className="text-lg sm:text-xl" />
                    </motion.div>
                  </motion.a>

                  <p className="text-center text-gray-500 text-xs sm:text-sm px-2">
                    or copy: <span className="text-gray-300 font-mono text-xs break-all">{contactEmail}</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </section>
  );
}