"use client"

import { TextAnimate } from "../ui/text-animate"
import Image from "next/image"
import me from "../../public/images/me.png"

export default function AboutMe() {
    return (
        <section className="w-full py-12 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* Left Column: Title + Gradient Background */}
                <div className="relative static lg:sticky lg:top-24">
                    {/* Gradient Blur Effect */}
                    <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-[#FFEDB3] via-[#B3D0FF] to-[#E9B3FF] opacity-60 blur-[60px] md:blur-[100px] -z-10 rounded-full mix-blend-multiply" />

                    <TextAnimate
                        as="h2"
                        className="text-6xl md:text-[100px] leading-none font-normal text-[#A19E9E] tracking-tight mb-8 lg:mb-0"
                        animation="blurInUp"
                    >
                        about <span className="text-[#222224] font-medium">me</span>
                    </TextAnimate>
                </div>

                {/* Right Column: Image + Content */}
                <div className="flex flex-col gap-10">
                    {/* Image Placeholder */}
                    <div className="w-full aspect-[4/3] bg-[#ECECEC] rounded-[32px] overflow-hidden shadow-sm relative">
                        <Image src={me} alt="Me" className="w-full h-full object-cover" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-6">
                        <TextAnimate
                            as="p"
                            className="text-[#6B6B6B] text-md md:text-lg leading-normal"
                            animation="blurInUp"
                            delay={0.2}
                        >
                            Hey, I'm Pranav – a Creative Front-End Developer & UI/UX Designer.
                        </TextAnimate>

                        <TextAnimate
                            as="p"
                            className="text-[#6B6B6B] text-md md:text-lg leading-normal"
                            animation="blurInUp"
                            delay={0.3}
                        >
                            I design and build clean, high-performance interfaces where design, motion, and engineering come together. I enjoy working on early-stage products, landing pages, and AI-driven experiences, turning ideas into scalable, production-ready interfaces.
                        </TextAnimate>

                        <TextAnimate
                            as="p"
                            className="text-[#6B6B6B] text-md md:text-lg leading-normal"
                            animation="blurInUp"
                            delay={0.4}
                        >
                            Driven by curiosity and craft, I focus on clarity, interaction, and real-world usability—building things that not only look good, but work beautifully.
                        </TextAnimate>

                        <TextAnimate
                            as="p"
                            className="text-[#222224] text-md md:text-lg font-medium pt-2"
                            animation="blurInUp"
                            delay={0.5}
                        >
                            Design with intent. Build with purpose.
                        </TextAnimate>
                    </div>
                </div>
            </div>
        </section>
    )
}
