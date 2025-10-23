import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import PagesBanner from "../Shared/PagesBanner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="containerr pt-12">
      <title>Contact Us</title>
      <PagesBanner title="Contact Us" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@tastehub.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Food Street, Culinary City, CC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Hours
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mon-Fri: 9AM-6PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
