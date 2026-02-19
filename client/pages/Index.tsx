import Navigation from "@/components/Navigation";
import { ArrowRight, Leaf, Zap, Users, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const sustainabilityImg = "https://images.pexels.com/photos/27243718/pexels-photo-27243718.jpeg";
const cloudImg = "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg";
const tourismImg = "https://images.pexels.com/photos/17231775/pexels-photo-17231775.jpeg";
const wellnessImg = "https://images.pexels.com/photos/31234753/pexels-photo-31234753.jpeg";

export default function Index() {
  const pillars = [
    {
      title: "Digital Business & ESG",
      description:
        "Carbon optimization and green tech for the digital economy.",
      icon: Zap,
    },
    {
      title: "IT & Cloud Solutions",
      description:
        "Scalable cloud architecture, SaaS, and AI development.",
      icon: Globe,
    },
    {
      title: "Adventure & Eco-Tourism",
      description: "Smart, sustainable destination development.",
      icon: Leaf,
    },
    {
      title: "Wellness Tourism",
      description: "End-to-end resort facilitation and expert manpower supply.",
      icon: Users,
    },
    {
      title: "Business Development",
      description:
        "Strategic lifecycle support for Micro to Macro enterprises.",
      icon: TrendingUp,
    },
  ];

  const services = [
    {
      title: "Digital Carbon Footprint Assessment",
      description:
        "Comprehensive measurement of carbon emissions from cloud infrastructure, website hosting, and digital product usage.",
    },
    {
      title: "Green Cloud Architecture Review",
      description:
        "Technical audits of AWS, Azure, and GCP infrastructure to right-size resources and optimize for both carbon and cost reductions.",
    },
    {
      title: "ESG Strategy & Reporting",
      description:
        "Design and implementation of data collection systems aligned with global frameworks for pre-IPO startups and enterprise clients.",
    },
    {
      title: "Cloud Platform Operations",
      description:
        "Implementation and management of AWS and Azure stacks with high-availability distributed systems.",
    },
  ];

  const industries = [
    { name: "SaaS & Cloud Software", icon: "💻" },
    { name: "E-commerce & D2C Brands", icon: "📦" },
    { name: "Tech Startups", icon: "🚀" },
    { name: "Hospitality & Real Estate", icon: "🏨" },
    { name: "Government & Public Sector", icon: "🏛️" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bridging Sustainability, Technology, Conservation, and Business
              Growth
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Evidence-based consulting that delivers measurable environmental
              and economic impact across the digital and physical worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Start Your Transformation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DBS Advantage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The DBS Advantage
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 sm:p-12">
            <p className="text-lg text-foreground leading-relaxed">
              We are the only consultancy practice that combines deep
              sustainability expertise with AI, big data, and cloud
              infrastructure capabilities to help businesses grow profitably
              while meeting their environmental commitments.{" "}
              <span className="font-semibold">
                We do not just advise; we build tech-enabled solutions and
                physical infrastructure that drive measurable impact.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Five Core Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/40 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Five Core Pillars
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const colors = [
                { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200 hover:border-blue-400" },
                { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200 hover:border-purple-400" },
                { bg: "bg-green-50", icon: "text-green-600", border: "border-green-200 hover:border-green-400" },
                { bg: "bg-pink-50", icon: "text-pink-600", border: "border-pink-200 hover:border-pink-400" },
                { bg: "bg-amber-50", icon: "text-amber-600", border: "border-amber-200 hover:border-amber-400" },
              ];
              const color = colors[idx];
              return (
                <div
                  key={idx}
                  className={`${color.bg} rounded-lg p-6 border-2 ${color.border} hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${color.icon}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-white to-primary/5 rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all">
              <img src={sustainabilityImg} alt="Sustainability" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Digital Carbon Footprint Assessment
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive measurement of carbon emissions from cloud infrastructure, website hosting, and digital product usage.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-secondary/5 rounded-lg overflow-hidden border border-border hover:border-secondary hover:shadow-lg transition-all">
              <img src={cloudImg} alt="Cloud Infrastructure" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Green Cloud Architecture Review
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Technical audits of AWS, Azure, and GCP infrastructure to right-size resources and optimize for both carbon and cost reductions.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-accent/10 rounded-lg overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all">
              <img src={tourismImg} alt="Eco-Tourism" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  ESG Strategy & Reporting
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Design and implementation of data collection systems aligned with global frameworks for pre-IPO startups and enterprise clients.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-primary/5 rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all">
              <img src={wellnessImg} alt="Wellness" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Cloud Platform Operations
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Implementation and management of AWS and Azure stacks with high-availability distributed systems.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((industry, idx) => {
              const bgColors = [
                "bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200 hover:border-blue-400",
                "bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200 hover:border-purple-400",
                "bg-gradient-to-br from-green-100 to-green-50 border-green-200 hover:border-green-400",
                "bg-gradient-to-br from-pink-100 to-pink-50 border-pink-200 hover:border-pink-400",
                "bg-gradient-to-br from-amber-100 to-amber-50 border-amber-200 hover:border-amber-400",
              ];
              return (
                <div
                  key={idx}
                  className={`${bgColors[idx]} rounded-lg p-6 border-2 hover:shadow-lg transition-all text-center`}
                >
                  <div className="text-5xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {industry.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUSTAIN Framework Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The SUSTAIN Framework
            </h2>
            <p className="text-lg mb-6 opacity-95">
              Our proprietary methodology ensures every project—whether an
              eco-resort or a cloud migration—is executed flawlessly.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Discover Our Methodology <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how our evidence-based approach can drive measurable
            impact for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
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
