import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/contexts/SiteContentContext";

const CTASection = () => {
  const { content } = useSiteContent();
  const c = content.cta;

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-2">
              {c.title}
            </h2>
            <p className="text-secondary-foreground/70 text-sm">
              {c.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium hover:bg-primary/90 transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              {c.phone}
            </a>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary px-6 text-sm">
                Contact Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
