"use client";

import PortfolioCaseStudy from "@/components/casestudies/portfolio";
import { FloatingDemoButton } from "@/components/ui/floating-demo-button";

export default function PortfolioPage() {
    return (
        <>
            <PortfolioCaseStudy />
            <FloatingDemoButton url="https://clockhash.com/portfolio/clockhash-technologies" />
        </>
    );
}
