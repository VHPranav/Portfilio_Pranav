"use client"

import { AnimatedText } from "@/components/ui/animated-text";
import WaveParticles from "@/components/ui/wave-particles";
import Image from "next/image";
import haha from "../../public/images/haha.png"

export default function WhatIDo() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center bg-[#FCFBF8] px-6 py-20 md:px-12 lg:px-20">
            <div className="w-full max-w-6xl">

                {/* Section Title */}
                <div className="mb-6">
                    <AnimatedText className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
                        <span className="text-[#BEBEBE]">From</span>{" "}
                        <span className="text-[#222224]">Design to Code</span>
                    </AnimatedText>
                    <AnimatedText className="text-[#6B6B6B] text-base md:text-lg max-w-2xl leading-relaxed">
                        I design intuitive interfaces and build scalable, high-performance web applications that turn ideas into real, usable products.
                    </AnimatedText>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

                    {/* UI/UX Design Card */}
                    <div className="bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[2rem] p-8 flex flex-col justify-between min-h-[500px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                        {/* Card Visual */}
                        <div className="bg-white rounded-[1.5rem] p-8 mb-6 shadow-xl flex items-center justify-center min-h-[300px] ">
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-bold text-[#222224]">Hello,</span>
                                <button className="px-4 py-2 border border-[#E0E0E0] rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                    + Add Name
                                </button>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div>
                            <AnimatedText className="text-2xl font-semibold text-[#222224] mb-3">
                                UI/UX Design
                            </AnimatedText>
                            <AnimatedText className="text-[#444444] text-md mb-3 leading-normal">
                                Wireframes, visual design, design systems
                            </AnimatedText>
                            <AnimatedText className="text-[#555555] text-sm font-medium">
                                Figma → Framer workflows
                            </AnimatedText>
                        </div>
                    </div>

                    {/* Front-End Development Card */}
                    <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[400px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-gray-100">
                        {/* Empty space for consistency */}
                        <div className="mb-6 min-h-[300px]">
                            <WaveParticles
                                className="h-full w-full"
                                particleSize={0.15}
                                colorIdle="#333333"
                                colorActive="#6BB6FF"
                                backgroundColor="transparent"
                            />
                        </div>

                        {/* Card Content */}
                        <div>
                            <AnimatedText className="text-2xl  font-semibold text-[#222224] mb-3">
                                Front-End <br /> Development
                            </AnimatedText>
                            <AnimatedText className="text-[#6B6B6B] text-md leading-normal">
                                React, scalable architecture, performance
                            </AnimatedText>
                        </div>
                    </div>

                    {/* Motion & Interaction Card */}
                    <div className="bg-gradient-to-br from-[#F5D6B8] to-[#E8B88A] rounded-[2rem] p-8 flex flex-col justify-between min-h-[400px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                        {/* Card Visual - Circular Gradient */}
                        <div className="rounded-[1.5rem] mb-6  flex items-center justify-center min-h-[300px] overflow-hidden relative">
                            <Image src={haha} alt="haha" fill className="object-cover" />
                        </div>

                        {/* Card Content */}
                        <div>
                            <h3 className="text-2xl font-semibold text-[#222224] mb-3">
                                Motion & <br /> Interaction
                            </h3>
                            <p className="text-[#444444] text-md leading-normal">
                                Micro-interactions, scroll animations, modern UI polish
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
