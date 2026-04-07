"use client";

import VelocegradeCaseStudy from "@/components/casestudies/velocegrade";
import { FloatingDemoButton } from "@/components/ui/floating-demo-button";

export default function VelocegradePage() {
    return (
        <>
            <VelocegradeCaseStudy />
            <FloatingDemoButton url="https://velocegrade.com/" />
        </>
    );
}
