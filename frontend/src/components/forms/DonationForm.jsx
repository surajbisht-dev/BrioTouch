import { useState } from "react";
import { createDonation } from "../../services/donationService";

const DonationForm = () => {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDonation(form);
    alert("Request Sent");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Amount"
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <button className="bg-primary text-white px-4 py-2">Donate</button>
    </form>
  );
};

export default DonationForm;
