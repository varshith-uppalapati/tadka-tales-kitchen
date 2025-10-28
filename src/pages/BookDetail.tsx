import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, BookOpen, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book } from "@/data/books";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/subjects/programming.json?limit=12"
        );
        const data = await response.json();

        const formattedBooks: Book[] = data.works.map((item: any, index: number) => ({
          id: index + 1,
          title: item.title,
          author:
            item.authors && item.authors.length > 0
              ? item.authors[0].name
              : "Unknown Author",
          description: item.subject
            ? item.subject.join(", ")
            : "No description available.",
          rating: parseFloat((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
          cover: item.cover_id
            ? `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`
            : undefined,
        }));

        const foundBook = formattedBooks.find((b) => b.id === parseInt(id || "0"));
        setBook(foundBook || null);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Book not found!</h2>
            <p className="text-muted-foreground mb-6">
              The book you're looking for doesn't exist in our collection.
            </p>
            <Link to="/book-explorer">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Book List
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/book-explorer">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Book List
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="md:flex">
            {/* Book Cover */}
            <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/5">
              {book.cover ? (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-96 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-primary/40" />
                </div>
              )}
            </div>

            {/* Book Details */}
            <div className="md:w-2/3">
              <CardHeader className="space-y-4">
                <div>
                  <Badge className="mb-3">Programming</Badge>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {book.title}
                  </h1>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{book.author}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold text-foreground">
                    {book.rating}
                  </span>
                  <span className="text-muted-foreground">/ 5.0</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1">Borrow Book</Button>
                  <Button variant="outline" className="flex-1">
                    Add to Wishlist
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default BookDetail;
