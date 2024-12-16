import React, { useState } from "react";

const Technologies = () => {
  const softwareDeveloperTechs = [
    { name: "JavaScript", image: "/dist/assets/images/JavaScriptlogo.png" },
    { name: "Node.js", image: "/dist/assets/images/Nodejslogo.svg" },
    { name: "Express.js", image: "/dist/assets/images/expressjs.png" },
    { name: "MongoDB", image: "/dist/assets/images/mongodb.png" },
    { name: "SQL", image: "/dist/assets/images/sqldatabase.png" },
    { name: "JWT Auth", image: "/dist/assets/images/jwt.jpeg" },
    { name: "React", image: "/dist/assets/images/Reacticon.svg" },
    { name: "HTML", image: "/dist/assets/images/html.png" },
    { name: "CSS", image: "/dist/assets/images/css.png" },
    { name: "GrahpQL", image: "/dist/assets/images/grahpql.jpeg" },
  ];

  const dataAnalystTechs = [
    { name: "Python", image: "/dist/assets/images/Pythonlogonotext.svg" },
    { name: "Power BI", image: "/dist/assets/images/poderbi.png" },
    { name: "Tableau", image: "/dist/assets/images/tableau.png" },
    {
      name: "Statistical DA",
      image: "/dist/assets/images/statisticsdataanalysis.jpg",
    },
    { name: "MS Excel", image: "/dist/assets/images/msexcel.png" },
    { name: "SQL", image: "/dist/assets/images/sqldatabase.png" },
    { name: "Pandas", image: "/dist/assets/images/pandas.png" },
    { name: "NumPy", image: "/dist/assets/images/numpy.png" },
    { name: "Matplotlib", image: "/dist/assets/images/matplotlib.png" },
    { name: "Seaborn", image: "/dist/assets/images/seaborn.png" },
    { name: "Scikit-learn", image: "/dist/assets/images/sklean.png" },
    { name: "TensorFlow", image: "/dist/assets/images/tf.png" },
    { name: "Keras", image: "/dist/assets/images/keras.png" },
    { name: "Kaggle", image: "/dist/assets/images/kaggle.png" },
  ];

  
  const toolsTechs = [
    { name: "VS Code", image: "/dist/assets/images/vscode.png" },
    { name: "NPM", image: "/dist/assets/images/npm.png" },
    { name: "Vite", image: "/dist/assets/images/vite.svg" },
    { name: "Postman", image: "/dist/assets/images/postman.png" },
    { name: "ApolloSever", image: "/dist/assets/images/apollo.png" },
    { name: "GitHub", image: "/dist/assets/images/github.png" },
    { name: "Git", image: "/dist/assets/images/git.png" },
    { name: "Power BI", image: "/dist/assets/images/poderbi.png" },
    { name: "Tableau", image: "/dist/assets/images/tableau.png" },
    { name: "MS Excel", image: "/dist/assets/images/msexcel.png" },
    { name: "MySQL", image: "/dist/assets/images/mysql.png" },
    { name: "Jupyter Notebook", image: "/dist/assets/images/notebook.png" },
    {
      name: " GoogleColab Notebook",
      image: "/dist/assets/images/googlecolab.png",
    },
    { name: "Kaggle", image: "/dist/assets/images/kaggle.png" },
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
