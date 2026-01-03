"use client"

import Image from "next/image";
import { AnimatedText } from "@/components/ui/animated-text";
import alpha from "../../public/images/alphaweb.webp"
import clockhash from "../../public/images/clckweb.webp"
export default function Latest() {
    const projects = [
        {
            id: 1,
            title: "Alphainterface",
            description: "An intelligent AI assistant simplifying the recruitment process",
            tags: ["UI/UX", "Next.js", "Figma", "React"],
            image: alpha, // User will add their own background
            link: "#"
        },
        {
            id: 2,
            title: "Clockhash Webpage",
            description: "Building scalable software and digital solutions for modern businesses",
            tags: ["UI/UX", "Next.js", "Figma", "React"],
            image: clockhash, // User will add their own background
            link: "#"
        }
    ];

    return (
        <section className="min-h-screen w-full flex items-center justify-center bg-[#FCFBF8] px-6 py-20 md:px-12 lg:px-20">
            <div className="w-full max-w-6xl mt-0 md:mt-30">

                {/* Section Title */}
                <div className="mb-16 flex justify-center items-center">
                    <div className="max-w-4xl text-center">
                        <AnimatedText className="text-4xl md:text-[64px] lg:text-[64px] font-normal leading-tight text-[#CFCFCF]" delay={0} staggerDelay={0.08}>
                            UX engineer <span className="text-[#222224]">crafting purposeful digital experiences</span>
                        </AnimatedText>
                    </div>
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative rounded-[2rem] overflow-hidden bg-white  hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Background Image */}
                            <div className="relative w-full min-h-[560px]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover hover:scale-101 transition-all"
                                />
                                {/* Gradient Overlay */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div> */}
                            </div>

                            {/* Card Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-black">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-normal"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <AnimatedText className="text-2xl md:text-3xl font-medium mb-2 text-black">
                                    {project.title}
                                </AnimatedText>

                                {/* Description and Button */}
                                <div className="flex items-center gap-4 flex-wrap">
                                    <AnimatedText className="text-black/90 text-sm md:text-base leading-relaxed flex-1">
                                        {project.description}
                                    </AnimatedText>
                                    <a
                                        href={project.link}
                                        className="inline-block text-black text-sm md:text-base font-normal hover:underline transition-all whitespace-nowrap"
                                    >
                                        View Case Study
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
