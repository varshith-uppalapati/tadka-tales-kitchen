import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, MessageSquare, Users, Search } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Smart Campus</h1>
          </div>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container py-20">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tight">
            Smart Campus Ecosystem
          </h1>
          <p className="text-xl text-muted-foreground">
            Your one-stop hub for all campus activities. Manage events, find lost items, 
            share feedback, and connect with clubs - all in one place.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <Search className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Lost & Found</h3>
              <p className="text-sm text-muted-foreground">Report and find lost items quickly</p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <Calendar className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Events</h3>
              <p className="text-sm text-muted-foreground">Stay updated with campus events</p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <MessageSquare className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Feedback</h3>
              <p className="text-sm text-muted-foreground">Share your thoughts and suggestions</p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Clubs</h3>
              <p className="text-sm text-muted-foreground">Discover and join student clubs</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <Link to="/register">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
