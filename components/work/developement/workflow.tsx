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
            title: "Architecture First",
            description: "Planning scalable systems before writing a single line of code. I focus on modularity, data flow, and choosing the right tech stack.",
            // TODO: Add your image here
            imagePlaceholder: one
        },
        {
            id: 2,
            title: "Clean Implementation",
            description: "Writing semantic, type-safe, and self-documenting code. I adhere to best practices and modern standards for long-term maintainability.",
            // TODO: Add your image here
            imagePlaceholder: two
        },
        {
            id: 3,
            title: "Performance Optimization",
            description: "Optimizing for speed and efficiency. Lazy loading, code splitting, and minimizing re-renders to ensure a buttery smooth user experience.",
            // TODO: Add your image here
            imagePlaceholder: three
        },
        {
            id: 4,
            title: "Rigorous Testing",
            description: "Ensuring reliability through unit and integration tests. Catching bugs early to deliver a stable and robust product.",
            // TODO: Add your image here
            imagePlaceholder: four
        },
        {
            id: 5,
            title: "Seamless Deployment",
            description: "Automated CI/CD pipelines and efficient cloud infrastructure. Delivering updates smoothly with zero downtime.",
            // TODO: Add your image here
            imagePlaceholder: five
        }
    ];

    return (
        <section className="w-full py-24 px-6 bg-[#FCFBF8]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-6">
                    <AnimatedText className="text-5xl md:text-6xl font-medium mb-2 tracking-[-0.06em]">
                        <span className="text-[#9B9B9B]">My Development</span>{" "}
                        <span className="font-medium text-[#222224]"> Process</span>
                    </AnimatedText>
                    <AnimatedText className="text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
                        Robust architecture, clean code, and performance-driven engineering.
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
