import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Services() {
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
      logo: "https://convozen.ai/wp-content/uploads/2024/01/convozen-logo.png",
      fallback: "🤖"
    },
    {
      name: "Crowdstrike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CrowdStrike_logo.svg/512px-CrowdStrike_logo.svg.png",
      fallback: "🛡️"
    },
    {
      name: "Veeam",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Veeam_logo.svg/512px-Veeam_logo.svg.png",
      fallback: "💾"
    },
    {
      name: "ScyllaDB",
      logo: "https://www.scylladb.com/wp-content/themes/scylla/images/logo.png",
      fallback: "🗄️"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
      fallback: "🪟"
    },
    {
      name: "Binge",
      logo: "https://www.binge.com.au/assets/images/binge-logo.png",
      fallback: "🎬"
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
      fallback: "☁️"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
      fallback: "🔍"
    },
    {
      name: "Carayon",
      logo: "https://www.carayon.io/assets/logo.png",
      fallback: "🎯"
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
      description: "Understand your unique business needs",
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
      description: "Establish data collection and management",
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

  const industryFlows = [
    {
      title: "Tourism / Hotels",
      steps: [
        "Website + Booking Engine",
        "WhatsApp Inquiry Automation",
        "Lead Capture Funnel",
        "Performance Marketing Campaigns",
        "Customer Analytics",
        "AI-based Pricing Insights",
      ],
    },
    {
      title: "Healthcare",
      steps: [
        "Patient Portal / App",
        "Appointment Automation",
        "Data Analytics Dashboard",
        "Secure Cloud Storage",
        "AI Diagnosis Assistance",
      ],
    },
    {
      title: "FMCG",
      steps: [
        "Distribution App",
        "Retailer Engagement System",
        "Sales Analytics",
        "Performance Marketing",
        "Demand Forecasting (AI)",
      ],
    },
  ];

  const optionalAddOns = [
    "Dashboard UI Design",
    "Mobile-first Experience",
    "API Integrations",
    "ERP / CRM Systems",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl text-white/95">
              Comprehensive technology, marketing, and cloud solutions designed to accelerate your business growth across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-white">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
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
                className="bg-white rounded-lg p-6 border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">
                  {["🔗", "📈", "📊", "🎯", "🌍"][idx]}
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-snug">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Business Service Flow (Integrated Ecosystem)
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-4">
              A comprehensive 7-step journey to digital transformation
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

      {/* Industry Flow Examples */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/40 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industry Flow Examples
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-4">
              See how our integrated approach works across different sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryFlows.map((flow, idx) => {
              const colors = [
                { bg: "bg-blue-50", border: "border-blue-200", title: "text-blue-900" },
                { bg: "bg-green-50", border: "border-green-200", title: "text-green-900" },
                { bg: "bg-purple-50", border: "border-purple-200", title: "text-purple-900" },
              ];
              const color = colors[idx];

              return (
                <div
                  key={idx}
                  className={`${color.bg} rounded-lg border-2 ${color.border} p-8 hover:shadow-lg transition-all`}
                >
                  <h3 className={`text-2xl font-bold ${color.title} mb-6`}>
                    {flow.title}
                  </h3>
                  <ol className="space-y-3">
                    {flow.steps.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex items-start gap-4">
                        <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-semibold text-sm">
                          {stepIdx + 1}
                        </span>
                        <span className="text-muted-foreground pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Visual Flow (Simplified Representation)
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-lg p-8 border-2 border-primary/20">
            <div className="overflow-x-auto">
              <div className="min-w-max flex items-center gap-4 text-center">
                {[
                  "Business",
                  "Digital Platform",
                  "Cloud Infrastructure",
                  "Data Collection",
                  "Marketing Engine",
                  "AI Insights",
                  "Security Layer",
                  "Growth & Scale",
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="bg-white border-2 border-primary rounded-lg px-6 py-4 whitespace-nowrap font-semibold text-foreground min-w-fit">
                      {step}
                    </div>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Optional Add-ons
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optionalAddOns.map((addon, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">
                    {["🎨", "📱", "🔌", "💼"][idx]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{addon}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Transform Your Business Today 🚀
          </h2>
          <p className="text-xl text-white/95 mb-10">
            Contact us for a customized digital roadmap.
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
