import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Syne } from "next/font/google";

import { useView } from "@/contexts/viewContext";
import { useInView } from "react-intersection-observer";

import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

import { ResumeModal } from "./ResumeModal";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I try to make products that simplify your work on web
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I have always tried to excel at things I take upon myself. While striving to graduate from one of the hardest branches in technical education as circuital branches are know to be, I found myself getting attached to learning how to build websites and webapps
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Belonging to an ICSE affiliated school, I wrote my very first lines of code back in 2013 when I was in class 4, and our computer teacher was trying to make us learn Qbasic, dreadful as it was for everyone to understand those complex syntax, I actually ended up liking coding. In college life when I got the oppurtunity, I decided to give Web Developement a chance
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Each webapp is unique so I ensure that I learn and grow through each one ensuring that I not only put in my best but also deliver what people could use with ease. Wanna learn more? Here&apos;s
            <br className="hidden md:block" />
            <button
              className="underline focus:outline-none"
              onClick={() => setIsResumeModalOpen(true)}
            >
              my résumè
            </button>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Languages
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              TypeScript, JavaScript(ES6+), C, C++, HTML5, CSS3
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Front-End Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              React, Next.js, Redux Toolkit, TailwindCSS, Shadcn UI, Ant Design
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Back-End Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Node.js, Express.js, RESTful APIs, AppWrite, Convex
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Databases
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              MongoDB, PostgreSQL
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Other Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              GreenSock, Zustand, Vercel, Socket.io
            </AnimatedBody>
          </div>
        </div>
      </div>

      {/* PDF Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        pdfUrl="https://drive.google.com/file/d/1ZNFfEkTnaczScr6SHsdgcSEZ_hSDaCJD/view?usp=sharing"
      />
    </section>
  );
}