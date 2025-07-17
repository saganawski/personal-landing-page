import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Zap,
  Server,
  Shield,
  Code,
  Mail,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const PrototypeApplication: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("mobile");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const examples = {
    dashboard: {
      title: "Analytics Dashboard",
      description: "Real-time data visualization and reporting",
      features: [
        "Interactive charts",
        "User management",
        "Real-time updates",
        "Export functionality",
      ],
      color: "from-blue-400 to-indigo-500",
      tech: ["React", "TypeScript", "Chart.js", "Node.js"],
    },
    ecommerce: {
      title: "E-commerce Platform",
      description: "Complete online store with payment integration",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment processing",
        "Order management",
      ],
      color: "from-green-400 to-emerald-500",
      tech: ["React", "Stripe API", "MongoDB", "Express"],
    },
    saas: {
      title: "SaaS Management Tool",
      description: "Multi-tenant application with subscription billing",
      features: [
        "User authentication",
        "Subscription tiers",
        "Team collaboration",
        "API integrations",
      ],
      color: "from-purple-400 to-pink-500",
      tech: ["React", "Firebase", "Zustand", "Tailwind"],
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
              Prototype <span className="text-blue-600">Application</span> Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get a fully functional prototype of your web application idea. Perfect for 
              validating concepts, attracting investors, or kickstarting your MVP development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>Build My Prototype</span>
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

      {/* Live Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a real prototype application I've built. This food discovery 
              app demonstrates the kind of functionality you can expect in your prototype.
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

          {/* Demo Container */}
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
                  https://saganawski.github.io/food-swipper-example/
                </div>
              </div>

              {/* Embedded Demo */}
              <div className="flex justify-center">
                <div
                  className={`transition-all duration-300 ${
                    viewMode === "mobile"
                      ? "w-full max-w-sm h-[700px] mx-auto"
                      : "w-full h-[600px]"
                  }`}
                >
                  <iframe
                    src="https://saganawski.github.io/food-swipper-example/"
                    className="w-full h-full border-0 rounded-lg"
                    title="Live Prototype Application Demo"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Mobile Instructions */}
              {viewMode === "mobile" && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                    💡 <strong>Try swiping:</strong> Swipe right (❤️) to like or left (❌) to pass on food options
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://saganawski.github.io/food-swipper-example/",
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
                <span>Request Similar App</span>
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
              Prototype Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the variety of applications I can prototype for you. From analytics dashboards 
              to e-commerce platforms - I'll bring your idea to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(examples).map(([key, example]) => (
              <div
                key={key}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-32 bg-gradient-to-r ${example.color} flex items-center justify-center`}>
                  <Code className="h-12 w-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <div className="space-y-2 mb-4">
                    {example.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {example.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your prototype application comes with everything you need to validate your idea 
              and impress stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Complete Front-end with Back-end API
              </h3>
              <p className="text-gray-600">
                Complete frontend with back-end API integration capability
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Server className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Authentication & API Integration
              </h3>
              <p className="text-gray-600">
                User management and back-end API integration
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Responsive Design
              </h3>
              <p className="text-gray-600">
                Works perfectly on all devices and screen sizes
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-orange-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Security Best Practices
              </h3>
              <p className="text-gray-600">
                Built with modern security standards in mind
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-red-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Modern UI/UX
              </h3>
              <p className="text-gray-600">
                Clean, intuitive interface that users will love
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-yellow-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Source Code Included
              </h3>
              <p className="text-gray-600">
                Full access to all code with documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One fixed price for a complete prototype application. No hidden fees, 
              no surprises - just great value.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-600">
              <div className="bg-blue-600 text-white text-center py-4">
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500 text-sm font-medium mb-2">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold">Prototype Application</h3>
              </div>
              
              <div className="p-8 text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">$600</div>
                <p className="text-gray-600 mb-8">One-time payment</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Complete front-end with back-end API integration capability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">User authentication & API integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Modern UI/UX design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">API integration ready</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">14-day delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Source code included</span>
                  </div>
                </div>
                
                <button
                  onClick={scrollToContact}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Development Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Discovery Call
                  </h4>
                  <p className="text-gray-600">
                    We discuss your idea, requirements, and goals
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Design & Planning
                  </h4>
                  <p className="text-gray-600">
                    I create wireframes and technical specifications
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Development
                  </h4>
                  <p className="text-gray-600">
                    I build your prototype with regular updates
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    4
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Delivery & Launch
                  </h4>
                  <p className="text-gray-600">
                    You receive your prototype ready to demo
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
            Ready to Build Your Prototype?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let's bring your application idea to life with a fully functional prototype. 
            Perfect for validation, investment, or MVP development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/#contact")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <span>Contact Me Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "mailto:your-email@example.com?subject=Prototype Application Request",
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

export default PrototypeApplication;