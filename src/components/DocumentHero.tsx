import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, PlayCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-document-ai.jpg";

const DocumentHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/20 py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
              <Sparkles className="h-4 w-4" />
              AI-Powered Document Intelligence
            </div>
            
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Automate document processing with
                <span className="bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent"> AI</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
                Transform invoices, employee forms, payroll, and compliance documents into structured data instantly. 
                Save time, reduce errors, and streamline your HR and Finance operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Upload className="h-5 w-5" />
                Upload Document
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">99.2%</span>
                <span className="text-sm text-muted-foreground">Accuracy Rate</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">10K+</span>
                <span className="text-sm text-muted-foreground">Docs Processed Daily</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">85%</span>
                <span className="text-sm text-muted-foreground">Time Saved</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-chart-4/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="AI Document Processing Platform"
              className="relative rounded-2xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentHero;
