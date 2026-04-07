"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface FloatingDemoButtonProps {
    url: string;
    label?: string;
}

export function FloatingDemoButton({ url, label = "Live Demo" }: FloatingDemoButtonProps) {
    if (!url) return null;

    return (
        <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.5 
            }}
            className="fixed bottom-10 left-1/2 z-50 pointer-events-none"
        >
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto group px-8 py-4 bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] flex items-center gap-3 transition-all duration-300 hover:bg-white dark:hover:bg-[#222222] hover:-translate-y-1 no-underline"
            >
                <div className="relative overflow-hidden">
                    <span className="text-[#222224] dark:text-white font-medium text-sm tracking-wide block transition-transform duration-300 group-hover:-translate-y-full">
                        {label}
                    </span>
                    <span className="text-[#222224] dark:text-white font-medium text-sm tracking-wide absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                        {label}
                    </span>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-[#222224] dark:bg-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                    <FiArrowUpRight className="text-white dark:text-[#222224] text-lg" />
                </div>
            </a>
        </motion.div>
    );
}
