import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { DashboardDemo } from "@/app/components/dashboard-demo";
import { ComparisonCFO } from "@/app/components/comparison-cfo";
import { CashflowTimeline } from "@/app/components/cashflow-timeline";
import { Plans } from "@/app/components/plans";
import { CTA } from "@/app/components/cta";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DashboardDemo />
      <ComparisonCFO />
      <CashflowTimeline />
      <Plans />
      <CTA />
      <Footer />
    </main>
  );
}
