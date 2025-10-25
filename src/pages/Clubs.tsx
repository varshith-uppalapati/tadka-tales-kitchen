import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Code, Music, Cpu } from "lucide-react";
import { toast } from "sonner";

const clubs = [
  {
    id: 1,
    name: "Coding Club",
    description: "Learn programming, participate in hackathons, and build amazing projects together.",
    icon: Code,
    color: "text-blue-500",
  },
  {
    id: 2,
    name: "Music Club",
    description: "Express yourself through music. Join our band, learn instruments, and perform at events.",
    icon: Music,
    color: "text-purple-500",
  },
  {
    id: 3,
    name: "Robotics Club",
    description: "Build robots, compete in competitions, and explore the world of automation and AI.",
    icon: Cpu,
    color: "text-green-500",
  },
];

const Clubs = () => {
  const navigate = useNavigate();

  const handleJoin = (clubName: string) => {
    toast.success(`Request to join ${clubName} submitted!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container flex h-16 items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Student Clubs</h1>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => {
            const Icon = club.icon;
            return (
              <Card key={club.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className={`h-16 w-16 mb-4 ${club.color}`} />
                  <CardTitle>{club.name}</CardTitle>
                  <CardDescription>{club.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    onClick={() => handleJoin(club.name)}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Join Club
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
