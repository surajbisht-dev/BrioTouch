const MissionVision = () => {
  return (
    <div className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT IMAGE PANEL */}
        <div className="h-full">
          <div className="h-[420px] md:h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://media.gettyimages.com/id/863105740/photo/childrens-sports-team-charity-drive-for-donations-local-disaster-relief.jpg?s=612x612&w=0&k=20&c=FyCwE77TifwASnpyRS00B0xnS0fkiLVFSq-wZOWBe8I="
              alt="Child Education NGO"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT PANEL */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4">
            Our Mission & Vision
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our foundation is committed to empowering rural communities by
            promoting digital education and innovative learning methods. Through
            smart classrooms, teacher training programs, and technology-enabled
            solutions, we aim to bridge the digital divide and provide quality
            education to every child.
          </p>

          <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300 w-fit">
            Know More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
