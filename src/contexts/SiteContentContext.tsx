import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// ─── Default content matching all hardcoded site data ───

export interface SiteStat {
  value: string;
  label: string;
}

export interface SiteValue {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string[];
}

export interface NewsStory {
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface Program {
  icon: string;
  title: string;
  description: string;
  image: string;
  stats: SiteStat[];
  highlights: string[];
}

export interface ProgramCard {
  title: string;
  description: string;
  image: string;
  beneficiaries: string;
  goal: string;
  raised: string;
  progress: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ContactMethod {
  icon: string;
  title: string;
  primary: string;
  secondary: string;
  action: string | null;
  href: string | null;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
  handle: string;
}

export interface VolunteerRole {
  icon: string;
  title: string;
  description: string;
  commitment: string;
}

export interface PartnershipTier {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
  type: string;
}

export interface LocationItem {
  state: string;
  areas: string[];
}

export interface JourneyStep {
  icon: string;
  label: string;
  title: string;
  description: string;
  image: string;
  stat: string;
  statLabel: string;
  accent: "primary" | "secondary";
}

export interface SiteContent {
  // Global
  siteName: string;
  siteTagline: string;
  siteDescription: string;
  logoText: string;

  // TopBar
  topBar: {
    address: string;
    addressLabel: string;
    phone: string;
    phoneLabel: string;
    email: string;
    emailLabel: string;
    socialLinks: { label: string; url: string; shortLabel: string }[];
  };

  // Navbar
  navLinks: { label: string; path: string }[];

  // Footer
  footer: {
    description: string;
    quickLinks: { label: string; path: string }[];
    infoLinks: { label: string; path: string }[];
    contactAddress: string;
    contactPhone: string;
    contactEmail: string;
    socialLinks: { label: string; url: string }[];
    copyright: string;
  };

  // Home page
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    stats: SiteStat[];
    image: string;
  };

  mission: {
    sectionLabel: string;
    title: string;
    paragraphs: string[];
    bulletPoints: string[];
    valuesLabel: string;
    valuesTitle: string;
    valuesSubtitle: string;
    values: SiteValue[];
  };

  journey: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    steps: JourneyStep[];
    ctaText: string;
  };

  impact: {
    sectionLabel: string;
    title: string;
    description: string;
    quote: string;
    quoteAuthor: string;
    stats: SiteStat[];
    highlights: string[];
  };

  gallerySection: {
    sectionLabel: string;
    title: string;
    subtitle: string;
  };

  testimonials: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    items: Testimonial[];
  };

  faq: {
    sectionLabel: string;
    title: string;
    description: string;
    items: FAQ[];
    supportTitle: string;
    supportDescription: string;
    supportPhone: string;
    supportEmail: string;
  };

  cta: {
    title: string;
    description: string;
    phone: string;
  };

  // About page
  about: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    storyLabel: string;
    storyTitle: string;
    storyParagraphs: string[];
    storyBadges: string[];
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    timeline: TimelineItem[];
    values: SiteValue[];
    leaderName: string;
    leaderRole: string;
    leaderBio: string[];
    leaderBadge: string;
    impactStats: SiteStat[];
    ctaTitle: string;
    ctaDescription: string;
  };

  // Programs page
  programs: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    overviewLabel: string;
    overviewTitle: string;
    overviewDescription: string;
    items: Program[];
    locations: LocationItem[];
    processSteps: { step: string; title: string; description: string }[];
    ctaTitle: string;
    ctaDescription: string;
  };

  // Programs Section (home page)
  programCards: ProgramCard[];

  // Gallery page
  gallery: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    categories: string[];
    images: GalleryImage[];
  };

  // Contact page
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    methods: ContactMethod[];
    formTitle: string;
    formDescription: string;
    socialLinks: SocialLink[];
    faqs: FAQ[];
    mapAddress: string;
  };

  // Donate page
  donate: {
    title: string;
    description: string;
    cardTitle: string;
    cardDescription: string;
    contactEmail: string;
    partnershipEmail: string;
    phone: string;
  };

  // Get Involved page
  getInvolved: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    waysTitle: string;
    waysDescription: string;
    ways: { icon: string; title: string; description: string; cta: string; link: string }[];
    volunteerTitle: string;
    volunteerDescription: string;
    volunteerRoles: VolunteerRole[];
    partnershipTitle: string;
    partnershipDescription: string;
    partnershipTiers: PartnershipTier[];
    eventsTitle: string;
    eventsDescription: string;
    events: UpcomingEvent[];
    formTitle: string;
    formDescription: string;
  };

  // News page
  news: {
    title: string;
    description: string;
    stories: NewsStory[];
  };
}

