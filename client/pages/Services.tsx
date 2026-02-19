import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const sustainabilityImg = "https://images.pexels.com/photos/27243718/pexels-photo-27243718.jpeg";
const cloudImg = "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg";
const tourismImg = "https://images.pexels.com/photos/17231775/pexels-photo-17231775.jpeg";
const wellnessImg = "https://images.pexels.com/photos/31234753/pexels-photo-31234753.jpeg";
const businessImg = "https://images.pexels.com/photos/6289060/pexels-photo-6289060.jpeg";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Comprehensive solutions across Digital Business, IT & Cloud, Tourism, Wellness, and Business Development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <img src={sustainabilityImg} alt="Digital Business & ESG" className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Digital Business & ESG</h3>
                <p className="text-blue-700 mb-4">Carbon optimization and green tech solutions for the digital economy.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg overflow-hidden border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <img src={cloudImg} alt="IT & Cloud Solutions" className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">☁️</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">IT & Cloud Solutions</h3>
                <p className="text-purple-700 mb-4">Scalable cloud architecture, SaaS, and AI development services.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
              <img src={tourismImg} alt="Adventure & Eco-Tourism" className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🏔️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">Adventure & Eco-Tourism</h3>
                <p className="text-green-700 mb-4">Smart, sustainable destination development and planning.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg overflow-hidden border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <img src={wellnessImg} alt="Wellness Tourism" className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🧘</span>
                </div>
                <h3 className="text-2xl font-bold text-pink-900 mb-4">Wellness Tourism</h3>
                <p className="text-pink-700 mb-4">End-to-end resort facilitation and expert manpower supply.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg overflow-hidden border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all md:col-span-2 lg:col-span-2">
              <img src={businessImg} alt="Strategic Business Development" className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Strategic Business Development</h3>
                <p className="text-amber-700 mb-4">Growth strategies, lifecycle support, and digital transformation for enterprises.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Interested in a specific service?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team to discuss how we can help your organization.
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
