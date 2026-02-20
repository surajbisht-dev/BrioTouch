import MainLayout from "../layouts/MainLayout";
import CountUp from "react-countup";
import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaGlobeAsia,
} from "react-icons/fa";

const Impact = () => {
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
    <MainLayout>
      {/* HERO BANNER */}
      <div
        className="h-[50vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://media.gettyimages.com/id/2161654610/photo/portrait-of-a-teacher-assisting-student-in-the-classroom-at-a-childrens-foundation.jpg?s=612x612&w=0&k=20&c=lzaZ-zE9foNXrrMqPnIMys3HoAEOr0SH2mdl3B-Pujk=')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1 className="text-5xl font-heading font-bold">Our Impact</h1>
        </div>
      </div>

      {/* IMPACT STATS */}
      <div className="py-20 bg-light">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
              bg-white p-8 rounded-xl shadow-md text-center
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

      {/* ADDITIONAL IMPACT IMAGE PANEL */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://media.gettyimages.com/id/1490617286/photo/school-children-and-students-picking-up-rubbish-plastic-waste-and-participate-in.jpg?s=612x612&w=0&k=20&c=uu6FlxMl1krsn_G7C9xYCUoJsjC5K2aFuPble0gwFno="
              alt="Impact NGO"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              Making a Difference
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Through our educational initiatives and digital literacy programs,
              we have positively impacted thousands of students and educators.
              Our commitment towards community upliftment ensures access to
              quality learning resources for children in rural and underserved
              areas.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Impact;
