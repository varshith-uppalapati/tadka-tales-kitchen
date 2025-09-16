import { 
  BookOpen, 
  Download, 
  Users, 
  Calendar, 
  Search, 
  MessageCircle,
  Headphones,
  FileText,
  Monitor
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import digitalStudyImage from "@/assets/digital-study.jpg";
import studyDeskImage from "@/assets/study-desk.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Digital Catalog",
      description: "Browse our complete collection of 500,000+ books, journals, and resources",
      color: "text-primary"
    },
    {
      icon: Download,
      title: "E-Book Downloads",
      description: "Access and download digital books for offline reading on any device",
      color: "text-accent"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "AI-powered search to find exactly what you need across all collections",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Join collaborative study sessions and academic discussion groups",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Event Booking",
      description: "Reserve study rooms, attend workshops, and join academic events",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "Research Help",
      description: "Get assistance from librarians and subject matter experts",
      color: "text-secondary"
    }
  ];

  const digitalServices = [
    {
      icon: Monitor,
      title: "Online Reading Room",
      description: "Access rare books and manuscripts in our virtual reading environment"
    },
    {
      icon: Headphones,
      title: "Audio Books",
      description: "Listen to thousands of audiobooks and recorded lectures"
    },
    {
      icon: FileText,
      title: "Research Papers",
      description: "Access latest research publications and academic journals"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Library Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital and physical services designed to support your academic journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                  <span className="text-foreground">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Digital Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Digital Innovation Center</h3>
              <p className="text-muted-foreground text-lg">
                Experience the future of learning with our cutting-edge digital services and virtual resources.
              </p>
            </div>
            
            <div className="space-y-6">
              {digitalServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <service.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <Button size="lg">Explore Digital Services</Button>
              <Button variant="outline" size="lg">Watch Demo</Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={digitalStudyImage}
                alt="Students using digital resources"
                className="rounded-lg shadow-lg"
              />
              <img
                src={studyDeskImage}
                alt="Digital study setup"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;