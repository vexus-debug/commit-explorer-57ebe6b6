import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { X } from "lucide-react";

import img1 from "@/assets/medical-outreach.jpg";
import img2 from "@/assets/outreach-group.jpg";
import img3 from "@/assets/outreach-pair.jpg";
import img4 from "@/assets/outreach-meeting.jpg";
import img5 from "@/assets/outreach-office.jpg";
import img6 from "@/assets/outreach-community.jpg";
import img7 from "@/assets/outreach-doctor-testing.jpg";
import img8 from "@/assets/outreach-consultation.jpg";
import img9 from "@/assets/outreach-doctor-care.jpg";
import img10 from "@/assets/outreach-fieldwork.jpg";
import img11 from "@/assets/outreach-pharmacy.jpg";
import img12 from "@/assets/outreach-bp-check.jpg";
import img13 from "@/assets/outreach-dispensing.jpg";
import img14 from "@/assets/outreach-nurse.jpg";
import img15 from "@/assets/outreach-handshake.jpg";

const categories = ["All", "Medical Care", "Community", "Team in Action"] as const;

type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: Category[];
}

const allImages: GalleryImage[] = [
  { src: img1, alt: "Free medical outreach in rural community", caption: "Medical Outreach — Rural Nigeria", category: ["Medical Care", "Community"] },
  { src: img6, alt: "Community members gathered for health talk", caption: "Health Awareness Talk", category: ["Community"] },
  { src: img7, alt: "Doctor performing blood test during outreach", caption: "Blood Sugar Testing", category: ["Medical Care"] },
  { src: img8, alt: "Doctor consulting with patient outdoors", caption: "Field Consultation", category: ["Medical Care"] },
  { src: img9, alt: "Doctor attending to patient at medical camp", caption: "Patient Care at Camp", category: ["Medical Care", "Team in Action"] },
  { src: img14, alt: "Nurse taking blood pressure reading", caption: "Nursing Care — BP Monitoring", category: ["Medical Care", "Team in Action"] },
  { src: img10, alt: "Medical professional writing prescription in field", caption: "Prescription in the Field", category: ["Medical Care", "Team in Action"] },
  { src: img15, alt: "Healthcare worker examining patient's hand", caption: "Hands-On Care", category: ["Medical Care"] },
  { src: img12, alt: "Blood pressure check during community outreach", caption: "Blood Pressure Screening", category: ["Medical Care", "Community"] },
  { src: img11, alt: "Pharmacist dispensing medication at outreach", caption: "Medicine Dispensing", category: ["Medical Care", "Team in Action"] },
  { src: img13, alt: "Team member organizing medication supply", caption: "Pharmacy Supply Station", category: ["Team in Action"] },
  { src: img2, alt: "Beulah Health Group team photo", caption: "Our Dedicated Team", category: ["Team in Action", "Community"] },
  { src: img3, alt: "Team members in discussion", caption: "Partnership Discussion", category: ["Team in Action"] },
  { src: img4, alt: "Planning session for outreach", caption: "Strategy & Planning", category: ["Team in Action"] },
  { src: img5, alt: "Office coordination", caption: "Coordination Visit", category: ["Team in Action"] },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? allImages
    : allImages.filter((img) => img.category.includes(activeFilter as Category));

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <PageHero
        title="Our Gallery"
        subtitle="Gallery"
        description="See Beulah Health Group in action — delivering free healthcare, hope, and compassion to communities across Nigeria."
        image={img6}
      />

      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={img.caption + i}
                className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
                onClick={() => setLightboxIndex(allImages.indexOf(img))}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-primary-foreground text-sm font-semibold">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-primary-foreground text-center mt-3 text-sm font-medium">
              {allImages[lightboxIndex].caption}
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <button
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm px-4 py-1 rounded-full border border-primary-foreground/20"
                onClick={() => setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : allImages.length - 1)}
              >
                ← Previous
              </button>
              <button
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm px-4 py-1 rounded-full border border-primary-foreground/20"
                onClick={() => setLightboxIndex(lightboxIndex < allImages.length - 1 ? lightboxIndex + 1 : 0)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
