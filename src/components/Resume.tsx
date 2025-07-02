import React from 'react';
import { Download, ArrowLeft, Eye, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';

const Resume: React.FC = () => {
  const resumePath = '/KennethSaganski-resume.pdf';
  const location = useLocation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'KennethSaganski-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewFullscreen = () => {
    window.open(resumePath, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resume
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Full-Stack Developer with expertise in modern web technologies, 
              scalable application architecture, and user experience design.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Download className="h-5 w-5" />
                <span>Download PDF</span>
              </button>
              
              <button
                onClick={handleViewFullscreen}
                className="inline-flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Open in New Tab</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Viewer Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header with Actions */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600 ml-4">KennethSaganski-resume.pdf</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleViewFullscreen}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Full Screen</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="relative" style={{ height: '800px' }}>
              <iframe
                src={resumePath}
                title="Kenneth Saganski Resume"
                className="w-full h-full border-0"
                style={{ minHeight: '800px' }}
              />
              
              {/* Fallback message for browsers that don't support PDF viewing */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-center p-8" style={{ zIndex: -1 }}>
                <div>
                  <div className="text-gray-400 mb-4">
                    <Eye className="h-16 w-16 mx-auto mb-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    PDF Preview Not Available
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your browser doesn't support PDF preview. Please download the file to view it.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Interested in working together? I'd love to hear about your project 
                and discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <span>Contact Me</span>
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="inline-flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
                >
                  <span>View Services</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;