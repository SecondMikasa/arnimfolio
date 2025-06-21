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
    threshold: 0.25,
    rootMargin: "-100px 0px",
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
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden mt-12 sm:mt-16 md:mt-[100px]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        style={{
          transform: `${emailDisplay
            ? "perspective(800px) rotateY(180deg)"
            : "perspective(800px) rotateY(0deg)"
            }`,
        }}
        className="card px-8 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20 rounded-3xl bg-gradient-to-br from-[#d9d9d91f] via-[#7373731f] to-[#4a4a4a1f] backdrop-blur-sm border border-white/10 shadow-2xl"
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {!emailDisplay ? (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className={`${syne.className} flex flex-col justify-between w-full`}
          >
            {/* Header Section */}
            <div className="text-center mb-8 lg:mb-12">
              <motion.div variants={itemVariants}>
                <AnimatedTitle
                  wordSpace="mr-2 md:mr-[12px]"
                  charSpace="mr-[0.001em]"
                  className="text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight pb-2"
                >
                  LET&apos;S CREATE SOMETHING
                </AnimatedTitle>
                <AnimatedTitle
                  wordSpace="mr-2 md:mr-[12px]"
                  charSpace="mr-[0.001em]"
                  className="text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight pb-2"
                >
                  AMAZING TOGETHER
                </AnimatedTitle>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-base md:text-lg mt-6 mb-2 max-w-2xl mx-auto leading-relaxed"
              >
                Ready to bring your vision to life? I&apos;m passionate about crafting exceptional digital experiences
                that make a lasting impact. Let&apos;s collaborate and turn your ideas into reality.
              </motion.p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Contact Info */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Icon icon="mdi:email-outline" className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email me at</p>
                      <p className="text-white font-medium">{contactEmail}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <Icon icon="mdi:clock-outline" className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Response time</p>
                      <p className="text-white font-medium">Within 24 hours</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Icon icon="mdi:calendar-outline" className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Availability</p>
                      <p className="text-white font-medium">Open for new projects</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="pt-4">
                  <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    {
                      socialLinks.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300"
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
                            className={`text-xl transition-colors duration-300 ${hoveredSocial === social.name ? 'text-white' : 'text-gray-400'
                              }`}
                          />
                        </motion.a>
                      ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - CTA Button */}
              <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-end">
                <div className="text-center lg:text-right mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Ready to start?</h3>
                  <p className="text-gray-400">Click below to get in touch</p>
                </div>

                <motion.button
                  className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl font-bold text-white text-lg md:text-xl overflow-hidden shadow-2xl"
                  data-blobity-radius="20"
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Button content */}
                  <div className="relative flex items-center space-x-3">
                    <span>LET&apos;S TALK</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <Icon icon="mdi:arrow-right" className="text-xl" />
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
              {/* Close button */}
              <motion.div
                className="absolute right-4 top-4 z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                  onClick={() => setEmailDisplay(false)}
                  data-blobity-radius="8"
                >
                  <Icon icon="mdi:close" className="text-xl" />
                </button>
              </motion.div>

              <div className="flex flex-col items-center justify-center min-h-[400px] py-12 px-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-8"
                >
                  <Icon icon="mdi:email-send-outline" className="text-white text-3xl" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={`${syne.className} text-center mb-8`}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    LET&apos;S CONNECT
                  </h3>
                  <p className="text-gray-300 text-lg mb-2 max-w-md">
                    Ready to discuss your project? I&apos;m excited to hear your ideas!
                  </p>
                  <p className="text-gray-400 text-sm">
                    Click the button below to send me an email directly
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  <motion.a
                    href={mailtoLink}
                    className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                    data-blobity-radius="16"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon icon="mdi:email-outline" className="text-xl" />
                    <span>Send Email</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <Icon icon="mdi:arrow-right" className="text-xl" />
                    </motion.div>
                  </motion.a>

                  <p className="text-center text-gray-500 text-sm">
                    or copy: <span className="text-gray-300 font-mono">{contactEmail}</span>
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