import FeaturedJobs from "@/components/home/FeaturedJobs";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import JobCategories from "@/components/home/JobCategories";
import TrustStats from "@/components/home/TrustStats";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStats />
      <HowItWorks/>
      <JobCategories />
      <FeaturedJobs/>
      <WhyChooseUs/>
    </main>
  );
}