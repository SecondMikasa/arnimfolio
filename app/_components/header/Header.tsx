"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import { Icon } from "@iconify/react/dist/iconify.js";

import { useView } from "@/contexts/viewContext";

import MobileMenu from "./MobileMenu";

export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Add scroll detection for header appearance changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 w-full z-10 select-none flex justify-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className={`w-[90%] md:w-[85%] lg:w-[1223px] flex justify-between items-center px-5 py-4 rounded-2xl glass-card mt-4 md:mt-8 ${
            scrolled ? "shadow-lg" : "shadow-none"
          } transition-all duration-300`}
          animate={{
            backgroundColor: scrolled ? "rgba(18, 32, 59, 0.8)" : "rgba(18, 32, 59, 0.6)"
          }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/arnim-logo1.svg"
                width={300}
                height={300}
                alt="logo"
                className="select-none -ml-16 md:-ml-20 h-auto w-auto max-w-[260px] md:max-w-[300px]"
              />
            </motion.div>
          </div>
          
          {/* Navigation Links */}
          <ul className="hidden md:flex gap-4 lg:gap-8 text-white/50 font-medium">
            {["home", "work", "about", "contact"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={`#${item}`}
                  className={`hover:text-white transition-all duration-300 relative ${
                    sectionInView === item ? "text-gradient-blue" : ""
                  }`}
                >
                  <span className="capitalize">{item}</span>
                  {sectionInView === item && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#5EB5E6] to-[#3B82F6]"
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </ul>
          
          {/* Social Icons */}
          <div className="hidden md:flex gap-3 lg:gap-5 text-xl text-white/50">
            {[
              {
                href: "https://github.com/SecondMikasa",
                icon: "hugeicons:github"
              },
              {
                href: "https://www.linkedin.com/in/kumar-arnim-705088268",
                icon: "hugeicons:linkedin-01"
              },
              {
                href: "https://twitter.com/KumarArnim1",
                icon: "akar-icons:x-fill"
              }
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -3, 
                  scale: 1.1,
                  color: "rgb(var(--accent-primary))" 
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  target="_blank"
                  href={social.href}
                  className="text-current transition-colors duration-300"
                >
                  <Icon icon={social.icon} />
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Menu Button with Rotation Animation */}
          <motion.div
            className="cursor-pointer flex md:hidden text-2xl text-white/50 hover:text-gradient-blue transition-colors duration-300 relative z-20"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Icon icon={menuOpen ? "gg:close" : "lucide:menu"} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  )
}