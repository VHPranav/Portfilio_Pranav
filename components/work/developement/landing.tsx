"use client";

import { AnimatedText } from "@/components/ui/animated-text";

export default function DevelopmentLanding() {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 bg-[#FCFBF8]">
            <div className="max-w-[90rem]">
                <AnimatedText
                    className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#222224] mb-4 leading-[0.9]"
                    delay={0.1}
                >
                    Code built for <br className="hidden md:block" />
                    <span className="text-[#CFCFCF]">performance & scale.</span>
                </AnimatedText>

                <AnimatedText
                    className="text-lg md:text-xl text-[#6B6B6B] max-w-lg leading-normal"
                    delay={0.3}
                >
                    I architect robust systems and write clean, maintainable code—transforming complex logic into seamless experiences.
                </AnimatedText>
            </div>
        </section>
    );
}
