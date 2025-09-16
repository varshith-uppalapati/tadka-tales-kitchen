import { Search, BookOpen, Users, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/university-library-hero.jpg";

const LibraryHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover
                <span className="text-primary block">Knowledge</span>
                Without Limits
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Access over 500,000 books, journals, and digital resources. 
                Your gateway to academic excellence and lifelong learning.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search our entire collection..."
                  className="pl-10 h-12 bg-card/90 backdrop-blur-sm border-primary/20"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                Search
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="bg-card/80 backdrop-blur-sm">
                Browse Catalog
              </Button>
              <Button variant="outline" className="bg-card/80 backdrop-blur-sm">
                E-Books
              </Button>
              <Button variant="outline" className="bg-card/80 backdrop-blur-sm">
                Research Journals
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card/90 backdrop-blur-sm hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">500K+</h3>
                <p className="text-muted-foreground">Books & Resources</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/90 backdrop-blur-sm hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">25K+</h3>
                <p className="text-muted-foreground">Active Users</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/90 backdrop-blur-sm hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">95%</h3>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/90 backdrop-blur-sm hover:bg-card transition-colors">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">24/7</h3>
                <p className="text-muted-foreground">Digital Access</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryHero;