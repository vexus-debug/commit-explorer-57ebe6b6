import { useEffect, useRef, useState } from "react";
import { Heart, Stethoscope, Eye, HandHeart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import medicalImg from "@/assets/medical-outreach.jpg";
import meetingImg from "@/assets/outreach-meeting.jpg";
import officeImg from "@/assets/outreach-office.jpg";
import groupImg from "@/assets/outreach-group.jpg";

const steps = [
  {
    icon: Heart,
    label: "The Need",
    title: "Millions Lack Access to Basic Healthcare",
    description:
      "Across rural and suburban Nigeria, communities struggle without basic medical care, vision services, or cancer screenings. Families go without treatment — not by choice, but by circumstance.",
    image: groupImg,
    stat: "70%",
    statLabel: "of rural Nigerians lack access to quality healthcare",
    accent: "primary" as const,
  },
  {
    icon: Stethoscope,
    label: "Our Response",
    title: "Monthly Outreaches That Bring Care to Doorsteps",
    description:
      "Every month, our medical teams travel across six Nigerian states delivering free consultations, malaria treatment, diabetes management, and deworming — meeting people where they are.",
    image: medicalImg,
    stat: "10K+",
    statLabel: "free medical consultations delivered",
    accent: "secondary" as const,
  },
  {
    icon: Eye,
    label: "Restoring Sight",
    title: "Giving the Gift of Vision",
    description:
      "Through comprehensive eye exams and free reading glasses, we restore independence to thousands who had given up on seeing clearly. Every pair of glasses is a new beginning.",
    image: officeImg,
    stat: "8,200+",
    statLabel: "lives transformed through vision care",
    accent: "primary" as const,
  },
  {
    icon: HandHeart,
    label: "Lasting Impact",
    title: "Empowerment Beyond Medicine",
    description:
      "True transformation goes beyond treatment. We provide nutritional support, free clothing, vocational training, and spiritual guidance — building self-sufficiency and restoring dignity.",
    image: meetingImg,
    stat: "19K+",
    statLabel: "total lives touched since 2016",
    accent: "secondary" as const,
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.25) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const StepCard = ({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, 0.15);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline connector */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-12 w-10 h-10 rounded-full items-center justify-center z-10 transition-all duration-700 ${
          visible
            ? step.accent === "secondary"
              ? "bg-secondary scale-100"
              : "bg-primary scale-100"
            : "bg-muted scale-75"
        }`}
      >
        <step.icon
          className={`h-5 w-5 transition-colors duration-700 ${
            visible
              ? step.accent === "secondary"
                ? "text-secondary-foreground"
                : "text-primary-foreground"
              : "text-muted-foreground"
          }`}
        />
      </div>

      <div
        className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Text side */}
        <div className={`${isEven ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3 ${
              step.accent === "secondary"
                ? "text-secondary"
                : "text-primary"
            }`}
          >
            <step.icon className="h-4 w-4 md:hidden" />
            {step.label}
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {step.description}
          </p>
          <div
            className={`inline-flex items-baseline gap-2 rounded-xl px-5 py-3 ${
              step.accent === "secondary"
                ? "bg-secondary/10"
                : "bg-primary/10"
            }`}
          >
            <span
              className={`text-2xl font-bold font-heading ${
                step.accent === "secondary"
                  ? "text-secondary"
                  : "text-primary"
              }`}
            >
              {step.stat}
            </span>
            <span className="text-muted-foreground text-xs">
              {step.statLabel}
            </span>
          </div>
        </div>

        {/* Image side */}
        <div className={`${isEven ? "" : "md:order-1"}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={step.image}
              alt={step.title}
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

const JourneySection = () => {
  return (
    <section className="journey-section py-24 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            The Journey
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
            From Compassion to Transformation
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every act of care is a step in a larger story. Follow our journey —
            from identifying the need to creating lasting change in communities
            across Nigeria.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <StepCard key={step.label} step={step} index={i} />
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-muted-foreground text-sm">
              Be part of the next chapter
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/donate">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-sm font-semibold">
                Donate Now
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-sm"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
