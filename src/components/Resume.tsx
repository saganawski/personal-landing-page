import React, { useState, useEffect } from "react";
import {
  Download,
  ArrowLeft,
  Eye,
  ExternalLink,
  FileText,
  Loader,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

const Resume: React.FC = () => {
  const [pdfError, setPdfError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Use Vite's base URL from import.meta.env
  const baseUrl = import.meta.env.BASE_URL || "/";
  const resumePath = `${baseUrl}KennethSaganski-resume.pdf`;

  useEffect(() => {
    // Check if PDF exists
    fetch(resumePath, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          setPdfError(true);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setPdfError(true);
        setIsLoading(false);
      });
  }, [resumePath]);

  const handleDownload = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch(resumePath);
      if (!response.ok) throw new Error("PDF not found");

      // Convert to blob
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = "KennethSaganski-resume.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(resumePath, "_blank");
    }
  };

  const handleViewFullscreen = () => {
    window.open(resumePath, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    
    if (location.pathname !== "/") {
      // If not on home page, navigate to home with hash
      window.location.href = `${baseUrl}#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                  <span className="text-sm text-gray-600 ml-4">
                    KennethSaganski-resume.pdf
                  </span>
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
            <div
              className="relative bg-gray-100"
              style={{ minHeight: "800px" }}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <Loader className="h-12 w-12 mx-auto mb-4 text-blue-600 animate-spin" />
                    <p className="text-gray-600">Loading resume...</p>
                  </div>
                </div>
              )}

              {!isLoading && !pdfError && (
                <>
                  <iframe
                    src={resumePath}
                    title="Kenneth Saganski Resume"
                    className="w-full h-full border-0"
                    style={{ minHeight: "800px" }}
                    onError={() => setPdfError(true)}
                  />

                  {/* Mobile fallback message */}
                  <div className="md:hidden absolute bottom-0 left-0 right-0 bg-blue-50 border-t border-blue-200 p-4">
                    <p className="text-sm text-blue-800 text-center">
                      PDF preview may not work on mobile devices.
                      <button
                        onClick={handleDownload}
                        className="underline ml-1 font-medium"
                      >
                        Download the PDF
                      </button>{" "}
                      to view it.
                    </p>
                  </div>
                </>
              )}

              {!isLoading && pdfError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center p-8 max-w-md">
                    <div className="text-gray-400 mb-4">
                      <FileText className="h-16 w-16 mx-auto mb-4" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Resume Preview Unavailable
                    </h3>
                    <p className="text-gray-600 mb-6">
                      The PDF preview couldn't be loaded. This might be due to
                      browser restrictions or the file being temporarily
                      unavailable.
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={handleDownload}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        <Download className="h-5 w-5" />
                        <span>Download Resume</span>
                      </button>
                      <button
                        onClick={handleViewFullscreen}
                        className="w-full inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Try Opening in New Tab</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Interested in working together? I'd love to hear about your
                project and discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <span>Contact Me</span>
                </button>
                <button
                  onClick={() => scrollToSection("services")}
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

