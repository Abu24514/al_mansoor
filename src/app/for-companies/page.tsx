import CompaniesHero from "@/components/companies/CompaniesHero";
import TrustStats from "@/components/home/TrustStats";
import WhyHireUs from "@/components/companies/WhyHireUs";
import LeadForm from "@/components/companies/LeadForm";

export default function ForCompaniesPage() {
  return (
    <main>
      <CompaniesHero />
      <TrustStats />
      <WhyHireUs />
      <LeadForm />
    </main>
  );
}