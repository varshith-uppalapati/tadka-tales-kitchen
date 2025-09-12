import { Heart, Thermometer, Coffee, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import healingImage from "@/assets/healing-recipes.jpg";

const healthConditions = [
  { icon: Thermometer, name: "Fever & Flu", description: "Light, nourishing soups and kadha" },
  { icon: Coffee, name: "Cold & Cough", description: "Warm teas and immunity boosters" },
  { icon: Heart, name: "Stomach Upset", description: "Gentle, digestive-friendly meals" },
  { icon: ShieldCheck, name: "General Wellness", description: "Ayurvedic and immunity-boosting recipes" },
];

const HealthSection = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" />
              Health & Wellness
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              "I'm Sick" Button
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Not feeling well? Get personalized recipe recommendations based on your condition. 
              From healing kadhas to light, nutritious meals that help you recover faster.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {healthConditions.map((condition) => (
                <div key={condition.name} className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-md transition-shadow">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <condition.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{condition.name}</h4>
                    <p className="text-xs text-muted-foreground">{condition.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-destructive hover:bg-destructive/90 text-white px-8"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Healing Recipes Now
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={healingImage} 
                alt="Healing recipes and home remedies"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 p-6 bg-card rounded-xl shadow-lg">
              <p className="text-sm font-semibold text-spice-cardamom mb-1">
                "Medicine is food, food is medicine"
              </p>
              <p className="text-xs text-muted-foreground">
                - Ancient Ayurvedic Wisdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;