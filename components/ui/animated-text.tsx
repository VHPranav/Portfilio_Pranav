"use client"

import { useInView } from "@/components/hooks/use-in-view"

interface AnimatedTextProps {
    children: React.ReactNode  // Allow any type of React child
    className?: string
    delay?: number
    staggerDelay?: number
}

export function AnimatedText({ children, className = "", delay = 0, staggerDelay = 0.1 }: AnimatedTextProps) {
    const [ref, isInView] = useInView({ threshold: 0.3 })

    const words = typeof children === "string" ? children.split(" ") : [children]

    return (
        <div ref={ref} className={`${className}`} style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}>
            {words.map((word, index) => (
                <span
                    key={index}
                    className="inline-block"
                    style={{
                        animationDelay: `${delay + index * staggerDelay}s`,
                    }}
                >
                    <span
                        className={`inline-block transition-all duration-700 ease-out ${isInView ? "translate-y-0 blur-0 opacity-100" : "translate-y-4 blur-sm opacity-0"
                            }`}
                        style={{
                            transitionDelay: `${delay + index * staggerDelay}s`,
                        }}
                    >
                        {word}
                    </span>
                    {index < words.length - 1 && <span>&nbsp;</span>}
                </span>
            ))}
        </div>
    )
}