import Emergency from "@/components/layout/Emergency";
import ModernMachine from "@/components/layout/ModernMachine";
import RequestCallbackSection from "@/components/layout/RequestCallbackSection";
import WhyOmega from "@/components/layout/WhyOmega";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <WhyOmega />
      <RequestCallbackSection />
      <ModernMachine />
      <Emergency />
    </main>
  );
}
