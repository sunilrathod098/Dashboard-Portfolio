import React, { useState } from "react";

const Technologies = () => {
  const softwareDeveloperTechs = [
    { name: "JavaScript", image: "/public/JavaScript-logo.png" },
    { name: "Node.js", image: "/public/Node.js_logo.svg" },
    { name: "Express.js", image: "/public/expressjs.png" },
    { name: "MongoDB", image: "/public/mongoDB.png" },
    { name: "SQL", image: "/public/SQL-Database.png" },
    { name: "JWT Auth", image: "/public/jwt.jpeg" },
    { name: "React", image: "/public/React-icon.svg" },
    { name: "HTML", image: "/public/html.png" },
    { name: "CSS", image: "/public/css.png" },
    { name: "GrahpQL", image: "/public/grahpql.jpeg" },
  ];

  const dataAnalystTechs = [
    { name: "Python", image: "/public/Python-logo-notext.svg" },
    { name: "Power BI", image: "/public/poderbi.png" },
    { name: "Tableau", image: "/public/tableau.png" },
    { name: "Statistical DA", image: "/public/statistics-data-analysis.jpg" },
    { name: "MS Excel", image: "/public/msexcel.png" },
    { name: "SQL", image: "/public/SQL-Database.png" },
    { name: "Pandas", image: "/public/pandas.png" },
    { name: "NumPy", image: "/public/numpy.png" },
    { name: "Matplotlib", image: "/public/matplotlib.png" },
    { name: "Seaborn", image: "/public/seaborn.png" },
    { name: "Scikit-learn", image: "/public/sklean.png" },
    { name: "TensorFlow", image: "/public/tf.png" },
    { name: "Keras", image: "/public/keras.png" },
    { name: "Kaggle", image: "/public/kaggle.png" },
  ];

  
  const toolsTechs = [
    { name: "VS Code", image: "/public/vscode.png" },
    { name: "NPM", image: "/public/npm.png" },
    { name: "Vite", image: "/public/vite.svg" },
    { name: "Postman", image: "/public/postman.png" },
    { name: "ApolloSever", image: "/public/apollo.png" },
    { name: "GitHub", image: "/public/github.png" },
    { name: "Git", image: "/public/git.png" },
    { name: "Power BI", image: "/public/poderbi.png" },
    { name: "Tableau", image: "/public/tableau.png" },
    { name: "MS Excel", image: "/public/msexcel.png" },
    { name: "MySQL", image: "/public/mysql.png" },
    { name: "Jupyter Notebook", image: "/public/notebook.png" },
    { name: " GoogleColab Notebook", image: "/public/googlecolab.png" },
    { name: "Kaggle", image: "/public/kaggle.png" },
  ];

  const [softwareIndex, setSoftwareIndex] = useState(0);
  const [analystIndex, setAnalystIndex] = useState(0);
  const [toolsIndex, setToolsIndex] = useState(0);

  const visibleCount = 7; // here number of technologies to display at a time

  const handleArrowPress = (direction, type) => {
    if (type === "software") {
      if (direction === "left") {
        setSoftwareIndex((prev) =>
          prev === 0 ? softwareDeveloperTechs.length - visibleCount : prev - 1
        );
      } else {
        setSoftwareIndex(
          (prev) =>
            (prev + 1) % (softwareDeveloperTechs.length - visibleCount + 1)
        );
      }
    }
    
    else if (type === "analyst") {
      if (direction === "left") {
        setAnalystIndex((prev) =>
          prev === 0 ? dataAnalystTechs.length - visibleCount : prev - 1
        );
      } else {
        setAnalystIndex(
          (prev) => (prev + 1) % (dataAnalystTechs.length - visibleCount + 1)
        );
      }
    }
    
    else if (type === "tools") {
      if (direction === "left") {
        setToolsIndex((prev) =>
          prev === 0 ? toolsTechs.length - visibleCount : prev - 1
        );
      } else {
        setToolsIndex((prev) => (prev + 1) % (toolsTechs.length - visibleCount + 1));
      }
    }

  };

  return (
    <div className="p-10 bg-gradient-to-r from-black to-gray-850 rounded-md shadow-md w-auto max-w-7xl mx-auto space-y-4">
      {/* Software Developer Section */}
      <div className="bg-gray-900 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Software Developer
        </h2>
        <div className="flex items-center text-white justify-center gap-4">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("left", "software")}
          >
            ◀
          </button>

          <div className="flex flex-wrap text-white justify-center gap-6">
            {softwareDeveloperTechs
              .slice(softwareIndex, softwareIndex + visibleCount)
              .map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center hover:shadow-md p-4 rounded-lg transition-transform duration-300"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-24 w-24 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-lg font-medium text-gray-200 group-hover:text-orange-500 transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>
              ))}
          </div>
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("right", "software")}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Data Analyst Section */}
      <div className="bg-gray-900 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Data Analyst</h2>
        <div className="flex items-center justify-center gap-4">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("left", "analyst")}
          >
            ◀
          </button>
          <div className="flex flex-wrap justify-center gap-6">
            {dataAnalystTechs
              .slice(analystIndex, analystIndex + visibleCount)
              .map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center hover:shadow-md p-4 rounded-lg transition-transform duration-300"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-24 w-24 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-lg font-medium text-gray-200 group-hover:text-orange-500 transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>
              ))}
          </div>
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("right", "analyst")}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Tools Section */}
      <div className="bg-gray-900 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Tools</h2>
        <div className="flex items-center justify-center gap-4">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("left", "tools")}
          >
            ◀
          </button>
          <div className="flex flex-wrap justify-center gap-6">
            {toolsTechs
              .slice(toolsIndex, toolsIndex + visibleCount)
              .map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center hover:shadow-md p-4 rounded-lg transition-transform duration-300"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-24 w-24 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-lg font-medium text-gray-100 group-hover:text-orange-500 transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>
              ))}
          </div>
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("right", "tools")}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
