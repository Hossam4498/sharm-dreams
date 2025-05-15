import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-blue-950 text-white py-16 overflow-hidden px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20">
        {/* Logo and Bio */}
        <div className="flex-1 max-w-[400px]">
          <Link to="/">
            <img
              src="/logo-light.svg"
              alt="sharm dreams group"
              className="lg:w-52 w-36"
            />
          </Link>
          <p className="text-sm leading-relaxed italic mt-4">
            Sharm Dreams is a Leading Egyptian Group of companies specialized in
            offering high-end tourist, entertainment, and mixed-use real estate
            developments.
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              to="#"
              className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-yellow-400 transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-yellow-400 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-yellow-400 transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Navigation Links
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-1">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact Info */}
        <div className="flex-1 max-w-[400px]">
          <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 59, Abdel Aziz Al Soud St., El Manyal, Cairo, Egypt.</li>
            <li>📞 (202) 236 88824</li>
            <li>📞 (202) 253 11029</li>
            <li>📧 info@sharmdreamsgroup.com</li>
            <li>🕑 From 09:00 AM to 06:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-white/50 px-4 sm:px-8 lg:px-16">
        © {new Date().getFullYear()} Sharm Dreams Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
