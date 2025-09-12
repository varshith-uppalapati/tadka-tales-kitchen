import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import jainFood from "@/assets/jain-food.jpg";
import veganFood from "@/assets/vegan-food.jpg";
import vegetarianThali from "@/assets/vegetarian-thali.jpg";
import vratFood from "@/assets/vrat-food.jpg";
import ayurvedicFood from "@/assets/ayurvedic-food.jpg";
import glutenFreeFood from "@/assets/gluten-free-food.jpg";

const dietaryOptions = [
  { name: "Jain", color: "border-spice-saffron text-spice-saffron", description: "No onion, garlic, potatoes", image: jainFood },
  { name: "Vegan", color: "border-spice-cardamom text-spice-cardamom", description: "Plant-based only", image: veganFood },
  { name: "Vegetarian", color: "border-spice-turmeric text-spice-turmeric", description: "No meat or fish", image: vegetarianThali },
  { name: "Vrat/Fasting", color: "border-spice-cinnamon text-spice-cinnamon", description: "Festival fasting food", image: vratFood },
  { name: "Ayurvedic", color: "border-spice-cumin text-spice-cumin", description: "Healing properties", image: ayurvedicFood },
  { name: "Gluten-Free", color: "border-primary text-primary", description: "No wheat or gluten", image: glutenFreeFood },
];

const DietaryFilters = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Cultural Diet
          </h2>
          <p className="text-lg text-muted-foreground">
            Find recipes that match your dietary preferences and cultural traditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dietaryOptions.map((option) => (
            <div 
              key={option.name}
              className="group rounded-lg border-2 border-transparent hover:border-primary/20 bg-card hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="h-32 overflow-hidden">
                <img 
                  src={option.image} 
                  alt={`${option.name} food`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className={`text-sm font-semibold ${option.color}`}>
                    {option.name}
                  </Badge>
                  <div className="w-8 h-8 rounded-full bg-gradient-spice opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {option.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  Explore {option.name} Recipes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DietaryFilters;