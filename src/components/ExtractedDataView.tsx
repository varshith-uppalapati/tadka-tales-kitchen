import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertTriangle, Edit, Save } from "lucide-react";
import { useState } from "react";

const extractedData = [
  { field: "Invoice Number", value: "INV-2024-0315", confidence: 99.2, editable: false },
  { field: "Invoice Date", value: "March 15, 2024", confidence: 98.5, editable: false },
  { field: "Vendor Name", value: "Acme Corp", confidence: 97.8, editable: false },
  { field: "Total Amount", value: "$1,234.56", confidence: 99.8, editable: false },
  { field: "Tax Amount", value: "$123.45", confidence: 95.2, editable: false },
  { field: "Due Date", value: "April 15, 2024", confidence: 88.5, editable: false },
  { field: "Payment Terms", value: "Net 30", confidence: 92.3, editable: false },
  { field: "PO Number", value: "PO-2024-789", confidence: 85.1, editable: false },
];

const ExtractedDataView = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Extracted Data</h2>
                <p className="text-muted-foreground">
                  Review and validate AI-extracted fields from your documents
                </p>
              </div>
              <Button
                variant={editMode ? "default" : "outline"}
                onClick={() => setEditMode(!editMode)}
              >
                {editMode ? (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Mode
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Document Preview</CardTitle>
                  <CardDescription>Invoice_March_2024.pdf</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center p-8">
                      <div className="text-4xl mb-4">📄</div>
                      <p className="text-sm text-muted-foreground">
                        Document preview would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Extracted Fields</CardTitle>
                  <CardDescription>AI confidence scores and validation status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {extractedData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium">{item.field}</Label>
                        <div className="flex items-center gap-2">
                          {item.confidence > 95 ? (
                            <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              {item.confidence}%
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20 text-xs">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              {item.confidence}%
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Input
                        value={item.value}
                        readOnly={!editMode}
                        className={editMode ? "border-primary" : ""}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Validation Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">High Confidence</span>
                      <span className="font-medium text-success">6 fields</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Medium Confidence</span>
                      <span className="font-medium text-warning">2 fields</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Requires Review</span>
                      <span className="font-medium text-destructive">0 fields</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtractedDataView;
