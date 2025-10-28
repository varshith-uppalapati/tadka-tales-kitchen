import { useState, useEffect } from "react";
import { ArrowLeft, BookOpen, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import BookExplorerCard from "@/components/BookExplorerCard";
import { Button } from "@/components/ui/button";
import { Book } from "@/data/books";

const BookExplorer = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
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
            ? item.subject.slice(0, 5).join(", ")
            : "No description available.",
          rating: parseFloat((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
          cover: item.cover_id
            ? `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`
            : undefined,
        }));

        setBooks(formattedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">
                  📚 Book Explorer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Programming Books Collection
          </h2>
          <p className="text-muted-foreground">
            Discover amazing books from our curated collection
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Loading books...</p>
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookExplorerCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                rating={book.rating}
                cover={book.cover}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No books found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookExplorer;
