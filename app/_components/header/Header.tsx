"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import { Icon } from "@iconify/react/dist/iconify.js";

import { useView } from "@/contexts/viewContext";

import MobileMenu from "./MobileMenu";

export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed w-full max-w-[90%] md:max-w-[95%] lg:max-w-[1223px] z-10 select-none mx-auto">
        <div className="flex justify-between items-center px-4 py-4 rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f] mt-4 md:mt-8 backdrop-blur-lg">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/arnim-logo1.svg"
              width={300}
              height={300}
              alt="logo"
              className="select-none -ml-20 h-auto"
            />
          </div>
          
          {/* Navigation Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-white/25">
            <Link
              href="#home"
              className={`hover:text-white transition-colors duration-300 ${
                sectionInView === "home" && "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="#work"
              className={`hover:text-white transition-colors duration-300 ${
                sectionInView === "work" && "text-white"
              }`}
            >
              Work
            </Link>
            <Link
              href="#about"
              className={`hover:text-white transition-colors duration-300 ${
                sectionInView === "about" && "text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`hover:text-white transition-colors duration-300  ${
                sectionInView === "contact" && "text-white"
              }`}
            >
              Contact
            </Link>
          </ul>
          
          {/* Social Icons */}
          <div className="hidden md:flex gap-5 text-xl text-white/25">
            <Link
              target="_blank"
              href="https://github.com/SecondMikasa"
              className="hover:text-white transition-colors duration-300"
            >
              <Icon icon="hugeicons:github" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/kumar-arnim-705088268"
              className="hover:text-white transition-colors duration-300"
            >
              <Icon icon="hugeicons:linkedin-01" />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/KumarArnim1"
              className="hover:text-white transition-colors duration-300"
            >
              <Icon icon="akar-icons:x-fill" />
            </Link>
          </div>
          
          {/* Mobile Menu Button with Rotation Animation */}
          <motion.div
            className="cursor-pointer flex md:hidden text-2xl text-white/25 hover:text-white transition-colors duration-300 relative z-20"
            onClick={() => setMenuOpen(!menuOpen)}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
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
        </div>
      </div>
      
      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
}