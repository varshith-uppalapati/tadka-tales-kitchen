import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Upload, CheckCircle2, ArrowRight } from "lucide-react";

const integrations = [
  {
    name: "Microsoft Excel",
    description: "Export processed data to Excel spreadsheets",
    icon: "📊",
    status: "connected",
    color: "bg-success/10 text-success border-success/20"
  },
  {
    name: "SAP",
    description: "Sync with SAP for enterprise resource planning",
    icon: "🏢",
    status: "available",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "QuickBooks",
    description: "Integrate with QuickBooks for accounting",
    icon: "💰",
    status: "connected",
    color: "bg-success/10 text-success border-success/20"
  },
  {
    name: "Google Sheets",
    description: "Push data directly to Google Sheets",
    icon: "📈",
    status: "available",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Workday",
    description: "Connect with Workday HR management system",
    icon: "👥",
    status: "available",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Salesforce",
    description: "Integrate with Salesforce CRM",
    icon: "☁️",
    status: "connected",
    color: "bg-success/10 text-success border-success/20"
  },
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Integrations & Export</h2>
          <p className="text-muted-foreground">
            Seamlessly connect with your existing HR and Finance systems
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                    {integration.icon}
                  </div>
                  <Badge variant="outline" className={integration.color}>
                    {integration.status === "connected" ? (
                      <>
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Connected
                      </>
                    ) : (
                      "Available"
                    )}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{integration.name}</CardTitle>
                <CardDescription>{integration.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {integration.status === "connected" ? (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      Settings
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" className="w-full">
                    Connect
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl">
                  <Upload className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Custom API Integration</h3>
                  <p className="text-muted-foreground">
                    Need to connect with a different system? We provide REST APIs for custom integrations.
                  </p>
                </div>
              </div>
              <Button size="lg">
                View API Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntegrationsSection;
