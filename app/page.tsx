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
  // Note: Silences the TypeScript/ESLint warning about the variable being declared but not used and prevents build tools from failing due to linting errors
  // eslint-disable-next-line no-unused-vars
  // const blobity = useBlobity(initialBlobityOptions)

  const blobityInstance = useBlobity(initialBlobityOptions);

    useEffect(() => {
        if (blobityInstance.current) {
            // @ts-ignore for debugging purposes or playing around
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