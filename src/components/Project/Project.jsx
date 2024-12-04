import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "YouTube Project",
      description:
        "A feature-rich YouTube clone that allows users to search, watch, and upload videos with an intuitive interface.",
      image: "/youtube.png",
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
      image:"/Forged-Signatures.jpg",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
