import { Services } from "./components/shared/services";
import { Founders } from "./components/shared/founders";
import { EmpoweringBusinesses } from "./components/shared/empowering-businesses";
import { OurProcess } from "./components/shared/our-process";
import { Testimonials } from "./components/shared/testimonials";
import { CaseStudies } from "./components/shared/case-studies";
import { FAQ } from "./components/shared/faq";
import { Achievements } from "./components/shared/achievements";
import { Deploy } from "./components/shared/deploy";
import { ScrollToTop } from "./components/shared/scroll-to-top";
import { WhatsAppButton } from "./components/shared/whatsapp-button";
import Hero from "./components/shared/hero/Hero";
import ClientOnlyWrapper from "./components/shared/ClientOnlyWrapper";

export default function Home() {
  return (
    <ClientOnlyWrapper>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Founders />
          <EmpoweringBusinesses />
        </section>
        <section>
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
    </ClientOnlyWrapper>
  );
}
