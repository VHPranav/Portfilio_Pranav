"use client";

import AlphaInterfaceCaseStudy from "@/components/casestudies/alphainterface";
import { FloatingDemoButton } from "@/components/ui/floating-demo-button";

export default function AlphaInterfacePage() {
    return (
        <>
            <AlphaInterfaceCaseStudy />
            <FloatingDemoButton url="https://alphainterface.ai/" />
        </>
    );
}
