"use client";

import MarketingCaseStudy from "@/components/casestudies/marketing";
import { FloatingDemoButton } from "@/components/ui/floating-demo-button";

export default function MarketingPage() {
    return (
        <>
            <MarketingCaseStudy />
            <FloatingDemoButton url="https://clockhash.com/your-solution-partner/mvp-product-development-solution" />
        </>
    );
}
