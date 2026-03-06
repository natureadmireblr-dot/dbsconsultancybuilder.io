import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, MapPin, Leaf, Heart, Star, Gift } from "lucide-react";

export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      title: "eSmart Cart Vendors Platform",
      subtitle: "AI & GPS Enabled Smart Vendor Network",
      description: "A digital platform that empowers street vendors, peanut carts, micro food vendors, and small entrepreneurs with technology to run their businesses more efficiently and reach more customers.",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-400",
      icon: "🛒",
      features: [
        "📍 GPS-enabled vendor discovery",
        "🤖 AI-based demand prediction",
        "📱 Mobile vendor app",
        "💳 Digital payments (UPI / wallets)",
        "🛒 Small ecommerce integration",
        "📊 Vendor analytics dashboard",
        "🧾 Digital inventory management"
      ],
      impact: "Supports street vendors and micro-entrepreneurs in building sustainable micro-commerce ecosystem"
    },
    {
      id: 2,
      title: "Digital Adventure Pass",
      subtitle: "Adventure Activity Digital Management System",
      description: "A SaaS platform designed for adventure companies, camps, tour operators, and outdoor events to manage participants digitally.",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-400",
      icon: "🏔️",
      features: [
        "📄 Digital consent & liability waiver forms",
        "📷 Media consent forms",
        "🧾 Digital participant registration",
        "🏅 E-certificates and achievement badges",
        "🩸 Emergency contact & health info",
        "📱 QR-based participant check-in",
        "📊 Organizer dashboard"
      ],
      users: "Adventure companies • Camps & expeditions • Schools & corporate programs"
    },
    {
      id: 3,
      title: "Nature Admire Super App",
      subtitle: "\"Trip Buddy\" - Community Travel Platform",
      description: "A community-based travel and adventure platform for people who love travel, trekking, camping, wildlife, and experiences.",
      color: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      hoverColor: "hover:border-amber-400",
      icon: "🌍",
      features: [
        "🌍 Find travel companions (Trip Buddy)",
        "🏕 Book camps, treks, and adventure events",
        "🧭 AI travel recommendations",
        "📍 Destination discovery",
        "🎒 Equipment rental listings",
        "👥 Travel community groups",
        "📸 Experience sharing"
      ]
    },
    {
      id: 4,
      title: "Nature Admire Business App",
      subtitle: "Adventure Company Operations & Ecommerce",
      description: "An integrated digital system for Nature Admire and partner operators to manage all operations.",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-400",
      icon: "💼",
      features: [
        "🧾 Booking management",
        "🧑‍🤝‍🧑 Customer CRM",
        "🛒 Ecommerce store (gear & experiences)",
        "📊 Event analytics",
        "🧑‍🏫 School & corporate program management",
        "📢 Marketing automation"
      ]
    },
    {
      id: 5,
      title: "Live Life Well",
      subtitle: "Mental Wellness Marketplace",
      description: "A digital aggregator platform connecting wellness professionals with people seeking guidance.",
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      hoverColor: "hover:border-pink-400",
      icon: "🧘",
      features: [
        "📅 Appointment booking",
        "📹 Online consultations",
        "📚 Wellness workshops",
        "🧘 Community programs",
        "⭐ Ratings & reviews",
        "👥 Network of: Psychologists, Ayurvedic doctors, Dieticians, Life coaches, Meditation trainers, Tarot readers, Spiritual healers"
      ]
    },
    {
      id: 6,
      title: "Live Life Well – Astro Care",
      subtitle: "Premium Astrology Services Platform",
      description: "A premium astrology services platform offering trusted astro guidance and consultation.",
      color: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      hoverColor: "hover:border-indigo-400",
      icon: "⭐",
      features: [
        "🔮 Personal horoscope analysis",
        "💼 Career & relationship guidance",
        "🔢 Numerology services",
        "🃏 Tarot readings",
        "🙏 Vedic astrology consultations",
        "🎉 Astro wellness events"
      ]
    },
    {
      id: 7,
      title: "Mompreneurs Network",
      subtitle: "Women Entrepreneurship Platform",
      description: "A digital ecosystem supporting women entrepreneurs from urban and rural areas.",
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      hoverColor: "hover:border-red-400",
      icon: "👩‍💼",
      features: [
        "🛍 Ecommerce marketplace for women-led products",
        "🎓 Entrepreneurship training programs",
        "🤝 Networking community",
        "📢 Promotion & marketing support",
        "💰 Micro funding opportunities"
      ],
      impact: "Economic empowerment of women entrepreneurs across urban and rural areas"
    },
    {
      id: 8,
      title: "OneRupee Magic",
      subtitle: "Social Impact Initiative",
      description: "A non-profit social initiative helping street vendors and micro entrepreneurs build better livelihoods.",
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-orange-400",
      icon: "💝",
      features: [
        "💝 Daily ₹1 donations from supporters",
        "🛒 Fund vendor carts & equipment",
        "🏗️ Small business infrastructure",
        "📚 Education for vendor families",
        "📱 Digital onboarding to eSmart Cart"
      ],
      impact: "Vision: 'Small contributions creating big changes.' Supporting sustainable livelihoods for street vendors"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              DBS Global's ecosystem of innovative platforms transforming commerce, wellness, travel, and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolio.map((product) => (
              <div
                key={product.id}
                className={`bg-gradient-to-br ${product.color} rounded-lg overflow-hidden border-2 ${product.borderColor} ${product.hoverColor} hover:shadow-lg transition-all`}
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-2xl">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-4">{product.subtitle}</p>
                  <p className="text-gray-700 mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <p key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="mr-2">{feature.split(' ')[0]}</span>
                        <span>{feature.substring(feature.indexOf(' ') + 1)}</span>
                      </p>
                    ))}
                  </div>

                  {/* Users or Impact */}
                  {product.users && (
                    <p className="text-sm font-semibold text-gray-900 mb-4">
                      <span className="block mb-2">Users:</span>
                      {product.users}
                    </p>
                  )}
                  {product.impact && (
                    <p className="text-sm text-gray-700 italic border-l-2 border-primary pl-4 mb-6">
                      {product.impact}
                    </p>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Explore More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Explore Our Solutions?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Partner with DBS Global to transform your business with innovative technology platforms.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
                  <Link to="/about" className="opacity-75 hover:opacity-100 transition-opacity">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="opacity-75 hover:opacity-100 transition-opacity">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="opacity-75 hover:opacity-100 transition-opacity">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>eSmart Cart</li>
                <li>Nature Admire</li>
                <li>Live Life Well</li>
                <li>Mompreneurs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Email: info@dbsglobal.com</li>
                <li>
                  <Link to="/contact" className="hover:opacity-100 transition-opacity">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="text-center text-sm opacity-75">
              © {new Date().getFullYear()} DBS Global Technology & Consultancy Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
