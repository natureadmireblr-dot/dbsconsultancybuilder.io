import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronUp, Mail, Globe, Phone, Check } from "lucide-react";
import { useState } from "react";

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const jobCategories = [
    {
      category: "HR & People Operations",
      icon: "👥",
      jobs: [
        {
          id: "hr-1",
          title: "HR Manager",
          description: "Manage recruitment, policies, talent acquisition, and employee engagement.",
          responsibilities: [
            "Recruit engineers, consultants, and sales staff",
            "Handle training and performance management",
            "Coordinate interviews and onboarding",
            "Manage employee engagement and retention"
          ],
          requirements: "Senior HR leaders oversee workforce strategy, compliance, and employee development across the organization.",
          experience: "2+ Years"
        }
      ]
    },
    {
      category: "Customer Success & CRM",
      icon: "💼",
      jobs: [
        {
          id: "crm-1",
          title: "Customer Success & CRM Executives",
          description: "Implement CRM systems and track customer journeys and partnerships.",
          responsibilities: [
            "Implement and manage CRM systems",
            "Track leads and customer journeys",
            "Manage partnerships and client relationships",
            "Monitor customer satisfaction metrics"
          ],
          requirements: "Experience with CRM tools and customer relationship management",
          experience: "1–2 Years"
        }
      ]
    },
    {
      category: "IT Positions",
      icon: "💻",
      jobs: [
        {
          id: "it-1",
          title: "Prompt Engineer",
          description: "Design and optimize AI prompts for automation, chatbots, and AI-driven SaaS products.",
          responsibilities: [
            "Design and optimize AI prompts for various use cases",
            "Work closely with AI models to improve accuracy",
            "Improve workflow automation and user experience",
            "Assist in integrating AI tools into enterprise applications"
          ],
          skills: [
            "AI tools and LLMs",
            "Prompt frameworks",
            "Python / AI APIs",
            "Analytical thinking"
          ],
          experience: "1–2 Years"
        },
        {
          id: "it-2",
          title: "Full Stack Developer",
          description: "Develop and maintain web applications and SaaS platforms with scalable architecture.",
          responsibilities: [
            "Develop and maintain web applications and SaaS platforms",
            "Build scalable backend systems and responsive frontend interfaces",
            "Work on APIs, database management, and application security",
            "Collaborate with product teams on feature development"
          ],
          skills: [
            "JavaScript, React, Node.js",
            "Backend frameworks (Python / Java / Node)",
            "Database systems (PostgreSQL / MongoDB)",
            "Git and version control"
          ],
          experience: "1–2 Years"
        },
        {
          id: "it-3",
          title: "AWS / Cloud Engineer",
          description: "Manage cloud infrastructure, deployments, and DevOps pipelines.",
          responsibilities: [
            "Manage cloud infrastructure and deployments",
            "Configure scalable and secure cloud environments",
            "Implement DevOps pipelines and system monitoring",
            "Ensure application performance and reliability"
          ],
          skills: [
            "AWS services (EC2, S3, Lambda)",
            "Docker / Kubernetes",
            "CI/CD pipelines",
            "Infrastructure as Code"
          ],
          experience: "1–2 Years"
        },
        {
          id: "it-4",
          title: "UI / UX Designer",
          description: "Design intuitive user interfaces for web and mobile platforms.",
          responsibilities: [
            "Design intuitive user interfaces for web and mobile",
            "Improve user journeys for SaaS products",
            "Conduct user research and usability testing",
            "Collaborate with developers and product teams"
          ],
          skills: [
            "Figma / Adobe XD",
            "Wireframing and prototyping",
            "User research and usability testing",
            "Design systems and components"
          ],
          experience: "1–2 Years"
        }
      ]
    },
    {
      category: "Business Positions",
      icon: "📊",
      jobs: [
        {
          id: "biz-1",
          title: "Sales Executive (IT)",
          description: "Identify potential clients for technology and consulting services.",
          responsibilities: [
            "Identify potential clients for technology services",
            "Generate leads and manage client relationships",
            "Present solutions in AI, SaaS, cloud, and ecommerce",
            "Close deals and achieve sales targets"
          ],
          skills: [
            "IT sales expertise",
            "Client acquisition",
            "Communication and negotiation",
            "CRM tools"
          ],
          experience: "1–2 Years"
        },
        {
          id: "biz-2",
          title: "Business Development Manager (Vendor Management)",
          description: "Develop strategic partnerships with vendors and technology providers.",
          responsibilities: [
            "Develop strategic partnerships with vendors",
            "Manage vendor relationships and collaborations",
            "Identify growth opportunities and new markets",
            "Negotiate contracts and service agreements"
          ],
          skills: [
            "Partnership development",
            "Vendor coordination",
            "Strategic planning",
            "Negotiation skills"
          ],
          experience: "2+ Years"
        },
        {
          id: "biz-3",
          title: "Digital Marketing / Consultant",
          description: "Plan and execute digital marketing campaigns across channels.",
          responsibilities: [
            "Plan and execute digital marketing campaigns",
            "Manage SEO, SEM, and social media strategies",
            "Analyze marketing performance and optimize campaigns",
            "Support branding and communication initiatives"
          ],
          skills: [
            "SEO / SEM",
            "Social media marketing",
            "Analytics tools (Google Analytics, etc.)",
            "Content marketing"
          ],
          experience: "1–2 Years"
        },
        {
          id: "biz-4",
          title: "Content Writers / Developers",
          description: "Create engaging content for websites, blogs, and marketing materials.",
          responsibilities: [
            "Create engaging content for websites and blogs",
            "Write technology-focused content on AI, SaaS, and cloud",
            "Support branding and communication initiatives",
            "Develop documentation and guides"
          ],
          skills: [
            "Technical writing",
            "Content strategy",
            "Research and storytelling",
            "SEO knowledge"
          ],
          experience: "1–2 Years"
        },
        {
          id: "biz-5",
          title: "Graphic Designer (Video & Images)",
          description: "Create visual designs for marketing, social media, and branding.",
          responsibilities: [
            "Create visual designs for marketing materials",
            "Produce videos, infographics, and promotional content",
            "Work with marketing and product teams",
            "Manage brand consistency across platforms"
          ],
          skills: [
            "Adobe Photoshop / Illustrator",
            "Video editing tools (Premiere Pro, After Effects)",
            "Motion graphics",
            "Canva and design tools"
          ],
          experience: "1–2 Years"
        }
      ]
    }
  ];

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We're Hiring
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Join Our Growing Team
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              AI | Machine Learning | Ecommerce | SaaS
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              DBS Global Technology & Consultancy Services is building innovative digital solutions across AI, SaaS platforms, cloud infrastructure, and ecommerce ecosystems. We are looking for passionate professionals to join our growing technology and business teams.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 space-y-3">
              <p className="flex items-center gap-2 text-foreground font-semibold">
                📍 <span>Location: Bengaluru</span>
              </p>
              <p className="flex items-center gap-2 text-foreground font-semibold">
                💼 <span>Work Type: Hybrid</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings by Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          {jobCategories.map((categoryGroup, categoryIdx) => (
            <div key={categoryIdx} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{categoryGroup.icon}</span>
                <h2 className="text-3xl font-bold text-foreground">
                  {categoryGroup.category}
                </h2>
              </div>

              <div className="space-y-4">
                {categoryGroup.jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
                  >
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors flex items-start justify-between"
                    >
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {job.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {job.description}
                        </p>
                      </div>
                      <div className="ml-4 mt-1">
                        {expandedJob === job.id ? (
                          <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </button>

                    {/* Expanded Job Details */}
                    {expandedJob === job.id && (
                      <div className="px-6 pb-6 bg-gray-50 border-t border-border space-y-6">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-lg">📋</span> Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        {job.skills && (
                          <div>
                            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                              <span className="text-lg">⭐</span> Required Skills
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {job.skills.map((skill, idx) => (
                                <p key={idx} className="text-muted-foreground">
                                  • {skill}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Requirements */}
                        <div>
                          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-lg">📝</span> About This Role
                          </h4>
                          <p className="text-muted-foreground">{job.requirements}</p>
                        </div>

                        {/* Experience */}
                        <div className="flex items-center gap-2 text-foreground font-semibold">
                          <span className="text-lg">📈</span>
                          <span>Experience Required: {job.experience}</span>
                        </div>

                        {/* Apply Button */}
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                        >
                          Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Application Details
          </h2>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-8 space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:hr@dbsglobaltech.com"
                className="flex items-start gap-4 hover:bg-white/50 p-4 rounded-lg transition-colors"
              >
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">hr@dbsglobaltech.com</p>
                </div>
              </a>

              <a
                href="https://www.dbsglobaltech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:bg-white/50 p-4 rounded-lg transition-colors"
              >
                <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Website</p>
                  <p className="text-muted-foreground">www.dbsglobaltech.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Contact</p>
                  <p className="text-muted-foreground">8618751811 / 9108219929</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8 text-center">
            <p className="flex items-center justify-center gap-2 text-lg font-semibold text-foreground mb-3">
              <Check className="w-6 h-6 text-green-600" />
              Equal Employment Opportunity Provider
            </p>
            <p className="text-muted-foreground">
              DBS Global Technology & Consultancy Services welcomes talented professionals who are passionate about innovation, technology, and global impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Choose a position above and apply now, or contact us directly with your profile.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
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
              <h4 className="font-semibold mb-4">Opportunities</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <Link to="/careers" className="hover:opacity-100 transition-opacity">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Email: contact@dbsglobaltech.com / dbsconsultancyservices@gmail.com</li>
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
