import { Clock, Star, Users, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface RecipeCardProps {
  title: string;
  image: string;
  cookTime: number;
  difficulty: string;
  rating: number;
  servings: number;
  dietaryTags: string[];
  description: string;
}

const RecipeCard = ({ 
  title, 
  image, 
  cookTime, 
  difficulty, 
  rating, 
  servings, 
  dietaryTags, 
  description 
}: RecipeCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Button 
          size="sm" 
          variant="ghost"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90"
        >
          <Bookmark className="w-4 h-4" />
        </Button>
        <div className="absolute bottom-2 left-2">
          <Badge variant="secondary" className="bg-black/70 text-white border-0">
            {difficulty}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{cookTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {dietaryTags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs border-spice-cardamom text-spice-cardamom"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button className="w-full bg-gradient-spice hover:opacity-90 text-white">
          View Recipe
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;