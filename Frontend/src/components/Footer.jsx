import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + SOCIAL */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Viral mint</h2>

          <div className="flex gap-4 text-lg">
            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>

        {/* CONTACT + ABOUT */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>IT Security</li>
            <li>Contact Us</li>
            <li>Phone: 9643555637-VIRTUAL</li>
          </ul>

          <h4 className="font-semibold mb-3">About us</h4>
          <ul className="text-gray-400 space-y-2">
            <li>About Viral mint</li>
            <li>Our People</li>
            <li>Careers</li>
            <li>Virtual Verse</li>
            <li>Investor Relations</li>
            <li>Glossary</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="text-gray-400 space-y-2">
            <li>AI & Data</li>
            <li>Autonomous Vehicle Operations</li>
            <li>Customer Experience & Agentic AI</li>
            <li>Financial Crime & Compliance</li>
            <li>Learning as a Service</li>
            <li>Sales as a Service</li>
            <li>Trust & Safety</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h4 className="font-semibold mb-3">Industries</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Entertainment & Gaming</li>
            <li>Financial Services</li>
            <li>Healthcare</li>
            <li>Mobility, Logistics & Travel</li>
            <li>Retail & eCommerce</li>
            <li>Social Media</li>
            <li>Technology</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">

        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="cursor-pointer hover:text-white">Privacy Statement</li>
          <li className="cursor-pointer hover:text-white">Cookie Policy</li>
          <li className="cursor-pointer hover:text-white">Domestic AI Policy</li>
          <li className="cursor-pointer hover:text-white">
            Supplier Code of Conduct
          </li>
        </ul>

        <p>© 2026 VIRTUAL CMO</p>
      </div>
    </footer>
  );
};

export default Footer;