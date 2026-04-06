import { useEffect } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useSiteContent } from "@/contexts/SiteContentContext";
import {
  Settings, Home, Info, BookOpen, Image, Phone, Heart,
  Users, Newspaper, LayoutDashboard, LogOut, RotateCcw, ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Global Settings", path: "/admin/global", icon: Settings },
  { label: "Home Page", path: "/admin/home", icon: Home },
  { label: "About Page", path: "/admin/about", icon: Info },
  { label: "Programs Page", path: "/admin/programs", icon: BookOpen },
  { label: "Gallery", path: "/admin/gallery", icon: Image },
  { label: "Contact Page", path: "/admin/contact", icon: Phone },
  { label: "Donate Page", path: "/admin/donate", icon: Heart },
  { label: "Get Involved", path: "/admin/get-involved", icon: Users },
  { label: "News Page", path: "/admin/news", icon: Newspaper },
];

const AdminLayout = () => {
  const { isAdmin, setIsAdmin, resetContent } = useSiteContent();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAdmin) navigate("/admin/login");
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="p-4 border-b border-border">
          <Link to="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Settings className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-base font-bold text-foreground">Admin Panel</span>
          </Link>
        </div>

        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-0.5 px-2">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        <div className="p-3 border-t border-border space-y-2">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="w-full justify-start gap-2 text-xs">
              <ExternalLink className="h-3.5 w-3.5" />
              View Website
            </Button>
          </a>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 text-xs"
            onClick={() => {
              if (confirm("Reset all content to defaults? This cannot be undone.")) {
                resetContent();
              }
            }}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset All Content
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 text-xs text-destructive hover:text-destructive"
            onClick={() => {
              setIsAdmin(false);
              navigate("/admin/login");
            }}
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        <div className="p-6 max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
