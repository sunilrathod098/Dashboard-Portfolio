import React from "react";

const Technologies = () => {
  const softwareDeveloperTechs = [
    { name: "JavaScript", image: "/images/javascript-logo.png" },
    { name: "React", image: "/images/react-logo.png" },
    { name: "Node.js", image: "/images/nodejs-logo.png" },
    { name: "GitHub", image: "/images/github-logo.png" },
  ];

  const backendDeveloperTechs = [
    { name: "Express.js", image: "/images/express-logo.png" },
    { name: "MongoDB", image: "/images/mongodb-logo.png" },
    { name: "Node.js", image: "/images/nodejs-logo.png" },
    { name: "GitHub", image: "/images/github-logo.png" },
  ];

  const dataAnalystTechs = [
    { name: "Python", image: "/images/python-logo.png" },
    { name: "Power BI", image: "/images/powerbi-logo.png" },
    { name: "Tableau", image: "/images/tableau-logo.png" },
    { name: "GitHub", image: "/images/github-logo.png" },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md w-full max-w-7xl mx-auto space-y-8">
      {/* Software Developer Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Software Developer
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {softwareDeveloperTechs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={tech.image}
                alt={tech.name}
                className="h-24 w-24 object-contain mb-2"
              />
              <p className="text-lg font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Developer Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Backend Developer
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {backendDeveloperTechs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={tech.image}
                alt={tech.name}
                className="h-24 w-24 object-contain mb-2"
              />
              <p className="text-lg font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Analyst Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Analyst</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {dataAnalystTechs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={tech.image}
                alt={tech.name}
                className="h-24 w-24 object-contain mb-2"
              />
              <p className="text-lg font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
