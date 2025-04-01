import { useView } from "@/contexts/viewContext";
import React, { SetStateAction } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export default function MobileMenu({
  onMenuOpen,
}: {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { sectionInView } = useView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid z-10 items-center grid-cols-2 md:hidden px-6 py-5 fixed top-12 rounded-2xl bg-linear-to-r from-[#d9d9d94d] to-[#7373734d] backdrop-blur-sm max-w-[90%] w-full mt-12 md:mt-16"
    >
      <ul
        className="flex flex-col gap-4 lg:gap-12 text-white/25"
        onClick={() => onMenuOpen(false)}
      >
        <Link
          href="#home"
          className={`${sectionInView === "home" && "text-white"} w-fit`}
        >
          Home
        </Link>
        <Link
          href="#work"
          className={`${sectionInView === "work" && "text-white"} w-fit`}
        >
          Work
        </Link>
        <Link
          href="#about"
          className={`${sectionInView === "about" && "text-white"} w-fit`}
        >
          About
        </Link>
        <Link
          href="#contact"
          className={`${sectionInView === "contact" && "text-white"}  w-fit`}
        >
          Contact
        </Link>
      </ul>

      <div className="flex flex-col gap-3 z-20 items-center justify-center">
        <Link
          className="p-4 flex-1 flex justify-center w-full rounded-xl h-fit text-4xl visited:bg-[#E3D3BE] bg-linear-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
          target="_blank"
          href="https://www.linkedin.com/in/kumar-arnim-705088268"
          data-blobity-radius="10"
        >
          <Icon icon="hugeicons:linkedin-01" />
        </Link>

        <div className="flex gap-3 w-full">
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-linear-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="https://github.com/secondmikasa"
            data-blobity-radius="10"
          >
            <Icon icon="hugeicons:github" />
          </Link>
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-linear-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="https://twitter.com/KumarArnim1"
            data-blobity-radius="10"
          >
            <Icon icon="akar-icons:x-fill" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
