import { Link } from "react-router-dom";
import { useSiteContent } from "@/contexts/SiteContentContext";
import {
  Settings, Home, Info, BookOpen, Image, Phone, Heart,
  Users, Newspaper, ArrowRight,
} from "lucide-react";

const sections = [
  { label: "Global Settings", description: "Site name, logo, topbar, navbar, footer", path: "/admin/global", icon: Settings },
  { label: "Home Page", description: "Hero, mission, journey, impact, gallery, testimonials, FAQ, CTA", path: "/admin/home", icon: Home },
  { label: "About Page", description: "Story, vision, mission, timeline, values, leadership", path: "/admin/about", icon: Info },
  { label: "Programs Page", description: "Programs, locations, process steps", path: "/admin/programs", icon: BookOpen },
  { label: "Gallery", description: "Add, remove, edit gallery images and categories", path: "/admin/gallery", icon: Image },
  { label: "Contact Page", description: "Contact methods, form, social links, FAQ", path: "/admin/contact", icon: Phone },
  { label: "Donate Page", description: "Donation content and contact info", path: "/admin/donate", icon: Heart },
  { label: "Get Involved", description: "Volunteer roles, partnerships, events", path: "/admin/get-involved", icon: Users },
  { label: "News Page", description: "News stories and articles", path: "/admin/news", icon: Newspaper },
];

const AdminDashboard = () => {
  const { content } = useSiteContent();

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-foreground">Welcome to the Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage every section of <span className="font-semibold text-foreground">{content.siteName}</span>
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="bg-card rounded-xl p-5 border border-border hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <section.icon className="h-5 w-5 text-primary" />
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-1">{section.label}</h3>
            <p className="text-muted-foreground text-xs">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
