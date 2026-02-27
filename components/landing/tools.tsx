"use client"

import { TextAnimate } from "../ui/text-animate"
import { SiFigma, SiFramer, SiPinterest, SiDribbble, SiNextdotjs, SiJavascript, SiReact, SiHtml5, SiCss3, SiThreedotjs, SiWebgl } from 'react-icons/si'
import { TbWorld } from 'react-icons/tb'
import design from "@/public/images/design.webp"
import dev from "@/public/images/dev.webp"
import Image from "next/image"
import LightGlass from "../ui/light-glass"
import AutumnBreeze from "../ui/autmn-breeze"

export default function Tools() {
    const designTools = [
        {
            id: 1,
            name: "Figma",
            description: "The #1 UI/UX Design tool. Industry-standard for creating interfaces, prototypes, and design systems.",
            icon: <SiFigma className="text-[#F24E1E]" />
        },
        {
            id: 2,
            name: "Framer",
            description: "Create beautiful sites. Use code 'pro-yearly-partner' for interactive prototypes and production-ready websites.",
            icon: <SiFramer className="text-[#0055FF]" />
        },
        {
            id: 3,
            name: "Cosmos",
            description: "Component library explorer for React. Build, document, and test UI components in isolation.",
            icon: <TbWorld className="text-[#50E3C2]" />
        },
        {
            id: 4,
            name: "Pinterest",
            description: "Visual discovery platform. Endless design inspiration for UI patterns, color palettes, and creative ideas.",
            icon: <SiPinterest className="text-[#E60023]" />
        },
        {
            id: 5,
            name: "Mobbin",
            description: "Mobile design reference library. Browse thousands of real app screens for UX research and inspiration.",
            icon: <TbWorld className="text-[#2D2D2D]" />
        },
        {
            id: 6,
            name: "Dribbble",
            description: "Creative community showcase. Discover cutting-edge UI designs and connect with talented designers worldwide.",
            icon: <SiDribbble className="text-[#EA4C89]" />
        }
    ];

    const developmentTools = [
        {
            id: 1,
            name: "Next.js",
            description: "React framework for production. Server-side rendering, static generation, and optimized performance out of the box.",
            icon: <SiNextdotjs className="text-black" />
        },
        {
            id: 2,
            name: "JavaScript",
            description: "Core programming language of the web. Modern ES6+ features for building dynamic, interactive applications.",
            icon: <SiJavascript className="text-[#F7DF1E]" />
        },
        {
            id: 3,
            name: "React",
            description: "Component-based UI library. Build reusable, efficient interfaces with declarative code and virtual DOM.",
            icon: <SiReact className="text-[#61DAFB]" />
        },
        {
            id: 4,
            name: "HTML & CSS",
            description: "Foundation of web development. Semantic markup and modern styling for accessible, responsive layouts.",
            icon: <><SiHtml5 className="inline mr-1 text-[#E34F26]" /><SiCss3 className="inline text-[#1572B6]" /></>
        },
        {
            id: 5,
            name: "Antigravity IDE",
            description: "AI-powered development environment. Intelligent code completion and agentic assistance for rapid development.",
            icon: <TbWorld className="text-[#8B5CF6]" />
        },
        {
            id: 6,
            name: "Cursor IDE",
            description: "AI-first code editor. Context-aware suggestions and natural language coding for enhanced productivity.",
            icon: <TbWorld className="text-[#3B82F6]" />
        },
        {
            id: 7,
            name: "ReactBits",
            description: "React component snippets library. Pre-built, customizable components to accelerate development workflow.",
            icon: <SiReact className="text-[#61DAFB]" />
        },
        {
            id: 8,
            name: "Magic UI",
            description: "Beautiful UI component collection. Animated, modern components with copy-paste simplicity.",
            icon: <TbWorld className="text-[#EC4899]" />
        }
    ];

    const motionTools = [
        {
            id: 1,
            name: "Three.js",
            description: "3D library for the web. Create immersive 3D experiences and visual effects using WebGL directly in the browser.",
            icon: <SiThreedotjs className="text-black" />
        },
        {
            id: 2,
            name: "WebGL",
            description: "Low-level 3D graphics API. The foundation for high-performance interactive 2D and 3D graphics.",
            icon: <SiWebgl className="text-[#990000]" />
        }
    ];

    return (
        <section className="w-full py-24 px-6 bg-[#FCFBF8]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <TextAnimate className="text-[#6B6B6B] text-base ">
                        focused, modern tools for thoughtful product creation.
                    </TextAnimate>
                    <TextAnimate className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-[-0.06em]"
                        animation="blurInUp"
                        as="h2"
                        by="word"
                        delay={0.2}
                        staggerDelay={0.1}
                    >
                        <span className="text-[#BEBEBE]">tools</span>{" "}
                        <span className="text-[#222224] font-medium">I use to bring ideas to life.</span>
                    </TextAnimate>
                </div>

                {/* Design Section */}
                <div className="mb-12">
                    {/* Large Design Card with Left/Right Split */}
                    <div className="rounded-3xl p-8 md:p-12 mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Image Placeholder */}
                            <div>
                                <Image src={design} alt="Design" className="w-full h-64 object-cover rounded-2xl shadow-xl" />
                            </div>

                            {/* Right Side - Description Text */}
                            <div>
                                <TextAnimate className="text-[#6B6B6B] text-lg md:text-xl leading-relaxed"
                                    animation="blurInUp"
                                    as="p"
                                    by="word"
                                    delay={0.2}
                                    staggerDelay={0.1}
                                >
                                    Crafting intuitive and polished digital experiences using Figma and Framer — from research and UX thinking to motion design and interactive prototypes.
                                </TextAnimate>
                            </div>
                        </div>
                    </div>

                    {/* Design Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {designTools.map((tool) => (
                            <div
                                key={tool.id}
                                className="rounded-3xl p-8 flex items-start gap-6"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-3xl shadow-md">
                                    {tool.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-semibold text-[#222224] mb-2">
                                        {tool.name}
                                    </h4>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                                        {tool.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Development Section */}
                <div className="mb-12">
                    {/* Large Development Card with Left/Right Split */}
                    <div className="rounded-3xl p-8 md:p-12 mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Description Text */}
                            <div>
                                <TextAnimate className="text-[#6B6B6B] text-lg md:text-xl leading-relaxed"
                                    animation="blurInUp"
                                    as="p"
                                    by="word"
                                    delay={0.2}
                                    staggerDelay={0.1}
                                >
                                    Turning creative designs into high-performance, scalable web applications using React and TypeScript. Focusing on maintainability, accessibility, and smooth performance across all devices.
                                </TextAnimate>
                            </div>

                            {/* Right Side - Image Placeholder */}
                            <div>
                                <Image src={dev} alt="Development" className="w-full h-64 object-cover rounded-2xl shadow-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Development Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {developmentTools.map((tool) => (
                            <div
                                key={tool.id}
                                className="rounded-3xl p-8 flex items-start gap-6"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl ">
                                    {tool.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-semibold text-[#222224] mb-2">
                                        {tool.name}
                                    </h4>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                                        {tool.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Motion Section */}
                <div>
                    {/* Large Motion Card with Left/Right Split */}
                    <div className="rounded-3xl p-8 md:p-12 mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Image Placeholder */}
                            <div>
                                <div className="bg-gray-100 rounded-2xl h-64 md:h-110 flex items-center justify-center">
                                    <LightGlass />
                                </div>
                            </div>

                            {/* Right Side - Description Text */}
                            <div>
                                <TextAnimate className="text-[#6B6B6B] text-lg md:text-xl leading-relaxed"
                                    animation="blurInUp"
                                    as="p"
                                    by="word"
                                    delay={0.2}
                                    staggerDelay={0.1}
                                >
                                    Bringing interfaces to life with fluid animations and immersive 3D experiences. Using Three.js and WebGL to create memorable, interactive moments.
                                </TextAnimate>
                            </div>
                        </div>
                    </div>

                    {/* Motion Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {motionTools.map((tool) => (
                            <div
                                key={tool.id}
                                className="rounded-3xl p-8 flex items-start gap-6"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl ">
                                    {tool.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-semibold text-[#222224] mb-2">
                                        {tool.name}
                                    </h4>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                                        {tool.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
