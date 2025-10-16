import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, FileText, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const monthlyData = [
  { month: "Jan", processed: 856, errors: 12 },
  { month: "Feb", processed: 923, errors: 15 },
  { month: "Mar", processed: 1247, errors: 16 },
];

const typeData = [
  { name: "Invoices", value: 542, color: "hsl(var(--chart-1))" },
  { name: "Payslips", value: 398, color: "hsl(var(--chart-2))" },
  { name: "Forms", value: 234, color: "hsl(var(--chart-3))" },
  { name: "Other", value: 73, color: "hsl(var(--chart-4))" },
];

const processingTime = [
  { hour: "00:00", docs: 12 },
  { hour: "04:00", docs: 8 },
  { hour: "08:00", docs: 145 },
  { hour: "12:00", docs: 187 },
  { hour: "16:00", docs: 134 },
  { hour: "20:00", docs: 45 },
];

const AnalyticsDashboard = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Analytics & Insights</h2>
          <p className="text-muted-foreground">
            Track performance metrics and processing trends
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Avg Processing Time</CardDescription>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">2.3s</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-success">
                <TrendingUp className="mr-1 h-3 w-3" />
                12% faster
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Accuracy Rate</CardDescription>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">97.8%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-success">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2.1% increase
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Error Rate</CardDescription>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">1.3%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-destructive">
                <TrendingUp className="mr-1 h-3 w-3 rotate-180" />
                0.2% reduction
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Time Saved</CardDescription>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">142h</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                This month
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Processing Volume</CardTitle>
              <CardDescription>Documents processed per month</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="processed" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="errors" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Types Distribution</CardTitle>
              <CardDescription>Breakdown by document category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={typeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="hsl(var(--primary))"
                    dataKey="value"
                  >
                    {typeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Processing Activity Timeline</CardTitle>
            <CardDescription>Documents processed throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={processingTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="docs" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
