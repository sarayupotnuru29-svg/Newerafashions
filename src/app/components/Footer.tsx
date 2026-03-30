import { Link } from 'react-router';
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
} from 'lucide-react';
import logo from 'figma:asset/402c89b5ffe7e7779208266ee3c34a02fb7a954c.png';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="New Era Fashions"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">New Era Fashions</h3>
                <p className="text-yellow-400 text-sm italic">Life is Fashion</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your destination for premium fashion. Trendy styles, affordable
              prices, and quality materials that define your unique style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  onClick={scrollToTop}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                <a
                  href="tel:919154669668"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  +91 9154669668
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                <a
                  href="mailto:newErafashion9@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm break-all"
                >
                  newErafashion9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-300 text-sm">
                  KPHB Metro Station, Hyderabad
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Business Hours</h4>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-yellow-400" />
              <div className="text-sm text-gray-300">
                <p>Mon - Sat: 10:00 AM - 11:00 PM</p>
                <p>Sunday: 11:00 AM - 11:00 PM</p>
              </div>
            </div>

            <h4 className="font-bold text-yellow-400 mb-3 mt-6">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/NewerafashionsLM"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/newerafashionslm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@newerafashions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            © 2026 New Era Fashions. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full hover:bg-yellow-500 transition-all group"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm font-medium">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
