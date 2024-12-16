import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React, { useEffect } from "react";
import { Bar, Radar } from "react-chartjs-2";
import { Link } from "react-router-dom";

ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  Tooltip,
  Legend
);

const About = () => {
  useEffect(() => {
    return () => {
      Object.values(ChartJS.instances).forEach((instance) => {
        instance.destroy();
      });
    };
  }, []);

  const skillData = {
    labels: [
      "Software Development",
      "Backend Development",
      "Frontend Development",
      "MERN Stack Development",
      "ReactJs",
      "Database",
      "Data Analyst",
    ],
    datasets: [
      {
        label: "Skill Proficiency (%)",
        data: [90, 100, 85, 80, 90, 90, 80],
        backgroundColor: "rgba(64, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const aboutMe = {
    introduction:
      "Hi! I’m Danavath Sunil Rathod, a dedicated Software Developer with a solid academic foundation and a passion for creating impactful solutions through technology. I aim to make a meaningful contribution to the tech world by crafting scalable, efficient, and user-friendly applications.",
    education:
      "I hold a Bachelor’s degree in Computer Science and Technology from Jawaharlal Nehru Technological University (JNTUH), Hyderabad, where I graduated with First Class honors. Throughout my academic career, I delved into key concepts like Operating Systems, Network Systems, and Database Management, laying the foundation for my professional growth.",
    professionalJourney: [
      {
        title: "Work Experience - AISHWI Technologies Pvt. Ltd",
        content: [
          "Worked as a Software Developer Intern at AISHWI Technologies Pvt. Ltd, developing backend APIs using JavaScript, Node.js, Express.js, and MongoDB.",
          "Involved in enhancing system performance and implementing secure user authentication mechanisms.",
          "Collaborated on database design and improved system architecture by introducing security protocols such as JWT authentication, ensuring secure and efficient application deployment.",
        ],
        image: "/public/aishwi_technologies_logo.jpeg",
      },
      {
        title: "Work Experience - Unified Mentor",
        content: [
          "As a Data Analyst Intern at Unified Mentor, responsible for data validation, exploratory analysis, and data visualization using Power BI and Tableau.",
          "Provided actionable insights to drive business improvements.",
        ],
        image: "/public/unifiedmentor.png",
        reverse: true,
      },
    ],
    projects: [
      "Company Home Page: Developed a dynamic company homepage using MongoDB, Express.js, and a responsive frontend with HTML, CSS, and JavaScript.",
      "Profile Dashboard: Designed an interactive Profile Dashboard with React.js and Tailwind.",
      "YouTube Clone: Built a video hosting platform backend with features like video uploads and secure JWT-based authentication.",
      "Exam Portal: Created an online exam portal that supports question loading, timers, and result submission with a MySQL backend.",
      "Signature Forgery Detection: Developed a machine learning project using Python and PyTorch to detect signature forgeries.",
      "Hate Speech Detection: Built a Python-based project for identifying hate speech on Twitter using natural language processing techniques.",
      "Todo Application: Designed a full-stack application using Node.js, MongoDB, and Express.js for managing user tasks with a login and registration system.",
    ],
    skills:
      "I have developed a strong skill set across various technologies, including backend development with Node.js, MongoDB, and Python, along with frontend frameworks like React.",
    mission:
      "My mission is to continue building impactful software solutions that address real-world problems. With a strong foundation in full-stack development, I am committed to learning new technologies and improving my skills.",
    hobbies: [
      "Playing Football",
      "Learning new Tech",
      "Participating hackthons",
      "Reading Books",
      "Photography",
      "Traveling",
      "Gaming",
    ],
    languages: ["English", "Hindi", "Telugu", "Marathi"],
    testimonials: [
      {
        name: "Perla Mahesh Kumar",
        role: "Project Manager & CEO at AISHWI Technologies Pvt. Ltd",
        testimonial:
          "Working with Sunil Rathod was a pleasure! He consistently delivered high-quality code and was always eager to learn new technologies. His approach to problem-solving is methodical and effective",
      },
    ],
    funFacts: [
      "Number of projects completed 13+.",
      "I speak four languages fluently.",
      "I have completed 1 hackathons.",
      "I have completed 1 coding bootcamp.",
      "Lines of code written 30,000+.",
      " Cups of coffee consumed during coding marathons 200+.",
    ],
  };

  const renderSection = (title, content, imageSrc, reverse = false) => (
    <section
      className={`my-12 grid text-blue-600 grid-cols-1 md:grid-cols-2 gap-8 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="text-left text-stone-50">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        {Array.isArray(content) ? (
          <ul className="list-disc pl-6">
            {content.map((item, index) => (
              <li key={index} className="text-lg leading-relaxed mb-2">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg leading-relaxed">{content}</p>
        )}
      </div>
      <div className="image-content text-center">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl w-full sm:w-96 shadow-black border-4 opacity-100 hover:scale-110 transition-all duration-700 ease-in-out"
        />
      </div>
    </section>
  );

  return (
    <div className="py-16 bg-gradient-to-r from-black to-gray-800 text-gray-200">
      <div className="container mx-auto px-8 lg:px-16">
        <h1 className="text-4xl font-bold text-center mb-12 sm:w-80">
          About Me
        </h1>

        {renderSection(
          "Introduction",
          aboutMe.introduction,
          "/public/sunilrathod2.jpg"
        )}
        <br />
        {renderSection(
          "Education",
          aboutMe.education,
          "/public/educationimage.jpeg",
          true
        )}
        <br />
        <br />

        {/* Professional Journey Section */}
        <section className="my-12 text-left text-white">
          <h2 className="text-3xl font-bold mb-6">Professional Journey</h2>
          {aboutMe.professionalJourney.map((journey, index) =>
            renderSection(
              journey.title,
              journey.content,
              journey.image,
              journey.reverse
            )
          )}
        </section>

        <br />
        {renderSection(
          "Mission",
          aboutMe.mission,
          "/public/missionimage.jpg",
          true
        )}
        <br />
        {/* Skills Visualization */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-6 from-neutral-50">
            Skills Visualization
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-6 text-stone-50  p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
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
        <br />

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-left text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutMe.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <p className="text-lg leading-relaxed text-gray-300 mb-4">
                  {project}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/project"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition duration-300"
            >
              View Projects on Dashboard
            </Link>
          </div>
        </section>
        <br />

        {/* Testimonial Section */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
          {aboutMe.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <br />
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                "{testimonial.testimonial}"
                <br />
              </p>
              <p className="text-gray-400">
                - {testimonial.name}, {testimonial.role}
              </p>
            </div>
          ))}
        </section>

        {/* Fun Facts Section */}
        <section className="my-12 text-left text-white">
          <h2 className="text-3xl font-bold mb-6 ease-in-out">Fun Facts</h2>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <ul className="list-disc ml-6 text-lg text-gray-300">
              {aboutMe.funFacts.map((fact, index) => (
                <li key={index} className="mb-2">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="my-12 text-left text-white">
          <h2 className="text-3xl font-bold mb-6 ease-in-out">
            Hobbies & Interests
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <ul className="list-disc ml-6 text-lg text-gray-300">
              {aboutMe.hobbies.map((hobbies, index) => (
                <li key={index} className="mb-2">
                  {hobbies}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="my-12 text-left text-white">
          <h2 className="text-3xl font-bold mb-6 ease-in-out">Languages</h2>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <ul className="list-disc ml-6 text-lg text-gray-300">
              {aboutMe.languages.map((language, index) => (
                <li key={index} className="mb-2">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
