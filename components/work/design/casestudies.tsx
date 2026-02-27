"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import one from "../../../public/images/clckportftwo.webp";
import two from "../../../public/images/alph.webp";
import three from "../../../public/images/twrwtch.webp";
import four from "../../../public/images/vlcgrd.webp";
import five from "../../../public/images/clckport.webp";
import six from "../../../public/images/markt.webp";
import Image from "next/image";

export default function CaseStudies() {
    const cases = [
        {
            id: 1,
            title: "Clockhash Webpage",
            category: "Web Design / Branding",
            image: one,
            link: "/work/design/clockhash",
        },
        {
            id: 2,
            title: "AlphaInterface",
            category: "SaaS Dashboard",
            image: two,
            link: "/work/design/alphainterface",
        },
        {
            id: 3,
            title: "Towerwatch",
            category: "Monitoring Platform",
            image: three,
            link: "/work/design/towerwatch",
        },
        {
            id: 4,
            title: "Velocegrade",
            category: "SaaS Dashboard",
            image: four,
            link: "/work/design/velocegrade",
        },
        {
            id: 5,
            title: "Portfolio Page",
            category: "Portfolio Design",
            image: five,
            link: "/work/design/portfolio",
        },
        {
            id: 6,
            title: "Marketing Page",
            category: "Landing Page",
            image: six,
            link: "/work/design/marketing",
        },
    ];

    return (
        <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <AnimatedText className="text-4xl md:text-5xl font-medium text-[#222224] mb-3 tracking-[-0.06em]">
                        Case Studies
                    </AnimatedText>

                    <AnimatedText
                        className="text-lg md:text-lg text-[#6B6B6B] max-w-2xl leading-relaxed mb-4"
                        delay={0.2}
                    >
                        Over the years, I’ve designed and built modern interfaces for startups, SaaS products, and AI-driven platforms, spanning marketing websites, product dashboards, and interactive user experiences. My work focuses on clarity, scalability, and thoughtful interaction design.
                    </AnimatedText>

                    <AnimatedText
                        className="text-sm font-medium text-[#222224] bg-gray-100 px-4 py-2 rounded-full inline-block"
                        delay={0.4}
                    >
                        New case studies coming soon.
                    </AnimatedText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {cases.map((item) => (
                        <Link href={item.link || "#"} key={item.id} className="group cursor-pointer block">
                            {/* Image Container */}
                            <div className="relative aspect-[16/7] bg-gray-100 rounded-2xl overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 z-20"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-medium text-black group-hover:text-[#333333] transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-[#6B6B6B] text-base">
                                        {item.category}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[#222224] text-base font-medium border-b border-[#222224]">
                                        View Case Study
                                    </span>
                                    <IoArrowForward className="w-5 h-5 text-[#222224] transition-transform duration-300 group-hover:translate-x-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
