import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/contexts/SiteContentContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { content } = useSiteContent();

  return (
    <nav className="bg-navbar shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-navbar-foreground">
            {content.siteName}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {content.navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary font-semibold"
                  : "text-navbar-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/donate">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Donate Now
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-navbar-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navbar border-t border-navbar-foreground/10 px-4 pb-4">
          {content.navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-navbar-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              Donate Now
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
