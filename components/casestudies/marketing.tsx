"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { ScrollDropBackground } from "@/components/ui/scroll-drop-background";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function MarketingCaseStudy() {
    const [activeSection, setActiveSection] = useState("overview");

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -50% 0px",
                threshold: 0.1
            }
        );

        const sections = document.querySelectorAll("section[id], div[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: "Overview", id: "overview" },
        { label: "Design Considerations", id: "considerations" },
        { label: "Gallery", id: "gallery" },
        { label: "Conclusion", id: "conclusion" },
    ];

    return (
        <div className="w-full bg-[#FCFBF8] min-h-screen relative">
            <ScrollDropBackground />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 items-start py-24 px-6 md:px-12 lg:px-20 relative z-10">

                {/* Left Column: Sticky Navigation */}
                <div className="hidden lg:block sticky top-32 self-start">
                    <div className="mb-8">
                        <Link href="/work/design" className="flex items-center gap-2 text-[#6B6B6B] hover:text-[#222224] transition-colors">
                            <IoArrowBack />
                            <span className="text-sm font-medium">Back to Work</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 border-l border-gray-200 pl-6">
                        {navItems.map((item, index) => (
                            <TextAnimate
                                key={item.id}
                                as="span"
                                className={`text-sm font-medium cursor-pointer transition-all duration-300 ${activeSection === item.id ? "text-[#222224] translate-x-1" : "text-[#9B9B9B] hover:text-[#222224]"
                                    }`}
                                animation="blurInUp"
                                delay={0.1 + (index * 0.05)}
                                onClick={() => handleScrollTo(item.id)}
                            >
                                {item.label}
                            </TextAnimate>
                        ))}
                    </div>
                </div>

                {/* Right Column: Case Study Content */}
                <div className="flex flex-col gap-24">

                    {/* Hero & Overview */}
                    <div id="overview" className="scroll-mt-32">
                        <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-xs font-semibold text-[#6B6B6B] mb-6 tracking-wide uppercase">
                            Sneak Peek
                        </span>
                        <AnimatedText className="text-4xl md:text-6xl font-medium text-[#222224] mb-8 leading-tight">
                            Designing the ClockHash Marketing Website
                        </AnimatedText>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 border-t border-gray-200 pt-8">
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Internal Project</h3>
                                <p className="text-[#222224] text-lg">ClockHash</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">My Role</h3>
                                <p className="text-[#222224] text-lg">Product Designer</p>
                                <p className="text-[#6B6B6B] text-sm">& Frontend Engineer</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Services</h3>
                                <p className="text-[#222224] text-lg">Product Design</p>
                                <p className="text-[#6B6B6B] text-sm">Frontend Design</p>
                            </div>
                        </div>

                        <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-12 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Marketing Hero Image</span>
                        </div>

                        <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-4">Communicating services, products, and brand with clarity.</h2>
                            <p>
                                The ClockHash marketing website is designed to clearly communicate what ClockHash does, who it is for, and how it creates value—all within the first few seconds of a visit.
                            </p>
                            <p>
                                The experience focuses on <strong>clarity over cleverness</strong>, guiding visitors through services, products, and capabilities with a structured and intentional layout.
                            </p>
                        </div>
                    </div>

                    {/* Considerations */}
                    <div id="considerations" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-8">Key Design Considerations</h2>
                        <div className="bg-[#F5F5F3] p-8 md:p-12 rounded-3xl mb-12">
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#E0E0E0] flex items-center justify-center text-[#222224] font-bold shrink-0 text-sm">1</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#222224] mb-1">Strong visual hierarchy for fast scanning</h3>
                                        <p className="text-[#6B6B6B]">Ensuring key messages are absorbed instantly.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#E0E0E0] flex items-center justify-center text-[#222224] font-bold shrink-0 text-sm">2</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#222224] mb-1">Clear messaging and calls-to-action</h3>
                                        <p className="text-[#6B6B6B]">Guiding the user journey effectively.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#E0E0E0] flex items-center justify-center text-[#222224] font-bold shrink-0 text-sm">3</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#222224] mb-1">A modern, confident visual language</h3>
                                        <p className="text-[#6B6B6B]">Aligned with the brand's core values.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p className="text-lg text-[#6B6B6B] leading-relaxed">
                            Subtle interactions and motion are used to guide attention and create a sense of polish, without distracting from the content itself.
                        </p>
                    </div>

                    {/* Gallery */}
                    <div id="gallery" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Visual Sneak Peek</h2>
                        <div className="space-y-8">
                            <div className="w-full aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
                                <span className="text-gray-400 font-medium">Homepage Layout (Desktop)</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Mobile Responsiveness</span>
                                </div>
                                <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Service Cards / Details</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div id="conclusion" className="scroll-mt-32 pb-24">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-6">Final Thoughts</h2>
                            <p className="text-xl text-[#6B6B6B] leading-relaxed">
                                Overall, the marketing page establishes ClockHash as a credible, modern technology partner, while remaining flexible enough to evolve as new products and services are introduced.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
