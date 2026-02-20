import { Link } from "react-router-dom";

const VolunteerCTA = () => {
  return (
    <div className="bg-dark text-white py-16 text-center">
      <h2 className="text-3xl font-heading mb-4">Join Our Mission</h2>
      <Link to="/get-involved" className="bg-primary px-6 py-3 rounded-lg">
        Become Volunteer
      </Link>
    </div>
  );
};

export default VolunteerCTA;
