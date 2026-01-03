import DesignLanding from "@/components/work/design/landing";
import Workflow from "@/components/work/design/workflow";
import CaseStudies from "@/components/work/design/casestudies";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function DesignPage() {
    return (
        <>
            <DesignLanding />
            <Workflow />
            <CaseStudies />
            <CTA />
            <Footer />
        </>
    )
}
