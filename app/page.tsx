import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import ProcessSection from '@/components/process/ProcessSection';
import FAQ from '@/components/FAQ';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <ProcessSection />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  );
}