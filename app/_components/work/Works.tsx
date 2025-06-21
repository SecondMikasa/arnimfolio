import React, { useEffect } from "react"

import "intersection-observer"
import { useInView } from "react-intersection-observer"

import { useView } from "@/contexts/viewContext"

import { Syne } from "next/font/google";

import FolioCard from "./FolioCard"
import Timeline from "./Timeline"
import AnimatedTitle from "../ui/AnimatedTitle"

const syne = Syne({
    subsets: ["latin"],
    display: 'swap', // Improved font loading performance
});

export default function Works() {
    const { setSectionInView } = useView();

    const works = [
        {
            title: "DevDocs",
            gitLink: "https://github.com/SecondMikasa/DevDocs",
            liveLink: "https://devdocs-wine.vercel.app/",
            about:
                "DevDocs is a real-time, collaborative web based document editor that enables users to create, edit, and share text content seamlessly. Whether you need to create a resume, write a letter, jot down notes, or collaborate remotely over a document, DevDocs provides an intuitive and interactive experience.",
            stack: ["next.js", "liveblocks", "tiptap", "shadcn-ui"],
            img: "/devdocs.png",
        },
        {
            title: "DevDraws",
            gitLink: "https://github.com/SecondMikasa/DevDraws",
            liveLink: "https://devdraws.vercel.app/",
            about:
                "DevDraws is a real-time, collaborative whiteboard application that enables users to create, edit, and share visual content seamlessly. Whether you need to brainstorm, sketch ideas, or collaborate remotely, DevDraws provides an intuitive and interactive experience.",
            stack: ["next.js", "liveblocks", "canvas api", "shadcn-ui"],
            img: "/devdraws.png",
        },
        {
            title: "Secret Scribbles",
            gitLink: "https://github.com/SecondMikasa/SecretScribbles",
            liveLink: "",
            about:
                "Secret Scribbles is an anonymous social platform where users can collect feedback, comments, and advice without revealing the identity of contributors. The platform provides a safe space for authentic expression without the fear of judgment or exposure.",
            stack: ["next.js", "mongodb", "typescript", "resend"],
            img: "/secretscribbles.png",
        },
        {
            title: "VideoShrinkPro",
            gitLink: "https://github.com/SecondMikasa/VideoShrinkPro",
            liveLink: "",
            about:
                "Designed and developed VideoShrinkPro , a web-based video conversion and compression tool that utilizes FFmpeg WebAssembly (Wasm) to process videos offline, ensuring user privacy and eliminating the need for server-side processing.   ",
            stack: ["next.js", "ffmpeg-wasm", "typescript", "tailwindcss"],
            img: "/videoshrinkpro.png",
        },
        {
            title: "ReadMePro",
            gitLink: "https://github.com/SecondMikasa/ReadMePro",
            liveLink: "https://readmepro.vercel.app/",
            about:
                "Developed a dynamic README editor that simplifies designing, managing, and maintaining README files on the go, boosting productivity for developers.Engineered an intuitive interface streamlining documentation workflows.",
            stack: ["next.js", "localstorage", "typescript", "tailwindcss"],
            img: "/readmepro.png",
        },

    ];

    const { ref, inView } = useInView({
        threshold: 0.1,
        rootMargin: "-100px 0px",
    });

    useEffect(() => {
        if (inView) setSectionInView("work");
    }, [inView, setSectionInView]);

    return (
        <section
            className="flex flex-col gap-6 md:gap-10 pt-[110px]"
            ref={ref}
            id="work"
        >
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                <AnimatedTitle
                    wordSpace="mr-2 sm:mr-3 lg:mr-4"
                    charSpace="mr-[0.001em]"
                    className={`uppercase ${syne.className} antialiased text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent leading-tight`}
                    id="about-title"
                >
                    Projects
                </AnimatedTitle>
                <div className="mt-4 sm:mt-6 lg:mt-8 w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
            </div>
            {
                works.map((work, index) => (
                    <FolioCard
                        key={index}
                        img={work.img}
                        title={work.title}
                        gitLink={work.gitLink}
                        liveLink={work.liveLink}
                        about={work.about}
                        stack={work.stack}
                    />
                ))}
            <Timeline />
        </section>
    );
}
