import React, { SetStateAction } from "react"

import Link from "next/link"

import { motion } from "framer-motion"

import { useView } from "@/contexts/viewContext"

import { Icon } from "@iconify/react/dist/iconify.js"

export default function MobileMenu({
  onMenuOpen,
}: {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { sectionInView } = useView()

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: { ease: "easeIn" }
    },
  }

  const socialItemVariants = {
    hidden: {
      opacity: 0,
      x: 15
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      x: 10,
      transition: { ease: 'easeIn' }
    }
  }

  const navItems = ["home", "work", "about", "contact"]

  const socialItems = [
    {
      name: "GitHub",
      icon: "hugeicons:github",
      url: "https://github.com/secondmikasa",
      size: "text-3xl"
    },
    {
      name: "LinkedIn",
      icon: "hugeicons:linkedin-01",
      url: "https://www.linkedin.com/in/kumar-arnim-705088268",
      size: "text-xl"
    },
    {
      name: "Twitter",
      icon: "akar-icons:x-fill",
      url: "https://twitter.com/KumarArnim1",
      size: "text-xl"
    },
  ]

  const handleLinkClick = () => {
    onMenuOpen(false)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed md:hidden top-[75px] left-0 right-0 mx-auto max-w-[90%] w-full z-20 grid grid-cols-1 sm:grid-cols-2 items-start gap-8 px-6 py-8 rounded-2xl shadow-xl border border-[rgba(var(--border-color),0.4)] bg-[rgba(18,32,59,0.95)] backdrop-blur-lg"
    >
      {/* Navigation Section */}
      <nav className="mb-6 sm:mb-0">
        <ul className="flex flex-col gap-5"> 
          {
            navItems.map((item) => (
            <motion.li key={item} variants={itemVariants}>
              <Link
                href={`#${item}`}
                className={`text-lg font-medium capitalize text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 w-fit group ${sectionInView === item ? "!text-white" : ""
                  }`}
                onClick={handleLinkClick} 
              >
                {/* Underline effect for active/hover */}
                <motion.span
                  className={`block h-0.5 bg-gradient-to-r from-[#5EB5E6] to-[#3B82F6] transition-all duration-300 group-hover:w-5 ${sectionInView === item ? "w-5" : "w-0" 
                    }`}
                  layoutId="underline" 
                />
                <span> 
                  {item}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Social Links Section */}
      <div className="flex flex-col gap-4 z-20">
        <motion.p
          variants={socialItemVariants} 
          className="text-white/70 text-sm mb-1 sm:text-left"
        >
          Connect with me:
        </motion.p>

        {socialItems.map((social) => (
          <motion.div
            key={social.name}
            variants={socialItemVariants}
            className="w-full"
          >
            <Link
              className="flex items-center justify-center gap-3 w-full p-3 rounded-lg h-fit text-white bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.15)] transition-all duration-300 group/social"
              target="_blank"
              rel="noopener noreferrer"
              href={social.url}
              data-blobity-radius="10"
              onClick={handleLinkClick}
              aria-label={`Visit my ${social.name} profile`}
            >
              <Icon
                icon={social.icon}
                className={`${social.size} text-white/70 group-hover/social:text-white transition-colors duration-200`}
              />
              <span className="text-sm font-medium">
                {social.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}