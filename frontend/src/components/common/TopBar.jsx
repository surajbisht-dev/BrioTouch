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
    <div className="bg-black text-white text-sm py-2 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LEFT */}
        <div className="flex gap-4 items-center">
          <span>Mon - Sat</span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> foundation@briotouch.com
          </span>

          <FaLinkedin className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>

        {/* RIGHT */}
        <div className="border border-white px-4 py-1 rounded flex items-center gap-2">
          <IoCall /> +91-9643324493
        </div>
      </div>
    </div>
  );
};

export default TopBar;
