import React, { useEffect } from "react"

import "intersection-observer"
import { useInView } from "react-intersection-observer"

import { useView } from "@/contexts/viewContext"

import { Title } from "../ui/Title"

import FolioCard from "./FolioCard"
import Timeline from "./Timeline"


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
                "Designed and developed VideoShrinkPro , a web-based video conversion and compression tool that utilizes FFmpeg WebAssembly (Wasm) to process videos offline, ensuring user privacy and eliminating the need for server-side processing.   ",
            stack: ["next", "mongodb", "typescript", "resend"],
            img: "/secretscribbles.png",
        },
        {
            title: "VideoShrinkPro",
            gitLink: "https://github.com/SecondMikasa/VideoShrinkPro",
            liveLink: "",
            about:
                "Designed and developed VideoShrinkPro , a web-based video conversion and compression tool that utilizes FFmpeg WebAssembly (Wasm) to process videos offline, ensuring user privacy and eliminating the need for server-side processing.   ",
            stack: ["next", "ffmpeg-wasm", "typescript", "tailwindcss"],
            img: "/videoshrinkpro.png",
        },
        {
            title: "ReadMePro",
            gitLink: "https://github.com/SecondMikasa/ReadMePro",
            liveLink: "https://readmepro.vercel.app/",
            about:
                "Developed a dynamic README editor that simplifies designing, managing, and maintaining README files on the go, boosting productivity for developers.Engineered an intuitive interface streamlining documentation workflows.",
            stack: ["next", "localstorage", "typescript", "tailwindcss"],
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
            <Title>Projects</Title>
            {works.map((work, index) => (
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
