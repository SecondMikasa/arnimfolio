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
      return <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
    } 
    if (title.includes("Senior Secondary")) {
      return <School className="h-4 w-4 sm:h-5 sm:w-5" />
    } 
    return <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
  }

  return (
    <div
      ref={ref}
      className={`flex items-start gap-3 sm:gap-4 relative duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
    >
      {/* Timeline line connector */}
      <div
        className="absolute left-4 sm:left-6 top-12 sm:top-16 w-0.5 h-full bg-gradient-to-b from-blue-400 to-transparent opacity-30"
      />
      
      <div className="flex items-start gap-3 sm:gap-6 group w-full -ml-2 sm:-ml-3.5">
        {/* Timeline dot with icon */}
        <div className="relative flex-shrink-0 ml-2 sm:ml-3.5">
          <div
            className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
          >
            {getIcon(jobTitle)}
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-pulse opacity-20"
          />
        </div>

        {/* Content card */}
        <div
          className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-xl group-hover:shadow-2xl group-hover:border-blue-500/30 transition-all duration-300 w-full"
        >
          <div className="flex flex-col gap-4">
            {/* Mobile: Center-aligned header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
              {/* Company logo - centered on mobile */}
              <div className="flex-shrink-0 self-center sm:self-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-md">
                  <img
                    src={companyImg}
                    alt="Institution"
                    className="w-full h-full object-contain rounded-md sm:rounded-lg"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 space-y-2 sm:space-y-3">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                    {jobTitle}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-blue-400 font-semibold text-sm sm:text-lg">
                    <div className="flex items-start gap-1 sm:gap-2 justify-center sm:justify-start">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 mt-0.5" />
                      <span className="text-center sm:text-left">{company}</span>
                    </div>
                    {jobType && (
                      <>
                        <span className="text-slate-400 hidden sm:inline">•</span>
                        <span className="text-slate-300 text-xs sm:text-base text-center sm:text-left">
                          {jobType}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-1 sm:gap-2 text-slate-400 text-sm sm:text-base justify-center sm:justify-start">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-center sm:text-left">
                    {duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Key highlights */}
            {stuffIDid && (
              <div className="mt-2 sm:mt-4">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3 uppercase tracking-wider text-center sm:text-left">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {stuffIDid.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 text-slate-300 text-sm sm:text-base">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="leading-relaxed text-left">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
