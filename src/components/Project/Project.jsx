import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "Profile Dashboard",
      description:
        "A Profile Dashboard is an interactive interface that displays and manages user information. Built with JavaScript and React.js/Tailwind, it provides a dynamic and user-friendly experience.",
      image: "public/profiledashboaerd.png",
    },
    {
      title: "YouTube Project",
      description:
        "A feature-rich YouTube clone that allows users to search, watch, and upload videos with an intuitive interface.",
      image: "/youtube.png",
    },
    {
      title: "Online Exam Portal",
      description:
        "Developed a secure and scalable Online Exam Portal using Node.js, Express.js, MySQL, and a responsive frontend with HTML and CSS, featuring real-time question loading, result storage, and JWT-based authentication.",
      image: "/public/onlineexamportal.webp",
    },
    {
      title: "Company Home Page",
      description:
        "Built a dynamic Company Home Website with MongoDB, Express.js, and a responsive frontend using HTML, CSS, and JavaScript, handling form submissions and user interactions seamlessly.",
      image: "/public/aishwi_technologies_logo.jpeg",
    },
    {
      title: "Todo List Project",
      description:
        "A dynamic Todo List app where users can add, update, delete, and mark tasks as completed with a sleek design.",
      image: "/todo.jpg",
    },
    {
      title: "User Management System",
      description:
        "A robust system for managing users, including features like registration, login, profile management, and user roles.",
      image: "/usermanagement.jpg",
    },
    {
      title: "Signature Forgery Detection",
      description:
        "A machine learning-based system to detect signature forgery with high accuracy, built using Python and PyTorch.",
      image: "/Forged-Signatures.jpg",
    },
    {
      title: "Twitter Hate Speech Detection",
      description:
        "Developed a Twitter Hate Speech Detection system using Python, leveraging machine learning techniques to identify and classify harmful content. Implemented data preprocessing, feature extraction, and model training.",
      image: "/public/twitter-hate-speech-featured.jpg",
    },
  ];

  return (
    <div className="py-16 bg-gray">
      <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8 md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-200 mt-2 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
