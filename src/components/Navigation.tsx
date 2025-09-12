import { Search, Menu, User, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-spice rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold">Recipe Hub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Browse Recipes
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Cultural Diets
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Quick Recipes
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Health Recipes
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Quick Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <Button size="sm" variant="ghost" className="text-xs">
                <Heart className="w-4 h-4 mr-1" />
                I'm Sick
              </Button>
              <Button size="sm" variant="ghost" className="text-xs">
                <Clock className="w-4 h-4 mr-1" />
                10-Min
              </Button>
            </div>

            {/* User */}
            <Button size="sm" variant="ghost">
              <User className="w-4 h-4" />
            </Button>

            {/* Mobile Menu */}
            <Button size="sm" variant="ghost" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;