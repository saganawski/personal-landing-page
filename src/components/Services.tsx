import React from 'react';
import { Layout, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need a simple landing page or a full-featured application, 
            I'm here to help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Free Landing Page Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-green-100 rounded-lg mr-4">
                <Layout className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Free Landing Page</h3>
                <p className="text-green-600 font-semibold text-lg">Completely Free</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              I'll create a beautiful, responsive landing page for your business or project. 
              Perfect for showcasing your services, capturing leads, or establishing your online presence.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Fully responsive design</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Modern, professional styling</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Contact form integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">SEO optimized</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">7-day delivery</span>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <span>Get Your Free Landing Page</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Prototype Application Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            
            <div className="flex items-center mb-6">
              <div className="p-4 bg-blue-100 rounded-lg mr-4">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Prototype Application</h3>
                <p className="text-blue-600 font-semibold text-lg">$600</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Get a fully functional prototype of your web application idea. Perfect for 
              validating concepts, attracting investors, or kickstarting your MVP development.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-700">Full-stack web application</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-700">User authentication & database</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-700">Modern UI/UX design</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-700">API integration ready</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-700">14-day delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-700">Source code included</span>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <span>Build My Prototype</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need something different? I also offer custom development services.
          </p>
          <button 
            onClick={scrollToContact}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Let's discuss your project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;