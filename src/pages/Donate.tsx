import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-section-alt-foreground mb-4">
            Make a Donation
          </h1>
          <p className="text-section-alt-foreground/70 max-w-2xl mx-auto">
            Your generosity changes lives. Every contribution directly supports free healthcare, education, and empowerment for underserved communities.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border text-center">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-6" />
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Support Our Mission</h2>
            <p className="text-muted-foreground mb-8">
              To make a donation or discuss partnership opportunities, please contact us directly. We accept donations via bank transfer and other means.
            </p>
            <div className="space-y-4 text-left bg-muted/50 rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span> beulahworld.initiative@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Partnerships:</span> bwi.partnerships@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span> +234 703 805 7507
              </p>
            </div>
            <a href="mailto:beulahworld.initiative@gmail.com">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3">
                Contact Us to Donate
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
