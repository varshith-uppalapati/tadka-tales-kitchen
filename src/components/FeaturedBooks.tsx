import { TrendingUp, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookCard from "./BookCard";
import booksImage from "@/assets/books-collection.jpg";

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      id: "1",
      title: "Advanced Computer Networks",
      author: "Dr. Rajesh Kumar",
      cover: booksImage,
      rating: 4.8,
      category: "Computer Science",
      availability: "available" as const,
      downloadCount: 1254,
      description: "Comprehensive guide to modern networking protocols and architectures for graduate students."
    },
    {
      id: "2", 
      title: "Principles of Machine Learning",
      author: "Prof. Sarah Chen",
      cover: booksImage,
      rating: 4.9,
      category: "AI & ML",
      availability: "borrowed" as const,
      downloadCount: 2341,
      description: "Essential concepts and practical applications of machine learning algorithms."
    },
    {
      id: "3",
      title: "Digital Signal Processing",
      author: "Dr. Michael Brown",
      cover: booksImage,
      rating: 4.6,
      category: "Engineering",
      availability: "available" as const,
      downloadCount: 987,
      description: "Fundamental theory and implementation of digital signal processing techniques."
    },
    {
      id: "4",
      title: "Data Structures & Algorithms",
      author: "Prof. Lisa Wang",
      cover: booksImage,
      rating: 4.7,
      category: "Programming",
      availability: "reserved" as const,
      downloadCount: 3456,
      description: "Complete reference for data structures and algorithmic problem solving."
    }
  ];

  const trendingBooks = [
    {
      title: "Quantum Computing Fundamentals",
      author: "Dr. James Wilson",
      downloads: "2.3K"
    },
    {
      title: "Blockchain Technology",
      author: "Prof. Anna Tesla",
      downloads: "1.8K"
    },
    {
      title: "IoT Systems Design",
      author: "Dr. Robert Kim",
      downloads: "1.5K"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Featured Books */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Featured Books</h2>
                <p className="text-muted-foreground mt-2">Most popular and recommended resources</p>
              </div>
              <Button variant="outline">View All Books</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Books */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Trending Now</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingBooks.map((book, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-foreground line-clamp-2">{book.title}</h4>
                      <p className="text-xs text-muted-foreground">{book.author}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-green-500">{book.downloads}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Library Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">12,450</div>
                  <div className="text-sm text-muted-foreground">Books borrowed this month</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent">4.8</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>Average rating</span>
                  </div>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">89%</div>
                  <div className="text-sm text-muted-foreground">On-time returns</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;