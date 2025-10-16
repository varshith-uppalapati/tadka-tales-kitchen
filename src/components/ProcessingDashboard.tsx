import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Clock, CheckCircle2, XCircle, AlertTriangle, Eye, Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const documents = [
  {
    id: "DOC-001",
    name: "Invoice_March_2024.pdf",
    type: "Invoice",
    status: "completed",
    confidence: 98.5,
    uploadedAt: "2024-03-15 10:30",
    processedAt: "2024-03-15 10:31",
  },
  {
    id: "DOC-002",
    name: "Payslip_Employee_Johnson.pdf",
    type: "Payslip",
    status: "processing",
    confidence: 0,
    uploadedAt: "2024-03-15 11:15",
    processedAt: "-",
  },
  {
    id: "DOC-003",
    name: "HR_Form_NewHire_2024.pdf",
    type: "Form",
    status: "completed",
    confidence: 95.2,
    uploadedAt: "2024-03-15 09:45",
    processedAt: "2024-03-15 09:47",
  },
  {
    id: "DOC-004",
    name: "Invoice_Vendor_XYZ.pdf",
    type: "Invoice",
    status: "error",
    confidence: 0,
    uploadedAt: "2024-03-15 08:20",
    processedAt: "-",
  },
  {
    id: "DOC-005",
    name: "Expense_Report_Q1.xlsx",
    type: "Other",
    status: "pending",
    confidence: 0,
    uploadedAt: "2024-03-15 12:00",
    processedAt: "-",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return (
        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Completed
        </Badge>
      );
    case "processing":
      return (
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          <Clock className="h-3 w-3 mr-1" />
          Processing
        </Badge>
      );
    case "error":
      return (
        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
          <XCircle className="h-3 w-3 mr-1" />
          Error
        </Badge>
      );
    case "pending":
      return (
        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Pending
        </Badge>
      );
    default:
      return null;
  }
};

const ProcessingDashboard = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Processing Dashboard</h2>
          <p className="text-muted-foreground">Monitor and manage your document processing workflow</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Documents</CardDescription>
              <CardTitle className="text-3xl">1,247</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Completed</CardDescription>
              <CardTitle className="text-3xl text-success">1,189</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={95.3} className="h-2" />
              <div className="text-sm text-muted-foreground mt-2">
                95.3% success rate
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Processing</CardDescription>
              <CardTitle className="text-3xl text-primary">42</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={34} className="h-2" />
              <div className="text-sm text-muted-foreground mt-2">
                Est. 15 min remaining
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Errors</CardDescription>
              <CardTitle className="text-3xl text-destructive">16</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Requires manual review
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
            <CardDescription>View and manage processed documents</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Confidence</TableHead>
                  <TableHead>Uploaded</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="truncate max-w-[200px]">{doc.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{doc.type}</Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(doc.status)}</TableCell>
                    <TableCell>
                      {doc.confidence > 0 ? (
                        <span className={doc.confidence > 95 ? "text-success" : "text-warning"}>
                          {doc.confidence}%
                        </span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {doc.uploadedAt}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProcessingDashboard;
