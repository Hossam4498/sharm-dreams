import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-4 sm:px-8 lg:px-16 backdrop-blur-lg shadow-md z-40">
        <Link to='/'>
          <img src="/logo.svg" alt="sharm dreams group" className="lg:w-52 w-36" />
        </Link>
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-black text-4xl cursor-pointer"
        >
          ☰
        </button>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
