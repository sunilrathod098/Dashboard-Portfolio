import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip
} from "chart.js";
import React, { useEffect } from "react";
import { Bar, Radar } from "react-chartjs-2";

// Register the required components for Chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const About = () => {
  // Cleanup: destroy any instances of Chart.js when the component unmounts
  useEffect(() => {
    return () => {
      Object.values(ChartJS.instances).forEach((instances) => {
        instances.destroy();
      });
    };
  }, []);

  // Data for Skills Visualization
  const skillData = {
    labels: ["JavaScript", "Node.js", "Python", "React", "MongoDB"],
    datasets: [
      {
        label: "Skill Proficiency (%)",
        data: [80, 90, 85, 75, 70],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for Journey Timeline
  const milestones = [
    {
      year: "2020",
      title: "Started B.Tech",
      description: "Joined Jawaharlal Nehru Technological University.",
    },
    {
      year: "2022",
      title: "Python Training",
      description: "Completed Python training with EZ Training & Technologies.",
    },
    {
      year: "2023",
      title: "DevOps Workshop",
      description: "Facilitated an interactive DevOps workshop.",
    },
    {
      year: "2024",
      title: "Graduation",
      description: "Completed B.Tech with CGPA 7.21.",
    },
  ];

  // Data for Fun Facts
  const funFacts = [
    { title: "Projects Completed", value: 15 },
    { title: "Lines of Code Written", value: "50,000+" },
    { title: "Cups of Coffee Consumed", value: 200 },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "John Doe",
      role: "Manager",
      feedback: "Great team player and excellent problem-solver!",
    },
    {
      name: "Jane Smith",
      role: "Colleague",
      feedback: "Innovative and reliable developer.",
    },
    {
      name: "Mark Lee",
      role: "Client",
      feedback: "Delivered quality work on time.",
    },
  ];

  // Hobbies and Interests
  const hobbies = [
    "Playing Football",
    "Reading Books",
    "Photography",
    "Traveling",
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-black to-gray-900 text-gray-200">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>

        {/* Journey Timeline */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Journey Timeline</h2>
          <ul className="space-y-4">
            {milestones.map((milestone, index) => (
              <li key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="font-bold text-lg">
                  {milestone.year} - {milestone.title}
                </h3>
                <p>{milestone.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Visualization */}
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Skills Visualization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Bar
                data={skillData}
                options={{
                  responsive: true,
                  plugins: { legend: { position: "top" } },
                }}
              />
            </div>
            <div>
              <Radar
                data={skillData}
                options={{
                  responsive: true,
                  plugins: { legend: { position: "top" } },
                }}
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md"
              >
                <p className="italic">"{testimonial.feedback}"</p>
                <cite className="block mt-2 font-bold">
                  - {testimonial.name}, {testimonial.role}
                </cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Fun Facts */}
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Fun Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-bold">{fact.value}</h3>
                <p>{fact.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies and Interests */}
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Hobbies & Interests</h2>
          <ul className="list-disc ml-6">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
