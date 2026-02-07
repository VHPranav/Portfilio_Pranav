"use client"

import { useState, useEffect } from "react";
import { AnimatedText } from "@/components/ui/animated-text";
import DecryptedText from "@/components/ui/decrypted-text";
import Antigravity from "@/components/ui/antigravity";
import Image from "next/image";
import me from "../../public/images/me.webp";

export default function Home() {
    const words = ["a developer.", "a designer.", "a team.", "a coder.", "a pixel pusher.", "an average UX."];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative min-h-screen w-full overflow-hidden flex items-center">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
                <Antigravity
                    count={300}
                    magnetRadius={15}
                    ringRadius={10}
                    waveSpeed={0.4}
                    waveAmplitude={1}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#171717ff"
                    autoAnimate
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={3}
                    particleShape="capsule"
                    fieldStrength={10}
                />
            </div>

            {/* Gradient Blur Effect */}
            <div className="absolute -top-40 -left-40 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-[#00E5FF] via-[#2979FF] to-[#AA00FF] opacity-30 blur-[100px] md:blur-[150px] z-0 rounded-full pointer-events-none" />
            <div className="absolute bottom-50 -right-40 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-[#00E5FF] via-[#2979FF] to-[#AA00FF] opacity-30 blur-[100px] md:blur-[150px] z-0 rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col items-start text-left">

                {/* Top Small Text */}
                <div className="mb-4">
                    <p className="text-xl md:text-2xl font-meduim text-[#222224]">
                        You don't need <DecryptedText
                            key={index}
                            text={words[index]}
                            animateOn="view"
                            revealDirection="start"
                            className="text-[#A19E9E]"
                            encryptedClassName="text-[#A19E9E] opacity-50"
                            sequential
                        />
                    </p>
                </div>

                {/* Main Headline */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="text-6xl md:text-[100px] font-semibold text-[#222224] leading-[0.9]">
                            You need a
                        </span>
                        <span className="relative text-6xl md:text-[100px] font-semibold text-[#222224] leading-[0.9]">
                            <span className="relative z-10 ">creative</span>
                            <div className="absolute inset-x-0 bottom-2 md:bottom-6 h-8 md:h-12 bg-[yellow] -z-10 rotate-1"></div>
                        </span>
                        <span className="relative text-6xl md:text-[100px] font-semibold text-[#222224] leading-[0.9]">
                            <span className="relative z-10 "> product engineer</span>
                        </span>
                    </div>
                </div>

                {/* Sub-text and Testimonial Section */}
                <div className="mt-6 flex flex-col items-start max-w-xl md:max-w-3xl">
                    <AnimatedText className="text-lg md:text-xl font-light text-[#666666] leading-relaxed" delay={0.5}>
                        I’m V H Pranav
                        {/* <span className="inline-block mx-2 translate-y-1">
                            <Image
                                src={me}
                                alt="V H Pranav"
                                width={40}
                                height={40}
                                className="rounded-xl w-20 h-8 md:w-20 md:h-10 object-cover border border-[#E5E5E5]"
                            />
                        </span> */}
                        a Creative Front-End Developer & UI/UX Designer. I build clean, high-performance interfaces where motion and engineering come together, turning ideas into scalable, production-ready experiences.
                    </AnimatedText>
                </div>

                {/* <div className="flex flex-col gap-4">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <div className={`w-full h-full bg-gradient-to-br from-gray-300 to-gray-400`}></div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-lg text-[#222224]">4.9/5</span>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <FaStar key={i} className="text-[#D7FF3B] text-sm" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-[#A19E9E] font-medium">Loved by 50+ clients worldwide</p>
                        </div>
                    </div> */}
            </div>
        </main>
    );
}
