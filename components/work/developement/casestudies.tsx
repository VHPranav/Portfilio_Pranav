"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import one from "../../../public/images/clckportftwo.webp";
import two from "../../../public/images/alph.webp";
import three from "../../../public/images/alphawebb.webp";
import four from "../../../public/images/twrwtchh.webp";
import five from "../../../public/images/hashinfra.webp";
import six from "../../../public/images/markt.webp";
import Image from "next/image";

export default function CaseStudies() {
    const cases = [
        {
            id: 1,
            title: "Clockhash Webpage",
            category: "Web Design / Branding",
            image: one,
        },
        {
            id: 2,
            title: "AlphaInterface",
            category: "SaaS Dashboard",
            image: two,

        },
        {
            id: 3,
            title: "AlphaInterface Webpage",
            category: "Web Design / Branding",
            image: three,
        },
        {
            id: 4,
            title: "Towerwatch Webpage",
            category: "Web Design / Branding",
            image: four,
        },
        {
            id: 5,
            title: "Hashinfra Webpage",
            category: "Web Design / Branding",
            image: five,
        },
        {
            id: 6,
            title: "Marketing Page",
            category: "Landing Page",
            image: six,
        },
    ];

    return (
        <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#FCFBF8]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <AnimatedText className="text-4xl md:text-5xl font-medium text-[#222224] mb-3">
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
                        <div key={item.id} className="group cursor-pointer">
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
                                <h3 className="text-2xl font-medium text-[#222224] group-hover:text-[#6B6B6B] transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-[#9B9B9B] text-base">
                                        {item.category}
                                    </p>
                                    {/* <button className="px-4 py-2 text-sm font-medium text-[#9B9B9B] hover:text-[#222224] cursor-pointer">
                                        View Code
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
