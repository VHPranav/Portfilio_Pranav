"use client";

import TowerWatchCaseStudy from "@/components/casestudies/towerwatch";
import { FloatingDemoButton } from "@/components/ui/floating-demo-button";

export default function TowerWatchPage() {
    return (
        <>
            <TowerWatchCaseStudy />
            <FloatingDemoButton url="https://app.towerwatch.io/" />
        </>
    );
}
