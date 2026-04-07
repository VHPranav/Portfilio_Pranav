"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import one from "../../../public/images/clckportftwo.webp";
import two from "../../../public/images/alph.webp";
import three from "../../../public/images/alphawebb.png";
import four from "../../../public/images/twrwtchh.webp";
import five from "../../../public/images/hashinfra.webp";
import six from "../../../public/images/markt.webp";
import Image from "next/image";
import { ImageZoom } from "@/components/ui/image-zoom";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function CaseStudies() {
    const cases = [
        {
            id: 1,
            title: "Clockhash Webpage",
            category: "Web Design / Branding",
            image: one,
            demoUrl: "https://clockhash.com/",
        },
        {
            id: 2,
            title: "AlphaInterface",
            category: "SaaS Dashboard",
            image: two,
            demoUrl: "https://alphainterface.ai/",
        },
        {
            id: 3,
            title: "AlphaInterface Webpage",
            category: "Web Design / Branding",
            image: three,
            demoUrl: "https://alphainterface.ai/",
        },
        {
            id: 4,
            title: "Towerwatch Webpage",
            category: "Web Design / Branding",
            image: four,
            demoUrl: "https://app.towerwatch.io/",
        },
        {
            id: 5,
            title: "Hashinfra Webpage",
            category: "Web Design / Branding",
            image: five,
            demoUrl: "https://hashinfra.com/",
        },
        {
            id: 6,
            title: "Marketing Page",
            category: "Landing Page",
            image: six,
            demoUrl: "https://clockhash.com/your-solution-partner/mvp-product-development-solution",
        },
    ];

    return (
        <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <AnimatedText className="text-4xl md:text-5xl tracking-[-0.06em] font-medium text-[#222224] mb-3">
                        Development Projects
                    </AnimatedText>

                    <AnimatedText
                        className="text-lg md:text-lg text-[#6B6B6B] max-w-2xl leading-relaxed mb-4"
                        delay={0.2}
                    >
                        Showcasing complex technical challenges solved with elegant code. From scalable backends to interactive frontends, these projects demonstrate full-stack expertise.
                    </AnimatedText>

                    <AnimatedText
                        className="text-sm font-medium text-[#222224] bg-gray-100 px-4 py-2 rounded-full inline-block"
                        delay={0.4}
                    >
                        More projects coming soon.
                    </AnimatedText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {cases.map((item) => (
                        <div key={item.id} className="group flex flex-col">
                            {/* Image Container */}
                            <div className="relative aspect-[16/7] bg-gray-100 rounded-2xl overflow-hidden mb-6 block cursor-pointer">
                                <ImageZoom
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover z-20"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-medium text-[#222224] group-hover:text-[#6B6B6B] transition-colors mb-1">
                                    {item.title}
                                </h3>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#9B9B9B] text-base">
                                        {item.category}
                                    </p>

                                    <motion.a
                                        href={item.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{
                                            y: 0,
                                            opacity: 1
                                        }}
                                        className="flex items-center gap-2 text-[#222224] font-medium text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 no-underline origin-left"
                                    >
                                        <span className="border-b border-[#222224]/30 hover:border-[#222224] transition-colors pb-0.5">
                                            Live Demo
                                        </span>
                                        <div className="w-6 h-6 rounded-full bg-[#222224] flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <FiArrowUpRight className="text-white text-xs" />
                                        </div>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
