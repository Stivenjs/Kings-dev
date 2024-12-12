import { Services } from "@/components/shared/services";
import { Founders } from "@/components/shared/founders";
import { EmpoweringBusinesses } from "@/components/shared/empowering-businesses";
import { OurProcess } from "@/components/shared/our-process";
import { Testimonials } from "@/components/shared/testimonials";
import { CaseStudies } from "@/components/shared/case-studies";
import { FAQ } from "@/components/shared/faq";
import { Achievements } from "@/components/shared/achievements";
import { Deploy } from "@/components/shared/deploy";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import Hero from "@/components/shared/hero/Hero";
export default function Home() {
  return (
    <main>
      <section id="inicio">
        <Hero />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="sobre-nosotros">
        <Founders />
        <EmpoweringBusinesses />
      </section>
      <section id="proceso">
        <OurProcess />
      </section>
      <Testimonials />
      <CaseStudies />
      <Achievements />
      <FAQ />
      <Deploy />
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  );
}
