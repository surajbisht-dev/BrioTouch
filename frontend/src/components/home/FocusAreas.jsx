const FocusAreas = () => {
  const areas = [
    {
      title: "Digital Education",
      desc: "Providing smart classroom solutions and digital tools for modern learning.",
      img: "https://media.gettyimages.com/id/2150966185/photo/asking-the-mentor-volunteer-questions.jpg?s=612x612&w=0&k=20&c=LEIahApCYBKoDIHDvEwArkmcqFaEmZ2904wBSDU_sJM=",
    },
    {
      title: "Women Empowerment",
      desc: "Skill development and digital training programs for women empowerment.",
      img: "https://media.gettyimages.com/id/1479808476/photo/volunteer-portraits.jpg?s=612x612&w=0&k=20&c=UfCId4HjVtYzspqVmNFP7LYmNCMORPyfphh1WXcy0YY=",
    },
    {
      title: "Healthcare Camps",
      desc: "Health awareness and medical support for rural communities.",
      img: "https://media.gettyimages.com/id/899765038/photo/elementary-age-girl-opens-wide-for-medical-volunteers-exam.jpg?s=612x612&w=0&k=20&c=IWqxrUEfeWlFP9fDV8bsDRYjMkAgBPanmI6QZcQQjmg=",
    },
  ];

  return (
    <div className="py-20 bg-light">
      {/* HEADING */}
      <h2 className="text-4xl font-heading font-bold text-center text-dark mb-12">
        Our Focus Areas
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {areas.map((area, index) => (
          <div
            key={index}
            className="
            bg-white rounded-xl overflow-hidden shadow-md
            transition duration-300 transform
            hover:-translate-y-2 hover:shadow-xl
            cursor-pointer
            "
          >
            {/* IMAGE */}
            <div className="h-48 overflow-hidden">
              <img
                src={area.img}
                alt={area.title}
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-heading text-primary mb-2">
                {area.title}
              </h3>

              <p className="text-gray-600 text-sm">{area.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusAreas;
