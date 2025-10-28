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
    <div className="min-h-screen book-gradient-bg">
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-primary/90 to-indigo-600 border-b-4 border-primary/30 sticky top-0 z-10 shadow-2xl backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/book-explorer">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 hover:text-white font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ← Back to Book List
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl border-2 border-primary/20 animate-fade-in">
          <div className="md:flex">
            {/* Book Cover */}
            <div className="md:w-2/5 relative">
              {book.cover ? (
                <div className="relative h-full min-h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20" />
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow" />
                      <span className="text-white font-bold text-lg">{book.rating}</span>
                      <span className="text-white/80 text-sm">/ 5.0</span>
                      <span className="ml-auto text-white/90 text-xs font-semibold">⭐ Highly Rated</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-[500px] flex items-center justify-center book-gradient-1 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
                  </div>
                  <BookOpen className="h-32 w-32 text-white drop-shadow-2xl relative z-10" />
                </div>
              )}
            </div>

            {/* Book Details */}
            <div className="md:w-3/5">
              <CardHeader className="space-y-6 bg-gradient-to-br from-card via-card to-accent/10 p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className="text-sm px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 border-0 shadow-lg">
                      📚 Programming
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30">
                      Available Now
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                    {book.title}
                  </h1>
                  
                  <div className="flex items-center space-x-3 text-lg">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">By {book.author}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 rounded-xl border border-yellow-400/20">
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 ${
                          star <= Math.floor(book.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        } drop-shadow`}
                      />
                    ))}
                  </div>
                  <div className="border-l-2 border-yellow-400/30 pl-4">
                    <span className="text-3xl font-bold text-foreground">
                      {book.rating}
                    </span>
                    <span className="text-muted-foreground ml-1">/ 5.0</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 p-8 bg-gradient-to-br from-card via-card to-accent/5">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    📖 Book Description
                  </h3>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <p className="text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button className="flex-1 h-12 font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary/90">
                    📚 Borrow Book
                  </Button>
                  <Button variant="outline" className="flex-1 h-12 font-bold text-lg border-2 hover:bg-accent/50 transition-all duration-300">
                    ❤️ Add to Wishlist
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
                    <p className="text-2xl font-bold text-foreground">12+</p>
                    <p className="text-sm text-muted-foreground">Reviews</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
                    <p className="text-2xl font-bold text-foreground">5</p>
                    <p className="text-sm text-muted-foreground">Available</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg border border-purple-500/20">
                    <p className="text-2xl font-bold text-foreground">2024</p>
                    <p className="text-sm text-muted-foreground">Edition</p>
                  </div>
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
