import MainLayout from "../layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-heading text-primary mb-4">
              Contact Us
            </h2>

            <p className="text-gray-600 mb-6">
              Reach out to us for volunteering opportunities, partnerships, or
              any support related to our foundation initiatives.
            </p>

            <p className="text-sm text-gray-700">📍 Uttarakhand, India</p>
            <p className="text-sm text-gray-700">📧 foundation@briotouch.com</p>
            <p className="text-sm text-gray-700">📞 +91 9643324493</p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-light p-6 rounded-lg">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              <button
                type="submit"
                className="bg-primary text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
