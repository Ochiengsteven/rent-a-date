/* eslint-disable no-unused-vars */
import React from "react";
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 rounded-t-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="flex items-center mb-2">
              <PhoneOutlined className="mr-2" />
              <a
                href="tel:+254700000000"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                +254 700-000-000
              </a>
            </p>
            <p className="flex items-center mb-2">
              <MailOutlined className="mr-2" />
              <a
                href="mailto:info@example.com"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                info@example.com
              </a>
            </p>
            <p>Westlands, Kenya, Nairobi, 00100</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <FacebookOutlined className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <TwitterOutlined className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <InstagramOutlined className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <LinkedinOutlined className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p className="mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Meetamore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
