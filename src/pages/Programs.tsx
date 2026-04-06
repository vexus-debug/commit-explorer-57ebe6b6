import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart, Eye, ShieldCheck, Apple, Shirt, BookOpen,
  MapPin, Users, ArrowRight, CheckCircle, Stethoscope,
} from "lucide-react";
import medicalImg from "@/assets/medical-outreach.jpg";
import meetingImg from "@/assets/outreach-meeting.jpg";
import officeImg from "@/assets/outreach-office.jpg";
import groupImg from "@/assets/outreach-group.jpg";
import pairImg from "@/assets/outreach-pair.jpg";

const programs = [
  {
    icon: Stethoscope,
    title: "Free Medical Care",
    description: "Monthly community outreaches providing free general consultations, deworming, treatment for malaria, diabetes, hypertension, and other common ailments. Our mobile medical teams travel to the most remote areas where healthcare is simply unavailable.",
    image: medicalImg,
    stats: [
      { value: "10K+", label: "Consultations" },
      { value: "Monthly", label: "Frequency" },
    ],
    highlights: [
      "General health screenings & diagnostics",
      "Malaria, diabetes & hypertension treatment",
      "Deworming for children and adults",
      "Free medication distribution",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cancer Screening & Awareness",
    description: "Prostate and breast cancer awareness campaigns and free screenings delivered in partnership with leading Nigerian universities and hospitals. Early detection saves lives — and we're committed to making it accessible to everyone.",
    image: meetingImg,
    stats: [
      { value: "5,500+", label: "People Screened" },
      { value: "3+", label: "Partner Institutions" },
    ],
    highlights: [
      "Breast cancer awareness & examination",
      "Prostate cancer screening for men",
      "Partnership with Covenant University",
      "Health education & prevention workshops",
    ],
  },
  {
    icon: Eye,
    title: "Vision Restoration Program",
    description: "Comprehensive eye examinations, specialist treatments, and distribution of free reading glasses. For many, this is their first eye exam ever — and the moment they receive glasses is often life-changing.",
    image: officeImg,
    stats: [
      { value: "8,200+", label: "Lives Transformed" },
      { value: "3K+", label: "Free Glasses" },
    ],
    highlights: [
      "Comprehensive eye examinations",
      "Specialist referral & treatment",
      "Free reading glasses distribution",
      "Cataract & glaucoma awareness",
    ],
  },
  {
    icon: Apple,
    title: "Nutritional Support",
    description: "Monthly distribution of raw food items, groceries, and essential supplies to low-income families facing food insecurity. Proper nutrition is the foundation of good health, and no family should go without.",
    image: pairImg,
    stats: [
      { value: "15K+", label: "Meals Provided" },
      { value: "6+", label: "States Covered" },
    ],
    highlights: [
      "Raw food & grocery distribution",
      "Nutritional education for families",
      "Focus on children & elderly",
      "Sustainable food programs",
    ],
  },
  {
    icon: Shirt,
    title: "Community Welfare & Empowerment",
    description: "Free clothing, household essentials, and vocational skill training designed to build self-sufficiency and restore dignity. We believe true transformation goes beyond medical care — it requires holistic empowerment.",
    image: groupImg,
    stats: [
      { value: "12,400+", label: "Beneficiaries" },
      { value: "100+", label: "Skills Trained" },
    ],
    highlights: [
      "Free clothing & household items",
      "Vocational skill acquisition training",
      "Micro-enterprise mentorship",
      "Dignity restoration programs",
    ],
  },
  {
    icon: BookOpen,
    title: "Spiritual Outreach & Counseling",
    description: "Faith-based counseling, spiritual guidance, and community missions. Over 5,000 individuals have been reached through dedicated spiritual outreaches that bring hope, healing, and purpose.",
    image: meetingImg,
    stats: [
      { value: "5K+", label: "Individuals Reached" },
      { value: "200+", label: "Counseling Sessions" },
    ],
    highlights: [
      "One-on-one spiritual counseling",
      "Community prayer & fellowship",
      "Youth mentorship programs",
      "Faith & wellness integration",
    ],
  },
];

const locations = [
  { state: "Lagos", areas: ["Idimu", "Ogba", "Ejigbo", "Gbagada"] },
  { state: "Ogun State", areas: ["Ota", "Atan"] },
  { state: "Abuja (FCT)", areas: ["Gwarinpa (HQ)", "Surrounding Areas"] },
  { state: "Edo State", areas: ["Benin City"] },
  { state: "Rivers State", areas: ["Eleme"] },
  { state: "Expanding", areas: ["New states each year"] },
];

const Programs = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />

      <PageHero
        title="Programs That Transform Lives"
        subtitle="Our Programs"
        description="From free medical care to vocational training, every program is designed to uplift, empower, and restore dignity to underserved communities across Nigeria."
        image={medicalImg}
        ctaLabel="Get Involved"
        ctaLink="/get-involved"
      />

      {/* Programs Overview Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">What We Do</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                Six Pillars of Community Impact
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Each program addresses a critical need in underserved communities. Together, they form a comprehensive ecosystem of care, empowerment, and lasting transformation.
              </p>
            </div>
          </ScrollReveal>

          {/* Program Detail Cards — Alternating Layouts */}
          <div className="space-y-24">
            {programs.map((program, i) => (
              <ScrollReveal key={program.title}>
                <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        {program.stats.map((s) => (
                          <div key={s.label} className="bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2">
                            <div className="text-lg font-bold text-primary font-heading">{s.value}</div>
                            <div className="text-muted-foreground text-xs">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                        <program.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{program.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {program.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground text-sm">{h}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/donate">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 text-sm">
                        Support This Program
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Impact — Map-style */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Areas of Impact</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mt-2">
                Where We Serve
              </h2>
              <p className="text-primary-foreground/60 mt-3 max-w-lg mx-auto text-sm">
                Our monthly outreaches span across multiple states in Nigeria, reaching communities that need it most.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.state} delay={i * 80}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:border-secondary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <h3 className="font-heading text-base font-semibold text-primary-foreground">{loc.state}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {loc.areas.map((area) => (
                      <span key={area} className="bg-primary-foreground/10 text-primary-foreground/70 text-xs px-3 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Process</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                How Your Donation Creates Impact
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "You Donate", description: "Choose a program or give to our general fund. Every naira and dollar goes directly to the field." },
              { step: "02", title: "We Plan", description: "Our team identifies communities with the greatest need and organizes monthly outreach schedules." },
              { step: "03", title: "We Deliver", description: "Medical teams, volunteers, and supplies arrive on-site to provide free care and resources." },
              { step: "04", title: "Lives Change", description: "Families receive treatment, children see clearly, communities are empowered to thrive." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="text-center relative">
                  <div className="text-5xl font-heading font-bold text-secondary/20 mb-3">{item.step}</div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-2">
                  Every gift changes a life.
                </h2>
                <p className="text-secondary-foreground/70 text-sm">
                  Support any of our six programs and see the tangible difference your contribution makes.
                </p>
              </div>
              <Link to="/donate">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-sm font-semibold">
                  Donate Now
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

export default Programs;
