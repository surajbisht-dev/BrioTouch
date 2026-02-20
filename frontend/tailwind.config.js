/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E73BE",
        dark: "#0A2540",
        light: "#F5F7FA",
        accent: "#007BFF",
      },
      fontFamily: {
        heading: ["Poppins"],
        body: ["Roboto"],
      },
      borderRadius: {
        lg: "10px",
      },
    },
  },
  plugins: [],
};
