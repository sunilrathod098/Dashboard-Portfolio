import React, { useState } from "react";

const CertificatesAndAwards = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  // Dummy data for certificates
  const certificates = [
    {
      id: 1,
      title: "Software Developer at AISHWI Technologies Pvt. Ltd",
      description:
        "6-month internship as a Software Developer at AISHWI Technologies Pvt. Ltd.",
      imageUrl: "/public/certificates/aishwitechintern.jpg",
    },
    {
      id: 2,
      title: "Certified Data Analyst at Unified Mentor",
      description:
        "Awarded for completing an advanced data analytics certification.",
      imageUrl: "/public/certificates/unifiredmentorintern.jpg",
    },
    {
      id: 3,
      title: "Machine Learning Intern at Rinex",
      description:
        "6-month Machine Learning internship at Rinex, learning ML models.",
      imageUrl: "/public/certificates/internship_Danavath Sunil Rathod_273[517].jpg",
    },
    {
      id: 4,
      title: "MERN Stack Developer",
      description:
        "Certified as a MERN Stack Developer through an intensive bootcamp.",
      imageUrl: "/public/certificates/MERN Stack__page-0001.jpg",
    },
    {
      id: 5,
      title: "Data Analyst from PrepInsta",
      description:
        "Awarded for completing a Data Analytics course with PrepInsta.",
      imageUrl: "/public/certificates/dataanalytprepinsta.jpg",
    },
    {
      id: 6,
      title: "Python from E-Box, Bangalore",
      description:
        "Completed Python programming certification from E-Box, Bangalore.",
      imageUrl: "/public/certificates/E-Box Python Certificate.png",
    },
    {
      id: 7,
      title: "DSA from Smart Interview",
      description:
        "Awarded for completing Data Structures and Algorithms certification.",
      imageUrl: "/public/certificates/Screenshot 2024-12-15 163319.png",
    },
    {
      id: 8,
      title: "Machine Learning from PrepInsta",
      description:
        "Certified in Machine Learning techniques and applications from PrepInsta.",
      imageUrl: "/public/certificates/mlfromprepinsta.png",
    },
    {
      id: 9,
      title: "Gen AI from LinkedIn",
      description:
        "Completed Generative AI course on LinkedIn to enhance skills in AI.",
      imageUrl: "/public/certificates/genai.png",
    },
  ];

  // Dummy data for awards
  const awards = [
    {
      id: 1,
      title: "Educational Certificate (First Class) from JNTUH",
      description:
        "Awarded First Class degree certificate from JNTUH College for excellence in academics.",
      imageUrl: "https://link-to-image.com/award4.jpg",
    },
    {
      id: 2,
      title: "Hackathon Winner",
      description:
        "Won first place in a regional hackathon with a tech-driven solution.",
      imageUrl: "/public/certificates/hackatonconenct.jpg",
    },
    {
      id: 3,
      title: "Certified DevOps Engineer",
      description:
        "Completed a comprehensive DevOps certification, mastering tools like Docker, Kubernetes, Jenkins, and CI/CD pipelines.",
      imageUrl: "https://link-to-image.com/devops-certification.jpg",
    },
    {
      id: 4,
      title: "Course Completion Certificate from AISHWI Technologies Pvt. Ltd",
      description:
        "Completed an advanced professional course at AISHWI Technologies Pvt. Ltd.",
      imageUrl: "/public/certificates/aishwicompletion.jpg",
    },
    {
      id: 5,
      title: "National Level CIT Internship Test",
      description:
        "Awarded based on professional skills from Internship Studio for a national level internship test.",
      imageUrl: "/public/certificates/cittest.png",
    },
    {
      id: 6,
      title: "National Level Football Championship",
      description:
        "Represented and competed in a national-level football championship, showcasing teamlead, teamwork and sportsmanship.",
      imageUrl: "https://link-to-image.com/national-football.jpg",
    },
  ];

  return (
    <section className="my-16 px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-semibold mb-6 text-white">Certificates</h2>
      <p className="text-lg text-gray-300 mb-6">
        These are some of the key certifications I've earned throughout my
        professional journey.
      </p>

      {/* Certificates Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ease-in-out">
        {certificates.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-900 rounded-lg p-6 shadow-lg transform transition-transform duration-300 ease-in-out"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-60 object-cover rounded-t-3xl mb-4 ease-in-out"
            />
            <h3
              className={`text-xl font-semibold mb-2 transition-all duration-300 ease-in-out ${
                hoveredTitle === item.title ? "text-orange-400" : "text-white"
              }`}
            >
              {item.title}
            </h3>
            <p className="text-lg text-white">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Awards Section */}
      <h2 className="text-3xl font-semibold mb-6 text-white mt-16">Awards</h2>
      <p className="text-lg text-gray-300 mb-6">
        Here are some of the awards I've received during my career.
      </p>

      {/* Awards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ease-in-out">
        {awards.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-900 rounded-lg p-6 shadow-lg transform transition-transform duration-300 ease-in-out"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-60 object-cover rounded-t-3xl mb-4 ease-in-out"
            />
            <h3
              className={`text-xl font-semibold mb-2 transition-all duration-300 ease-in-out ${
                hoveredTitle === item.title ? "text-orange-400" : "text-white"
              }`}
            >
              {item.title}
            </h3>
            <p className="text-lg text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesAndAwards;
