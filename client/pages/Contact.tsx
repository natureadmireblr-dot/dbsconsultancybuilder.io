import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Zap, Cloud, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const contactImageUrl = "https://images.pexels.com/photos/6289060/pexels-photo-6289060.jpeg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "ESG, Carbon Audits & Digital Sustainability",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "ESG, Carbon Audits & Digital Sustainability",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl text-white/90">
                Let's discuss how we can help your organization achieve measurable impact.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src={contactImageUrl}
                alt="Business growth and success"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">devbalaji@natureadmire.in</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 - 8618751811 / 9845079414</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      Wework, 10th floor, RMZ Latitude commercial, Amruthahalli, Hebbal, Bengaluru -560024, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Categories */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-foreground mb-4">Service Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">ESG, Carbon Audits & Digital Sustainability</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/10 rounded-lg">
                    <Cloud className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">IT Infrastructure & Cloud Services</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-accent/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">Tourism Destination & Adventure Planning</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">Wellness Resort Setup & Manpower</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">Business Strategy & Registration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      Thank you! We'll be in touch soon.
                    </p>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      I am looking for assistance with... *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>ESG, Carbon Audits & Digital Sustainability</option>
                      <option>IT Infrastructure & Cloud Services</option>
                      <option>Tourism Destination & Adventure Planning</option>
                      <option>Wellness Resort Setup & Manpower</option>
                      <option>Business Strategy & Registration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">DBS Consultancy</h3>
              <p className="text-sm opacity-75">
                25+ years of building sustainable ecosystems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="opacity-75 hover:opacity-100">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="opacity-75 hover:opacity-100">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services" className="opacity-75 hover:opacity-100">
                    Digital Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="opacity-75 hover:opacity-100">
                    Cloud Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contact" className="opacity-75 hover:opacity-100">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm opacity-75">
              © {new Date().getFullYear()} DBS Consultancy Services. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
