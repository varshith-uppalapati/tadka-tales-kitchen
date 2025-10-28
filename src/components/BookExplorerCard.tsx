import { Link } from "react-router-dom";
import { Book, Star } from "lucide-react";
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

const BookExplorerCard = ({ id, title, author, rating, cover }: BookExplorerCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        {cover ? (
          <img
            src={cover}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center">
            <Book className="h-16 w-16 text-primary/40" />
          </div>
        )}
      </div>
      
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">by {author}</p>
        
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
          <Badge variant="secondary" className="ml-auto">
            Available
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/book/${id}`} className="w-full">
          <Button className="w-full" variant="default">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookExplorerCard;
