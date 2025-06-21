"use client"
import AnimatedTitle from "../ui/AnimatedTitle";
import { Title } from "../ui/Title"

import { TimelineItem } from "./TimelineItem"

import { TimelineItemProps } from "@/utils/types";

import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: 'swap', // Improved font loading performance
});

const TimelineData: TimelineItemProps[] = [
  {
    companyImg: "/jss.png",
    jobTitle: "B.Tech",
    company: "JSSATE Noida",
    jobType: "Electrical Engineering",
    duration: "November 2022 - August 2026",
    stuffIDid: [
      "Pursuing Bachelor's degree in Electrical Engineering",
      "Relevant coursework in Circuit Analysis, Power Systems, and Control Systems",
      "Active participation in technical workshops and seminars"
    ]
  },
  {
    companyImg: "/ayyappa.png",
    jobTitle: "Senior Secondary Schooling",
    company: "Sree Ayyappa Public School",
    jobType: undefined,
    duration: "April 2020 - April 2022",
    stuffIDid: [
      "Completed 12th grade with Science stream",
      "Focus on Physics, Chemistry, and Mathematics",
      "Achieved excellent academic performance"
    ]
  },
  {
    companyImg: "/xaviers.png",
    jobTitle: "Secondary Schooling",
    company: "St.Xaviers' School",
    jobType: undefined,
    duration: "Mar 2009 - March 2020",
    stuffIDid: [
      "Completed foundational education with strong academic record",
      "Active participation in extracurricular activities",
      "Developed leadership and communication skills"
    ]
  },
];

export default function Timeline() {
  return (
    <div className="mt-8 sm:mt-10 md:mt-[110px]">
      <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <AnimatedTitle
            wordSpace="mr-2 sm:mr-3 lg:mr-4"
            charSpace="mr-[0.001em]"
            className={`uppercase ${syne.className} antialiased text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent leading-tight`}
            id="about-title"
          >
            Education
          </AnimatedTitle>
          <div className="mt-4 sm:mt-6 lg:mt-8 w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"/>
        </div>
      <div className="flex mt-4 sm:mt-6 gap-2 sm:gap-4 pl-1 sm:pl-3">
        <div className="flex flex-col gap-6 sm:gap-10 max-w-4xl w-full">
          {
            TimelineData.map((item, index) => (
              <TimelineItem
                key={index}
                companyImg={item.companyImg}
                jobTitle={item.jobTitle}
                company={item.company}
                jobType={item.jobType}
                duration={item.duration}
                stuffIDid={item.stuffIDid}
              />
            ))}
        </div>
      </div>
    </div>
  );
}