import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Phone, Mail, Clock, Globe, ArrowRight,
  MessageCircle, Send, Instagram, Facebook,
} from "lucide-react";
import meetingImg from "@/assets/outreach-meeting.jpg";
import officeImg from "@/assets/outreach-office.jpg";

const contactMethods = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    primary: "350A, 444 Crescent, Citec Villas",
    secondary: "Gwarinpa, Abuja, Nigeria",
    action: "Get Directions",
    href: "https://maps.google.com/?q=Gwarinpa+Abuja+Nigeria",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+234 703 805 7507",
    secondary: "Mon – Fri, 9am – 5pm WAT",
    action: "Call Now",
    href: "tel:+2347038057507",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "beulahworld.initiative@gmail.com",
    secondary: "bwi.partnerships@gmail.com",
    action: "Send Email",
    href: "mailto:beulahworld.initiative@gmail.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    primary: "Monday – Friday",
    secondary: "9:00 AM – 5:00 PM WAT",
    action: null,
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/beulahworld.initiative", handle: "@beulahworld.initiative" },
  { icon: Facebook, label: "Facebook", url: "https://facebook.com/BeulahWorldInitiative", handle: "BeulahWorldInitiative" },
  { icon: Globe, label: "TikTok", url: "https://tiktok.com/@beulahworld.initiative", handle: "@beulahworld.initiative" },
];

const faqs = [
  { q: "How quickly will I receive a response?", a: "We typically respond within 24-48 business hours. For urgent matters, please call us directly." },
  { q: "Can I visit during an outreach?", a: "Absolutely! We welcome visitors at our monthly outreaches. Contact us to learn about the next event near you." },
  { q: "I'm a medical professional — how can I help?", a: "We'd love to have you. Fill out the form or email us at beulahworld.initiative@gmail.com with your specialty and availability." },
  { q: "How can my organization partner with you?", a: "Send us a partnership inquiry through the form or email bwi.partnerships@gmail.com. We'll schedule a meeting to discuss collaboration." },
];

const Contact = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />

      <PageHero
        title="Let's Start a Conversation"
        subtitle="Contact Us"
        description="Whether you have a question, want to volunteer, or explore partnership opportunities — we're here and eager to connect with you."
        image={meetingImg}
      />

      {/* Contact Methods Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Reach Out</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                Multiple Ways to Connect
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, i) => (
              <ScrollReveal key={method.title} delay={i * 80}>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col text-center">
                  <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-foreground text-sm font-medium">{method.primary}</p>
                  <p className="text-muted-foreground text-xs mt-1 mb-4 flex-1">{method.secondary}</p>
                  {method.action && method.href && (
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs w-full">
                        {method.action}
                      </Button>
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Image */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
            <ScrollReveal>
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Send a Message</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                  We'd Love to Hear From You
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Have a question about our programs? Interested in volunteering or partnering? Or simply want to share your thoughts? Drop us a message and we'll get back to you promptly.
                </p>
                <img src={officeImg} alt="Office environment" className="rounded-2xl shadow-lg w-full object-cover aspect-[16/10] mb-8" />

                {/* Social Links */}
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-secondary transition-colors"
                      >
                        <social.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{social.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">Contact Form</h3>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                      <Input placeholder="John" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                      <Input placeholder="Doe" className="rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                    <Input placeholder="john@example.com" type="email" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                    <Input placeholder="+234 xxx xxx xxxx" type="tel" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                    <select className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership / Sponsorship</option>
                      <option value="donation">Donation Question</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea placeholder="Tell us how we can help..." rows={5} className="rounded-lg" />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm font-semibold">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 24-48 business hours.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Quick Answers</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                Common Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 80}>
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="bg-muted/40">
        <div className="container mx-auto px-4 py-14">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground">Find Us</h2>
              <p className="text-muted-foreground text-sm mt-1">350A, 444 Crescent, Citec Villas, Gwarinpa, Abuja, Nigeria</p>
            </div>
          </ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8!2d7.38!3d9.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDUnMDAuMCJOIDfCsDIzJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beulah Health Group Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
