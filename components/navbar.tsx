"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { IoChevronDown, IoMenu, IoClose, IoMail } from "react-icons/io5"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6"
import { AnimatePresence, motion } from "framer-motion"

export function Navbar() {
    const [isWorkOpen, setIsWorkOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsWorkOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <>
            {/* Logo */}
            <Link href="/" className="fixed top-6 left-6 md:left-40 font-caveat text-3xl font-bold text-[#222] z-50">
                Pranav
            </Link>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex fixed top-6 right-0 -translate-x-1/2 z-50">
                <div className="flex items-center gap-1 bg-[#F5F5F3]/60 backdrop-blur-md px-2 py-2 rounded-full border border-white/20 shadow-sm">

                    {/* About */}
                    <Link
                        href="/about"
                        className="px-5 py-2 text-[#444] hover:text-black font-medium transition-colors rounded-full hover:bg-white/50"
                    >
                        About
                    </Link>

                    {/* Work Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsWorkOpen(true)}
                        onMouseLeave={() => setIsWorkOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 px-5 py-2 font-medium transition-all rounded-full ${isWorkOpen
                                ? "bg-white text-black shadow-sm"
                                : "text-[#444] hover:text-black hover:bg-white/50"
                                }`}
                        >
                            Work
                            <IoChevronDown className={`transition-transform duration-200 ${isWorkOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {isWorkOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden py-1 flex flex-col"
                                >
                                    <Link
                                        href="/work/design"
                                        className="px-4 py-2.5 text-left text-[#444] hover:text-black hover:bg-gray-50 transition-colors text-sm font-medium"
                                        onClick={() => setIsWorkOpen(false)}
                                    >
                                        Design
                                    </Link>
                                    <Link
                                        href="/work/development"
                                        className="px-4 py-2.5 text-left text-[#444] hover:text-black hover:bg-gray-50 transition-colors text-sm font-medium"
                                        onClick={() => setIsWorkOpen(false)}
                                    >
                                        Development
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Contact */}
                    <Link
                        href="/contact"
                        className="px-5 py-2 text-[#444] hover:text-black font-medium transition-colors rounded-full hover:bg-white/50"
                    >
                        Contact
                    </Link>

                </div>
            </nav>

            {/* Mobile Navbar Button */}
            <div className="md:hidden fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-[#F5F5F3]/80 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-sm text-[#222]"
                >
                    {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#F5F5F3] pt-24 px-6 pb-12 md:hidden flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-4 text-2xl font-medium text-[#222]">
                            <Link
                                href="/about"
                                className="py-2 border-b border-gray-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>

                            <div className="flex flex-col border-b border-gray-200">
                                <button
                                    onClick={() => setIsMobileWorkOpen(!isMobileWorkOpen)}
                                    className="flex items-center justify-between py-2 w-full text-left"
                                >
                                    Work
                                    <IoChevronDown className={`transition-transform duration-200 ${isMobileWorkOpen ? "rotate-180" : ""}`} />
                                </button>

                                <AnimatePresence>
                                    {isMobileWorkOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden flex flex-col pl-4 gap-3 pb-3 text-lg text-[#666]"
                                        >
                                            <Link href="/work/design" onClick={() => setIsMobileMenuOpen(false)}>Design</Link>
                                            <Link href="/work/development" onClick={() => setIsMobileMenuOpen(false)}>Development</Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                href="#contact"
                                className="py-2 border-b border-gray-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center justify-center gap-6">
                            <a href="https://github.com/VHPranav" target="_blank" className="text-[#444] hover:text-black transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://linkedin.com/in/vhpranav" target="_blank" className="text-[#444] hover:text-black transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://twitter.com/vhpranav" target="_blank" className="text-[#444] hover:text-black transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="mailto:vhpranav@example.com" className="text-[#444] hover:text-black transition-colors">
                                <IoMail size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" className="text-[#444] hover:text-black transition-colors">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
