import MainLayout from "../layouts/MainLayout";

const Programs = () => {
  const programs = [
    {
      title: "Digital Education Initiative",
      desc: "Providing smart classroom solutions and digital learning tools for modern education in rural schools.",
      img: "https://media.gettyimages.com/id/2161654610/photo/portrait-of-a-teacher-assisting-student-in-the-classroom-at-a-childrens-foundation.jpg?s=612x612&w=0&k=20&c=lzaZ-zE9foNXrrMqPnIMys3HoAEOr0SH2mdl3B-Pujk=",
    },
    {
      title: "Women Skill Development",
      desc: "Empowering women through vocational training and digital literacy programs.",
      img: "https://media.gettyimages.com/id/617595810/photo/teenage-latin-girl-holds-thank-you-sign-in-park.jpg?s=612x612&w=0&k=20&c=hWsbRISCd3ezlUAHsEpvUMmlGiiy2HdYWyuRgblA-Dg=",
    },
    {
      title: "Healthcare Awareness",
      desc: "Organizing health camps and spreading awareness about hygiene and medical care.",
      img: "https://media.gettyimages.com/id/1344964565/photo/teacher-distributing-healthy-meal-to-students-in-classroom.jpg?s=612x612&w=0&k=20&c=5R6Jnqo0v2txz8biy-J09Nt7pylqaLLt50cP5wn6mXU=",
    },
    {
      title: "Rural Digital Literacy",
      desc: "Training students and teachers to effectively use digital tools for better education outcomes.",
      img: "https://media.gettyimages.com/id/547404780/photo/local-students-in-cambodia.jpg?s=612x612&w=0&k=20&c=e5bAh7pAa87T2eKj1XJ9PgaMztkImfSVS4UAwb8zF-o=",
    },
  ];

  return (
    <MainLayout>
      {/* HERO BANNER */}
      <div
        className="h-[50vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://media.gettyimages.com/id/2203054023/photo/child-recyclers-cleaning-the-public-park.jpg?s=612x612&w=0&k=20&c=DcwXERzHhpsT70oqFWDSKlbPMeF9Iktqz8mSzbyRqtA=')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1 className="text-5xl font-heading font-bold">Our Programs</h1>
        </div>
      </div>

      {/* PROGRAM CARDS */}
      <div className="py-20 bg-light">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {programs.map((p, index) => (
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
              <div className="h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition duration-300 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-heading text-primary mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Programs;
