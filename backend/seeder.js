require("dotenv").config();
const mongoose = require("mongoose");
const Program = require("./models/Program");
const connectDB = require("./config/db");

connectDB();

const programs = [
  {
    title: "Digital Classroom Initiative",
    description:
      "Providing interactive smart classroom solutions to rural schools using modern learning technology.",
    location: "Uttarakhand",
    beneficiaries: 500,
    startDate: new Date("2024-01-10"),
    status: "Ongoing",
  },
  {
    title: "Rural Digital Literacy Program",
    description:
      "Empowering students and teachers with essential digital skills for modern education environments.",
    location: "Himachal Pradesh",
    beneficiaries: 300,
    startDate: new Date("2024-02-05"),
    status: "Ongoing",
  },
  {
    title: "Women Skill Development",
    description:
      "Providing digital and technical training to women for employment and entrepreneurship opportunities.",
    location: "Uttar Pradesh",
    beneficiaries: 200,
    startDate: new Date("2024-03-01"),
    status: "Upcoming",
  },
  {
    title: "Smart School Setup",
    description:
      "Installing interactive panels and digital boards to modernize teaching in underprivileged schools.",
    location: "Delhi NCR",
    beneficiaries: 150,
    startDate: new Date("2024-01-20"),
    status: "Ongoing",
  },
  {
    title: "Healthcare Awareness Camp",
    description:
      "Organizing awareness drives for health and hygiene in rural communities.",
    location: "Rajasthan",
    beneficiaries: 400,
    startDate: new Date("2024-04-15"),
    status: "Upcoming",
  },
];

const importData = async () => {
  try {
    await Program.deleteMany();
    await Program.insertMany(programs);
    console.log("Programs Data Imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
