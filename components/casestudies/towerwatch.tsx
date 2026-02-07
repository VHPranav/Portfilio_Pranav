"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { ScrollDropBackground } from "@/components/ui/scroll-drop-background";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import one from "../../public/images/webp/towerone.webp"
import two from "../../public/images/webp/twrwtch.webp"

export default function TowerWatchCaseStudy() {
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
        { label: "Design Focus", id: "focus" },
        { label: "Core Features", id: "features" },
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
                            Designing the TowerWatch Dashboard Experience
                        </AnimatedText>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 border-t border-gray-200 pt-8">
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Project</h3>
                                <p className="text-[#222224] text-lg">TowerWatch (Internal)</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Industry</h3>
                                <p className="text-[#222224] text-lg">Energy · Smart Buildings</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">My Role</h3>
                                <p className="text-[#222224] text-lg">Product Designer & Frontend Engineer</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Platform</h3>
                                <p className="text-[#222224] text-lg">Web Dashboard</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Services</h3>
                                <p className="text-[#222224] text-lg">Product Design · Dashboard</p>
                            </div>
                        </div>

                        {/* Large Hero Image Placeholder */}
                        <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-12 flex items-center justify-center">
                            <Image src={two} alt="TowerWatch Hero Image" className="w-full aspect-video rounded-2xl" />
                        </div>

                        <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-4">Monitoring with Confidence</h2>
                            <p>
                                TowerWatch is a building energy control platform designed to help property owners and operators monitor, manage, and optimize energy usage across commercial buildings.
                            </p>
                            <p>
                                The dashboard experience focuses on <strong className="text-[#222224]">transforming complex energy data into clear, actionable insights</strong>—so users can make confident operational decisions without friction.
                            </p>
                        </div>
                    </div>

                    {/* Design Focus */}
                    <div id="focus" className="scroll-mt-32">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-8">Design Focus</h2>
                            <p className="text-lg text-[#6B6B6B] mb-12">
                                To support high-stakes operational decisions, the interface emphasizes clarity and calm.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold">1</div>
                                    <h3 className="text-lg font-medium text-[#222224]">Information Hierarchy</h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">Prioritizing critical alerts and real-time status so users always know where to look first.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold">2</div>
                                    <h3 className="text-lg font-medium text-[#222224]">Data Visualization</h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">Using clear charts to highlight trends and anomalies, effectively turning numbers into narratives.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold">3</div>
                                    <h3 className="text-lg font-medium text-[#222224]">Calm Layouts</h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">Avoiding clutter to reduce cognitive load during data-heavy monitoring workflows.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Features / Spatial View */}
                    <div id="features" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Core Feature: Spatial View</h2>

                        <div className="space-y-16">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-full md:w-1/2 aspect-[4/3] bg-[#F5F5F3] rounded-xl flex items-center justify-center text-gray-400">
                                    <Image src={one} alt="TowerWatch Hero Image" className="w-full aspect-video rounded-2xl" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-medium text-[#222224] mb-4">Contextual Energy Data</h3>
                                    <p className="text-[#6B6B6B] leading-relaxed mb-6">
                                        A key part of the experience is the spatial view, where energy data is mapped directly to building floor plans. This allows users to quickly identify high-consumption areas and compare tenants or zones.
                                    </p>
                                    <ul className="space-y-2 text-[#6B6B6B] text-sm">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#222224]"></span>
                                            Real-world building context
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#222224]"></span>
                                            Visual heatmap overlay
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#222224]"></span>
                                            Instant anomaly detection
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div id="conclusion" className="scroll-mt-32 pb-24 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-6">Reliable & Scalable</h2>
                            <p className="text-xl text-[#6B6B6B] leading-relaxed italic font-serif">
                                "Overall, the TowerWatch dashboard is designed to feel reliable, scalable, and trustworthy, supporting everyday operational needs while laying the foundation for future energy optimization features."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
