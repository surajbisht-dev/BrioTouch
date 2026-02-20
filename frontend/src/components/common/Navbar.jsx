import { Link } from "react-router-dom";
import logo from "../../assets/images/BrioTouchLogo.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <img src={logo} alt="logo" className="h-11 w-30" />

        {/* MENU */}
        <div className="flex gap-6 font-body">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* BUTTON */}
        <button className="bg-yellow-500 px-6 py-2 text-white rounded">
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
