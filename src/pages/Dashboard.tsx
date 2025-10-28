import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Search, Calendar, MessageSquare, Users, MessageCircle, LogOut, BookOpen } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");

    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(storedUser));
    setRole(storedRole || "");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menuItems = [
    { icon: Search, label: "Lost & Found", path: "/lost-found" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: MessageSquare, label: "Feedback", path: "/feedback" },
    { icon: Users, label: "Clubs", path: "/clubs" },
    { icon: BookOpen, label: "Book Explorer", path: "/book-explorer" },
    { icon: MessageCircle, label: "Chatbot", path: "/chatbot" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold">Smart Campus</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </nav>

      <div className="container py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Welcome, {user?.name || "User"}</h2>
          <p className="text-muted-foreground">Role: {role}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-2" />
                    <CardTitle>{item.label}</CardTitle>
                    <CardDescription>
                      {item.label === "Lost & Found" && "Report and find lost items"}
                      {item.label === "Events" && "View and manage campus events"}
                      {item.label === "Feedback" && "Share your feedback"}
                      {item.label === "Clubs" && "Discover student clubs"}
                      {item.label === "Book Explorer" && "Browse programming books"}
                      {item.label === "Chatbot" && "Get instant help"}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
