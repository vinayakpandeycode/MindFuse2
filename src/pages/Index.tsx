import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <UseCasesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
