"use client";
import React from "react"

import "intersection-observer"
import { useInView } from "react-intersection-observer"
import { GraduationCap, School, BookOpen, Calendar, MapPin } from "lucide-react"
import { TimelineItemProps } from "@/utils/types"

export const TimelineItem = ({
  companyImg,
  jobTitle,
  company,
  jobType,
  duration,
  stuffIDid,
}: TimelineItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-60px 0px",
    triggerOnce: true,
  });

  const getIcon = (title: string) => {
    if (title.includes("B.Tech")) {
      return <GraduationCap className="h-5 w-5" />
    } 
    if (title.includes("Senior Secondary")) {
      return <School className="h-5 w-5" />
    } 
    return <BookOpen className="h-5 w-5" />
  }

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 relative duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
    >
      {/* Timeline line connector */}
      <div
        className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-400 to-transparent opacity-30"
      />
      
      <div className="flex items-start gap-6 group w-full -ml-3.5">
        {/* Timeline dot with icon */}
        <div className="relative flex-shrink-0 ml-3.5">
          <div
            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
          >
            {
              getIcon(jobTitle)
            }
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-pulse opacity-20"
          />
        </div>

        {/* Content card */}
        <div
          className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl group-hover:shadow-2xl group-hover:border-blue-500/30 transition-all duration-300 w-full"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            {/* Company logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-md">
                <img
                  src={companyImg}
                  alt="Institution"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {jobTitle}
                </h3>
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-lg">
                  <MapPin className="h-4 w-4" />
                    <span>
                      {company}
                    </span>
                    {
                      jobType && (
                    <>
                      <span className="text-slate-400">•</span>
                        <span className="text-slate-300">
                          {jobType}
                        </span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="h-4 w-4" />
                  <span className="font-medium">
                    {duration}
                  </span>
              </div>

              {
                stuffIDid && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {stuffIDid.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
