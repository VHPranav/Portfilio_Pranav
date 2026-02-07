"use client"

import Image from "next/image";
import { AnimatedText } from "@/components/ui/animated-text";
import alpha from "../../public/images/webp/alphdash.webp"
import clockhash from "../../public/images/webp/four.webp"
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Latest() {
    const projects = [
        {
            id: 1,
            title: "Clockhash Website Redesign",
            description: "Building scalable software and digital solutions for modern businesses with a focus on high-performance interfaces.",
            tags: ["UI/UX", "Next.js", "Figma", "React"],
            image: clockhash,
            link: "/work/design/clockhash",
            color: "#E1F5FE"
        },
        {
            id: 2,
            title: "AlphaInterface Recruitment Platform",
            description: "An intelligent AI assistant simplifying the recruitment process for modern HR teams and candidates.",
            tags: ["Product Design", "AI", "SaaS"],
            image: alpha,
            link: "/work/design/alphainterface",
            color: "#F3E5F5"
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="min-h-screen w-full bg-[#FCFBF8] px-6 py-20 md:px-12 lg:px-20">
            <div className="w-full max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="mb-14 flex justify-center items-center">
                    <div className="max-w-4xl text-center">
                        <AnimatedText className="text-4xl md:text-[54px] lg:text-[54px] font-normal leading-tight text-[#CFCFCF]" delay={0} staggerDelay={0.08}>
                            UX engineer <span className="text-[#222224]">crafting purposeful digital experiences</span>
                        </AnimatedText>
                    </div>
                </div>

                {/* Project Cards Stack */}
                <div className="flex flex-col gap-12 md:gap-20">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            total={projects.length}
                        />
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/work/design"
                        className="group relative inline-flex items-center gap-2 px-10 py-5 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
                    >
                        View more case studies
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, total }: { project: any, index: number, total: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Calculate a slight scale down for older cards as new ones come in
    // This isn't strictly necessary for "overlap", but adds a nice depth effect
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"]
    });

    return (
        <div
            ref={cardRef}
            className="sticky top-24 w-full h-auto min-h-[500px] mb-12"
            style={{
                zIndex: index + 1,
            }}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center p-8 md:p-10 gap-12"
            >
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col justify-center items-start">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag: string, i: number) => (
                            <span
                                key={i}
                                className="px-4 py-1.5 bg-[#F5F5F7] text-[#666666] rounded-full text-xs md:text-sm font-medium border border-[#EEEEEE]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-normal mb-6 text-[#222224] leading-tight">
                        {project.title}
                    </h2>
                    <p className="text-[#666666] text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
                        {project.description}
                    </p>
                    <Link
                        href={project.link}
                        className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-base font-medium hover:bg-black transition-colors"
                    >
                        View case study
                    </Link>
                </div>

                {/* Right: Image Area */}
                <div className="flex-1 w-full min-h-[300px] md:min-h-[450px] relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#FFF9C4]/50 to-[#FFF176]">
                    <div className="absolute top-20 w-[110%] h-[100%] rounded-[2rem] overflow-hidden transform rotate-2">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
