import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, Send, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Feedback {
  _id: string;
  message: string;
  category: string;
  createdAt: string;
  user?: { name: string };
}

const Feedback = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const role = localStorage.getItem("role");

  const fetchFeedbacks = async () => {
    if (role === "Admin" || role === "Faculty") {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://smart-campus-backend.onrender.com/api/feedback", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        toast.error("Failed to load feedback");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://smart-campus-backend.onrender.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ message, category }),
      });

      if (response.ok) {
        toast.success("Feedback submitted successfully!");
        setMessage("");
        setCategory("");
        if (role === "Admin" || role === "Faculty") {
          fetchFeedbacks();
        }
      } else {
        toast.error("Failed to submit feedback");
      }
    } catch (error) {
      toast.error("Network error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container flex h-16 items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Feedback</h1>
        </div>
      </div>

      <div className="container py-8 max-w-4xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Submit Feedback</CardTitle>
            <CardDescription>Share your thoughts and suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Academics">Academics</SelectItem>
                    <SelectItem value="Facilities">Facilities</SelectItem>
                    <SelectItem value="General">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" disabled={submitting}>
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {(role === "Admin" || role === "Faculty") && (
          <div>
            <h2 className="text-2xl font-bold mb-4">All Feedback</h2>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="space-y-4">
                {feedbacks.map((feedback) => (
                  <Card key={feedback._id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{feedback.user?.name || "Anonymous"}</CardTitle>
                          <CardDescription>
                            {new Date(feedback.createdAt).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <Badge>{feedback.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{feedback.message}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
