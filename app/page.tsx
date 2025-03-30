"use client";

import { Hero } from "./_components/hero/Hero"

import { initialBlobityOptions } from "@/utils/blobity.config"
import useBlobity from "blobity/lib/react/useBlobity"
import Works from "./_components/work/Works";
import About from "./_components/about/About";

export default function Home() {
  const blobity = useBlobity(initialBlobityOptions);

  return (
    <main className="overflow-x-hidden sm:overflow-x-visible">
      <Hero />
      <Works />
      <About />
    </main>
  );
}