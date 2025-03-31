"use client";
import useBlobity from "blobity/lib/react/useBlobity"

import { Hero } from "./_components/hero/Hero"

import Works from "./_components/work/Works";
import About from "./_components/about/About";
import Contact from "./_components/contact/Contact";
import Footer from "./_components/footer/Footer";

import { initialBlobityOptions } from "@/utils/blobity.config";
import { useEffect } from "react";
// import Blobity from "blobity";

export default function Home() {

  const blobityInstance = useBlobity(initialBlobityOptions);

    useEffect(() => {
        if (blobityInstance.current) {
            // @ts-expect-error for debugging purposes or playing around
            window.blobity = blobityInstance.current;
        }
    }, [blobityInstance]);

  return (
    <main className="overflow-x-hidden sm:overflow-x-visible">
      <Hero />
      <Works />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}