const defaultContent: SiteContent = {
  siteName: "Beulah Health Group",
  siteTagline: "Faith-Based Healthcare Since 2016",
  siteDescription: "Taking Responsibility for Social Transformation. A faith-based NGO improving lives in rural African communities since 2016.",
  logoText: "B",

  topBar: {
    address: "Gwarinpa, Abuja, Nigeria",
    addressLabel: "Our Address",
    phone: "+234 703 805 7507",
    phoneLabel: "Call Us",
    email: "beulahworld.initiative@gmail.com",
    emailLabel: "Email",
    socialLinks: [
      { label: "Instagram", url: "https://instagram.com/beulahworld.initiative", shortLabel: "IG" },
      { label: "Facebook", url: "https://facebook.com/BeulahWorldInitiative", shortLabel: "FB" },
      { label: "TikTok", url: "https://tiktok.com/@beulahworld.initiative", shortLabel: "TK" },
    ],
  },

  navLinks: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Programs", path: "/programs" },
    { label: "Gallery", path: "/gallery" },
    { label: "Get Involved", path: "/get-involved" },
    { label: "News & Stories", path: "/news" },
    { label: "Contact", path: "/contact" },
  ],

  footer: {
    description: "Taking Responsibility for Social Transformation. A faith-based NGO improving lives in rural African communities since 2016.",
    quickLinks: [
      { label: "About Us", path: "/about" },
      { label: "Programs", path: "/programs" },
      { label: "Get Involved", path: "/get-involved" },
      { label: "Donate", path: "/donate" },
      { label: "News & Stories", path: "/news" },
    ],
    infoLinks: [
      { label: "FAQs", path: "/faq" },
      { label: "Events", path: "/events" },
      { label: "Careers", path: "/careers" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Use", path: "/terms" },
    ],
    contactAddress: "350A, 444 Crescent, Citec Villas, Gwarinpa, Abuja, Nigeria",
    contactPhone: "+234 703 805 7507",
    contactEmail: "beulahworld.initiative@gmail.com",
    socialLinks: [
      { label: "Instagram", url: "https://instagram.com/beulahworld.initiative" },
      { label: "Facebook", url: "https://facebook.com/BeulahWorldInitiative" },
      { label: "TikTok", url: "https://tiktok.com/@beulahworld.initiative" },
    ],
    copyright: "Beulah Health Group. All rights reserved.",
  },

  hero: {
    badge: "Faith-Based Healthcare Since 2016",
    titleLine1: "Healing Lives,",
    titleLine2: "Restoring Hope",
    description: "Bringing free medical care and holistic empowerment to underserved African communities — because every life matters.",
    stats: [
      { value: "19K+", label: "Lives Touched" },
      { value: "6+", label: "States Reached" },
      { value: "2016", label: "Year Founded" },
      { value: "5K+", label: "Missions" },
    ],
    image: "",
  },

  mission: {
    sectionLabel: "Who We Are",
    title: "Turning Compassion into Meaningful Impact",
    paragraphs: [
      "Beulah Health Group (formerly Beulah World Initiative) is a faith-based, non-profit organization founded in 2016. We are dedicated to improving the quality of life in rural and suburban African communities, starting with Nigeria.",
      "Under the leadership of Ms. Chichi M. Ononiwu — a Humanitarian Awards Global recipient (2022) — our team conducts monthly outreaches providing comprehensive healthcare, empowerment, and welfare services across six Nigerian states.",
    ],
    bulletPoints: [
      "Creating Change That Lasts a Lifetime",
      "Building Stronger Communities for All",
      "Where Purpose Meets Positive Change",
      "Headquartered in Abuja, Active Across Nigeria",
    ],
    valuesLabel: "Our Core Values",
    valuesTitle: "Where Compassion Meets Lasting Impact",
    valuesSubtitle: "Every program we run is built on the belief that healthcare and dignity are fundamental rights for every individual.",
    values: [
      { icon: "Heart", title: "Compassionate Care", description: "Free monthly medical consultations, deworming, and treatment for malaria, diabetes, and hypertension in underserved communities." },
      { icon: "Eye", title: "Vision Restoration", description: "Comprehensive eye examinations, treatment, and distribution of free reading glasses to those who cannot afford proper eye care." },
      { icon: "ShieldCheck", title: "Cancer Awareness", description: "Prostate and breast cancer screening and awareness programs, often delivered in collaboration with Covenant University." },
      { icon: "Apple", title: "Nutritional Support", description: "Monthly distribution of raw food items and groceries to low-income families facing food insecurity across Nigerian communities." },
      { icon: "Users", title: "Welfare & Empowerment", description: "Free clothing, household essentials, and vocational skill training designed to build self-sufficiency and restore dignity." },
      { icon: "BookOpen", title: "Spiritual Outreach", description: "Faith-based counseling and spiritual guidance, having reached over 5,000 individuals through dedicated community missions." },
    ],
  },

  journey: {
    sectionLabel: "The Journey",
    title: "From Compassion to Transformation",
    subtitle: "Every act of care is a step in a larger story. Follow our journey — from identifying the need to creating lasting change in communities across Nigeria.",
    steps: [
      { icon: "Heart", label: "The Need", title: "Millions Lack Access to Basic Healthcare", description: "Across rural and suburban Nigeria, communities struggle without basic medical care, vision services, or cancer screenings. Families go without treatment — not by choice, but by circumstance.", image: "", stat: "70%", statLabel: "of rural Nigerians lack access to quality healthcare", accent: "primary" },
      { icon: "Stethoscope", label: "Our Response", title: "Monthly Outreaches That Bring Care to Doorsteps", description: "Every month, our medical teams travel across six Nigerian states delivering free consultations, malaria treatment, diabetes management, and deworming — meeting people where they are.", image: "", stat: "10K+", statLabel: "free medical consultations delivered", accent: "secondary" },
      { icon: "Eye", label: "Restoring Sight", title: "Giving the Gift of Vision", description: "Through comprehensive eye exams and free reading glasses, we restore independence to thousands who had given up on seeing clearly. Every pair of glasses is a new beginning.", image: "", stat: "8,200+", statLabel: "lives transformed through vision care", accent: "primary" },
      { icon: "HandHeart", label: "Lasting Impact", title: "Empowerment Beyond Medicine", description: "True transformation goes beyond treatment. We provide nutritional support, free clothing, vocational training, and spiritual guidance — building self-sufficiency and restoring dignity.", image: "", stat: "19K+", statLabel: "total lives touched since 2016", accent: "secondary" },
    ],
    ctaText: "Be part of the next chapter",
  },

  impact: {
    sectionLabel: "Our Impact",
    title: "Every Gift Creates a Brighter Tomorrow",
    description: "Since 2016, Beulah Health Group has been at the frontlines of community healthcare in Nigeria. Each contribution, no matter the size, helps bring hope, healing, and dignity to those who need it most.",
    quote: "Healthcare and dignity are fundamental rights, not privileges.",
    quoteAuthor: "Beulah Health Group",
    stats: [
      { value: "19K+", label: "Lives Touched" },
      { value: "10K+", label: "Medical Consultations" },
      { value: "5K+", label: "Spiritual Missions" },
      { value: "15K+", label: "Community Members Served" },
    ],
    highlights: [
      "Monthly outreaches across 6+ Nigerian states",
      "Partnerships with Covenant University & government bodies",
      "Recognized by Humanitarian Awards Global (2022)",
      "Over 5,000 individuals reached through spiritual missions",
    ],
  },

  gallerySection: {
    sectionLabel: "Gallery",
    title: "Moments That Inspire Change",
    subtitle: "A glimpse into our monthly outreaches, partnerships, and the communities we serve across Nigeria.",
  },

  testimonials: {
    sectionLabel: "Testimonials",
    title: "Stories That Inspire Change",
    subtitle: "Hear from the people whose lives have been touched by Beulah Health Group's work.",
    items: [
      { name: "Ethan Jones", role: "Community Member, Lagos", rating: 5, text: "I never thought a small act of kindness could lead to such a big change in my life. This organization gave me not just support, but also hope they believed in me when no one else did." },
      { name: "Noah Alexander", role: "Partner, Covenant University", rating: 5, text: "Working with this nonprofit has shown me that true change begins with compassion. The dedication of their team is unmatched — they go beyond charity; they create lasting impact." },
      { name: "Liam Carter", role: "Volunteer, Ogun State", rating: 5, text: "When my community was struggling, they were the first to arrive and the last to leave. Their care, attention, and genuine concern for every person made a lasting difference." },
    ],
  },

  faq: {
    sectionLabel: "Frequently Asked Questions",
    title: "Answers to Questions That Inspire Your Giving Journey",
    description: "We value your trust. Here you'll find honest answers about how your donations are used, how to get involved, and how we operate across Nigeria.",
    items: [
      { question: "How are my donations used?", answer: "Every donation goes directly to our core programs — providing free medical consultations, cancer screenings, eye care, nutritional support, and community welfare. We maintain full transparency and share quarterly impact reports with our donors." },
      { question: "Can I choose where my donation goes?", answer: "Yes. You can designate your donation to a specific program such as medical outreach, vision restoration, cancer screening, nutritional support, or community welfare and empowerment." },
      { question: "Do you provide updates after I donate?", answer: "Absolutely. We send quarterly impact reports, stories from the communities we serve, and photo/video updates so you can see the tangible difference your contribution makes in people's lives." },
      { question: "How can I volunteer with Beulah Health Group?", answer: "We welcome volunteers — both medical professionals and general supporters — for our monthly community outreaches. Visit our Get Involved page or email us at beulahworld.initiative@gmail.com to learn about upcoming opportunities." },
      { question: "Where does Beulah Health Group operate?", answer: "Our headquarters is in Abuja, and we conduct monthly outreaches across Lagos (Idimu, Ogba, Ejigbo, Gbagada), Ogun State (Ota, Atan), Edo State (Benin City), and Rivers State (Eleme)." },
      { question: "Is Beulah Health Group a registered organization?", answer: "Yes. Beulah Health Group (formerly Beulah World Initiative) is a registered faith-based, non-profit organization that has been operating since 2016, led by Ms. Chichi M. Ononiwu." },
    ],
    supportTitle: "Need Direct Support?",
    supportDescription: "Call us at",
    supportPhone: "+234 703 805 7507",
    supportEmail: "beulahworld.initiative@gmail.com",
  },

  cta: {
    title: "Looking to make a real difference today?",
    description: "Whether you want to donate, volunteer, or partner with us — we'd love to hear from you.",
    phone: "+234 703 805 7507",
  },

  about: {
    heroTitle: "Turning Compassion into Meaningful Impact",
    heroSubtitle: "About Us",
    heroDescription: "Since 2016, Beulah Health Group has been at the forefront of community healthcare in Nigeria — providing free medical services, empowerment, and hope to those who need it most.",
    storyLabel: "Our Story",
    storyTitle: "Born from Faith, Built on Action",
    storyParagraphs: [
      "Beulah Health Group (formerly Beulah World Initiative) was founded in 2016 with a singular conviction: healthcare and dignity are fundamental rights, not privileges. What began as small community visits in Abuja has grown into a movement touching over 19,000 lives across six Nigerian states.",
      "Our work spans free medical consultations, cancer screenings, vision restoration, nutritional support, vocational training, and spiritual outreach — delivered monthly by a passionate team of volunteers, medical professionals, and community partners.",
      "Under the leadership of Ms. Chichi M. Ononiwu — a Humanitarian Awards Global recipient (2022) — we continue to expand our reach, deepen our impact, and build a legacy of compassion across Africa.",
    ],
    storyBadges: ["Registered Non-Profit", "Faith-Based Organization", "Award-Winning Leadership"],
    visionTitle: "Our Vision",
    visionText: "A world where every individual in rural and suburban Africa has access to quality healthcare, dignity, and the opportunity to thrive — regardless of their circumstances, location, or social standing.",
    missionTitle: "Our Mission",
    missionText: "To provide free, accessible healthcare and holistic empowerment to underserved communities through compassionate monthly outreaches, sustainable programs, strategic partnerships, and faith-driven service.",
    timeline: [
      { year: "2016", title: "Founded in Abuja", description: "Beulah World Initiative launched with a vision to bring free healthcare to underserved Nigerian communities." },
      { year: "2018", title: "First Major Outreach", description: "Expanded to Lagos and Ogun State, conducting monthly free medical consultations and welfare distributions." },
      { year: "2020", title: "Cancer Screening Program", description: "Partnered with Covenant University to launch prostate and breast cancer screening across multiple states." },
      { year: "2022", title: "Humanitarian Award", description: "Ms. Chichi M. Ononiwu received the Humanitarian Awards Global recognition for outstanding community impact." },
      { year: "2024", title: "Rebranded to Beulah Health Group", description: "Expanded services to six states, touching over 19,000 lives with comprehensive healthcare and empowerment programs." },
    ],
    values: [
      { icon: "Heart", title: "Compassion", description: "Every action is driven by genuine care for those in need." },
      { icon: "Lightbulb", title: "Innovation", description: "Finding creative solutions to deliver healthcare in remote areas." },
      { icon: "HandHeart", title: "Dignity", description: "Treating every individual with respect and preserving their self-worth." },
      { icon: "Users", title: "Community", description: "Building lasting relationships that empower from within." },
      { icon: "Globe", title: "Inclusivity", description: "Serving all people regardless of background, faith, or status." },
      { icon: "Target", title: "Accountability", description: "Transparent stewardship of every resource and donation." },
    ],
    leaderName: "Ms. Chichi M. Ononiwu",
    leaderRole: "Visioner / Coordinator",
    leaderBio: [
      "A visionary humanitarian and the driving force behind Beulah Health Group. Under her leadership since 2016, the organization has grown from grassroots outreaches to a recognized multi-state operation impacting over 19,000 lives.",
      "In 2022, she was honored with the Humanitarian Awards Global recognition for her outstanding commitment to community healthcare and social transformation in Nigeria.",
      "Her leadership philosophy is simple: \"Healthcare and dignity are fundamental rights, not privileges.\" This belief drives every program, partnership, and outreach the organization undertakes.",
    ],
    leaderBadge: "HAG Awardee 2022",
    impactStats: [
      { value: "2016", label: "Year Founded" },
      { value: "19K+", label: "Lives Touched" },
      { value: "6+", label: "States Reached" },
      { value: "5K+", label: "Spiritual Missions" },
    ],
    ctaTitle: "Ready to Be Part of the Story?",
    ctaDescription: "Whether you want to donate, volunteer, or partner — your contribution matters more than you know.",
  },

  programs: {
    heroTitle: "Programs That Transform Lives",
    heroSubtitle: "Our Programs",
    heroDescription: "From free medical care to vocational training, every program is designed to uplift, empower, and restore dignity to underserved communities across Nigeria.",
    overviewLabel: "What We Do",
    overviewTitle: "Six Pillars of Community Impact",
    overviewDescription: "Each program addresses a critical need in underserved communities. Together, they form a comprehensive ecosystem of care, empowerment, and lasting transformation.",
    items: [
      { icon: "Stethoscope", title: "Free Medical Care", description: "Monthly community outreaches providing free general consultations, deworming, treatment for malaria, diabetes, hypertension, and other common ailments. Our mobile medical teams travel to the most remote areas where healthcare is simply unavailable.", image: "", stats: [{ value: "10K+", label: "Consultations" }, { value: "Monthly", label: "Frequency" }], highlights: ["General health screenings & diagnostics", "Malaria, diabetes & hypertension treatment", "Deworming for children and adults", "Free medication distribution"] },
      { icon: "ShieldCheck", title: "Cancer Screening & Awareness", description: "Prostate and breast cancer awareness campaigns and free screenings delivered in partnership with leading Nigerian universities and hospitals. Early detection saves lives — and we're committed to making it accessible to everyone.", image: "", stats: [{ value: "5,500+", label: "People Screened" }, { value: "3+", label: "Partner Institutions" }], highlights: ["Breast cancer awareness & examination", "Prostate cancer screening for men", "Partnership with Covenant University", "Health education & prevention workshops"] },
      { icon: "Eye", title: "Vision Restoration Program", description: "Comprehensive eye examinations, specialist treatments, and distribution of free reading glasses. For many, this is their first eye exam ever — and the moment they receive glasses is often life-changing.", image: "", stats: [{ value: "8,200+", label: "Lives Transformed" }, { value: "3K+", label: "Free Glasses" }], highlights: ["Comprehensive eye examinations", "Specialist referral & treatment", "Free reading glasses distribution", "Cataract & glaucoma awareness"] },
      { icon: "Apple", title: "Nutritional Support", description: "Monthly distribution of raw food items, groceries, and essential supplies to low-income families facing food insecurity. Proper nutrition is the foundation of good health, and no family should go without.", image: "", stats: [{ value: "15K+", label: "Meals Provided" }, { value: "6+", label: "States Covered" }], highlights: ["Raw food & grocery distribution", "Nutritional education for families", "Focus on children & elderly", "Sustainable food programs"] },
      { icon: "Shirt", title: "Community Welfare & Empowerment", description: "Free clothing, household essentials, and vocational skill training designed to build self-sufficiency and restore dignity. We believe true transformation goes beyond medical care — it requires holistic empowerment.", image: "", stats: [{ value: "12,400+", label: "Beneficiaries" }, { value: "100+", label: "Skills Trained" }], highlights: ["Free clothing & household items", "Vocational skill acquisition training", "Micro-enterprise mentorship", "Dignity restoration programs"] },
      { icon: "BookOpen", title: "Spiritual Outreach & Counseling", description: "Faith-based counseling, spiritual guidance, and community missions. Over 5,000 individuals have been reached through dedicated spiritual outreaches that bring hope, healing, and purpose.", image: "", stats: [{ value: "5K+", label: "Individuals Reached" }, { value: "200+", label: "Counseling Sessions" }], highlights: ["One-on-one spiritual counseling", "Community prayer & fellowship", "Youth mentorship programs", "Faith & wellness integration"] },
    ],
    locations: [
      { state: "Lagos", areas: ["Idimu", "Ogba", "Ejigbo", "Gbagada"] },
      { state: "Ogun State", areas: ["Ota", "Atan"] },
      { state: "Abuja (FCT)", areas: ["Gwarinpa (HQ)", "Surrounding Areas"] },
      { state: "Edo State", areas: ["Benin City"] },
      { state: "Rivers State", areas: ["Eleme"] },
      { state: "Expanding", areas: ["New states each year"] },
    ],
    processSteps: [
      { step: "01", title: "You Donate", description: "Choose a program or give to our general fund. Every naira and dollar goes directly to the field." },
      { step: "02", title: "We Plan", description: "Our team identifies communities with the greatest need and organizes monthly outreach schedules." },
      { step: "03", title: "We Deliver", description: "Medical teams, volunteers, and supplies arrive on-site to provide free care and resources." },
      { step: "04", title: "Lives Change", description: "Families receive treatment, children see clearly, communities are empowered to thrive." },
    ],
    ctaTitle: "Every gift changes a life.",
    ctaDescription: "Support any of our six programs and see the tangible difference your contribution makes.",
  },

  programCards: [
    { title: "Free Medical Care", description: "General consultations, deworming, treatment for malaria, diabetes, and hypertension delivered through monthly community outreaches.", image: "", beneficiaries: "10,000+", goal: "$8,000 goal", raised: "$6,300 raised", progress: 78 },
    { title: "Cancer Screening & Awareness", description: "Prostate and breast cancer awareness and screening delivered in partnership with leading Nigerian universities and hospitals.", image: "", beneficiaries: "5,500+", goal: "$7,000 goal", raised: "$3,500 raised", progress: 50 },
    { title: "Vision Restoration Program", description: "Comprehensive eye examinations, specialist treatment, and distribution of free reading glasses to restore sight and independence.", image: "", beneficiaries: "8,200+", goal: "$6,000 goal", raised: "$5,100 raised", progress: 85 },
    { title: "Community Welfare & Empowerment", description: "Nutritional support, free clothing, household items, and vocational skill training to build self-sufficiency in communities.", image: "", beneficiaries: "12,400+", goal: "$10,000 goal", raised: "$3,500 raised", progress: 35 },
  ],

  gallery: {
    heroTitle: "Our Gallery",
    heroSubtitle: "Gallery",
    heroDescription: "See Beulah Health Group in action — delivering free healthcare, hope, and compassion to communities across Nigeria.",
    categories: ["All", "Medical Care", "Community", "Team in Action"],
    images: [
      { src: "", alt: "Free medical outreach in rural community", caption: "Medical Outreach — Rural Nigeria", category: ["Medical Care", "Community"] },
      { src: "", alt: "Community members gathered for health talk", caption: "Health Awareness Talk", category: ["Community"] },
      { src: "", alt: "Doctor performing blood test during outreach", caption: "Blood Sugar Testing", category: ["Medical Care"] },
      { src: "", alt: "Doctor consulting with patient outdoors", caption: "Field Consultation", category: ["Medical Care"] },
      { src: "", alt: "Doctor attending to patient at medical camp", caption: "Patient Care at Camp", category: ["Medical Care", "Team in Action"] },
      { src: "", alt: "Nurse taking blood pressure reading", caption: "Nursing Care — BP Monitoring", category: ["Medical Care", "Team in Action"] },
      { src: "", alt: "Medical professional writing prescription in field", caption: "Prescription in the Field", category: ["Medical Care", "Team in Action"] },
      { src: "", alt: "Healthcare worker examining patient's hand", caption: "Hands-On Care", category: ["Medical Care"] },
      { src: "", alt: "Blood pressure check during community outreach", caption: "Blood Pressure Screening", category: ["Medical Care", "Community"] },
      { src: "", alt: "Pharmacist dispensing medication at outreach", caption: "Medicine Dispensing", category: ["Medical Care", "Team in Action"] },
      { src: "", alt: "Team member organizing medication supply", caption: "Pharmacy Supply Station", category: ["Team in Action"] },
      { src: "", alt: "Beulah Health Group team photo", caption: "Our Dedicated Team", category: ["Team in Action", "Community"] },
      { src: "", alt: "Team members in discussion", caption: "Partnership Discussion", category: ["Team in Action"] },
      { src: "", alt: "Planning session for outreach", caption: "Strategy & Planning", category: ["Team in Action"] },
      { src: "", alt: "Office coordination", caption: "Coordination Visit", category: ["Team in Action"] },
    ],
  },

  contact: {
    heroTitle: "Let's Start a Conversation",
    heroSubtitle: "Contact Us",
    heroDescription: "Whether you have a question, want to volunteer, or explore partnership opportunities — we're here and eager to connect with you.",
    methods: [
      { icon: "MapPin", title: "Visit Our Office", primary: "350A, 444 Crescent, Citec Villas", secondary: "Gwarinpa, Abuja, Nigeria", action: "Get Directions", href: "https://maps.google.com/?q=Gwarinpa+Abuja+Nigeria" },
      { icon: "Phone", title: "Call Us", primary: "+234 703 805 7507", secondary: "Mon – Fri, 9am – 5pm WAT", action: "Call Now", href: "tel:+2347038057507" },
      { icon: "Mail", title: "Email Us", primary: "beulahworld.initiative@gmail.com", secondary: "bwi.partnerships@gmail.com", action: "Send Email", href: "mailto:beulahworld.initiative@gmail.com" },
      { icon: "Clock", title: "Office Hours", primary: "Monday – Friday", secondary: "9:00 AM – 5:00 PM WAT", action: null, href: null },
    ],
    formTitle: "We'd Love to Hear From You",
    formDescription: "Have a question about our programs? Interested in volunteering or partnering? Or simply want to share your thoughts? Drop us a message and we'll get back to you promptly.",
    socialLinks: [
      { icon: "Instagram", label: "Instagram", url: "https://instagram.com/beulahworld.initiative", handle: "@beulahworld.initiative" },
      { icon: "Facebook", label: "Facebook", url: "https://facebook.com/BeulahWorldInitiative", handle: "BeulahWorldInitiative" },
      { icon: "Globe", label: "TikTok", url: "https://tiktok.com/@beulahworld.initiative", handle: "@beulahworld.initiative" },
    ],
    faqs: [
      { question: "How quickly will I receive a response?", answer: "We typically respond within 24-48 business hours. For urgent matters, please call us directly." },
      { question: "Can I visit during an outreach?", answer: "Absolutely! We welcome visitors at our monthly outreaches. Contact us to learn about the next event near you." },
      { question: "I'm a medical professional — how can I help?", answer: "We'd love to have you. Fill out the form or email us at beulahworld.initiative@gmail.com with your specialty and availability." },
      { question: "How can my organization partner with you?", answer: "Send us a partnership inquiry through the form or email bwi.partnerships@gmail.com. We'll schedule a meeting to discuss collaboration." },
    ],
    mapAddress: "350A, 444 Crescent, Citec Villas, Gwarinpa, Abuja, Nigeria",
  },

  donate: {
    title: "Make a Donation",
    description: "Your generosity changes lives. Every contribution directly supports free healthcare, education, and empowerment for underserved communities.",
    cardTitle: "Support Our Mission",
    cardDescription: "To make a donation or discuss partnership opportunities, please contact us directly. We accept donations via bank transfer and other means.",
    contactEmail: "beulahworld.initiative@gmail.com",
    partnershipEmail: "bwi.partnerships@gmail.com",
    phone: "+234 703 805 7507",
  },

  getInvolved: {
    heroTitle: "Be the Change a Community Needs",
    heroSubtitle: "Get Involved",
    heroDescription: "Your time, skills, and generosity can transform lives. Whether you volunteer, partner, or donate — every contribution creates ripples of lasting impact.",
    waysTitle: "Three Ways to Create Impact",
    waysDescription: "No matter your background or expertise, there's a meaningful way for you to join our mission.",
    ways: [
      { icon: "Users", title: "Volunteer", description: "Join our monthly outreaches as a medical professional or general volunteer. Share your skills where they're needed most.", cta: "See Roles", link: "#volunteer-roles" },
      { icon: "HandHeart", title: "Partner With Us", description: "Organizations and institutions can collaborate on programs, sponsor outreaches, and amplify our collective reach.", cta: "Explore Partnerships", link: "#partnerships" },
      { icon: "CalendarDays", title: "Attend Events", description: "Participate in awareness campaigns, fundraisers, and community events. See our work firsthand and be part of the movement.", cta: "View Events", link: "#events" },
    ],
    volunteerTitle: "Your Skills Can Save Lives",
    volunteerDescription: "We welcome medical professionals and general supporters from all backgrounds. Our monthly outreaches depend on passionate volunteers who show up with purpose.",
    volunteerRoles: [
      { icon: "Stethoscope", title: "Medical Volunteers", description: "Doctors, nurses, pharmacists, and lab technicians who provide free consultations, screenings, and treatment during monthly outreaches.", commitment: "1-2 days/month" },
      { icon: "Eye", title: "Vision Care Specialists", description: "Optometrists and ophthalmologists who conduct eye examinations, prescribe corrective lenses, and identify conditions needing specialist care.", commitment: "1 day/month" },
      { icon: "Users", title: "Community Mobilizers", description: "Help organize logistics, crowd management, registration, and community engagement at outreach events across Nigerian states.", commitment: "Flexible" },
      { icon: "Megaphone", title: "Media & Communications", description: "Photographers, videographers, writers, and social media managers who document our impact and amplify our mission to the world.", commitment: "Remote / Flexible" },
    ],
    partnershipTitle: "Stronger Together",
    partnershipDescription: "We partner with local organizations, universities, government bodies, and corporations to expand our impact and reach.",
    partnershipTiers: [
      { icon: "Heart", title: "Community Partner", description: "Local organizations, churches, and community leaders who help us identify areas of need and mobilize communities for outreach events.", benefits: ["Event co-hosting", "Community reach", "Local impact reports"] },
      { icon: "Building", title: "Institutional Partner", description: "Universities, hospitals, and government agencies that collaborate on screening programs, research, and large-scale health interventions.", benefits: ["Joint programs", "Research collaboration", "CSR alignment"] },
      { icon: "Globe", title: "Corporate Sponsor", description: "Companies and foundations that provide financial support, supplies, or professional expertise to expand our programs and reach.", benefits: ["Brand visibility", "Impact reporting", "Tax-deductible giving"] },
    ],
    eventsTitle: "Upcoming Outreaches & Events",
    eventsDescription: "Join us at our next event and experience the impact firsthand.",
    events: [
      { title: "Monthly Medical Outreach — Lagos", date: "First Saturday of every month", location: "Idimu, Lagos State", type: "Outreach" },
      { title: "Cancer Screening Drive", date: "Quarterly", location: "Multiple locations", type: "Screening" },
      { title: "Vision Restoration Campaign", date: "Bi-monthly", location: "Ogun & Edo States", type: "Eye Care" },
      { title: "Community Welfare Distribution", date: "Monthly", location: "Abuja & surroundings", type: "Welfare" },
    ],
    formTitle: "Ready to Make an Impact?",
    formDescription: "Fill out the form and our team will reach out to discuss how you can contribute — whether as a volunteer, partner, or supporter.",
  },

  news: {
    title: "News & Stories",
    description: "Stories that shape our mission and inspire lasting change.",
    stories: [
      { title: "Small Acts of Kindness That Create Big Change", excerpt: "Through our compassion, Beulah Health Group reaches those who need it most — bringing clean water, education, and opportunity to communities.", image: "", date: "March 2026" },
      { title: "How Compassion Can Transform an Entire Community", excerpt: "Discover how our education initiatives empower children to dream and build a better future for their communities.", image: "", date: "February 2026" },
      { title: "The Power of Giving: Why Every Donation Matters", excerpt: "Our medical outreach projects are helping rural families gain safe, clean water, reducing disease and improving daily life.", image: "", date: "January 2026" },
    ],
  },
};

