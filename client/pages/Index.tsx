import Navigation from "@/components/Navigation";
import { ArrowRight, Zap, Cloud, BarChart3, Megaphone, Lock, ChevronLeft, ChevronRight, Lightbulb, Shield, Zap as ZapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Index() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "https://images.pexels.com/photos/7653473/pexels-photo-7653473.jpeg",
      alt: "Three colleagues working together on laptops in a bright, modern office space",
    },
    {
      url: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg",
      alt: "Team of developers working together on computers in a modern tech office",
    },
    {
      url: "https://images.pexels.com/photos/8441820/pexels-photo-8441820.jpeg",
      alt: "Consultant discussing financial plans with clients in a modern office setting",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

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

      {/* Premium AI Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        {/* Subtle gradient accent bars */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 mb-6 leading-tight">
                AI That Drives Real Business Growth
              </h1>
              <p className="text-xl text-slate-700 mb-12 leading-relaxed font-light">
                We simplify operations, optimize decisions, and unlock revenue opportunities through intelligent systems.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">✓ Revenue Growth</div>
                  <p className="text-slate-600 text-sm">Increase revenue through AI optimization</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-bold text-purple-600 uppercase tracking-wider">✓ Reduce Complexity</div>
                  <p className="text-slate-600 text-sm">Cut operational costs and simplify workflows</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">✓ Scale Faster</div>
                  <p className="text-slate-600 text-sm">Grow efficiently with intelligent automation</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition duration-300 flex items-center justify-center gap-2"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right Dashboard Visual */}
            <div className="relative hidden lg:block">
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-1 shadow-2xl border border-blue-100/50">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-2xl transition duration-500"></div>

                {/* Dashboard Content */}
                <div className="relative bg-white rounded-2xl p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">AI Analytics Dashboard</h3>
                      <p className="text-xs text-slate-500">Real-time insights</p>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200/50">
                      <p className="text-xs text-slate-600 mb-2">Revenue Impact</p>
                      <p className="text-2xl font-bold text-blue-600">+34%</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200/50">
                      <p className="text-xs text-slate-600 mb-2">Efficiency Gain</p>
                      <p className="text-2xl font-bold text-purple-600">+28%</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200/50">
                      <p className="text-xs text-slate-600 mb-2">Cost Reduction</p>
                      <p className="text-2xl font-bold text-green-600">-42%</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200/50">
                      <p className="text-xs text-slate-600 mb-2">Time Saved</p>
                      <p className="text-2xl font-bold text-orange-600">-56%</p>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-gradient-to-b from-blue-50 to-transparent rounded-lg p-4 border border-blue-100">
                    <div className="flex items-end justify-between h-20 gap-2">
                      <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-70" style={{ height: "45%" }}></div>
                      <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-70" style={{ height: "65%" }}></div>
                      <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-70" style={{ height: "82%" }}></div>
                      <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{ height: "100%" }}></div>
                      <div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t" style={{ height: "88%" }}></div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500">Updated 2 minutes ago</p>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Who We Are Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with gradient and glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900"></div>

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Who We Are
            </h2>
            <p className="text-xl sm:text-2xl text-blue-200 font-light">
              Driven by innovation. Built on trust.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Story Card */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 group-hover:border-blue-400/50 transition duration-500">
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    DBS Global Technology & Consulting Services is a comprehensive digital transformation partner delivering scalable, secure, and performance-driven solutions for modern businesses. We combine cutting-edge technology with strategic consulting to empower organizations worldwide.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    We help organizations across Healthcare, Tourism, FMCG, Hospitality, Transportation, Construction, and Industrial sectors streamline operations, improve customer engagement, and drive measurable growth through AI, cloud infrastructure, and data-driven insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <div className="group relative bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Innovation</h4>
                    <p className="text-sm text-white/70">Pioneering solutions</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Trust</h4>
                    <p className="text-sm text-white/70">Security first approach</p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <ZapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Impact</h4>
                    <p className="text-sm text-white/70">Measurable results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20 text-center group-hover:border-blue-400/50 transition duration-500">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                  25+
                </div>
                <p className="text-white/80 font-semibold">Years of Experience</p>
                <p className="text-white/60 text-sm mt-2">Building excellence globally</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20 text-center group-hover:border-purple-400/50 transition duration-500">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  500+
                </div>
                <p className="text-white/80 font-semibold">Clients Served</p>
                <p className="text-white/60 text-sm mt-2">Across multiple industries</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20 text-center group-hover:border-green-400/50 transition duration-500">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-3">
                  40+
                </div>
                <p className="text-white/80 font-semibold">Global Presence</p>
                <p className="text-white/60 text-sm mt-2">Countries with dedicated teams</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Learn More About Our Impact <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Core Solutions */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

        {/* Subtle decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              Our Core Solutions
            </h2>
            <p className="text-2xl text-blue-600 font-semibold mb-6">
              Powering Business Growth Through Intelligent Systems
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We don't just offer services — we build integrated ecosystems that simplify operations, unlock insights, and accelerate revenue.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Solution 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-400 shadow-sm hover:shadow-lg transition duration-500 h-full">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2">
                  <span className="text-blue-600 font-black">01</span>
                  <span>Digital Experience & Development</span>
                </h3>
                <p className="text-sm text-slate-700 mb-4 font-semibold">Designing seamless digital platforms that convert and scale.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-blue-500 font-bold">→</span>
                    Website Design & Development
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-blue-500 font-bold">→</span>
                    Mobile Applications (iOS / Android)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-blue-500 font-bold">→</span>
                    UI/UX Experience Design
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-cyan-100 hover:border-cyan-400 shadow-sm hover:shadow-lg transition duration-500 h-full">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2">
                  <span className="text-cyan-600 font-black">02</span>
                  <span>Cloud & Scalable Infrastructure</span>
                </h3>
                <p className="text-sm text-slate-700 mb-4 font-semibold">Building resilient, high-performance systems for modern businesses.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-cyan-500 font-bold">→</span>
                    Cloud Hosting & Infrastructure
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-cyan-500 font-bold">→</span>
                    AWS & Google Cloud Solutions
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-cyan-500 font-bold">→</span>
                    Cloud Telephony Systems
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-cyan-500 font-bold">→</span>
                    Backup & Disaster Recovery
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-purple-100 hover:border-purple-400 shadow-sm hover:shadow-lg transition duration-500 h-full">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2">
                  <span className="text-purple-600 font-black">03</span>
                  <span>Data, AI & Intelligence</span>
                </h3>
                <p className="text-sm text-slate-700 mb-4 font-semibold">Turning data into decisions and decisions into revenue.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-purple-500 font-bold">→</span>
                    Data Analytics & Business Intelligence
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-purple-500 font-bold">→</span>
                    AI / Machine Learning Solutions
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-purple-500 font-bold">→</span>
                    Predictive Insights & Automation
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-green-100 hover:border-green-400 shadow-sm hover:shadow-lg transition duration-500 h-full">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2">
                  <span className="text-green-600 font-black">04</span>
                  <span>Marketing & Revenue Growth</span>
                </h3>
                <p className="text-sm text-slate-700 mb-4 font-semibold">Driving measurable growth through performance-driven strategies.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 font-bold">→</span>
                    Digital & Performance Marketing
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 font-bold">→</span>
                    Lead Generation Systems
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 font-bold">→</span>
                    WhatsApp Automation & Engagement
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-red-100 hover:border-red-400 shadow-sm hover:shadow-lg transition duration-500 h-full">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2">
                  <span className="text-red-600 font-black">05</span>
                  <span>Security & Trust Framework</span>
                </h3>
                <p className="text-sm text-slate-700 mb-4 font-semibold">Ensuring business continuity with enterprise-grade protection.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-red-500 font-bold">→</span>
                    Cybersecurity Solutions
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-red-500 font-bold">→</span>
                    Endpoint Protection
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-red-500 font-bold">→</span>
                    Threat Intelligence & Monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Explore All Solutions <ArrowRight className="w-4 h-4" />
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
