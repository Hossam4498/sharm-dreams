import type { FC } from "react";
import { navigationLinks } from "../data/navigationLinks";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 w-full sm:w-1/2 h-full bg-white/50 border-l border-blue-950 backdrop-blur-lg z-50 flex flex-col py-8 px-4 sm:px-8 lg:px-16"
    >
      {/* Header with Logo & Close */}
      <div className="flex justify-between items-center mb-16">
        <Link to="/" className="text-black text-xl font-bold cursor-pointer">
          <img
            src="/logo.svg"
            alt="sharm dreams group"
            className="lg:w-52 w-36"
          />
        </Link>

        <button
          onClick={onClose}
          className="text-blue-950 font-bold text-3xl lg:text-5xl cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col items-start justify-center flex-grow gap-6">
        {navigationLinks.map((link, index) => {
          const isActive = location.pathname === link.href;
          return (
            <a
              key={index}
              href={link.href}
              onClick={onClose}
              className={`relative text-2xl font-semibold transition-transform duration-300 ${
                isActive
                  ? "text-blue-950 border-l-4 border-blue-950 pl-4 scale-105"
                  : "text-yellow-600 hover:text-yellow-800 hover:scale-105"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
