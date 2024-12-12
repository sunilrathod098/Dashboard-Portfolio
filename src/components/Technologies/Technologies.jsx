import React, { useState } from "react";

const Technologies = () => {
  const softwareDeveloperTechs = [
    { name: "JavaScript", image: "/public/JavaScript-logo.png" },
    { name: "React", image: "/public/React-icon.svg" },
    { name: "Node.js", image: "/public/Node.js_logo.svg" },
    { name: "Express.js", image: "/public/expressjs.png" },
    { name: "MongoDB", image: "/public/mongoDB.png" },
    { name: "HTML", image: "/public/html.png" },
    { name: "CSS", image: "/public/css.png" },
    { name: "GrahpQL", image: "/public/grahpql.jpeg" },
    { name: "Postman", image: "/public/postman.png" },
    { name: "ApolloSever", image: "/public/apollo.png" },
    { name: "GitHub", image: "/public/github.png" },
    { name: "Git", image: "/public/git.png" },
  ];

  const dataAnalystTechs = [
    { name: "Python", image: "/public/Python-logo-notext.svg" },
    { name: "Power BI", image: "/public/poderbi.png" },
    { name: "Tableau", image: "/public/tableau.png" },
    { name: "MS Excel", image: "/public/msexcel.png" },
    { name: "MySQL", image: "/public/mysql.png" },
    { name: "Jupyter Notebook", image: "/public/notebook.png" },
    { name: "Pandas", image: "/public/pandas.png" },
    { name: "NumPy", image: "/public/numpy.png" },
    { name: "Matplotlib", image: "/public/matplotlib.png" },
    { name: "Seaborn", image: "/public/seaborn.png" },
    { name: "Scikit-learn", image: "/public/sklean.png" },
    { name: "TensorFlow", image: "/public/tf.png" },
    { name: "Keras", image: "/public/keras.png" },
    { name: "Kaggle", image: "/public/kaggle.png" },
  ];

  const [softwareIndex, setSoftwareIndex] = useState(0);
  const [analystIndex, setAnalystIndex] = useState(0);

  const visibleCount = 8; // here number of technologies to display at a time

  const handleArrowPress = (direction, type) => {
    if (type === "software") {
      if (direction === "left") {
        setSoftwareIndex((prev) => (prev === 0 ? softwareDeveloperTechs.length - visibleCount : prev - 1));
      } else {
        setSoftwareIndex((prev) => (prev + 1) % (softwareDeveloperTechs.length - visibleCount + 1));
      }
    } else if (type === "analyst") {
      if (direction === "left") {
        setAnalystIndex((prev) => (prev === 0 ? dataAnalystTechs.length - visibleCount : prev - 1));
      } else {
        setAnalystIndex((prev) => (prev + 1) % (dataAnalystTechs.length - visibleCount + 1));
      }
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md w-full max-w-7xl mx-auto space-y-8">
      {/* Software Developer Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Software Developer</h2>
        <div className="flex items-center justify-center gap-4">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("left", "software")}
          >
            ◀
          </button>
          <div className="flex flex-wrap justify-center gap-6">
            {softwareDeveloperTechs.slice(softwareIndex, softwareIndex + visibleCount).map((tech, index) => (
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
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("right", "software")}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Data Analyst Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Analyst</h2>
        <div className="flex items-center justify-center gap-4">
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("left", "analyst")}
          >
            ◀
          </button>
          <div className="flex flex-wrap justify-center gap-6">
            {dataAnalystTechs.slice(analystIndex, analystIndex + visibleCount).map((tech, index) => (
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
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleArrowPress("right", "analyst")}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
