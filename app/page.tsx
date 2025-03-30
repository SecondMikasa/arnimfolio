"use client";

import { Hero } from "./_components/hero/Hero"

import Works from "./_components/work/Works";
import About from "./_components/about/About";
import Contact from "./_components/contact/Contact";
import Footer from "./_components/footer/Footer";

export default function Home() {
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