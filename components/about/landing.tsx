"use client"

import { TextAnimate } from "../ui/text-animate"
import Image from "next/image"
import me from "../../public/images/me.webp"
import { useState, useEffect } from "react"

export default function AboutMe() {
    const [activeSection, setActiveSection] = useState("about-me")

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            // Immediately set active section for better UX
            setActiveSection(id)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: "-20% 0px -50% 0px", // Trigger when section is near top/center
                threshold: 0.1
            }
        )

        const sections = document.querySelectorAll("section[id], div[id]")
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const navItems = [
        { label: "About me", id: "about-me" },
        { label: "Now", id: "now" },
        { label: "Timeline", id: "timeline" },
        { label: "Find me online", id: "find-me-online" }
    ]

    return (
        <section className="w-full py-12 md:py-24 px-6 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-start">

                {/* Left Column: Title + Gradient Background */}
                <div className="relative static lg:sticky lg:top-24 self-start">
                    {/* Gradient Blur Effect */}
                    <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-[#FFEDB3] via-[#B3D0FF] to-[#E9B3FF] opacity-60 blur-[60px] md:blur-[100px] -z-10 rounded-full mix-blend-multiply" />

                    {/* Desktop Navigation List */}
                    <div className="hidden lg:flex flex-col gap-4 mt-16">
                        {navItems.map((item, index) => (
                            <TextAnimate
                                key={item.id}
                                as="span"
                                className={`text-lg font-medium cursor-pointer transition-colors duration-200 ${activeSection === item.id ? "text-[#222224]" : "text-[#9B9B9B] hover:text-[#222224]"
                                    }`}
                                animation="blurInUp"
                                delay={0.2 + (index * 0.1)}
                                onClick={() => handleScrollTo(item.id)}
                            >
                                {item.label}
                            </TextAnimate>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image + Content */}
                <div className="flex flex-col gap-10">
                    {/* Image Placeholder */}
                    <div className="w-full aspect-[16/12] bg-[#ECECEC] rounded-[32px] overflow-hidden shadow-sm relative">
                        <Image src={me} alt="Me" className="w-full h-full object-cover" />
                    </div>

                    {/* Text Content - About Me */}
                    <div id="about-me" className="flex flex-col gap-6 scroll-mt-32">
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

                    {/* Now Section */}
                    <div id="now" className="flex flex-col gap-8 mt-12 scroll-mt-32">
                        <TextAnimate
                            as="h3"
                            className="text-4xl md:text-5xl font-semibold text-[#222224]"
                            animation="blurInUp"
                        >
                            Now
                        </TextAnimate>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <TextAnimate
                                    as="h4"
                                    className="text-xl md:text-2xl font-medium text-[#222224] group-hover:text-[#6B6B6B] transition-colors"
                                    animation="blurInUp"
                                    delay={0.1}
                                >
                                    Clockhash Technologies
                                </TextAnimate>
                                <span className="text-xl md:text-2xl text-[#222224] group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                            <TextAnimate
                                as="p"
                                className="text-[#6B6B6B] text-lg leading-relaxed"
                                animation="blurInUp"
                                delay={0.2}
                            >
                                Junior Software Engineer 2024-now
                            </TextAnimate>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div id="timeline" className="flex flex-col gap-8 mt-12 mb-24 scroll-mt-32">
                        <TextAnimate
                            as="h3"
                            className="text-4xl md:text-5xl font-semibold text-[#222224]"
                            animation="blurInUp"
                        >
                            Timeline
                        </TextAnimate>

                        <div className="relative border-l border-[#E5E5E5] ml-3 pl-8 flex flex-col gap-10">
                            {[
                                {
                                    year: "2018",
                                    title: "High School: Completed",
                                    description: "Survived 10th Grade. Tutorial level complete. Graphics were great, gameplay was repetitive."
                                },
                                {
                                    year: "2020",
                                    title: "Higher Secondary: Unlocked",
                                    description: "Cleared 12th Grade. Realized I still knew nothing. The 'College' expansion pack was auto-installed."
                                },
                                {
                                    year: "2020",
                                    title: "Joined IHRD Kalloopppara",
                                    description: "Started my Engineering degree. Major in 'Googling things effectively' and Stack Overflow copy-pasting."
                                },
                                {
                                    year: "2024",
                                    title: "Junior Software Engineer Trainee",
                                    description: "Joined the workforce. Paid to be confused and fix bugs I probably created."
                                },
                                {
                                    year: "2025",
                                    title: "Junior Software Engineer",
                                    description: "Level Up! Now authorized to break production with confidence. It works on my machine!"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    {/* Dot */}
                                    <div className="absolute -left-[39px] top-2 w-[14px] h-[14px] rounded-full bg-[#FFD166] border border-white shadow-sm" />

                                    <TextAnimate
                                        as="h4"
                                        className="text-xl font-medium text-[#222224] mb-1"
                                        animation="blurInUp"
                                        delay={0.1}
                                    >
                                        {item.year}
                                    </TextAnimate>

                                    <TextAnimate
                                        as="p"
                                        className="text-[#222224] font-medium mb-1"
                                        animation="blurInUp"
                                        delay={0.15}
                                    >
                                        {item.title}
                                    </TextAnimate>

                                    <TextAnimate
                                        as="p"
                                        className="text-[#6B6B6B] text-lg leading-relaxed"
                                        animation="blurInUp"
                                        delay={0.2}
                                    >
                                        {item.description}
                                    </TextAnimate>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Find Me Online Section */}
                    <div id="find-me-online" className="flex flex-col gap-8 mt-12 mb-24 scroll-mt-32">
                        <TextAnimate
                            as="h3"
                            className="text-4xl md:text-5xl font-semibold text-[#222224]"
                            animation="blurInUp"
                        >
                            Find me online
                        </TextAnimate>

                        <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl">
                            You can find me on{" "}
                            <span className="font-semibold text-[#222224]">
                                <a href="https://github.com/VHPranav" target="_blank" className="hover:underline cursor-pointer">GitHub</a>,{" "}
                                <a href="https://linkedin.com/in/vhpranav" target="_blank" className="hover:underline cursor-pointer">LinkedIn</a>,{" "}
                                <a href="https://twitter.com/vhpranav" target="_blank" className="hover:underline cursor-pointer">Twitter</a>,{" "}
                                <a href="mailto:vhpranav@example.com" className="hover:underline cursor-pointer">Mail</a>, and{" "}
                                <a href="https://instagram.com" target="_blank" className="hover:underline cursor-pointer">Instagram</a>.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
