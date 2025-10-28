import { Link } from "react-router-dom";
import { Book, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BookExplorerCardProps {
  id: number;
  title: string;
  author: string;
  rating: number;
  cover?: string;
}

const gradients = [
  "book-gradient-1",
  "book-gradient-2",
  "book-gradient-3",
  "book-gradient-4",
];

const BookExplorerCard = ({ id, title, author, rating, cover }: BookExplorerCardProps) => {
  const gradientClass = gradients[id % gradients.length];
  
  return (
    <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30 animate-fade-in overflow-hidden">
      <div className="relative overflow-hidden">
        {cover ? (
          <div className="relative h-56">
            <div className={`absolute inset-0 ${gradientClass} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
            <img
              src={cover}
              alt={title}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-3 right-3">
              <Sparkles className="h-6 w-6 text-yellow-300 drop-shadow-lg animate-pulse-slow" />
            </div>
          </div>
        ) : (
          <div className={`w-full h-56 flex items-center justify-center ${gradientClass} relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
            </div>
            <Book className="h-20 w-20 text-white drop-shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <CardContent className="p-5 space-y-3 bg-gradient-to-br from-card via-card to-accent/5">
        <h3 className="font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">✍️ {author}</p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-3 py-1.5 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow" />
            <span className="text-sm font-bold text-foreground">{rating}</span>
            <span className="text-xs text-muted-foreground">/5.0</span>
          </div>
          <Badge variant="secondary" className="bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30 font-semibold">
            📚 Available
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 bg-gradient-to-br from-card via-card to-accent/5">
        <Link to={`/book/${id}`} className="w-full">
          <Button className="w-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary/90">
            📖 View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookExplorerCard;
