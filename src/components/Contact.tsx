import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Kenneth Saganski landing page contact form",
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Have a question about my services? I'd
            love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:kennethSaganski+dev@gmail.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    kennethSaganski+dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a
                    href="tel:224-247-9156"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    +1 (224) 247-9156
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Grand Rapids, MI</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/saganawski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform"
                >
                  <Github className="h-6 w-6 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ken-saganski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform"
                >
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </a>
                <a
                  href="https://youtube.com/channel/UCKQVgktV_tdPoJbQj2KNpkw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform"
                >
                  <Youtube className="h-6 w-6 text-red-600" />
                </a>
                <a
                  href="https://instagram.com/nullpointninja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform"
                >
                  <Instagram className="h-6 w-6 text-pink-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
                  <p className="text-green-800 text-center">
                    ✅ Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
                  <p className="text-red-800 text-center">
                    ❌ Failed to send message. Please try again or contact me
                    directly at kennethSaganski+dev@gmail.com
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
