import img1 from "@/assets/medical-outreach.jpg";
import img2 from "@/assets/outreach-group.jpg";
import img3 from "@/assets/outreach-pair.jpg";
import img4 from "@/assets/outreach-meeting.jpg";
import img5 from "@/assets/outreach-office.jpg";
import { useSiteContent } from "@/contexts/SiteContentContext";

const defaultImages = [
  { src: img1, alt: "Free medical outreach in rural community", caption: "Medical Outreach" },
  { src: img2, alt: "Beulah Health Group team photo", caption: "Our Team" },
  { src: img3, alt: "Community partner meeting", caption: "Partnerships" },
  { src: img4, alt: "Planning session for outreach", caption: "Strategy Meeting" },
  { src: img5, alt: "Office coordination visit", caption: "Coordination" },
];

const GallerySection = () => {
  const { content } = useSiteContent();
  const gs = content.gallerySection;

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">{gs.sectionLabel}</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            {gs.title}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            {gs.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {defaultImages.map((img, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden relative group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary-foreground text-sm font-medium">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
