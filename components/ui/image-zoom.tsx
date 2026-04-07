"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX, FiZoomIn } from "react-icons/fi";

interface ImageZoomProps {
    src: any;
    alt: string;
    className?: string;
    imageClassName?: string;
    fill?: boolean;
}

export function ImageZoom({ src, alt, className = "", imageClassName = "", fill = false }: ImageZoomProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <>
            <div 
                className={`relative group cursor-zoom-in overflow-hidden rounded-2xl ${fill ? 'w-full h-full' : ''} ${className}`}
                onClick={toggleOpen}
            >
                <Image src={src} alt={alt} fill={fill} className={`object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName}`} />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-[#222224] shadow-lg opacity-0"
                    >
                        <FiZoomIn size={20} />
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 dark:bg-black/95 backdrop-blur-md p-4 md:p-10"
                        onClick={toggleOpen}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full max-w-7xl max-h-7xl">
                                <Image 
                                    src={src} 
                                    alt={alt} 
                                    fill 
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <button
                                onClick={toggleOpen}
                                className="absolute top-[80px] right-4 md:top-6 md:right-6 p-3 bg-[#222224] text-white rounded-full hover:scale-110 active:scale-95 transition-transform z-[110]"
                                aria-label="Close"
                            >
                                <FiX size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
