import LibraryHeader from "@/components/LibraryHeader";
import LibraryHero from "@/components/LibraryHero";
import FeaturedBooks from "@/components/FeaturedBooks";
import ServicesSection from "@/components/ServicesSection";
import QuickActions from "@/components/QuickActions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LibraryHeader />
      <LibraryHero />
      <FeaturedBooks />
      <ServicesSection />
      <QuickActions />
      <Footer />
    </div>
  );
};

export default Index;
