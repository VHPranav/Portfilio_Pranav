"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { ScrollDropBackground } from "@/components/ui/scroll-drop-background";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function PortfolioCaseStudy() {
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
        { label: "Design Goals", id: "design" },
        { label: "Design Emphasis", id: "emphasis" },
        { label: "Visual Gallery", id: "gallery" },
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
                        <AnimatedText className="text-4xl md:text-6xl font-medium text-[#222224] mb-8 leading-tight">
                            Designing the Portfolio Experience for ClockHash
                        </AnimatedText>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 border-t border-gray-200 pt-8">
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Project</h3>
                                <p className="text-[#222224] text-lg">ClockHash (Internal)</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Industry</h3>
                                <p className="text-[#222224] text-lg">Technology / Software</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">My Role</h3>
                                <p className="text-[#222224] text-lg">Product Designer & Frontend Engineer</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Platform</h3>
                                <p className="text-[#222224] text-lg">Marketing Website</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Timeline</h3>
                                <p className="text-[#222224] text-lg">Month Year — Month Year</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Services</h3>
                                <p className="text-[#222224] text-lg">Product Design · Frontend</p>
                            </div>
                        </div>

                        {/* Large Hero Image Placeholder */}
                        <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-12 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Portfolio Hero Image</span>
                        </div>

                        <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-4">A Curated Showcase</h2>
                            <p>
                                ClockHash’s portfolio page is designed to present work with clarity, confidence, and intent. Rather than overwhelming visitors, the goal was to curate projects thoughtfully—allowing the work to speak while reinforcing the brand’s design maturity.
                            </p>
                        </div>
                    </div>

                    {/* Design Goals */}
                    <div id="design" className="scroll-mt-32">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-8">Design Approach</h2>
                            <p className="text-lg text-[#6B6B6B] mb-12">
                                Each project preview acts as a gateway, giving just enough context to encourage deeper exploration without distraction. To achieve this, I focused on:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold">1</div>
                                    <h3 className="text-lg font-medium text-[#222224]">Structured Layout</h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">A clean grid that gives every project equal weight and breathing room.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold">2</div>
                                    <h3 className="text-lg font-medium text-[#222224]">Visual Hierarchy</h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">Strong typography and large imagery to guide the user's eye naturally.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold">3</div>
                                    <h3 className="text-lg font-medium text-[#222224]">Subtle Interactions</h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">Hover states and smooth transitions that make exploration feel alive.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Design Emphasis */}
                    <div id="emphasis" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">The Design Emphasizes</h2>

                        <div className="space-y-16">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-1/2 aspect-video bg-[#F5F5F3] rounded-xl"></div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-medium text-[#222224] mb-3">Scannability</h3>
                                    <p className="text-[#6B6B6B] leading-relaxed">Users can quickly browse through high-level details before diving deep. The information architecture prioritizes role, visuals, and outcomes.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div className="w-full md:w-1/2 aspect-video bg-[#F5F5F3] rounded-xl"></div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-medium text-[#222224] mb-3">Scalability</h3>
                                    <p className="text-[#6B6B6B] leading-relaxed">As new work is added, the grid system adapts seamlessly, ensuring the portfolio grows without breaking the visual rhythm.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Gallery */}
                    <div id="gallery" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Visual Exploration</h2>

                        <div className="space-y-8">
                            {/* Full width */}
                            <div className="w-full aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                                <span className="text-gray-400 font-medium">Full Width Visual</span>
                            </div>

                            {/* Two columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="aspect-[4/5] bg-gray-100 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Mobile View</span>
                                </div>
                                <div className="aspect-[4/5] bg-gray-100 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Mobile Details</span>
                                </div>
                            </div>

                            {/* Grid of 3 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Detail 1</span>
                                </div>
                                <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Detail 2</span>
                                </div>
                                <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Detail 3</span>
                                </div>
                            </div>
                            {/* Another Full Width */}
                            <div className="w-full aspect-[21/9] bg-gray-100 rounded-xl flex items-center justify-center">
                                <span className="text-gray-400 font-medium">Wide Showcase</span>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div id="conclusion" className="scroll-mt-32 pb-24 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-6">Built with Care</h2>
                            <p className="text-xl text-[#6B6B6B] leading-relaxed italic font-serif">
                                "Overall, the portfolio page reflects how ClockHash approaches design and engineering—intentional, modern, and built with care."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
