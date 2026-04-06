import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart, Eye, ShieldCheck, Users, BookOpen, Apple, Award, Target,
  Globe, Lightbulb, HandHeart, CheckCircle, ArrowRight,
} from "lucide-react";
import outreachMeeting from "@/assets/outreach-meeting.jpg";
import outreachGroup from "@/assets/outreach-group.jpg";
import outreachPair from "@/assets/outreach-pair.jpg";
import outreachOffice from "@/assets/outreach-office.jpg";

const timeline = [
  { year: "2016", title: "Founded in Abuja", description: "Beulah World Initiative launched with a vision to bring free healthcare to underserved Nigerian communities." },
  { year: "2018", title: "First Major Outreach", description: "Expanded to Lagos and Ogun State, conducting monthly free medical consultations and welfare distributions." },
  { year: "2020", title: "Cancer Screening Program", description: "Partnered with Covenant University to launch prostate and breast cancer screening across multiple states." },
  { year: "2022", title: "Humanitarian Award", description: "Ms. Chichi M. Ononiwu received the Humanitarian Awards Global recognition for outstanding community impact." },
  { year: "2024", title: "Rebranded to Beulah Health Group", description: "Expanded services to six states, touching over 19,000 lives with comprehensive healthcare and empowerment programs." },
];

const values = [
  { icon: Heart, title: "Compassion", description: "Every action is driven by genuine care for those in need." },
  { icon: Lightbulb, title: "Innovation", description: "Finding creative solutions to deliver healthcare in remote areas." },
  { icon: HandHeart, title: "Dignity", description: "Treating every individual with respect and preserving their self-worth." },
  { icon: Users, title: "Community", description: "Building lasting relationships that empower from within." },
  { icon: Globe, title: "Inclusivity", description: "Serving all people regardless of background, faith, or status." },
  { icon: Target, title: "Accountability", description: "Transparent stewardship of every resource and donation." },
];

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />

      <PageHero
        title="Turning Compassion into Meaningful Impact"
        subtitle="About Us"
        description="Since 2016, Beulah Health Group has been at the forefront of community healthcare in Nigeria — providing free medical services, empowerment, and hope to those who need it most."
        image={outreachGroup}
        ctaLabel="Our Programs"
        ctaLink="/programs"
      />

      {/* Our Story — Alternating Layout */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Story</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6 leading-snug">
                  Born from Faith, Built on Action
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Beulah Health Group (formerly Beulah World Initiative) was founded in 2016 with a singular conviction: healthcare and dignity are fundamental rights, not privileges. What began as small community visits in Abuja has grown into a movement touching over 19,000 lives across six Nigerian states.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Our work spans free medical consultations, cancer screenings, vision restoration, nutritional support, vocational training, and spiritual outreach — delivered monthly by a passionate team of volunteers, medical professionals, and community partners.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  Under the leadership of Ms. Chichi M. Ononiwu — a Humanitarian Awards Global recipient (2022) — we continue to expand our reach, deepen our impact, and build a legacy of compassion across Africa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Registered Non-Profit
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Faith-Based Organization
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Award-Winning Leadership
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={outreachPair} alt="Community engagement" className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]" />
                <img src={outreachOffice} alt="Partnership meeting" className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] mt-8" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission — Full-Width Cards */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">What Drives Us</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">Our Vision & Mission</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-section-alt rounded-3xl p-10 h-full">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-section-alt-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-section-alt-foreground mb-4">Our Vision</h3>
                <p className="text-section-alt-foreground/80 leading-relaxed">
                  A world where every individual in rural and suburban Africa has access to quality healthcare, dignity, and the opportunity to thrive — regardless of their circumstances, location, or social standing.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-card rounded-3xl p-10 border border-border shadow-sm h-full">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide free, accessible healthcare and holistic empowerment to underserved communities through compassionate monthly outreaches, sustainable programs, strategic partnerships, and faith-driven service.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Journey</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                Milestones of Impact
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
                From a small outreach in Abuja to a movement reaching thousands — every year brings us closer to our mission.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 120}>
                <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background z-10 mt-1" />
                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-secondary font-heading text-lg font-bold">{item.year}</span>
                    <h3 className="font-heading text-base font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Foundation</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-section-alt-foreground mt-2">
                Values That Guide Every Step
              </h2>
              <p className="text-section-alt-foreground/60 mt-3 max-w-lg mx-auto text-sm">
                Our work is anchored in principles that ensure lasting, meaningful impact for every community we serve.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="bg-card rounded-2xl p-7 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Leadership</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                The Heart Behind the Mission
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <img src={outreachMeeting} alt="Leadership team" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]" />
                <div className="absolute -bottom-4 -right-4 bg-secondary rounded-2xl px-6 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-secondary-foreground" />
                    <span className="text-secondary-foreground text-sm font-semibold">HAG Awardee 2022</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Ms. Chichi M. Ononiwu</h3>
                <p className="text-secondary font-semibold text-sm mb-4">Visioner / Coordinator</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  A visionary humanitarian and the driving force behind Beulah Health Group. Under her leadership since 2016, the organization has grown from grassroots outreaches to a recognized multi-state operation impacting over 19,000 lives.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  In 2022, she was honored with the Humanitarian Awards Global recognition for her outstanding commitment to community healthcare and social transformation in Nigeria.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Her leadership philosophy is simple: "Healthcare and dignity are fundamental rights, not privileges." This belief drives every program, partnership, and outreach the organization undertakes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Stats Strip */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2016", label: "Year Founded" },
              { value: "19K+", label: "Lives Touched" },
              { value: "6+", label: "States Reached" },
              { value: "5K+", label: "Spiritual Missions" },
            ].map((s) => (
              <ScrollReveal key={s.label}>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-secondary font-heading">{s.value}</div>
                  <div className="text-primary-foreground/60 text-sm mt-1">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Be Part of the Story?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm">
              Whether you want to donate, volunteer, or partner — your contribution matters more than you know.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/donate">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-sm font-semibold">
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-sm">
                  Get Involved
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
