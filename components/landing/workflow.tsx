"use client"
import one from "../../public/images/one.png"
import two from "../../public/images/two.png"
import three from "../../public/images/three.png"
import four from "../../public/images/four.png"
import five from "../../public/images/five.png"
import Image from "next/image"
import { AnimatedText } from "../ui/animated-text"

export default function Workflow() {
    const workflowSteps = [
        {
            id: 1,
            title: "Research & UX Thinking",
            description: "Understanding users and defining clear, usable solutions.",
            // TODO: Add your image here
            imagePlaceholder: one
        },
        {
            id: 2,
            title: "Visual Design in Figma",
            description: "Designing clean, intuitive interfaces with strong visual hierarchy.",
            // TODO: Add your image here
            imagePlaceholder: two
        },
        {
            id: 3,
            title: "Motion & Prototyping",
            description: "Creating interactive prototypes and smooth motion to enhance usability.",
            // TODO: Add your image here
            imagePlaceholder: three
        },
        {
            id: 4,
            title: "Scalable Code Implementation",
            description: "Building modular, maintainable components that scale.",
            // TODO: Add your image here
            imagePlaceholder: four
        },
        {
            id: 5,
            title: "Performance & Accessibility Checks",
            description: "Ensuring fast load times and inclusive, accessible experiences.",
            // TODO: Add your image here
            imagePlaceholder: five
        }
    ];

    return (
        <section className="w-full py-24 px-6 bg-[#FCFBF8]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-6">
                    <AnimatedText className="text-5xl md:text-6xl font-medium mb-2">
                        <span className="text-[#9B9B9B]">Design → Code</span>{" "}
                        <span className="font-medium text-[#222224]">Workflow</span>
                    </AnimatedText>
                    <AnimatedText className="text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
                        My workflow combines thoughtful design, rapid prototyping, and structured development to deliver reliable, user-centric products.
                    </AnimatedText>
                </div>

                {/* Workflow Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                    {workflowSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`rounded-3xl p-8 flex flex-col lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''
                                } ${index === 4 ? 'lg:col-start-4' : ''}`}
                        >
                            {/* Image */}
                            <div className="mb-6 rounded-2xl overflow-hidden aspect-[16/9] relative">
                                <Image
                                    src={step.imagePlaceholder}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <AnimatedText className="text-2xl font-medium text-[#222224]  max-w-sm" >
                                    {step.title}
                                </AnimatedText>
                                <AnimatedText className="text-[#6B6B6B] text-base leading-normal max-w-sm">
                                    {step.description}
                                </AnimatedText>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
