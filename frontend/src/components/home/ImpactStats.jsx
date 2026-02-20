import CountUp from "react-countup";
import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaGlobeAsia,
} from "react-icons/fa";

const ImpactStats = () => {
  const stats = [
    {
      icon: <FaSchool />,
      number: 500,
      label: "Schools Supported",
    },
    {
      icon: <FaUserGraduate />,
      number: 10000,
      label: "Students Benefited",
    },
    {
      icon: <FaChalkboardTeacher />,
      number: 200,
      label: "Teachers Trained",
    },
    {
      icon: <FaGlobeAsia />,
      number: 50,
      label: "Villages Reached",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
            bg-light p-8 rounded-xl shadow-md text-center
            transition duration-300 transform
            hover:-translate-y-2 hover:shadow-xl
            cursor-pointer
            "
          >
            {/* ICON */}
            <div
              className="
              w-14 h-14 mx-auto mb-4 flex items-center justify-center
              bg-primary text-white rounded-full text-xl
            "
            >
              {stat.icon}
            </div>

            {/* NUMBER */}
            <h2 className="text-3xl font-bold text-primary mb-2">
              <CountUp end={stat.number} duration={2} />+
            </h2>

            {/* LABEL */}
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
