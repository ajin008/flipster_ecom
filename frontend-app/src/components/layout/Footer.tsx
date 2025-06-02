import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  CreditCard,
  Smartphone,
  Globe,
  Bitcoin,
  Shield,
  HelpCircle,
  Phone,
  BookOpen,
  Info,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-gray-300 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-xl font-bold text-white">zesTEX.COM</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Trading platform for gamers all over the world
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Twitter size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <MessageCircle size={16} className="text-white" />
              </a>
            </div>

            {/* Authorized Partner */}
            <div>
              <p className="text-gray-500 text-xs mb-2">Authorized Partner:</p>
              <div className="text-green-400 font-mono text-sm tracking-wider">
                R A Z E R
              </div>
            </div>
          </div>

          {/* Buy & Sell Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Buy & Sell</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Shield size={14} />
                  zesTEX Guarantee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <HelpCircle size={14} />
                  Buying Questions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <HelpCircle size={14} />
                  Selling Questions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Globe size={14} />
                  Why Sell With Us?
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Info size={14} />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <HelpCircle size={14} />
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Phone size={14} />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <BookOpen size={14} />
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-white font-semibold mb-4">Payment Methods</h4>
            <div className="grid grid-cols-4 gap-2">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <CreditCard size={16} className="text-blue-600" />
              </div>
              <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                <CreditCard size={16} className="text-white" />
              </div>
              <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                <Smartphone size={16} className="text-white" />
              </div>
              <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                <Globe size={16} className="text-white" />
              </div>
              <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                <Bitcoin size={16} className="text-white" />
              </div>
              <div className="w-12 h-8 bg-gray-600 rounded flex items-center justify-center">
                <CreditCard size={16} className="text-white" />
              </div>
              <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center">
                <Globe size={16} className="text-white" />
              </div>
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                <CreditCard size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-status-away ">
              <p>© {new Date().getFullYear()} zesTEX Pte Ltd.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Privacy
                </a>
              </div>
            </div>
            <div className="text-xs text-status-away">
              <p>Version: 2.1.47 - 850e474</p>
              <p>
                Last Updated: {new Date().toLocaleDateString("en-GB")}{" "}
                {new Date().toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
