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
        <img src={logo} alt="logo" className="h-10" />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-body">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:block bg-yellow-500 px-6 py-2 text-white rounded">
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
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/programs" onClick={() => setMenuOpen(false)}>
            Programs
          </Link>
          <Link to="/impact" onClick={() => setMenuOpen(false)}>
            Impact
          </Link>
          <Link to="/get-involved" onClick={() => setMenuOpen(false)}>
            Get Involved
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <button className="bg-yellow-500 px-4 py-2 text-white rounded">
            Book Demo
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
