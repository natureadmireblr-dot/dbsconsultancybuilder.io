import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export default function About() {
  const sustainFramework = [
    {
      letter: "S",
      title: "Situational Assessment",
      description: "Current state analysis and stakeholder mapping.",
    },
    {
      letter: "U",
      title: "Understand Objectives",
      description: "Aligning sustainability with business and community goals.",
    },
    {
      letter: "S",
      title: "Strategic Design",
      description: "Co-creating solutions using participatory approaches.",
    },
    {
      letter: "T",
      title: "Technology Integration",
      description: "Leveraging AI and data for total optimization.",
    },
    {
      letter: "A",
      title: "Action Planning",
      description: "Creating Detailed Project Reports (DPRs) with actionable quick wins.",
    },
    {
      letter: "I",
      title: "Implementation Support",
      description: "Hands-on execution and technical assistance.",
    },
    {
      letter: "N",
      title: "Navigate & Measure",
      description: "KPI tracking and continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              25+ Years of Building Sustainable Ecosystems
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              The DBS Journey
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Founded by Dev Balaji Setty, our roots go back to the establishment of Nature Admire in 1997. Over decades, we have evolved from pioneering adventure tourism and managing complex logistics to driving digital sustainability and cloud infrastructure.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Our legacy involves acting as technical advisors for government tourism departments, developing policy frameworks, and engaging stakeholders. Today, we apply those same rigorous principles of conservation, logistics, and resource management to the digital economy—helping modern SaaS companies, e-commerce platforms, and traditional businesses optimize their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose DBS
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Unique Expertise Combination
                  </h3>
                  <p className="text-muted-foreground">
                    We uniquely blend sustainability, technology, and business development expertise.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-purple-500">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-muted-foreground">
                    25+ years of delivering measurable impact across multiple industries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-green-500">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    End-to-End Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    We don't just advise; we build and implement solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-pink-500">
                <Check className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Proprietary Methodology
                  </h3>
                  <p className="text-muted-foreground">
                    Our SUSTAIN framework ensures consistent, flawless execution.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-amber-500">
                <Check className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Government & Enterprise Trust
                  </h3>
                  <p className="text-muted-foreground">
                    Trusted by government agencies, startups, and Fortune 500 companies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-cyan-500">
                <Check className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Measurable Results
                  </h3>
                  <p className="text-muted-foreground">
                    We focus on KPIs, ROI, and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAIN Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The SUSTAIN Framework
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-4">
              Our proprietary methodology ensures every project—whether an eco-resort or a cloud migration—is executed flawlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {sustainFramework.map((item, idx) => {
              const colors = [
                { bg: "bg-blue-50", border: "border-blue-200 hover:border-blue-400", text: "text-blue-700", badge: "bg-blue-600 text-white" },
                { bg: "bg-purple-50", border: "border-purple-200 hover:border-purple-400", text: "text-purple-700", badge: "bg-purple-600 text-white" },
                { bg: "bg-green-50", border: "border-green-200 hover:border-green-400", text: "text-green-700", badge: "bg-green-600 text-white" },
                { bg: "bg-pink-50", border: "border-pink-200 hover:border-pink-400", text: "text-pink-700", badge: "bg-pink-600 text-white" },
                { bg: "bg-amber-50", border: "border-amber-200 hover:border-amber-400", text: "text-amber-700", badge: "bg-amber-600 text-white" },
                { bg: "bg-cyan-50", border: "border-cyan-200 hover:border-cyan-400", text: "text-cyan-700", badge: "bg-cyan-600 text-white" },
                { bg: "bg-red-50", border: "border-red-200 hover:border-red-400", text: "text-red-700", badge: "bg-red-600 text-white" },
              ];
              const color = colors[idx];
              return (
                <div
                  key={idx}
                  className={`${color.bg} border-2 ${color.border} rounded-lg p-6 hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 ${color.badge} rounded-lg flex items-center justify-center mb-4 font-bold text-lg`}>
                    {item.letter}
                  </div>
                  <h3 className={`font-semibold ${color.text} mb-2 text-sm`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Leverage 25+ Years of Expertise?
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Let's discuss how we can help your organization achieve measurable sustainability and growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
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
