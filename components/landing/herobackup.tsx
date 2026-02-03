"use client"

import Image from "next/image";
import { AnimatedText } from "@/components/ui/animated-text";

export default function Homee() {
    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-[#FCFBF8] px-6 py-12 md:px-12 lg:px-20">
            <div className="w-full max-w-6xl">

                {/* Row 1: Description text + Big Portrait Image + Title */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-end mt-20 md:mt-40">
                    <div className="md:col-span-8 flex flex-col gap-4">
                        <AnimatedText className="text-base md:text-[24px] text-[#A19E9E] max-w-full md:max-w-[388px] leading-normal font-normal" delay={0} staggerDelay={0.05}>
                            Designing & building high-impact interfaces for modern products
                        </AnimatedText>
                        <AnimatedText className="text-4xl md:text-[88px] font-normal text-[#222224] leading-tight md:leading-[115px]" delay={0.2} staggerDelay={0.08}>
                            Hi, I'm V H Pranav
                        </AnimatedText>
                    </div>
                    <div className="md:col-span-4 mt-8 md:mt-0">
                        <div className="relative w-full aspect-[4/3] rounded-[2rem]  overflow-hidden shadow-md ">
                            <Image
                                src="/portrait.png"
                                alt="Portrait of V H Pranav"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2: Small Portrait + Front-end developer text */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-6 md:mt-0">
                    <div className="hidden md:block md:col-span-3">
                        <div className="relative w-full aspect-[16/9] rounded-[2rem] max-h-[100px] overflow-hidden shadow-md">
                            <Image
                                src="/portrait.png"
                                alt="Developer portrait"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <AnimatedText className="text-4xl md:text-[88px] font-normal text-[#CFCFCF] leading-tight md:leading-[115px]" delay={0.4} staggerDelay={0.08}>
                            Front-end developer
                        </AnimatedText>
                    </div>
                </div>

                {/* Row 3: UI/UX Designer text + Laptop Image */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7">
                        <AnimatedText className="text-4xl md:text-[88px] font-normal text-[#CFCFCF] leading-tight md:leading-[115px]" delay={0.6} staggerDelay={0.08}>
                            UI/UX Designer,
                        </AnimatedText>
                    </div>
                    <div className="hidden md:block md:col-span-5">
                        <div className="relative w-full md:w-[488px] aspect-[16/9] rounded-[2rem] max-h-[100px] overflow-hidden shadow-md">
                            <Image
                                src="/portrait.png"
                                alt="Developer portrait"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 4: All text in one line */}
                <div className="w-full">
                    <AnimatedText className="text-4xl md:text-[87px] font-normal text-[#CFCFCF] leading-tight md:leading-[115px]" delay={0.8} staggerDelay={0.08}>
                        Vibe Coder & AI Enthusiast!!
                    </AnimatedText>
                </div>

            </div>
        </main>
    );
}