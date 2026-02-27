"use client"

import { useState } from "react"
import { TextAnimate } from "../ui/text-animate"
import AutumnBreeze from "../ui/autmn-breeze"
import LeafBurst from "../ui/leaf-burst"
import { useRouter } from "next/navigation"

export default function CTA() {
    const [isExploding, setIsExploding] = useState(false)
    const router = useRouter()

    const handleGetInTouch = () => {
        setIsExploding(true)
        setTimeout(() => {
            window.open("https://calendly.com/pranavvh778/portfolio", "_blank")
            setIsExploding(false)
        }, 500) // 2.5s delay for animation
    }

    return (
        <section className="w-full py-32 px-6 relative overflow-hidden ">
            {/* Background Effect */}
            <AutumnBreeze />

            {/* Burst Effect */}
            {isExploding && <LeafBurst />}

            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
                <TextAnimate
                    as="h2"
                    className="text-6xl md:text-[80px] font-semibold text-[#222224] tracking-tight mb-4 tracking-[-0.06em]"
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

                <div className="relative group cursor-pointer" onClick={handleGetInTouch}>
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-black flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        <span className="text-white text-lg font-medium">Get in touch</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
