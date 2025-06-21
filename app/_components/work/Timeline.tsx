"use client"
import { Title } from "../ui/Title"

import { TimelineItem } from "./TimelineItem"

import { TimelineItemProps } from "@/utils/types";

const TimelineData: TimelineItemProps[] = [
  {
    companyImg: "/jss.png",
    jobTitle: "B.Tech",
    company: "JSS Academy Of Technical Education",
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
    <div className="mt-10 md:mt-[110px]">
      <Title> Education </Title>

      <div className="flex mt-6 gap-4 pl-3">
        <div className="flex flex-col gap-10 max-w-4xl">
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
