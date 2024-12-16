import React from "react";

export default function Projects() {
  const projectCategories = {
    "Software Development": [
      {
        title: "Profile Dashboard",
        description:
          "A Profile Dashboard is an interactive interface that displays and manages user information. Built with JavaScript and React.js/Tailwind, it provides a dynamic and user-friendly experience.",
        image: "/public/projects/profiledashboaerd.png",
      },
      {
        title: "YouTube Project",
        description:
          "A feature-rich YouTube clone that allows users to search, watch, and upload videos with an intuitive interface.",
        image: "/public/projects/youtubeclone.png",
      },
      {
        title: "Online Exam Portal",
        description:
          "Developed a secure and scalable Online Exam Portal using Node.js, Express.js, MySQL, and a responsive frontend with HTML and CSS, featuring real-time question loading, result storage, and JWT-based authentication.",
        image: "/public/projects/onlineexamportal.webp",
      },
      {
        title: "Company Home Page",
        description:
          "Built a dynamic Company Home Website with MongoDB, Express.js, and a responsive frontend using HTML, CSS, and JavaScript, handling form submissions and user interactions seamlessly.",
        image: "/public/projects/aishwi_technologies_logo.jpeg",
      },
      {
        title: "Todo List Project",
        description:
          "A dynamic Todo List app where users can add, update, delete, and mark tasks as completed with a sleek design.",
        image: "/public/projects/todo.jpg",
      },
      {
        title: "User Management System",
        description:
          "A robust system for managing users, including features like registration, login, profile management, and user roles.",
        image: "/public/projects/usermanagement.jpg",
      },
    ],

    "Data Analysis": [
      {
        title: "FIFA World Cup Data Analyst",
        description:
          "Analyzed historical FIFA World Cup data to uncover trends, patterns, and performance metrics. Created dashboards for visualizing team statistics and match insights.",
        image: "/public/projects/fifaworld.png",
      },
      {
        title: "HR Attributes Analyst",
        description:
          "Explored HR datasets to identify trends in employee performance, attrition, and satisfaction. Delivered actionable insights for workforce management.",
        image: "/public/projects/hranalyst.png",
      },
      {
        title: "Crop Production in India Analyst",
        description:
          "Analyzed agricultural data to understand crop production trends in India. Visualized data using charts and graphs for better decision-making in the agricultural sector.",
        image: "/public/projects/cropindia.png",
      },
      {
        title: "Bird Strikes Data Analyst",
        description:
          "Examined bird strike data to assess risks to aviation and identify patterns to improve air travel safety. Developed visualizations to support mitigation strategies.",
        image: "/public/projects/birdstiks.png",
      },
      {
        title: "Amazon Sales Data Analyst",
        description:
          "Performed sales data analysis for Amazon, identifying product trends, seasonal patterns, and regional preferences. Provided insights for optimizing sales strategies.",
        image: "/public/projects/amazondata.png",
      },
    ],

    "Machine Learning": [
      {
        title: "Signature Forgery Detection",
        description:
          "A machine learning-based system to detect signature forgery with high accuracy, built using Python and PyTorch.",
        image: "/public/projects/Forged-Signatures.jpg",
      },
      {
        title: "Twitter Hate Speech Detection",
        description:
          "Developed a Twitter Hate Speech Detection system using Python, leveraging machine learning techniques to identify and classify harmful content. Implemented data preprocessing, feature extraction, and model training.",
        image: "/public/projects/twitter-hate-speech-featured.jpg",
      },
    ],
  };

  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Projects
        </h2>
        {Object.entries(projectCategories).map(([category, projects]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8">
              {category}
            </h3>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
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
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mt-3 group-hover:text-gray-100 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
