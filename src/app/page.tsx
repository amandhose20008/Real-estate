import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import FeaturedProperties from '@/components/FeaturedProperties';
import PropertyCategories from '@/components/PropertyCategories';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatisticsSection />
      <FeaturedProperties />
      <PropertyCategories />
      <WhyChooseUs />
      <Testimonials />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
