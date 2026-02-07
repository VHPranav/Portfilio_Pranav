"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { ScrollDropBackground } from "@/components/ui/scroll-drop-background";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import prof from "../../public/images/portfolio/land.webp"
import one from "../../public/images/portfolio/prof.webp"
import two from "../../public/images/portfolio/team.webp"
import three from "../../public/images/portfolio/teamtwo.webp"

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
        { label: "Objective", id: "objective" },
        { label: "Design Approach", id: "design" },
        { label: "Key Features", id: "features" },
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
                            Designing the Employee Portfolio Experience for ClockHash
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
                                <p className="text-[#222224] text-lg">Web Application (Company Website)</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Timeline</h3>
                                <p className="text-[#222224] text-lg">Month Year — Month Year</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Services</h3>
                                <p className="text-[#222224] text-lg">Product Design · Frontend Development</p>
                            </div>
                        </div>

                        {/* Large Hero Image */}
                        <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-12 overflow-hidden relative border border-gray-100 shadow-sm">
                            <Image src={prof} alt="Portfolio Hero Shot" fill className="object-cover" />
                        </div>

                        <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-4">Introduction</h2>
                            <p>
                                This project focused on designing and building an employee portfolio experience for ClockHash—a centralized platform to showcase the team’s skills, roles, and professional profiles.
                            </p>
                            <p>
                                The goal was to move beyond a static “team page” and create a structured, scalable system where visitors can explore employees by job category, view detailed individual profiles, and download CVs when needed. The experience needed to be clear, professional, and aligned with ClockHash’s design and engineering standards.
                            </p>
                        </div>

                        <div id="objective" className="scroll-mt-32 mt-16">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-6">The Objective</h2>
                            <p className="text-lg text-[#6B6B6B] mb-8">The employee portfolio was designed to:</p>
                            <ul className="space-y-4 text-[#6B6B6B] text-lg">
                                <li className="flex gap-3 items-start"><span className="text-[#222224] mt-1.5">•</span> <span>Present team members with clarity and credibility</span></li>
                                <li className="flex gap-3 items-start"><span className="text-[#222224] mt-1.5">•</span> <span>Make it easy to browse employees by job category</span></li>
                                <li className="flex gap-3 items-start"><span className="text-[#222224] mt-1.5">•</span> <span>Allow quick access to individual profiles and CVs</span></li>
                                <li className="flex gap-3 items-start"><span className="text-[#222224] mt-1.5">•</span> <span>Scale smoothly as the team grows</span></li>
                            </ul>
                            <p className="text-lg text-[#6B6B6B] mt-8">
                                Rather than overwhelming visitors, the focus was on curation and structure—letting each profile communicate expertise without unnecessary noise.
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
                    <div id="features" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Key Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Job Category Filtering</h3>
                                <p className="text-[#6B6B6B]">Employees can be browsed by job category (e.g., Design, Engineering, Product), helping users quickly find relevant profiles.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Individual Employee Profiles</h3>
                                <p className="text-[#6B6B6B]">Each profile includes role, experience highlights, skills, and a focused presentation of the employee’s background.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-medium text-[#222224] mb-4">CV Download</h3>
                                <p className="text-[#6B6B6B]">Users can directly download an employee’s CV from their profile, making the platform practical for clients, partners, and internal use.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Design Emphasis</h2>

                        <div className="space-y-16">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-1/2 aspect-video bg-[#F5F5F3] rounded-xl overflow-hidden relative border border-gray-100 shadow-sm">
                                    <Image src={one} alt="Scannability" fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-medium text-[#222224] mb-3">Scannability</h3>
                                    <p className="text-[#6B6B6B] leading-relaxed">Visitors can quickly skim employee cards, understand roles at a glance, and choose which profiles to explore further.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div className="w-full md:w-1/2 aspect-video bg-[#F5F5F3] rounded-xl overflow-hidden relative border border-gray-100 shadow-sm">
                                    <Image src={two} alt="Scalability" fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-medium text-[#222224] mb-3">Scalability</h3>
                                    <p className="text-[#6B6B6B] leading-relaxed">The grid system and category structure are designed to grow effortlessly as new employees join—without breaking visual rhythm or usability.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-center">

                                <div className="w-full md:w-1/2">
                                    <h3 className="text-xl font-medium text-[#222224] mb-3">Professional Presentation</h3>
                                    <p className="text-[#6B6B6B] leading-relaxed">The experience reinforces ClockHash’s credibility by presenting people with the same care and polish as products.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Gallery */}
                    <div id="gallery" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Visual Exploration</h2>

                        <div className="space-y-8">
                            <p className="text-lg text-[#6B6B6B] mb-8">Full Width Layout • Category View • Individual Profile View • CV Download Interaction • Mobile Experience</p>
                            {/* Wide Showcase */}
                            <div className="w-full aspect-[21/9] bg-gray-100 rounded-xl overflow-hidden relative border border-gray-100">
                                <Image src={three} alt="Wide Showcase" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div id="conclusion" className="scroll-mt-32 pb-24 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-6">Built with Care</h2>
                            <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
                                Overall, the employee portfolio reflects how ClockHash approaches people, design, and engineering—structured, thoughtful, and built with intent.
                                It transforms the team from a simple list of names into a discoverable, scalable, and professional showcase of talent.
                            </p>
                            <p className="text-xl text-[#6B6B6B] leading-relaxed italic font-serif">
                                "Built with Care"
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
