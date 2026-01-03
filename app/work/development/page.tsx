import DevelopmentLanding from "@/components/work/developement/landing";
import Workflow from "@/components/work/developement/workflow";
import CaseStudies from "@/components/work/developement/casestudies";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function DevelopmentPage() {
    return (
        <>
            <DevelopmentLanding />
            <Workflow />
            <CaseStudies />
            <CTA />
            <Footer />
        </>
    )
}
