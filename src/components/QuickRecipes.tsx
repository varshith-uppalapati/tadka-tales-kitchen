import { Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecipeCard from "./RecipeCard";
import masalaMaggi from "@/assets/masala-maggi.jpg";
import alooBhujia from "@/assets/aloo-bhujia.jpg";
import masalaChai from "@/assets/masala-chai.jpg";

const quickRecipes = [
  {
    title: "Instant Masala Maggi",
    image: masalaMaggi,
    cookTime: 5,
    difficulty: "Easy",
    rating: 4.8,
    servings: 2,
    dietaryTags: ["Vegetarian", "Quick"],
    description: "Spicy and flavorful instant noodles with Indian masala twist"
  },
  {
    title: "Aloo Bhujia",
    image: alooBhujia,
    cookTime: 8,
    difficulty: "Easy",
    rating: 4.6,
    servings: 3,
    dietaryTags: ["Vegan", "Jain-Friendly"],
    description: "Quick spiced potato stir-fry perfect for any meal"
  },
  {
    title: "Masala Chai",
    image: masalaChai,
    cookTime: 5,
    difficulty: "Easy",
    rating: 4.9,
    servings: 2,
    dietaryTags: ["Vegetarian", "Ayurvedic"],
    description: "Traditional Indian tea with perfect blend of spices"
  },
];

const QuickRecipes = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-spice text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            10-Minute Challenge
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quick Recipes
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            "Less Haste, Better Taste" - Delicious meals in 10 minutes or less
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>All recipes under 10 minutes</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {quickRecipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-gradient-spice hover:opacity-90 text-white px-8">
            View All Quick Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickRecipes;