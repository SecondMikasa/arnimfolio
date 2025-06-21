import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react/dist/iconify.js";
import Tag from "./Tag";

export default function FolioCard({
  title,
  img,
  gitLink,
  liveLink,
  about,
  stack,
}: {
  img: string;
  title: string;
  gitLink?: string;
  liveLink: string;
  about: string;
  stack: string[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`glass-card w-full rounded-2xl grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-6 transition-all duration-700 transform hover:shadow-lg hover:shadow-blue-500/10 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl lg:col-span-5 group w-full">
        <Image
          src={img}
          width={420}
          height={700}
          alt={`${title} project screenshot`}
          className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="flex flex-col gap-5 lg:col-span-7">
        <div className="flex items-center justify-between">
          <div className="max-w-[calc(100%-100px)]">
            <h2 className="text-gradient-blue text-2xl sm:text-3xl xl:text-4xl font-bold">
              {title}
            </h2>
          </div>
          
          <div className="flex gap-3 md:gap-4">
            <Link
              href={liveLink}
              className="rounded-full bg-gradient-to-br from-blue-600/20 to-blue-500/10 p-3 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-blue-500/25"
              target="_blank"
              aria-label="View Live Site"
              data-blobity-radius="34"
              data-blobity-magnetic="true"
            >
              <Icon 
                icon="line-md:external-link-rounded" 
                className="text-2xl sm:text-3xl text-blue-400 hover:text-blue-300 transition-colors"
              />
            </Link>
            
            <Link
              href={`${gitLink ? gitLink : "#"}`}
              className={`rounded-full bg-gradient-to-br from-purple-600/20 to-purple-500/10 p-3 transition-all duration-300 ${gitLink ? "hover:scale-110 hover:shadow-md hover:shadow-purple-500/25" : "cursor-not-allowed opacity-60"}`}
              target="_blank"
              aria-label="View GitHub Repository"
              data-blobity-radius="34"
              data-blobity-magnetic="true"
              {...(!gitLink && {
                "data-blobity-tooltip": "Privately owned by Offset",
              })}
            >
              <Icon
                icon="mingcute:github-line"
                className={`text-2xl sm:text-3xl ${gitLink ? "text-purple-400 hover:text-purple-300" : "text-gray-400"} transition-colors`}
              />
            </Link>
          </div>
        </div>
        
        <p className="text-base text-[rgb(var(--foreground-secondary))] leading-relaxed">
          {about}
        </p>
        
        <div className="flex gap-3 md:gap-4 flex-wrap mt-auto">
          {
            stack.map((tech, index) => (
              <Tag
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}>
              {tech}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}