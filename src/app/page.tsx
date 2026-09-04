import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import JobCategories from "@/components/home/JobCategories";
import TrustStats from "@/components/home/TrustStats";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStats />
      <HowItWorks/>
      <JobCategories />
    </main>
  );
}