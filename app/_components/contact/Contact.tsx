"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  const [viewCount, setViewCount] = useState<number>(0);
  const [emailDisplay, setEmailDisplay] = useState<boolean>(false);

  const contactEmail = "kumararnim1@vivaldi.net";
  const emailSubject = "Project Inquiry";
  const emailBody = "Hi, I\'d like to discuss a project with you.";

  const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        transform: `${emailDisplay
            ? "perspective(300px) rotateY(-180deg)"
            : "perspective(300px) rotateY(-360deg)"
          }`,
      }}
      className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:flex-row justify-between rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f]`}
    >
      {!emailDisplay ? (
        <div
          className={`${syne.className
            } flex flex-col sm:flex-row justify-between items-center w-full duration-1000 ${emailDisplay && "opacity-0"
            }`}
        >
          {/* Title */}
          <div className="inline w-full sm:w-auto">
            <AnimatedTitle
              wordSpace={"mr-2 md:mr-[12px]"}
              charSpace={"mr-[0.001em]"}
              className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold text-center sm:text-left"
            >
              GOT A PROJECT IN MIND?
            </AnimatedTitle>
          </div>

          {/* Contact Button */}
          <Link href="#footer" data-no-blobity>
            <button
              className={`text-base mt-6 sm:mt-0 block sm:inline-block font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none ${viewCount <= 1 && "duration-500 delay-[1500ms]"
                } ${inView
                  ? " opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
                }`}
              data-blobity-radius="12"
              onClick={() => {
                setEmailDisplay(!emailDisplay);
              }}
            >
              CONTACT&nbsp;ME
            </button>
          </Link>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            exit={{ opacity: 0 }}
            style={{
              transform: `${emailDisplay
                  ? "perspective(300px) rotateY(-180deg)"
                  : "perspective(300px) rotateY(0deg)"
                }`,
            }}
            className="w-full"
          >
            <div className="ml-auto float-right md:absolute right-0 -top-5 text-2xl opacity-50">
              <Icon
                icon="gg:close"
                data-blobity
                onClick={() => {
                  setEmailDisplay(false);
                }}
              />
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full py-6">
              <div className={`${syne.className} text-center mb-6`}>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
                  LET&apos;S CONNECT
                </h3>
                <p className="opacity-80 mb-6">
                  Click the button below to send me an email directly
                </p>
              </div>

              <a
                href={mailtoLink}
                className={`rounded-md bg-linear-to-r from-[#d9d9d91f] to-[#7373731f] py-3 px-5 ${syne.className} font-bold uppercase mt-4 border-2 border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300`}
                data-blobity-radius="12"
              >
                Email Me
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}