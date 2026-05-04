import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import VisualProof from "@/components/VisualProof";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <VisualProof />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
