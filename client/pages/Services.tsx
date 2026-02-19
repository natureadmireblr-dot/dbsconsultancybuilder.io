import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Comprehensive solutions across Digital Business, IT & Cloud, Tourism, Wellness, and Business Development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-4">Digital Business & ESG</h3>
              <p className="text-muted-foreground mb-4">Carbon optimization and green tech solutions for the digital economy.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-4">IT & Cloud Solutions</h3>
              <p className="text-muted-foreground mb-4">Scalable cloud architecture, SaaS, and AI development services.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-4">Adventure & Eco-Tourism</h3>
              <p className="text-muted-foreground mb-4">Smart, sustainable destination development and planning.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-4">Wellness Tourism</h3>
              <p className="text-muted-foreground mb-4">End-to-end resort facilitation and expert manpower supply.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary hover:shadow-lg transition-all md:col-span-2 lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Business Development</h3>
              <p className="text-muted-foreground mb-4">Growth strategies, lifecycle support, and digital transformation for enterprises.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
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
