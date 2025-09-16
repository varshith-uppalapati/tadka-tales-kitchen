import { 
  Clock, 
  Calendar, 
  BookOpen, 
  Users, 
  FileSearch,
  RefreshCw,
  MapPin,
  Phone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const QuickActions = () => {
  const currentBorrowedBooks = [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      dueDate: "Nov 25, 2024",
      daysLeft: 5,
      status: "due-soon"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin", 
      dueDate: "Dec 2, 2024",
      daysLeft: 12,
      status: "active"
    },
    {
      title: "Design Patterns",
      author: "Gang of Four",
      dueDate: "Dec 8, 2024", 
      daysLeft: 18,
      status: "active"
    }
  ];

  const quickActionButtons = [
    {
      icon: BookOpen,
      title: "Renew Books",
      description: "Extend your borrowing period",
      color: "bg-primary",
      action: "renew"
    },
    {
      icon: Calendar,
      title: "Reserve Room",
      description: "Book a study space",
      color: "bg-accent",
      action: "reserve"
    },
    {
      icon: FileSearch,
      title: "Research Help", 
      description: "Get librarian assistance",
      color: "bg-secondary",
      action: "help"
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Join or create groups",
      color: "bg-primary",
      action: "groups"
    }
  ];

  const upcomingEvents = [
    {
      title: "Research Workshop",
      date: "Nov 22",
      time: "2:00 PM",
      location: "Main Hall"
    },
    {
      title: "Book Club Meeting",
      date: "Nov 24", 
      time: "4:00 PM",
      location: "Reading Room 3"
    },
    {
      title: "Digital Resources Training",
      date: "Nov 26",
      time: "10:00 AM", 
      location: "Computer Lab"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "due-soon": return "bg-yellow-500";
      case "overdue": return "bg-red-500";
      default: return "bg-green-500";
    }
  };

  const getStatusText = (status: string, daysLeft: number) => {
    if (status === "due-soon") return `Due in ${daysLeft} days`;
    if (status === "overdue") return "Overdue";
    return `${daysLeft} days left`;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Borrowed Books */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>My Borrowed Books</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentBorrowedBooks.map((book, index) => (
                <div key={index} className="flex items-start justify-between p-3 bg-background rounded-lg">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-foreground line-clamp-1">{book.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{book.author}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={`text-xs ${book.status === 'due-soon' ? 'border-yellow-500 text-yellow-600' : 'border-green-500 text-green-600'}`}>
                        {getStatusText(book.status, book.daysLeft)}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Button variant="ghost" size="sm" className="text-xs h-8">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Renew
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full" size="sm">
                View All Books
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {quickActionButtons.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-muted/50"
                  >
                    <action.icon className={`h-6 w-6 text-primary`} />
                    <div className="text-center">
                      <div className="font-medium text-xs">{action.title}</div>
                      <div className="text-xs text-muted-foreground">{action.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <span>Upcoming Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-background rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="bg-primary text-primary-foreground text-xs font-bold rounded-lg w-12 h-12 flex flex-col items-center justify-center">
                    <div className="text-xs">{event.date.split(' ')[0]}</div>
                    <div className="text-xs">{event.date.split(' ')[1]}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-foreground">{event.title}</h4>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" size="sm">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Phone className="h-6 w-6 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Need Help?</h4>
                <p className="text-sm text-muted-foreground">Call us at +91 12345 67890</p>
              </div>
              <div className="space-y-2">
                <Clock className="h-6 w-6 text-accent mx-auto" />
                <h4 className="font-semibold text-foreground">Library Hours</h4>
                <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-10PM<br />Weekends: 9AM-8PM</p>
              </div>
              <div className="space-y-2">
                <MapPin className="h-6 w-6 text-secondary mx-auto" />
                <h4 className="font-semibold text-foreground">Visit Us</h4>
                <p className="text-sm text-muted-foreground">Central Library Building<br />KL University Campus</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickActions;