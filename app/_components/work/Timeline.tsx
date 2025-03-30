"use client"

import { Title } from "../ui/Title"

import { TimelineItem } from "./TimelineIem"

import { TimelineItemProps } from "@/utils/types";

const TimelineData: TimelineItemProps[] = [
  {
    companyImg: "/jss.png",
    jobTitle: "B.Tech",
    company: "JSS Academy Of Technical Education",
    jobType: "Electrical Engineering",
    duration: "November 2022 - August 2026",
    stuffIDid: undefined
  },
  {
    companyImg: "/ayyappa.png",
    jobTitle: "Senior Secondary Schooling",
    company: "Sree Ayyappa Public School",
    jobType: undefined,
    duration: "April 2020 - April 2022",
    stuffIDid: undefined
  },
  {
    companyImg: "/xaviers.png",
    jobTitle: "Secondary Schooling",
    company: "St.Xaviers' School",
    jobType: undefined,
    duration: "Mar 2009 - March 2020",
    stuffIDid: undefined
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Education </Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
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
