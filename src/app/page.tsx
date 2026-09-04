import CTABanner from "@/components/home/CTABanner";
import FAQ from "@/components/home/FAQ";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import ForCompanies from "@/components/home/ForCompanies";
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
      <ForCompanies/>
      <FAQ/>
      <CTABanner/>
    </main>
  );
}