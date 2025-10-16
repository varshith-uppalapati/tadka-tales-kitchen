import DocumentHeader from "@/components/DocumentHeader";
import DocumentHero from "@/components/DocumentHero";
import DocumentUpload from "@/components/DocumentUpload";
import ProcessingDashboard from "@/components/ProcessingDashboard";
import ExtractedDataView from "@/components/ExtractedDataView";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import IntegrationsSection from "@/components/IntegrationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DocumentHeader />
      <DocumentHero />
      <DocumentUpload />
      <ProcessingDashboard />
      <ExtractedDataView />
      <AnalyticsDashboard />
      <IntegrationsSection />
    </div>
  );
};

export default Index;
