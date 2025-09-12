import { Search, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Recipe Hub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            All Indian Recipes in One Place
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From daily meals to traditional festive dishes - discover authentic recipes 
            from every corner of India, tailored to your dietary needs and cultural preferences.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12 animate-scale-in">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for recipes, ingredients, or cuisine..." 
              className="pl-12 pr-4 py-6 text-lg border-2 bg-card/80 backdrop-blur-sm focus:bg-card"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <Button size="lg" className="bg-gradient-spice hover:opacity-90 text-white font-semibold px-8 py-6">
            <Heart className="w-5 h-5 mr-2" />
            I'm Sick - Get Healing Recipes
          </Button>
          <Button variant="secondary" size="lg" className="px-8 py-6 font-semibold">
            <Clock className="w-5 h-5 mr-2" />
            10-Min Quick Recipes
          </Button>
        </div>

        {/* Cultural Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-spice-saffron mb-2">28</div>
            <div className="text-sm text-muted-foreground">States & Cuisines</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-spice-turmeric mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Traditional Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-spice-cardamom mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Cultural Diets</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;