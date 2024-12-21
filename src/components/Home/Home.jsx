import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [greeting, setGreeting] = useState("");
  const [image, setImage] = useState("/homeprofile2image.jpg"); // Initial image

  // Update greeting based on the time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning..!");
    } else if (hour < 18) {
      setGreeting("Good Afternoon..!");
    } else {
      setGreeting("Good Evening..!");
    }
  }, []);

  // Toggle the image on click
  const toggleImage = () => {
    setImage((prevImage) =>
      prevImage === "/homeprofile2image.jpg"
        ? "/homeprofile1image.jpg"
        : "/homeprofile2image.jpg"
    );
  };

  return (
    <div className="home-container mx-auto p-4 w-full max-w-7xl">
      {/* Header Section */}
      <aside className="relative text-black rounded-lg sm:mx-16 mx-2 sm:py-16 py-6">
        <div className="flex flex-wrap lg:flex-nowrap items-center space-y-6 lg:space-y-0">
          {/* Left Side: Profile Image */}
          <div className="flex justify-center lg:w-1/3 w-full">
            <img
              className="rounded-2xl w-full sm:w-80 shadow-black border-4 opacity-100 hover:opacity-100 hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
              src={image}
              alt="Profile"
              onClick={toggleImage} // Click event to toggle image
            />
          </div>

          {/* Right Side: Content */}
          <div className="relative z-10 lg:w-2/3 w-full space-y-6 sm:text-start text-center px-4">
            {/* Greeting & Introduction */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white hover:text-orange-700 transition-all duration-300 ease-in-out">
              {greeting},
              <br />
              I&apos;m{" Danavath Sunil Rathod"}
              <h1 className="text-blue-700">Software Developer</h1>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white hover:text-green-400 transition-all duration-300">
              Building Scalable Solutions & Data-Driven Insights for a Smarter
              Tomorrow
            </h2>

            {/* Short Bio Section */}
            <p className="text-sm sm:text-base lg:text-lg text-white text-left">
              I am a passionate software developer and data analyst with
              expertise in backend development, data visualization, and
              statistical analysis. Skilled in technologies like Node.js,
              Express.js, MongoDB, Python, JavaScript and ReactJS, I have built
              scalable web applications and data-driven solutions.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-white text-left">
              "Certified in MERN stack development", data analysis, and machine
              learning algorithms, I excel in leveraging problem-solving and
              critical-thinking skills to deliver innovative results. Whether
              developing dynamic APIs, analyzing datasets, or leading workshops,
              I am dedicated to continuous learning and impactful contributions.
            </p>

            {/* Social Media & Links Section */}
            <div className="social-buttons flex flex-wrap justify-center lg:justify-start space-x-6 mt-8">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/danavath-sunil-rathod-683853202/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition duration-300"
              >
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sunilrathod098"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300"
              >
                GitHub
              </a>

              {/* CV */}
              <a
                href="https://drive.google.com/file/d/1O__X_G82ejN_cYNflmzAya79V4DhTEdK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-900 transition duration-300"
              >
                CV
              </a>

              {/* Projects */}
              <Link
                to="/project"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-900 transition duration-300"
              >
                Projects
              </Link>

              {/* Certificates & Awards */}
              <Link
                to="/certificates"
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-900 transition duration-300"
              >
                Certificates & Awards
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
