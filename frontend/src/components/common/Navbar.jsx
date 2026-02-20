import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/BrioTouchLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          className="h-10 transition duration-300 hover:scale-105"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-body text-gray-700">
          <Link
            to="/"
            className="relative hover:text-primary transition duration-300 after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="relative hover:text-primary transition duration-300 after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </Link>

          <Link
            to="/programs"
            className="relative hover:text-primary transition duration-300 after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
          >
            Programs
          </Link>

          <Link
            to="/impact"
            className="relative hover:text-primary transition duration-300 after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
          >
            Impact
          </Link>

          <Link
            to="/get-involved"
            className="relative hover:text-primary transition duration-300 after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
          >
            Get Involved
          </Link>

          <Link
            to="/contact"
            className="relative hover:text-primary transition duration-300 after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </Link>
        </div>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:block bg-yellow-500 px-6 py-2 text-white rounded transition duration-300 hover:shadow-lg hover:scale-105">
          Book Demo
        </button>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 shadow">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition duration-300"
          >
            About
          </Link>

          <Link
            to="/programs"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition duration-300"
          >
            Programs
          </Link>

          <Link
            to="/impact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition duration-300"
          >
            Impact
          </Link>

          <Link
            to="/get-involved"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition duration-300"
          >
            Get Involved
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition duration-300"
          >
            Contact
          </Link>

          <button className="bg-yellow-500 px-4 py-2 text-white rounded transition duration-300 hover:shadow-lg">
            Book Demo
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
