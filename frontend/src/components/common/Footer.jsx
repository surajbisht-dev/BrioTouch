const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* ABOUT */}
        <div>
          <h3 className="text-xl font-heading mb-3">Briotouch Foundation</h3>
          <p className="text-sm">
            Empowering communities through digital education and innovative
            learning solutions for rural development.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-heading mb-3">Quick Links</h3>

          <ul className="text-sm space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-heading mb-3">Contact</h3>

          <p className="text-sm">Uttarakhand, India</p>

          <p className="text-sm">foundation@briotouch.com</p>

          <p className="text-sm">+91-9643324493</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm mt-6 border-t border-gray-600 pt-4">
        © 2026 Briotouch Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
