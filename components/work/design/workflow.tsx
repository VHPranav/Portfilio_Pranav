"use client"
import one from "../../../public/images/one.webp"
import two from "../../../public/images/two.webp"
import three from "../../../public/images/three.webp"
import four from "../../../public/images/four.webp"
import five from "../../../public/images/five.webp"
import Image from "next/image"
import { AnimatedText } from "../../ui/animated-text"

export default function Workflow() {
    const workflowSteps = [
        {
            id: 1,
            title: "Clarity First",
            description: "Design should be easy to understand before it’s beautiful. I focus on clear structure, strong hierarchy, and intuitive flows that guide users effortlessly.",
            // TODO: Add your image here
            imagePlaceholder: one
        },
        {
            id: 2,
            title: "Design with Empathy",
            description: "I design for people, not screens. Every decision is rooted in understanding user goals, behaviors, and real-world contexts.",
            // TODO: Add your image here
            imagePlaceholder: two
        },
        {
            id: 3,
            title: "Details Matter",
            description: "Great design lives in the details. Spacing, typography, alignment, and microcopy are carefully refined to create consistency and polish.",
            // TODO: Add your image here
            imagePlaceholder: three
        },
        {
            id: 4,
            title: "Motion with Purpose",
            description: "Motion isn’t decoration—it’s communication. Subtle animations and interactions are used to provide feedback, guide attention, and enhance usability.",
            // TODO: Add your image here
            imagePlaceholder: four
        },
        {
            id: 5,
            title: "Design That Scales",
            description: "Good design should translate seamlessly into code. I create systems and components that are practical, reusable, and ready for development.",
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
                        <span className="text-[#9B9B9B]">My Design</span>{" "}
                        <span className="font-medium text-[#222224]"> Principles</span>
                    </AnimatedText>
                    <AnimatedText className="text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
                        Thoughtful design, rapid prototyping, and purposeful execution.
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
