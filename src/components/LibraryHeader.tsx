import { Search, User, Menu, Bell, BookOpen, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LibraryHeader = () => {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">KL University</h1>
                <p className="text-sm text-muted-foreground">Digital Library</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Browse Books
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                E-Resources
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Research
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Events
              </Button>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search books, authors, or topics..."
                className="pl-10 bg-background"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpen className="mr-2 h-4 w-4" />
                  My Books
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Study Groups
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Reading Stats
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LibraryHeader;