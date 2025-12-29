"use client"

import { SiGithub, SiLinkedin, SiX } from "react-icons/si"
import { HiMail } from "react-icons/hi"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full py-12 px-6 bg-[#FCFBF8] border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Copyright */}
                <div className="text-[#A19E9E] text-sm font-medium">
                    © {currentYear} V H Pranav. All Rights Reserved.
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <Link href="https://github.com/VHPranav" target="_blank" className="text-[#A19E9E] hover:text-[#222224] transition-colors text-xl">
                        <SiGithub />
                    </Link>
                    <Link href="https://linkedin.com/in/vhpranav" target="_blank" className="text-[#A19E9E] hover:text-[#0A66C2] transition-colors text-xl">
                        <SiLinkedin />
                    </Link>
                    <Link href="https://twitter.com/vhpranav" target="_blank" className="text-[#A19E9E] hover:text-black transition-colors text-xl">
                        <SiX />
                    </Link>
                    <Link href="mailto:vhpranav@example.com" className="text-[#A19E9E] hover:text-[#EA4335] transition-colors text-2xl">
                        <HiMail />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
