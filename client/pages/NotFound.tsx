import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-primary mb-4">
              404
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist. Let us help you find what you need.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
