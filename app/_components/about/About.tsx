import React, { useEffect, useState, useCallback } from "react";

import { Syne } from "next/font/google";

import { useView } from "@/contexts/viewContext";

import { useInView } from "react-intersection-observer";

import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

import { ResumeModal } from "./ResumeModal";

const syne = Syne({ 
  subsets: ["latin"],
  display: 'swap', // Improved font loading performance
});

// Memoized skills data to prevent re-renders
const SKILLS_DATA = [
  {
    title: "Languages",
    skills: "TypeScript, JavaScript(ES6+), C, C++, HTML5, CSS3"
  },
  {
    title: "Front-End Tools", 
    skills: "React, Next.js, Redux Toolkit, TailwindCSS, Shadcn UI, Ant Design"
  },
  {
    title: "Back-End Tools",
    skills: "Node.js, Express.js, RESTful APIs, AppWrite, Convex"
  },
  {
    title: "Databases",
    skills: "MongoDB, PostgreSQL"
  },
  {
    title: "Other Tools",
    skills: "GreenSock, Zustand, Vercel, Socket.io, Prisma"
  }
] as const;

export default function About() {
  const { setSectionInView } = useView();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Extract just the file ID from your Google Drive URL
  const resumeFileId = "1vKtYe75k3p8KppRknHMzAY_-ZE_ZVyAe";

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  // Memoized handlers to prevent unnecessary re-renders
  const handleOpenResumeModal = useCallback(() => {
    setIsResumeModalOpen(true);
  }, []);

  const handleCloseResumeModal = useCallback(() => {
    setIsResumeModalOpen(false);
  }, []);

  // Handle section view updates
  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  // Handle modal keyboard and scroll interactions
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isResumeModalOpen) {
        handleCloseResumeModal();
      }
    };

    if (isResumeModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isResumeModalOpen, handleCloseResumeModal]);

  return (
    <section 
      ref={ref} 
      className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 min-h-screen" 
      id="about"
      aria-labelledby="about-title"
      style={{ zIndex: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-6rem)]">
        {/* Hero Title */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <AnimatedTitle
            wordSpace="mr-2 sm:mr-3 lg:mr-4"
            charSpace="mr-[0.001em]"
            className={`uppercase ${syne.className} antialiased text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent leading-tight`}
            id="about-title"
          >
            I craft digital experiences that simplify your world
          </AnimatedTitle>
          <div className="mt-4 sm:mt-6 lg:mt-8 w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"/>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Story Section */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="relative">
              <div className="absolute -left-2 sm:-left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-emerald-500 rounded-full"></div>
              <div className="pl-6 sm:pl-8 space-y-6 sm:space-y-8">
                <AnimatedBody className="text-white/90 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light">
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-purple-400 font-bold">I</span> have always tried to excel at everything I take upon myself. While striving to graduate from one of the most challenging branches in technical education as circuital branch is supposed to be, I found myself drawn to the art of building websites and web applications.
                </AnimatedBody>
                
                <AnimatedBody className="text-white/85 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light">
                  My journey began in <span className="text-cyan-400 font-semibold">2013</span> when I was just in class 4. Our computer teacher introduced us to QBasic - while others found it dreadful, I discovered my passion for <span className="text-emerald-400 font-semibold">coding</span>. That spark ignited a lifelong love affair with technology.
                </AnimatedBody>
                
                <AnimatedBody className="text-white/85 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light">
                  Each project is a unique canvas where I ensure continuous learning and growth. I don&apos;t just code - I craft experiences that people can use with <span className="text-purple-400 font-semibold">ease and delight</span>.
                </AnimatedBody>

                {/* CTA Section */}
                <div className="pt-4 sm:pt-6 lg:pt-8">
                  <AnimatedBody>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <span className="text-white/70 text-base sm:text-lg lg:text-xl">Want to know more?</span>
                      <button
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                        onClick={handleOpenResumeModal}
                        id="resume-button"
                        aria-describedby="resume-description"
                        type="button"
                      >
                        <span className="relative z-10">View My Résumé</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      </button>
                      <span id="resume-description" className="sr-only">
                        Opens resume in a modal dialog
                      </span>
                    </div>
                  </AnimatedBody>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    Tech Arsenal
                  </h3>
                  <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  {SKILLS_DATA.map(({ title, skills }, index) => (
                    <div key={title} className="group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-2 h-2 rounded-full ${
                          index === 0 ? 'bg-purple-500' :
                          index === 1 ? 'bg-cyan-500' :
                          index === 2 ? 'bg-emerald-500' :
                          index === 3 ? 'bg-yellow-500' : 'bg-pink-500'
                        }`}></div>
                        <AnimatedTitle
                          wordSpace="mr-[0.5ch]"
                          charSpace="mr-[0.001em]"
                          className="font-bold text-sm sm:text-base lg:text-lg text-white/90"
                        >
                          {title}
                        </AnimatedTitle>
                      </div>
                      <AnimatedBody className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed pl-5 group-hover:text-white/85 transition-colors duration-300">
                        {skills}
                      </AnimatedBody>
                    </div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
        pdfId={resumeFileId}
      />
    </section>
  );
}