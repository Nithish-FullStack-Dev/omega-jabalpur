import Emergency from "@/components/layout/Emergency";
import HomeHero from "@/components/layout/HomeHero";
import ModernMachine from "@/components/layout/ModernMachine";
import MultispecialtyServices from "@/components/layout/MultispecialtyServices";
import QuickActions from "@/components/layout/QuickActions";
import RequestCallbackSection from "@/components/layout/RequestCallbackSection";
import WelcomeOmegaHospitals from "@/components/layout/WelcomeOmegaHospitals";
import WhyOmega from "@/components/layout/WhyOmega";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <QuickActions />
      <WelcomeOmegaHospitals />
      <MultispecialtyServices />
      <WhyOmega />
      <RequestCallbackSection />
      <ModernMachine />
      <Emergency />
    </main>
  );
}
