"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { ScrollDropBackground } from "@/components/ui/scroll-drop-background";
import alpha from "../../public/images/webp/alphdash.webp"
import one from "../../public/images/alpha/dashone.webp"
import two from "../../public/images/alpha/dashtwo.webp"
import three from "../../public/images/alpha/dashthree.webp"
import four from "../../public/images/alpha/dashfour.webp"
import five from "../../public/images/alpha/dashfive.webp"
import six from "../../public/images/alpha/dashsix.webp"
import seven from "../../public/images/alpha/dashseven.webp"
import Image from "next/image";

export default function AlphaInterfaceCaseStudy() {
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
        { label: "The Problem", id: "problem" },
        { label: "Goals", id: "goals" },
        { label: "Users", id: "users" },
        { label: "Process", id: "process" },
        { label: "Highlights", id: "highlights" },
        { label: "Impact", id: "impact" },
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
                <div className="flex flex-col gap-32">

                    {/* Hero & Overview */}
                    <div id="overview" className="scroll-mt-32">
                        <AnimatedText className="text-4xl md:text-6xl font-normal text-[#222224] mb-8 leading-tight tracking-tight">
                            Redesigning the HR Recruitment Assistant Dashboard
                        </AnimatedText>

                        <div className="flex flex-wrap gap-x-12 gap-y-8 mb-16 pt-8 border-t border-gray-200">
                            <div>
                                <h3 className="text-xs font-bold text-[#9B9B9B] uppercase tracking-widest mb-2">My Role</h3>
                                <p className="text-[#222224] font-medium">Product Designer & Frontend Engineer</p>
                                <p className="text-[#6B6B6B] text-sm">(UX, UI, Interaction, Frontend)</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-[#9B9B9B] uppercase tracking-widest mb-2">Product</h3>
                                <p className="text-[#222224] font-medium">AI-Powered HR Recruitment Platform</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-[#9B9B9B] uppercase tracking-widest mb-2">Platform</h3>
                                <p className="text-[#222224] font-medium">Web Dashboard</p>
                            </div>
                        </div>

                        {/* Large Hero Image Placeholder */}
                        {/* Large Hero Image */}
                        <div className="w-full aspect-[16/9] bg-[#F0F0F0] rounded-lg mb-12 overflow-hidden relative border border-gray-100 shadow-sm">
                            <Image src={alpha} alt="Dashboard Hero Shot" fill className="object-cover" />
                        </div>

                        <div className="space-y-6 text-lg text-[#555] leading-relaxed max-w-3xl">
                            <h2 className="text-2xl font-medium text-[#222224] mb-2">Introduction</h2>
                            <p>
                                As you know, I was redesigning the HR Recruitment Assistant Dashboard, a platform that helps hiring teams manage candidates, automate recruitment workflows, and make faster, better hiring decisions.
                            </p>
                            <p>
                                In the latest update, we also introduced an AI Chat Assistant—giving recruiters a conversational way to query candidate data, generate summaries, and get instant hiring insights without navigating complex screens.
                            </p>
                            <p>
                                As the product evolved, the dashboard needed to support growing complexity: more candidates, more workflows, and now multiple AI-driven assistants. <strong className="text-[#222224]">The goal of this redesign was to create a clear, scalable, and intuitive dashboard</strong> that allows users to understand, control, and trust AI-powered recruitment tools.
                            </p>
                        </div>
                    </div>

                    {/* The Problem */}
                    <div id="problem" className="scroll-mt-32">
                        <div className="flex flex-col md:flex-row gap-8 mb-12">
                            <h2 className="text-2xl font-medium text-[#222224] shrink-0 md:w-1/3">The Problem</h2>
                            <p className="text-lg text-[#6B6B6B] md:w-2/3">
                                After evaluating usage patterns and internal feedback, detailed issues emerged regarding cognitive load and unclear mental models.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Cognitive Overload", desc: "Recruiters were presented with too much information at once—candidate lists, pipeline stages, metrics, and automations—making it difficult to know what required attention." },
                                { title: "Unclear Mental Model", desc: "Users struggled to understand how different AI features worked together. What does the recruitment assistant handle? When should they use the AI Chat Assistant?" },
                                { title: "Inconsistent UI Patterns", desc: "As features were added rapidly, components behaved differently across screens. This inconsistency increased learning time and reduced confidence." },
                                { title: "Poor Scalability", desc: "The existing layout wasn’t designed for multiple AI tools or advanced analytics. Adding the AI Chat Assistant risked further clutter without a rethink." }
                            ].map((prob, i) => (
                                <div key={i} className="bg-white p-8 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                                    <div className="text-[#222224] font-bold text-lg mb-3">0{i + 1} — {prob.title}</div>
                                    <p className="text-[#6B6B6B] leading-relaxed">{prob.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Goals */}
                    <div id="goals" className="scroll-mt-32">
                        <h2 className="text-2xl font-medium text-[#222224] mb-12">Goals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-lg font-medium text-[#222224] mb-6 border-l-2 border-[#222224] pl-4">Business Goals</h3>
                                <ul className="space-y-4 text-[#6B6B6B]">
                                    <li>Support growth as an AI-driven recruitment platform</li>
                                    <li>Increase adoption of AI-assisted hiring features</li>
                                    <li>Create a dashboard that scales with future AI capabilities</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-[#222224] mb-6 border-l-2 border-[#222224] pl-4">User Goals</h3>
                                <ul className="space-y-4 text-[#6B6B6B]">
                                    <li>Quickly understand hiring pipeline health</li>
                                    <li>Manage candidates and workflows efficiently</li>
                                    <li>Confidently interact with AI assistants for recruitment tasks</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Users */}
                    <div id="users" className="scroll-mt-32 bg-[#F5F5F3] p-10 rounded-2xl">
                        <h2 className="text-2xl font-medium text-[#222224] mb-8">Understanding the Users</h2>
                        <p className="mb-8 text-[#6B6B6B]">Instead of traditional personas, I focused on usage-driven roles to guide the dashboard structure.</p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="bg-[#222224] text-white w-8 h-8 flex items-center justify-center rounded-full shrink-0 font-bold text-sm">R</span>
                                <div>
                                    <h4 className="font-medium text-[#222224]">The Recruiter</h4>
                                    <p className="text-[#6B6B6B] text-sm">Manages candidates, interviews, and shortlisting on a daily basis.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="bg-[#222224] text-white w-8 h-8 flex items-center justify-center rounded-full shrink-0 font-bold text-sm">H</span>
                                <div>
                                    <h4 className="font-medium text-[#222224]">The Hiring Manager</h4>
                                    <p className="text-[#6B6B6B] text-sm">Wants high-level visibility into hiring progress and bottlenecks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="bg-[#222224] text-white w-8 h-8 flex items-center justify-center rounded-full shrink-0 font-bold text-sm">T</span>
                                <div>
                                    <h4 className="font-medium text-[#222224]">The Technical / Ops User</h4>
                                    <p className="text-[#6B6B6B] text-sm">Cares about integrations, automation logic, and system reliability.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process */}
                    <div id="process" className="scroll-mt-32">
                        <h2 className="text-2xl font-medium text-[#222224] mb-12">Process</h2>

                        <div className="space-y-16">
                            <div>
                                <div className="flex items-baseline gap-4 mb-4">
                                    <span className="text-4xl text-[#E5E5E5] font-bold">01</span>
                                    <h3 className="text-xl font-medium text-[#222224]">Defining Structure</h3>
                                </div>
                                <p className="text-[#6B6B6B] max-w-2xl mb-6 pl-14">I redefined the dashboard hierarchy so each section serves a single purpose: Overview (pipeline health), Candidates (profiles/evaluations), Automation (workflows), AI Assistants, and Insights.</p>
                                <div className="pl-14 w-full aspect-[3/1] bg-[#F0F0F0] rounded overflow-hidden relative text-gray-400 text-sm">
                                    <Image src={one} alt="IA / Sitemap Diagram" fill className="object-cover" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-baseline gap-4 mb-4">
                                    <span className="text-4xl text-[#E5E5E5] font-bold">02</span>
                                    <h3 className="text-xl font-medium text-[#222224]">Task Mapping</h3>
                                </div>
                                <p className="text-[#6B6B6B] max-w-2xl mb-6 pl-14">Core workflows such as reviewing candidates, shortlisting, and asking AI for insights were mapped into focused, linear flows. The AI Chat Assistant complements—doesn't replace—existing workflows.</p>
                            </div>

                            <div>
                                <div className="flex items-baseline gap-4 mb-4">
                                    <span className="text-4xl text-[#E5E5E5] font-bold">03</span>
                                    <h3 className="text-xl font-medium text-[#222224]">Visual System</h3>
                                </div>
                                <p className="text-[#6B6B6B] max-w-2xl mb-6 pl-14">The visual system uses a calm, neutral palette to reduce cognitive strain. Subtle animations reinforce cause-and-effect, especially when AI actions are triggered—helping users build trust.</p>
                                <div className="pl-14 grid grid-cols-2 gap-4">
                                    <div className="aspect-square bg-[#F9F9F9] rounded border border-gray-100 overflow-hidden relative">
                                        <Image src={three} alt="Visual System 1" fill className="object-cover" />
                                    </div>
                                    <div className="aspect-square bg-[#F9F9F9] rounded border border-gray-100 overflow-hidden relative">
                                        <Image src={four} alt="Visual System 2" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div id="highlights" className="scroll-mt-32">
                        <h2 className="text-2xl font-medium text-[#222224] mb-12">Final Design Highlights</h2>

                        <div className="space-y-24">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1 bg-white p-8 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100">
                                    <h3 className="text-lg font-medium text-[#222224] mb-3">Focused Dashboard Overview</h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">Key hiring metrics and pipeline status are surfaced first. Users can understand recruitment health within seconds without diving into details.</p>
                                </div>
                                <div className="order-1 md:order-2 aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative">
                                    <Image src={five} alt="Focused Dashboard Overview" fill className="object-cover" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative">
                                    <Image src={six} alt="Agent-Centric Navigation" fill className="object-cover" />
                                </div>
                                <div className="bg-white p-8 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100">
                                    <h3 className="text-lg font-medium text-[#222224] mb-3">AI-Assisted, Candidate-Centric Navigation</h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">The dashboard is structured around candidates and hiring stages. The AI Chat Assistant remains persistently accessible for summaries and insights at any point.</p>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="text-center max-w-xl mx-auto mb-8">
                                    <h3 className="text-lg font-medium text-[#222224] mb-2">Built for Scale</h3>
                                    <p className="text-[#6B6B6B]">The layout anticipates growing hiring volume, multiple roles, and future AI capabilities—without overwhelming the user.</p>
                                </div>
                                <div className="w-full aspect-[21/9] bg-gray-100 rounded-xl overflow-hidden relative">
                                    <Image src={seven} alt="Built for Scale" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Impact & Learnings */}
                    <div id="impact" className="scroll-mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-gray-200 pt-16">
                        <div>
                            <h2 className="text-xl font-medium text-[#222224] mb-6">Impact</h2>
                            <ul className="space-y-4 text-[#6B6B6B]">
                                <li className="flex gap-3"><span className="text-[#222224] font-bold">→</span> Faster and more predictable recruitment workflows</li>
                                <li className="flex gap-3"><span className="text-[#222224] font-bold">→</span> Improved adoption of AI-assisted hiring features</li>
                                <li className="flex gap-3"><span className="text-[#222224] font-bold">→</span> Reduced cognitive load for recruiters and hiring managers</li>
                                <li className="flex gap-3"><span className="text-[#222224] font-bold">→</span> Strong foundation for future AI tools in hiring</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-medium text-[#222224] mb-6">Learnings</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-medium text-[#222224]">AI products need extra clarity</h4>
                                    <p className="text-sm text-[#6B6B6B]">When systems feel "intelligent," users need even more transparency, not less.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#222224]">Structure builds trust</h4>
                                    <p className="text-sm text-[#6B6B6B]">Clear hierarchy and consistent patterns make users confidently use AI tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Thoughts */}
                    <div className="pb-32 text-center max-w-2xl mx-auto">
                        <p className="text-2xl font-serif text-[#222224] italic mb-6">
                            "Reduce complexity, clarify intent, and design for growth."
                        </p>
                        <p className="text-[#6B6B6B]">
                            This redesign transformed the HR Recruitment Assistant from a feature-heavy tool into a cohesive, scalable, and AI-first recruitment platform.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
