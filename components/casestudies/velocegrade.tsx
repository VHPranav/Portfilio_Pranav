"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { ScrollDropBackground } from "@/components/ui/scroll-drop-background";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import one from "../../public/images/car/home.webp"
import two from "../../public/images/car/mechland.webp"
import three from "../../public/images/car/carlisthome.webp"
import four from "../../public/images/car/carlist.webp"
import five from "../../public/images/car/choose.webp"
import six from "../../public/images/car/inspcrprt.webp"
import seven from "../../public/images/car/mechanics.webp"
import eight from "../../public/images/car/mechaniclist.webp"
import nine from "../../public/images/car/mechprof.webp"
import ten from "../../public/images/car/mechdash.webp"

export default function VelocegradeCaseStudy() {
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
        { label: "Context & Goals", id: "context" },
        { label: "Users", id: "users" },
        { label: "Design Principles", id: "principles" },
        { label: "Process", id: "process" },
        { label: "Highlights", id: "highlights" },
        { label: "Certification", id: "certification" },
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
                <div className="flex flex-col gap-24">

                    {/* Hero & Overview */}
                    <div id="overview" className="scroll-mt-32">
                        <AnimatedText className="text-4xl md:text-6xl font-medium text-[#222224] mb-8 leading-tight">
                            Designing a Seller Dashboard for a Vehicle Trade Platform
                        </AnimatedText>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 border-t border-gray-200 pt-8">
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Platform</h3>
                                <p className="text-[#222224] text-lg">Web Application</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">My Role</h3>
                                <p className="text-[#222224] text-lg">Product Designer</p>
                                <p className="text-[#6B6B6B] text-sm">(UX, UI, Interaction Design)</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">Timeline</h3>
                                <p className="text-[#222224] text-lg">Month Year — Month Year</p>
                            </div>
                        </div>

                        {/* Large Hero Image */}
                        <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-12 overflow-hidden relative border border-gray-100 shadow-sm">
                            <Image src={one} alt="Dashboard Hero Shot" fill className="object-cover" />
                        </div>

                        <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-4xl">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-4">Helping sellers manage listings, leads, and performance in one place</h2>
                            <p>
                                This project involved designing a seller dashboard for a used vehicle trade platform, focused on helping individual sellers and dealers efficiently manage their inventory and buyer interactions.
                            </p>
                            <p>
                                The dashboard acts as the <strong className="text-[#222224]">operational core of the platform</strong> — enabling sellers to list vehicles, track inquiries, monitor ad performance, and communicate with potential buyers, all from a single interface.
                            </p>
                        </div>
                    </div>

                    {/* Context & Goals */}
                    <div id="context" className="scroll-mt-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h2 className="text-2xl font-medium text-[#222224] mb-6">Context</h2>
                                <p className="text-lg text-[#6B6B6B] mb-4">
                                    Selling vehicles online can quickly become overwhelming. Sellers often juggle multiple active listings, repeated buyer inquiries, and performance tracking across different ads.
                                </p>
                                <p className="text-lg text-[#6B6B6B]">
                                    The goal was to design a clear, structured dashboard experience that reduces friction and helps sellers focus on closing deals rather than managing tools.
                                </p>
                            </div>
                            <div className="bg-[#F5F5F3] p-8 rounded-2xl">
                                <h3 className="text-lg font-medium text-[#222224] mb-4">The Challenge</h3>
                                <ul className="space-y-3 text-[#6B6B6B]">
                                    <li className="flex gap-2"><span className="text-[#222224]">•</span> Multiple active listings to manage</li>
                                    <li className="flex gap-2"><span className="text-[#222224]">•</span> Timely responses impact conversion</li>
                                    <li className="flex gap-2"><span className="text-[#222224]">•</span> Need for performance visibility</li>
                                </ul>
                            </div>
                        </div>

                        <div id="goals" className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-6 border-l-2 border-[#222224] pl-4">Business Goals</h3>
                                <ul className="space-y-4 text-[#6B6B6B]">
                                    <li>Increase listing quality and completion</li>
                                    <li>Improve seller responsiveness to inquiries</li>
                                    <li>Encourage continued engagement from sellers</li>
                                    <li>Create a scalable foundation for future seller tools</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-6 border-l-2 border-[#222224] pl-4">User Goals</h3>
                                <ul className="space-y-4 text-[#6B6B6B]">
                                    <li>Easily manage all vehicle listings</li>
                                    <li>Track buyer inquiries and responses</li>
                                    <li>Understand how listings are performing</li>
                                    <li>Feel confident and in control of the selling process</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Users */}
                    <div id="users" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-8">Understanding the Users</h2>
                        <p className="text-lg text-[#6B6B6B] mb-12">Instead of traditional personas, I focused on behavior-driven seller types.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-medium text-[#222224] mb-2">The Individual Seller</h3>
                                <p className="text-[#6B6B6B] text-sm">Selling one or two vehicles and wants a simple, guided experience.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-medium text-[#222224] mb-2">The Power Seller / Dealer</h3>
                                <p className="text-[#6B6B6B] text-sm">Managing multiple listings and needs efficiency, visibility, and speed.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-medium text-[#222224] mb-2">The First-Time Seller</h3>
                                <p className="text-[#6B6B6B] text-sm">Needs clarity, reassurance, and guidance throughout the process.</p>
                            </div>
                        </div>
                    </div>

                    {/* Design Principles */}
                    <div id="principles" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-8">Design Principles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold shrink-0">1</div>
                                <div>
                                    <h3 className="text-lg font-medium text-[#222224]">Clarity over clutter</h3>
                                    <p className="text-[#6B6B6B] text-sm">Sellers should immediately know what needs attention.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold shrink-0">2</div>
                                <div>
                                    <h3 className="text-lg font-medium text-[#222224]">Action-first design</h3>
                                    <p className="text-[#6B6B6B] text-sm">Every screen should clearly suggest the next step.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold shrink-0">3</div>
                                <div>
                                    <h3 className="text-lg font-medium text-[#222224]">Visibility builds confidence</h3>
                                    <p className="text-[#6B6B6B] text-sm">Performance data should be easy to understand.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#222224] font-bold shrink-0">4</div>
                                <div>
                                    <h3 className="text-lg font-medium text-[#222224]">Designed to scale</h3>
                                    <p className="text-[#6B6B6B] text-sm">The dashboard should grow with seller needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process */}
                    <div id="process" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Process</h2>

                        <div className="space-y-16">
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">1. Defining Core Seller Jobs</h3>
                                <p className="text-[#6B6B6B] mb-4">I mapped the key jobs sellers hire the platform for: create/manage listings, respond to inquiries, monitor performance, and edit/relist.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">2. Information Architecture</h3>
                                <p className="text-[#6B6B6B] mb-4">The dashboard was structured around seller intent: Overview, Listings, Inquiries, Performance.</p>
                                <div className="w-full aspect-[3/1] bg-gray-100 rounded-xl overflow-hidden relative border border-gray-100">
                                    <Image src={two} alt="IA Diagram" fill className="object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">3. User Flows & Wireframes</h3>
                                <p className="text-[#6B6B6B] mb-4">Adding a new vehicle, editing details, responding to buyers. Wireframes focused on reducing steps.</p>
                                <div className="w-full aspect-[21/9] bg-gray-100 rounded-xl overflow-hidden relative border border-gray-100">
                                    <Image src={three} alt="Wireframes Overview" fill className="object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">4. Visual & Interaction Design</h3>
                                <p className="text-[#6B6B6B] mb-4">UI emphasizes clear tables, card layouts, strong hierarchy for status/actions, and consistent controls.</p>
                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div id="highlights" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Final Design Highlights</h2>

                        <div className="space-y-24">
                            {/* Seller Overview */}
                            <div>
                                <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-100 mb-8">
                                    <Image src={nine} alt="Seller Overview Dashboard UI" fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Seller Overview Dashboard</h3>
                                <p className="text-[#6B6B6B]">A high-level snapshot showing active listings, new inquiries, and performance indicators. Designed for quick daily check-ins.</p>
                            </div>

                            {/* Listings Management */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-xl font-medium text-[#222224] mb-4">Listings Management</h3>
                                    <p className="text-[#6B6B6B] mb-4">View all vehicles at a glance, edit/pause/relist easily, and track status changes. Bulk-friendly layouts support power sellers.</p>
                                </div>
                                <div className="w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-100">
                                    <Image src={four} alt="Listings Table UI" fill className="object-cover" />
                                </div>
                            </div>

                            {/* Extra Image Space 1 */}
                            <div className="w-full aspect-[21/9] bg-[#F5F5F3] rounded-2xl overflow-hidden relative border border-gray-100">
                                <Image src={five} alt="Detail Shot / Interaction Flow" fill className="object-cover" />
                            </div>

                            {/* Buyer Inquiries */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1 w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-100">
                                    <Image src={seven} alt="Inbox UI" fill className="object-cover" />
                                </div>
                                <div className="order-1 md:order-2">
                                    <h3 className="text-xl font-medium text-[#222224] mb-4">Buyer Inquiries & Leads</h3>
                                    <p className="text-[#6B6B6B] mb-4">A centralized inbox allows sellers to respond quickly, track conversation status, and avoid missing leads.</p>
                                </div>
                            </div>

                            {/* Performance Insights */}
                            <div>
                                <h3 className="text-xl font-medium text-[#222224] mb-4">Performance Insights</h3>
                                <p className="text-[#6B6B6B] mb-8">Simple metrics help sellers understand views, conversion to inquiries, and optimization needs.</p>
                                <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-100">
                                    <Image src={nine} alt="Performance Charts UI" fill className="object-cover" />
                                </div>
                            </div>

                            {/* Extra Image Space 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="aspect-[4/3] bg-[#F5F5F3] rounded-2xl overflow-hidden relative border border-gray-100">
                                    <Image src={ten} alt="Mobile Screens" fill className="object-cover" />
                                </div>
                                <div className="aspect-[4/3] bg-[#F5F5F3] rounded-2xl overflow-hidden relative border border-gray-100">
                                    <Image src={eight} alt="Notifications / Alerts" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certification Feature */}
                    <div id="certification" className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-12">Quality Assurance & Certification</h2>

                        <div className="bg-[#F5F5F3] p-8 md:p-12 rounded-3xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                                <div>
                                    <h3 className="text-xl font-medium text-[#222224] mb-4">Mechanic Verification Workflow</h3>
                                    <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                                        To build trust in the marketplace, we designed a dedicated interface for certified mechanics. This tool allows them to perform comprehensive quality checks directly on the platform.
                                    </p>
                                    <ul className="space-y-3 text-[#6B6B6B]">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#E0E0E0] flex items-center justify-center text-xs font-bold text-[#222224] mt-0.5">✓</div>
                                            <span><strong>150-Point Inspection:</strong> A digital checklist ensuring no detail is overlooked (Engine, Transmission, Exterior, etc.).</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#E0E0E0] flex items-center justify-center text-xs font-bold text-[#222224] mt-0.5">✓</div>
                                            <span><strong>Real-time Uploads:</strong> Mechanics capture and upload photos of defects instantly.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full aspect-[4/5] bg-white rounded-2xl shadow-sm overflow-hidden relative border border-gray-100">
                                    <Image src={eight} alt="Mechanic Inspection App UI" fill className="object-cover" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1 w-full aspect-video bg-white rounded-2xl shadow-sm overflow-hidden relative border border-gray-100">
                                    <Image src={six} alt="Certificate & Badge Design" fill className="object-cover" />
                                </div>
                                <div className="order-1 md:order-2">
                                    <h3 className="text-xl font-medium text-[#222224] mb-4">The "Velocegrade Certified" Badge</h3>
                                    <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                                        Once a vehicle passes the inspection, it receives a verified certification badge. This acts as a signal of quality to buyers, differentiating premium inventory from standard listings.
                                    </p>
                                    <p className="text-[#6B6B6B] leading-relaxed">
                                        The certificate is auto-generated and attached to the listing, providing buyers with a downloadable, transparent report of the vehicle's health.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Impact & Conclusion */}
                    <div id="impact" className="scroll-mt-32 pb-24 text-center">
                        <div className="max-w-3xl mx-auto mb-16">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-8">Impact</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                <div className="bg-white p-6 rounded-xl border border-gray-100">
                                    <p className="text-[#222224] font-medium mb-2">Clear Workflow</p>
                                    <p className="text-[#6B6B6B] text-sm">The dashboard created a clear, usable selling workflow.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100">
                                    <p className="text-[#222224] font-medium mb-2">Centralized Management</p>
                                    <p className="text-[#6B6B6B] text-sm">Sellers could manage listings and messages from one place.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100">
                                    <p className="text-[#222224] font-medium mb-2">Future Ready</p>
                                    <p className="text-[#6B6B6B] text-sm">The foundation supports future features like pricing insights.</p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#222224] mb-6">Empowering Sellers</h2>
                            <p className="text-xl text-[#6B6B6B] leading-relaxed italic font-serif">
                                "A good marketplace doesn’t just connect buyers and sellers — it empowers them. This project reflects my approach to designing practical, scalable, and user-centered product experiences."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
