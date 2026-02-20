const partners = [
  {
    name: "City Montessori School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/cms-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "Delhi Public School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/dps-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "Indraprastha International School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/indraprastha-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "Pacific World School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/pacific-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "St. Xavier's School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/st-xavier-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "Rajmata Krishna Kumari Girls Public School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/rajmata-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "St. John's School, Varanasi",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/sant-john-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "Vivekanand School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/vivekanand-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "SD Vidya Mandir City",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/sd-vidya-mandir-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "Apeejay School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/apeejay-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "Billabong High International School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/billabong-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "The Mann School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/mann-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "Navajeevan Bethany Vidyalaya",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/navjeevan-logo.webp?fit=300%2C200&ssl=1",
  },
  {
    name: "DPS Rajnagar",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/07/dps-rajnagar.jpg?fit=300%2C200&ssl=1",
  },
  {
    name: "Sankalp International School",
    logo: "https://i0.wp.com/briotouch.com/wp-content/uploads/2025/06/sankalp-logo.webp?fit=300%2C200&ssl=1",
  },
];

const TrustedPartners = () => {
  return (
    <div className="py-20 bg-white">
      {/* HEADING */}
      <h2 className="text-center text-4xl font-heading font-bold mb-12">
        Trusted By <span className="text-primary">10000+</span> Customers
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 px-6">
        {partners.map((p, index) => (
          <div
            key={index}
            className="
            flex flex-col items-center text-center 
            p-5 rounded-lg bg-white
            border border-transparent
            transition duration-300 ease-in-out
            transform hover:-translate-y-2
            hover:shadow-xl
            hover:border-primary
            cursor-pointer
            "
          >
            {/* LOGO */}
            <img
              src={p.logo}
              alt={p.name}
              className="h-25 mb-3 object-contain transition duration-300"
            />

            {/* NAME */}
            <p className="text-sm font-body text-gray-700">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
