import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import libraryExteriorImage from "@/assets/library-exterior.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">KL University</h3>
                <p className="text-sm text-background/80">Digital Library</p>
              </div>
            </div>
            <p className="text-background/80 text-sm">
              Empowering minds through knowledge. Access to over 500,000 books, 
              journals, and digital resources for academic excellence.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Browse Catalog</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">E-Books & Journals</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Research Databases</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Study Rooms</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Events & Workshops</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Research Help</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Inter-library Loans</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Document Delivery</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Citation Help</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Thesis Support</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Digital Archives</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Print Services</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">KL University Campus, Vijayawada</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">library@kluniversity.in</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Library Hours & Image */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Library Hours</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-background">Monday - Friday</p>
                  <p className="text-background/80">8:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-background">Saturday - Sunday</p>
                  <p className="text-background/80">9:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-background">24/7 Digital Access</p>
                  <p className="text-background/80">Online resources always available</p>
                </div>
                <div>
                  <p className="font-medium text-background">Emergency Contact</p>
                  <p className="text-background/80">+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={libraryExteriorImage}
                alt="KL University Library"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-background/80 text-sm">
            © 2024 KL University Digital Library. All rights reserved. | 
            <a href="#" className="text-primary hover:underline ml-1">Privacy Policy</a> | 
            <a href="#" className="text-primary hover:underline ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;