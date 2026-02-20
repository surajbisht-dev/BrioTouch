import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* LEFT */}
        <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start text-center md:text-left">
          <span>Mon - Sat</span>

          <span className="flex items-center gap-2">
            <FaEnvelope /> foundation@briotouch.com
          </span>

          <div className="flex gap-2 text-lg">
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="border border-white px-3 py-1 rounded flex items-center gap-2">
          <IoCall /> +91-9643324493
        </div>
      </div>
    </div>
  );
};

export default TopBar;
