const Hero = () => {
  return (
    <div
      className="h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588072432836-e10032774350')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
        <div className="text-white max-w-xl md:max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-snug">
            Empowering Education Through
            <span className="text-primary"> Digital Innovation</span>
          </h1>

          <p className="mb-6 text-sm md:text-base text-gray-200">
            Our foundation works towards bridging the digital divide by
            providing smart classrooms and learning solutions to rural schools.
          </p>

          <button className="bg-primary px-4 md:px-6 py-2 md:py-3 rounded-lg">
            Support Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
