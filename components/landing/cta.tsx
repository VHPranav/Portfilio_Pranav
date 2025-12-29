"use client"

import Link from "next/link"
import { TextAnimate } from "../ui/text-animate"
import AutumnBreeze from "../ui/autmn-breeze"

export default function CTA() {
    return (
        <section className="w-full py-32 px-6 relative overflow-hidden ">
            {/* Background Effect */}
            <AutumnBreeze />

            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
                <TextAnimate
                    as="h2"
                    className="text-6xl md:text-[80px] font-semibold text-[#222224] tracking-tight mb-4"
                    animation="blurInUp"
                >
                    Have a project in mind? Let’s build something great.
                </TextAnimate>

                <TextAnimate
                    as="p"
                    className="text-[#6B6B6B] text-lg md:text-xl font-normal mb-16"
                    animation="blurInUp"
                    delay={0.2}
                >
                    Discover how we could work together :)
                </TextAnimate>

                <Link
                    href="https://calendly.com/pranavvh778/portfolio"
                    target="_blank"
                    className="relative group cursor-pointer"
                >
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-black flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        <span className="text-white text-lg font-medium">Get in touch</span>
                    </div>
                </Link>
            </div>
        </section>
    )
}
