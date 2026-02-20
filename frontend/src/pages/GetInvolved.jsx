import MainLayout from "../layouts/MainLayout";
import VolunteerForm from "../components/forms/VolunteerForm";

const GetInvolved = () => {
  const features = [
    {
      title: "Become a Volunteer",
      desc: "Join our mission to support education and empower communities.",
    },
    {
      title: "Sponsor a School",
      desc: "Help us provide smart classrooms and digital learning tools.",
    },
    {
      title: "Partner With Us",
      desc: "Collaborate with us for CSR and community development programs.",
    },
  ];

  return (
    <MainLayout>
      {/* IMAGE + VERTICAL FORM */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT LARGE IMAGE */}
          <div className="h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://media.gettyimages.com/id/1164996313/photo/children-volunteering-at-school-supply-donation-drive-at-elementary-school.jpg?s=612x612&w=0&k=20&c=DpN0BHyr6YyiZElgA-jPxHgJDCHDzeW2OQeq_3uGZzk="
              alt="Volunteer NGO"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="bg-light p-6 rounded-lg">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Register as a Volunteer
            </h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

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

      {/* SERVICES */}
      <div className="py-16 bg-light">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {features.map((f, index) => (
            <div key={index} className="bg-white p-6 rounded text-center">
              <h3 className="text-lg font-heading text-primary mb-2">
                {f.title}
              </h3>

              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default GetInvolved;
