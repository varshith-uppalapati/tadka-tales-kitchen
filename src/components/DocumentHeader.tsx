import { Button } from "@/components/ui/button";
import { Upload, Menu, BarChart3, FileText, Settings } from "lucide-react";

const DocumentHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">DocAI</span>
              <span className="text-xs text-muted-foreground">Intelligent Processing</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#documents" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Documents
            </a>
            <a href="#analytics" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="#integrations" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Integrations
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <BarChart3 className="mr-2 h-4 w-4" />
            Reports
          </Button>
          <Button size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DocumentHeader;
