import Hero from "../components/landing/hero"
import Latest from "../components/landing/latest"
import WhatIDo from "../components/landing/whatido"
import Workflow from "../components/landing/workflow"
import Tools from "@/components/landing/tools";
import AboutMe from "@/components/landing/aboutme";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[#FCFBF8]">
      <Hero />
      <Latest />
      <WhatIDo />
      <Workflow />
      <Tools />
      <AboutMe />
      <CTA />
      <Footer />
    </main>
  );
}