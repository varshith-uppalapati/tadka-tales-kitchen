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
    <div className="min-h-screen book-gradient-bg">
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-primary/90 to-indigo-600 border-b-4 border-primary/30 sticky top-0 z-10 shadow-2xl backdrop-blur-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <BookOpen className="h-7 w-7 text-white drop-shadow-lg" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                    📚 Book Explorer
                  </h1>
                  <p className="text-white/80 text-sm font-medium">Discover Your Next Great Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="mb-12 text-center space-y-4">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl backdrop-blur-sm border border-primary/20 shadow-xl animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              Programming Books Collection
            </h2>
            <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
              ✨ Discover amazing books from our curated collection ✨
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm font-semibold">
            <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <span>{books.length} Books Available</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span>All Free to Borrow</span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <Loader2 className="h-16 w-16 text-primary animate-spin mb-6 relative z-10" />
            </div>
            <p className="text-lg font-semibold text-foreground animate-pulse">Loading magical books...</p>
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <div key={book.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <BookExplorerCard
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  rating={book.rating}
                  cover={book.cover}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <BookOpen className="h-24 w-24 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground font-semibold">No books found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookExplorer;