interface SiteContentContextType {
  content: SiteContent;
  updateContent: (path: string, value: any) => void;
  updateNestedContent: (updates: Record<string, any>) => void;
  resetContent: () => void;
  isAdmin: boolean;
  setIsAdmin: (v: boolean) => void;
}

const SiteContentContext = createContext<SiteContentContextType | null>(null);

function setNestedValue(obj: any, path: string, value: any): any {
  const clone = JSON.parse(JSON.stringify(obj));
  const keys = path.split(".");
  let current = clone;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) current[key] = {};
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
  return clone;
}

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem("siteContent");
      if (saved) {
        return { ...defaultContent, ...JSON.parse(saved) };
      }
    } catch {}
    return defaultContent;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("adminLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("siteContent", JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    localStorage.setItem("adminLoggedIn", String(isAdmin));
  }, [isAdmin]);

  const updateContent = (path: string, value: any) => {
    setContent((prev) => setNestedValue(prev, path, value));
  };

  const updateNestedContent = (updates: Record<string, any>) => {
    setContent((prev) => {
      let updated = prev;
      for (const [path, value] of Object.entries(updates)) {
        updated = setNestedValue(updated, path, value);
      }
      return updated;
    });
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem("siteContent");
  };

  return (
    <SiteContentContext.Provider value={{ content, updateContent, updateNestedContent, resetContent, isAdmin, setIsAdmin }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error("useSiteContent must be used within SiteContentProvider");
  return ctx;
}

export { defaultContent };
