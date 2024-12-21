import React, { useState } from "react";

const Technologies = () => {
  const softwareDeveloperTechs = [
    { name: "JavaScript", image: "/javascript.png" },
    { name: "Node.js", image: "/nodejs.png" },
    { name: "Express.js", image: "/expressjs.png" },
    { name: "MongoDB", image: "/mongodb.png" },
    { name: "SQL", image: "/sqldatabase.png" },
    { name: "JWT Auth", image: "/jwt.jpeg" },
    { name: "React", image: "/react.png" },
    { name: "HTML", image: "/html.png" },
    { name: "CSS", image: "/css.png" },
    { name: "GrahpQL", image: "/grahpql.jpg" },
  ];

  const dataAnalystTechs = [
    { name: "Python", image: "/python.png" },
    { name: "Power BI", image: "/poderbi.png" },
    { name: "Tableau", image: "/tableau.png" },
    {
      name: "Statistical DA",
      image: "/statisticsdataanalysis.jpg",
    },
    { name: "MS Excel", image: "/msexcel.png" },
    { name: "SQL", image: "/sqldatabase.png" },
    { name: "Pandas", image: "/pandas.png" },
    { name: "NumPy", image: "/numpy.png" },
    { name: "Matplotlib", image: "/matplotlib.png" },
    { name: "Seaborn", image: "/seaborn.png" },
    { name: "Scikit-learn", image: "/sklean.png" },
    { name: "TensorFlow", image: "/tf.png" },
    { name: "Keras", image: "/keras.png" },
    { name: "Kaggle", image: "/kaggle.png" },
  ];

  
  const toolsTechs = [
    { name: "VS Code", image: "/vscode.png" },
    { name: "NPM", image: "/npm.png" },
    { name: "Vite", image: "/vitereact.png" },
    { name: "Postman", image: "/postman.png" },
    { name: "ApolloSever", image: "/apollo.png" },
    { name: "GitHub", image: "/github.png" },
    { name: "Git", image: "/git.png" },
    { name: "Power BI", image: "/poderbi.png" },
    { name: "Tableau", image: "/tableau.png" },
    { name: "MS Excel", image: "/msexcel.png" },
    { name: "MySQL", image: "/mysql.png" },
    { name: "Jupyter Notebook", image: "/notebook.png" },
    {
      name: " GoogleColab Notebook",
      image: "/googlecolab.png",
    },
    { name: "Kaggle", image: "/kaggle.png" },
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
    // <div className="grid grid-cols-1 ms:grid-cols-3 md:grid-cols-2 gap-4"> 
    <div className="p-10 bg-gradient-to-r from-black to-gray-850 rounded-md shadow-md w-auto max-w-7xl mx-auto space-y-4">
      <div className=" grid-cols-1 ms:grid-cols-3 md:grid-cols-2 gap-4"> 
      {/* Software Developer Section */}
      <div className="bg-gray-900 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Software Developer
        </h2>
        <div className="flex items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white justify-center gap-4">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("left", "software")}
          >
            ◀
          </button>

          <div className="flex flex-wrap text-white justify-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
<br />
<br />
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
          <div className="flex flex-wrap justify-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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

<br />
<br />
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
          <div className="flex flex-wrap justify-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
    </div>
    
  );
};

export default Technologies;
