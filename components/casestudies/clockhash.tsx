"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { ScrollDropBackground } from "@/components/ui/scroll-drop-background";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import one from "../../public/images/clck/one.webp"
import two from "../../public/images/clck/two.webp"
import three from "../../public/images/clck/three.webp"
import four from "../../public/images/clck/four.webp"
import five from "../../public/images/clck/five.webp"
import six from "../../public/images/clck/six.webp"
import seven from "../../public/images/clck/seven.webp"
import eight from "../../public/images/clck/eight.webp"
import nine from "../../public/images/clck/nine.webp"

export default function ClockHashCaseStudy() {
    const [activeSection, setActiveSection] = useState("overview");

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Adjust scroll position to account for sticky header or padding
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
        { label: "The Problem", id: "problem" },
        { label: "Goals", id: "goals" },
        { label: "Users", id: "users" },
        { label: "Process", id: "process" },
        { label: "Highlights", id: "highlights" },
        { label: "Impact", id: "impact" },
        { label: "Thoughts", id: "thoughts" }
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
                        <AnimatedText className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#222224] mb-8 leading-tight">
                            Redesigning the ClockHash Website Experience
                        </AnimatedText>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-t border-gray-200 pt-8">
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Timeline</h3>
                                <p className="text-[#222224] text-lg">Month Year — Month Year</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Platform</h3>
                                <p className="text-[#222224] text-lg">Marketing Website (Desktop & Mobile)</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">My Role</h3>
                                <p className="text-[#222224] text-lg">Product Designer & Frontend Engineer</p>
                                <p className="text-[#6B6B6B] text-sm mt-1">(UX, UI, Interaction Design, Frontend Implementation)</p>
                            </div>
                        </div>

                        {/* Large Hero Image Placeholder */}
                        {/* Large Hero Image */}
                        <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-12 overflow-hidden relative">
                            <Image src={six} alt="ClockHash Hero" fill className="object-fill" />
                        </div>

                        <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-4">Introduction</h2>
                            <p>
                                ClockHash is a service- and product-based technology company focused on building modern digital solutions, including web platforms, AI interfaces, and custom software products.
                            </p>
                            <p>
                                As ClockHash evolved, the existing website no longer reflected the quality, clarity, or ambition of the brand. The redesign aimed to reposition ClockHash with a more modern, confident, and scalable web experience.
                            </p>
                        </div>
                    </div>

                    {/* The Problem */}
                    <div id="problem" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-8">The Problem</h2>
                        <p className="text-lg text-[#6B6B6B] mb-12">
                            After reviewing the existing website and gathering feedback, several issues became clear:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Problem #1 — Unclear Value Proposition</h3>
                                <p className="text-[#6B6B6B] mb-4">Visitors struggled to quickly understand:</p>
                                <ul className="list-disc list-inside text-[#6B6B6B] space-y-1">
                                    <li>What ClockHash does</li>
                                    <li>Who it is for</li>
                                    <li>Why it is different</li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Problem #2 — Fragmented User Journey</h3>
                                <p className="text-[#6B6B6B] mb-4">There was no clear path guiding users from:</p>
                                <p className="text-[#6B6B6B] font-medium">Landing → Understanding → Exploring → Contacting</p>
                                <p className="text-[#6B6B6B] mt-2">Users had to figure things out themselves, increasing bounce rates.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Problem #3 — Weak Brand Perception</h3>
                                <p className="text-[#6B6B6B] mb-4">The visual language and copy did not:</p>
                                <ul className="list-disc list-inside text-[#6B6B6B] space-y-1">
                                    <li>Reflect a modern tech brand</li>
                                    <li>Convey trust or expertise</li>
                                    <li>Match the quality of ClockHash’s actual work</li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Problem #4 — Limited Scalability</h3>
                                <p className="text-[#6B6B6B] mb-4">The website structure and UI components were not designed to scale:</p>
                                <ul className="list-disc list-inside text-[#6B6B6B] space-y-1">
                                    <li>Adding new services or products felt forced</li>
                                    <li>Layouts were inconsistent</li>
                                    <li>Animations lacked a cohesive system</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden relative mt-12">
                            <Image src={two} alt="Current Website Analysis" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Goals */}
                    <div id="goals" className="scroll-mt-32">
                        <div className="bg-white py-16 px-8 rounded-3xl border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12 text-center">Goals</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                                <div>
                                    <h3 className="text-xl font-medium text-[#222224] mb-6 border-b pb-2">Business Goals</h3>
                                    <ul className="space-y-4 text-[#6B6B6B]">
                                        <li className="flex items-start"><span className="mr-3 text-[#222224]">•</span>Clearly communicate ClockHash’s offerings</li>
                                        <li className="flex items-start"><span className="mr-3 text-[#222224]">•</span>Position ClockHash as a modern, credible tech partner</li>
                                        <li className="flex items-start"><span className="mr-3 text-[#222224]">•</span>Increase inbound leads through better storytelling and CTAs</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#222224] mb-6 border-b pb-2">User Goals</h3>
                                    <ul className="space-y-4 text-[#6B6B6B]">
                                        <li className="flex items-start"><span className="mr-3 text-[#222224]">•</span>Understand what ClockHash does within seconds</li>
                                        <li className="flex items-start"><span className="mr-3 text-[#222224]">•</span>Easily explore services and products</li>
                                        <li className="flex items-start"><span className="mr-3 text-[#222224]">•</span>Feel confident enough to initiate contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Users */}
                    <div id="users" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-8">Understanding the Users</h2>
                        <p className="text-lg text-[#6B6B6B] mb-12 max-w-3xl">Instead of traditional personas, I focused on intent-based user types. Each section of the website was mapped to answer a specific user intent.</p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#222224] font-bold">1</div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#222224]">The Founder / Business Owner</h3>
                                    <p className="text-[#6B6B6B]">Wants a reliable tech partner to build or scale a product.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#222224] font-bold">2</div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#222224]">The Product-Focused Team</h3>
                                    <p className="text-[#6B6B6B]">Looking for high-quality execution, modern UI, and technical depth.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#222224] font-bold">3</div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#222224]">The Curious Explorer</h3>
                                    <p className="text-[#6B6B6B]">Exploring ClockHash’s work, credibility, and design maturity.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process */}
                    <div id="process" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">1. Content & Journey Mapping</h3>
                                <ul className="list-disc list-inside text-[#6B6B6B] space-y-2 mb-8">
                                    <li>Core pages and their single purpose</li>
                                    <li>The ideal user journey from landing to conversion</li>
                                    <li>What information must appear above the fold</li>
                                </ul>
                                <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden relative">
                                    <Image src={three} alt="Sitemap" fill className="object-cover" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">2. Wireframes & Layout Exploration</h3>
                                <p className="text-[#6B6B6B] mb-4">Low-fidelity layouts helped answer:</p>
                                <ul className="list-disc list-inside text-[#6B6B6B] space-y-2 mb-8">
                                    <li>What should users see first?</li>
                                    <li>How do we reduce cognitive load?</li>
                                    <li>How do we balance storytelling with clarity?</li>
                                </ul>
                                <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden relative">
                                    <Image src={four} alt="Wireframes" fill className="object-cover" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">3. Visual Direction & Interaction Design</h3>
                                <p className="text-[#6B6B6B] mb-4">The visual system focused on:</p>
                                <ul className="list-disc list-inside text-[#6B6B6B] space-y-2 mb-8">
                                    <li>Clean typography & Confident spacing</li>
                                    <li>Subtle but meaningful animations</li>
                                    <li>Strong contrast and hierarchy</li>
                                </ul>
                                <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden relative">
                                    <Image src={five} alt="Style Guide" fill className="object-cover" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">4. Implementation</h3>
                                <p className="text-[#6B6B6B] mb-4">The final designs were implemented using React & MUI, ensuring:</p>
                                <ul className="list-disc list-inside text-[#6B6B6B] space-y-2 mb-8">
                                    <li>Component reusability</li>
                                    <li>Responsive behavior</li>
                                    <li>Performance-friendly animations</li>
                                </ul>
                                <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden relative">
                                    <Image src={one} alt="Implementation" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div id="highlights" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Final Design Highlights</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                            <div className="order-2 md:order-1">
                                <div className="w-full aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
                                    <Image src={seven} alt="Hero Design" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-xl font-medium text-[#222224] mb-4">A Clear, Confident Hero Section</h3>
                                <ul className="space-y-3 text-[#6B6B6B]">
                                    <li>Strong headline communicating value</li>
                                    <li>Short supporting copy</li>
                                    <li>Clear primary call-to-action</li>
                                    <li>Visuals that reinforce technical credibility</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Structured Service Sections</h3>
                                <p className="text-[#6B6B6B] mb-4">Each service is presented with:</p>
                                <ul className="space-y-3 text-[#6B6B6B]">
                                    <li>Clear problem framing</li>
                                    <li>What ClockHash offers</li>
                                    <li>Why it matters to the user</li>
                                    <li>No fluff — only relevant information.</li>
                                </ul>
                            </div>
                            <div>
                                <div className="w-full aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
                                    <Image src={eight} alt="Service UI" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-medium text-[#222224] mb-8 text-center">Consistent Visual Language & Scalability</h3>
                            <div className="w-full aspect-[2/1] bg-gray-200 rounded-2xl overflow-hidden relative mb-8">
                                <Image src={nine} alt="Design System" fill className="object-cover" />
                            </div>
                            <p className="text-center text-[#6B6B6B] max-w-2xl mx-auto">
                                Typography, spacing, colors, and motion follow a unified system — reducing future design and development effort. The layout allows easy expansion into future products.
                            </p>
                        </div>
                    </div>

                    {/* Impact & Learnings */}
                    <div id="impact" className="scroll-mt-32">
                        <div className="bg-[#222224] text-white py-20 px-8 md:px-16 rounded-[3rem]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-medium mb-8">Impact</h2>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex items-start"><span className="mr-3 text-white">•</span>The website now communicates value instantly</li>
                                        <li className="flex items-start"><span className="mr-3 text-white">•</span>Navigation feels intentional and guided</li>
                                        <li className="flex items-start"><span className="mr-3 text-white">•</span>The brand feels more mature and credible</li>
                                        <li className="flex items-start"><span className="mr-3 text-white">•</span>The foundation is set for future growth and products</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-medium mb-8">Learnings</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Clarity beats cleverness</h3>
                                            <p className="text-gray-400">A clear message outperforms flashy visuals when it comes to conversions.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Design systems matter</h3>
                                            <p className="text-gray-400">Thinking in reusable components early saved time during development.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Design + Development</h3>
                                            <p className="text-gray-400">Owning both allowed faster iteration and higher quality execution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Thoughts */}
                    <div id="thoughts" className="scroll-mt-32 text-center pb-24">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-6">Final Thoughts</h2>
                        <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-3xl mx-auto">
                            This redesign was more than a visual refresh — it was about aligning ClockHash’s online presence with its actual capabilities.
                        </p>
                        <p className="text-xl font-medium text-[#222224]">
                            "Grounded in user intent, built for scale, and executed with precision."
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
