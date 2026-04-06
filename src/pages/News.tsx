import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import medicalImg from "@/assets/medical-outreach.jpg";
import groupImg from "@/assets/outreach-group.jpg";
import pairImg from "@/assets/outreach-pair.jpg";

const stories = [
  {
    title: "Small Acts of Kindness That Create Big Change",
    excerpt: "Through our compassion, Beulah Health Group reaches those who need it most — bringing clean water, education, and opportunity to communities.",
    image: medicalImg,
    date: "March 2026",
  },
  {
    title: "How Compassion Can Transform an Entire Community",
    excerpt: "Discover how our education initiatives empower children to dream and build a better future for their communities.",
    image: groupImg,
    date: "February 2026",
  },
  {
    title: "The Power of Giving: Why Every Donation Matters",
    excerpt: "Our medical outreach projects are helping rural families gain safe, clean water, reducing disease and improving daily life.",
    image: pairImg,
    date: "January 2026",
  },
];

const News = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-section-alt-foreground mb-4">News & Stories</h1>
          <p className="text-section-alt-foreground/70 max-w-2xl mx-auto">
            Stories that shape our mission and inspire lasting change.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.title} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-xs text-secondary font-medium">{story.date}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">{story.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{story.excerpt}</p>
                  <span className="text-primary text-sm font-medium cursor-pointer hover:underline">Continue Reading →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
