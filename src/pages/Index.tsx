import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DietaryFilters from "@/components/DietaryFilters";
import QuickRecipes from "@/components/QuickRecipes";
import HealthSection from "@/components/HealthSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DietaryFilters />
      <QuickRecipes />
      <HealthSection />
    </div>
  );
};

export default Index;
