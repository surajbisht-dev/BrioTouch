import { useEffect, useState } from "react";
import { getPrograms } from "../../services/programService";

const ProgramsPreview = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    getPrograms().then((res) => setPrograms(res.data));
  }, []);

  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-heading text-primary mb-8">Our Programs</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        {programs.map((p) => (
          <div key={p._id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-heading text-xl">{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsPreview;
