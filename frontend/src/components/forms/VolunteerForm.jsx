import { useState } from "react";
import { createVolunteer } from "../../services/volunteerService";

const VolunteerForm = () => {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createVolunteer(form);
    alert("Registered Successfully");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button className="bg-primary text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default VolunteerForm;
