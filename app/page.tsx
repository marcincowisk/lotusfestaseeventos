import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AuthorityStrip } from "@/components/sections/AuthorityStrip";
import { SolutionsShowcase } from "@/components/sections/SolutionsShowcase";
import { EditorialStatement } from "@/components/sections/EditorialStatement";
import { EventsGrid } from "@/components/sections/EventsGrid";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WeddingsSection } from "@/components/sections/WeddingsSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactSection } from "@/components/sections/ContactSection";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Estrutura, som, iluminação e energia para eventos`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AuthorityStrip />
      <SolutionsShowcase />
      <EditorialStatement />
      <EventsGrid events={events} limit={6} />
      <BeforeAfter />
      <WeddingsSection />
      <ProcessTimeline />
      <ContactSection />
    </>
  );
}
