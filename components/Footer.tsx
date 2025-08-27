import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo and Tagline */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
            SleepTracker
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            Track your sleep, improve your health.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook className="w-5 h-5 text-gray-500 hover:text-purple-600 transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="w-5 h-5 text-gray-500 hover:text-purple-600 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="w-5 h-5 text-gray-500 hover:text-purple-600 transition" />
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SleepTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
