import Navigation from "@/components/Navigation";
import { ArrowRight, Zap, Cloud, BarChart3, Megaphone, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const coreSolutions = [
    {
      title: "🌐 Digital Development",
      icon: "💻",
      features: [
        "Website Design & Development",
        "Mobile Applications (iOS / Android)",
        "UI/UX Design",
      ],
    },
    {
      title: "☁️ Cloud & Infrastructure",
      icon: "🔧",
      features: [
        "Cloud Hosting Services",
        "AWS & Google Cloud Reseller Services",
        "Cloud Telephony Solutions",
        "Data Backup & Disaster Recovery",
      ],
    },
    {
      title: "📊 Data & Intelligence",
      icon: "📈",
      features: [
        "Data Analytics & Business Intelligence",
        "AI / ML Solutions",
        "Predictive Insights",
      ],
    },
    {
      title: "📣 Marketing & Growth",
      icon: "🚀",
      features: [
        "Digital Marketing",
        "Performance Marketing",
        "Lead Generation Services",
        "WhatsApp Marketing Automation",
      ],
    },
    {
      title: "🔐 Security & Compliance",
      icon: "🛡️",
      features: [
        "Cybersecurity Solutions",
        "Endpoint Protection",
        "Threat Intelligence",
      ],
    },
  ];

  const industriesList = [
    "Healthcare",
    "Tourism & Travel",
    "FMCG",
    "Hotels & Resorts",
    "Transportation & Logistics",
    "Construction",
    "Manufacturing & Industries",
  ];

  const partners = [
    {
      name: "Convozen.ai",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2F7e276c9257534eef85644adb427076da?format=webp&width=800&height=1200",
      fallback: "🤖"
    },
    {
      name: "Crowdstrike",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2F06be649692df419b8b8340ba73fbcc45?format=webp&width=800&height=1200",
      fallback: "🛡️"
    },
    {
      name: "Veeam",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2Facbbf48c139c416595fc49fef1d4c3e3?format=webp&width=800&height=1200",
      fallback: "💾"
    },
    {
      name: "ScyllaDB",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2F0edeb56e6229490ea3a66a497e62bd43?format=webp&width=800&height=1200",
      fallback: "🗄️"
    },
    {
      name: "Microsoft",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2F65accf3e2fd5413ea0388cb9cee03ec4?format=webp&width=800&height=1200",
      fallback: "🪟"
    },
    {
      name: "Bing",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2Ff426e8aefce046208490f4c976686ee3?format=webp&width=800&height=1200",
      fallback: "🎬"
    },
    {
      name: "AWS",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2F80add6a6dcfd4c6cb2c35f87888a4644?format=webp&width=800&height=1200",
      fallback: "☁️"
    },
    {
      name: "Google",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2Fcb4a3a68b52b4aab8ece6d9301b39ba5?format=webp&width=800&height=1200",
      fallback: "🔍"
    },
    {
      name: "Crayon",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2F3ade12efda18469ba5eef944561c41c3?format=webp&width=800&height=1200",
      fallback: "🎯"
    },
    {
      name: "Snowflake",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2Fc17dd9438cdc46a6a2fe5ccec344bc27?format=webp&width=800&height=1200",
      fallback: "❄️"
    },
    {
      name: "Datadog",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fa423cbc5fef44250b7d0c574c56be245%2F5c92f72fb3964c6fa74cf15e61a02f95?format=webp&width=800&height=1200",
      fallback: "🐕"
    },
  ];

  const whyChoose = [
    "End-to-End Integrated Solutions",
    "Scalable Cloud Infrastructure",
    "Data-Driven Decision Making",
    "Industry-Specific Customization",
    "Strong Global Technology Partnerships",
  ];

  const serviceFlow = [
    {
      step: 1,
      title: "Business Onboarding",
      description: "Understand your unique business needs and digital landscape",
      details: ["Requirement Analysis", "Industry Mapping", "Digital Readiness Audit"],
    },
    {
      step: 2,
      title: "Digital Foundation",
      description: "Build the core technical infrastructure",
      details: [
        "Website / App Development",
        "Cloud Hosting Setup",
        "Cloud Telephony Integration",
      ],
    },
    {
      step: 3,
      title: "Data Layer",
      description: "Establish data collection and management systems",
      details: [
        "Data Collection Systems",
        "CRM Integration",
        "Analytics Dashboard Setup",
      ],
    },
    {
      step: 4,
      title: "Growth Engine",
      description: "Drive customer acquisition and engagement",
      details: [
        "Digital Marketing Campaigns",
        "Performance Marketing",
        "Lead Generation Funnels",
        "WhatsApp Automation",
      ],
    },
    {
      step: 5,
      title: "Intelligence Layer",
      description: "Unlock insights from your data",
      details: [
        "AI / ML Integration",
        "Predictive Analytics",
        "Customer Behavior Insights",
      ],
    },
    {
      step: 6,
      title: "Security & Compliance",
      description: "Protect your data and operations",
      details: [
        "Endpoint Security (Crowdstrike)",
        "Backup (Veeam)",
        "Data Protection",
      ],
    },
    {
      step: 7,
      title: "Optimization & Scaling",
      description: "Continuously improve and grow",
      details: [
        "Continuous Monitoring",
        "Cloud Scaling (AWS / Google)",
        "Conversion Optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Businesses with Smart Digital Transformation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">
              End-to-end technology, marketing, and cloud solutions to accelerate growth across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Get a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About DBS Global
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Who We Are
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DBS Global Technology & Consulting Services is a comprehensive digital transformation partner delivering scalable, secure, and performance-driven solutions for modern businesses.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-8 border border-purple-200">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Our Expertise
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help organizations across Healthcare, Tourism, FMCG, Hospitality, Transportation, Construction, and Industrial sectors streamline operations, improve customer engagement, and drive measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Solutions
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreSolutions.map((solution, idx) => {
              const colors = [
                { bg: "bg-blue-50", border: "border-blue-200 hover:border-blue-400", textColor: "text-blue-900" },
                { bg: "bg-cyan-50", border: "border-cyan-200 hover:border-cyan-400", textColor: "text-cyan-900" },
                { bg: "bg-green-50", border: "border-green-200 hover:border-green-400", textColor: "text-green-900" },
                { bg: "bg-orange-50", border: "border-orange-200 hover:border-orange-400", textColor: "text-orange-900" },
                { bg: "bg-red-50", border: "border-red-200 hover:border-red-400", textColor: "text-red-900" },
              ];
              const color = colors[idx];

              return (
                <div
                  key={idx}
                  className={`${color.bg} rounded-lg p-6 border-2 ${color.border} hover:shadow-lg transition-all`}
                >
                  <div className="text-4xl mb-3">{solution.icon}</div>
                  <h3 className={`text-lg font-semibold ${color.textColor} mb-4`}>
                    {solution.title}
                  </h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industry Solutions
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            We build customized ecosystems for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industriesList.map((industry, idx) => {
              const icons = ["🏥", "✈️", "📦", "🏨", "🚚", "🏗️", "🏭"];
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{icons[idx]}</div>
                  <h3 className="font-semibold text-foreground">{industry}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technology & Integration Partners
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary transition-all text-center flex flex-col items-center justify-center gap-4 min-h-[200px]"
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling!.style.display = "block";
                    }}
                  />
                  <div className="text-4xl hidden" style={{ display: "none" }}>
                    {partner.fallback}
                  </div>
                </div>
                <p className="font-semibold text-foreground text-sm">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DBS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose DBS?
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((reason, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">
                  {["🔗", "📈", "📊", "🎯", "🌍"][idx]}
                </div>
                <h3 className="text-lg font-semibold text-green-900">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/40 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Business Service Flow
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-4">
              An integrated 7-step ecosystem to transform your business
            </p>
          </div>

          <div className="space-y-4">
            {serviceFlow.map((item, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <button
                  onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                  className="w-full p-6 bg-white hover:bg-muted/50 transition-colors text-left flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <ArrowRight
                      className={`w-5 h-5 text-primary transition-transform ${
                        expandedStep === idx ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>

                {expandedStep === idx && (
                  <div className="bg-muted/30 border-t border-border p-6">
                    <ul className="space-y-3">
                      {item.details.map((detail, didx) => (
                        <li key={didx} className="flex items-start gap-3">
                          <span className="text-primary font-bold text-lg">✓</span>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Company
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/about"
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all p-6"
            >
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">About Us</h3>
              <p className="text-blue-700 text-sm">Learn about our story, mission, and values.</p>
            </Link>

            <Link
              to="/careers"
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all p-6"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Careers</h3>
              <p className="text-green-700 text-sm">Join our growing team and be part of innovation.</p>
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg overflow-hidden border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all p-6"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Contact</h3>
              <p className="text-purple-700 text-sm">Get in touch with our team for inquiries.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Transform Your Business Today 🚀
          </h2>
          <p className="text-xl text-white/95 mb-10">
            Contact us for a customized digital roadmap tailored to your industry and goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">DBS Global</h3>
              <p className="text-sm opacity-75">
                25+ years of building sustainable ecosystems through technology and consultancy.
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
                <li>
                  <Link to="/portfolio" className="opacity-75 hover:opacity-100">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="opacity-75 hover:opacity-100">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services" className="opacity-75 hover:opacity-100">
                    Digital Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="opacity-75 hover:opacity-100">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="opacity-75 hover:opacity-100">
                    Security & Compliance
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
                <li>
                  <Link to="/portfolio" className="opacity-75 hover:opacity-100">
                    View Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm opacity-75">
              © {new Date().getFullYear()} DBS Global Technology & Consulting Services. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
