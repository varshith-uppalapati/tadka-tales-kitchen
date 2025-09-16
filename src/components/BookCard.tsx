import { Heart, Star, Clock, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
  availability: "available" | "borrowed" | "reserved";
  downloadCount: number;
  description: string;
}

const BookCard = ({ 
  title, 
  author, 
  cover, 
  rating, 
  category, 
  availability, 
  downloadCount,
  description 
}: BookCardProps) => {
  const getAvailabilityColor = () => {
    switch (availability) {
      case "available": return "bg-green-500";
      case "borrowed": return "bg-red-500";
      case "reserved": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getAvailabilityText = () => {
    switch (availability) {
      case "available": return "Available";
      case "borrowed": return "Borrowed";
      case "reserved": return "Reserved";
      default: return "Unknown";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="relative overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <div className={`w-3 h-3 rounded-full ${getAvailabilityColor()}`} />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-3 right-3 bg-card/80 backdrop-blur-sm hover:bg-card"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">by {author}</p>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-foreground font-medium">{rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Download className="h-4 w-4" />
            <span>{downloadCount}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 space-y-2">
        <div className="flex items-center space-x-2 text-sm">
          <div className={`w-2 h-2 rounded-full ${getAvailabilityColor()}`} />
          <span className="text-muted-foreground">{getAvailabilityText()}</span>
        </div>
        
        <div className="flex space-x-2 w-full">
          <Button 
            size="sm" 
            className="flex-1" 
            disabled={availability === "borrowed"}
          >
            {availability === "available" ? "Borrow" : availability === "borrowed" ? "Unavailable" : "Reserve"}
          </Button>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;