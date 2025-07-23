import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Zap,
  Search,
  Mail,
  Star,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const FreeLandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedExample, setSelectedExample] = useState("restaurant");
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const examples = {
    business: {
      title: "TechSolutions Pro",
      description: "Professional services for growing businesses",
      features: [
        "Service showcase",
        "Team profiles",
        "Case studies",
        "Contact integration",
      ],
      color: "from-indigo-400 to-blue-500",
    },
    restaurant: {
      title: "Bella Vista Restaurant",
      description: "Authentic Italian cuisine in the heart of downtown",
      features: [
        "Online reservations",
        "Menu showcase",
        "Chef profiles",
        "Customer reviews",
      ],
      color: "from-orange-400 to-red-500",
    },

    portfolio: {
      title: "Sarah Chen Design",
      description: "Creative solutions for modern brands",
      features: [
        "Project gallery",
        "About section",
        "Client testimonials",
        "Contact form",
      ],
      color: "from-pink-400 to-rose-500",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 mx-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Your <span className="text-blue-600">Free</span> Landing Page
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I'll create a stunning, professional landing page for your
              business absolutely free. No catches, no hidden fees - just a
              beautiful website to help you grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("examples")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                See Examples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Example Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a real landing page I've created. Toggle between
              desktop and mobile views to see responsive design in action.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode("desktop")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                  viewMode === "desktop"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`}
              >
                <Globe className="h-4 w-4" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewMode("mobile")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                  viewMode === "mobile"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`}
              >
                <Smartphone className="h-4 w-4" />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Live Demo Container */}
          <div className="bg-gray-100 rounded-2xl p-8 shadow-xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Browser Bar */}
              <div className="bg-gray-200 px-4 py-2 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
                  https://saganawski.github.io/website-upgrade-demo/
                </div>
              </div>

              {/* Embedded Demo */}
              <div className="flex justify-center">
                <div
                  className={`transition-all duration-300 ${
                    viewMode === "mobile"
                      ? "w-80 h-[600px]"
                      : "w-full h-[600px]"
                  }`}
                >
                  <iframe
                    src="https://saganawski.github.io/website-upgrade-demo/"
                    className="w-full h-full border-0"
                    title="Live Landing Page Demo"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://saganawski.github.io/website-upgrade-demo/",
                    "_blank",
                  )
                }
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <ExternalLink className="h-5 w-5" />
                <span>View Full Screen</span>
              </button>
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Request Similar Page</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Gallery */}
      <section id="examples" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Landing Page Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need a professional business landing page, a
              restaurant website, a personal blog, or a service showcase - I can
              create the perfect design for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(examples).map(([key, example]) => (
              <div
                key={key}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-32 bg-gradient-to-r ${example.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <div className="space-y-2">
                    {example.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your free landing page comes with everything you need to establish
              a professional online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fully Responsive
              </h3>
              <p className="text-gray-600">
                Looks perfect on desktop, tablet, and mobile devices
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Optimized for speed and performance
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                SEO Optimized
              </h3>
              <p className="text-gray-600">
                Built with search engine optimization in mind
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-orange-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contact Form
              </h3>
              <p className="text-gray-600">
                Integrated contact form to capture leads
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-red-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Professional Design
              </h3>
              <p className="text-gray-600">
                Modern, clean design that builds trust
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-yellow-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Custom Content
              </h3>
              <p className="text-gray-600">
                Tailored to your business and brand
              </p>
            </div>
          </div>

          <div className="mt-16 bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-400">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Important Note About Hosting & Domain
              </h3>
              <p className="text-gray-700 max-w-4xl mx-auto">
                <strong>What I provide:</strong> I create your beautiful landing
                page files and code.
                <br />
                <strong>What you'll need separately:</strong> Web hosting (like
                a parking space for your website) and a domain name (like
                yourname.com). These typically cost $10-15/month combined. I can
                recommend affordable options and help you get set up!
              </p>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Tell Me About Your Business
                  </h4>
                  <p className="text-gray-600">
                    Share your business details, goals, and preferences
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    I Build Your Landing Page
                  </h4>
                  <p className="text-gray-600">
                    Within 7 days, I'll create your custom landing page
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Go Live & Grow
                  </h4>
                  <p className="text-gray-600">
                    Launch your page and start attracting customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact me today and let's create an amazing landing page for your
            business. It's completely free with no strings attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const baseUrl = import.meta.env.BASE_URL || '/';
                window.location.href = `${baseUrl}#contact`;
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <span>Contact Me Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "mailto:your-email@example.com?subject=Free Landing Page Request",
                  "_blank",
                )
              }
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email Me</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeLandingPage;
