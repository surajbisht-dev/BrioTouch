import MainLayout from "../layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      {/* HERO BANNER */}
      <div
        className="h-[70vh] bg-cover  relative"
        style={{
          backgroundImage:
            "url('https://media.gettyimages.com/id/895515366/photo/group-of-children-giving-thumbs-up.jpg?s=612x612&w=0&k=20&c=c4z_C2wY4d-lOM_1amPSLlt1j-4TPfOz0548sS6wyoA=')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1 className="text-5xl font-heading font-bold">
            About Our Foundation
          </h1>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://media.gettyimages.com/id/487149698/photo/local-students-in-cambodia.jpg?s=612x612&w=0&k=20&c=ERtqo6bzG6gWiMhpydfev9zZvkRG7i5kgrgr7uW9hL0="
              alt="NGO Education"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-dark mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our foundation is dedicated to empowering underserved communities
              by promoting access to quality education and digital learning
              resources. Through innovative teaching solutions, smart
              classrooms, and skill development initiatives, we aim to create
              equal opportunities for children across rural and urban regions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              By working closely with schools, educators, and communities, our
              mission is to bridge the digital divide and foster an environment
              where every child has the opportunity to learn, grow, and succeed.
              We believe that technology-driven education can transform lives
              and build a better future for generations to come.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
