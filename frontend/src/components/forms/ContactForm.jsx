import { useState } from "react";
import { createContact } from "../../services/contactService";

const ContactForm = () => {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createContact(form);
    alert("Message Sent");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button className="bg-primary text-white px-4 py-2">Send</button>
    </form>
  );
};

export default ContactForm;
