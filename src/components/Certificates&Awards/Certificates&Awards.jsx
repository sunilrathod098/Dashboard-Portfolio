import React, { useState } from "react";

const CertificatesAndAwards = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  const certificates = [
    {
      id: 1,
      title: "Software Developer at AISHWI Technologies Pvt. Ltd",
      description:
        "6-month internship as a Software Developer at AISHWI Technologies Pvt. Ltd.",
      imageUrl: "/dist/assets/aishwitechintern.jpg",
    },
    {
      id: 2,
      title: "Certified Data Analyst at Unified Mentor",
      description:
        "Awarded for completing an advanced data analytics certification.",
      imageUrl: "/dist/assets/unifiredmentorintern.jpg",
    },
    {
      id: 3,
      title: "Machine Learning Intern at Rinex",
      description:
        "6-month Machine Learning internship at Rinex, learning ML models.",
      imageUrl: "/dist/assets/internshipdanavathsunilrathod.jpg",
    },
    {
      id: 4,
      title: "MERN Stack Developer",
      description:
        "Certified as a MERN Stack Developer through an intensive bootcamp.",
      imageUrl: "/dist/assets/mernstack.jpg",
    },
    {
      id: 5,
      title: "Data Analyst from PrepInsta",
      description:
        "Awarded for completing a Data Analytics course with PrepInsta.",
      imageUrl: "/dist/assets/dataanalytprepinsta.jpg",
    },
    {
      id: 6,
      title: "Python from E-Box, Bangalore",
      description:
        "Completed Python programming certification from E-Box, Bangalore.",
      imageUrl: "/dist/assets/ebocpythoncertificate.png",
    },
    {
      id: 7,
      title: "DSA from Smart Interview",
      description:
        "Awarded for completing Data Structures and Algorithms certification.",
      imageUrl: "/dist/assets/smartinterview.png",
    },
    {
      id: 8,
      title: "Machine Learning from PrepInsta",
      description:
        "Certified in Machine Learning techniques and applications from PrepInsta.",
      imageUrl: "/dist/assets/mlfromprepinsta.png",
    },
    {
      id: 9,
      title: "Gen AI from LinkedIn",
      description:
        "Completed Generative AI course on LinkedIn to enhance skills in AI.",
      imageUrl: "/dist/assets/genai.png",
    },
  ];

  
  const awards = [
    {
      id: 1,
      title: "Educational Certificate (First Class) from JNTUH",
      description:
        "Awarded First Class degree certificate from JNTUH College for excellence in academics.",
      imageUrl: "/dist/assets/acadamiccerti.jpg",
    },
    {
      id: 2,
      title: "Hackathon Winner",
      description:
        "Won first place in a regional hackathon with a tech-driven solution.",
      imageUrl: "/dist/assets/hackatonconenct.jpg",
    },
    {
      id: 3,
      title: "Course Completion Certificate from AISHWI Technologies Pvt. Ltd",
      description:
        "Completed an advanced professional course at AISHWI Technologies Pvt. Ltd.",
      imageUrl: "/dist/assets/aishwicompletion.jpg",
    },
    {
      id: 4,
      title: "National Level CIT Internship Test",
      description:
        "Awarded based on professional skills from Internship Studio for a national level internship test.",
      imageUrl: "/dist/assets/cittest.png",
    },
    {
      id: 5,
      title: "National Level Football Championship",
      description:
        "Represented and competed in a national-level football championship, showcasing teamlead, teamwork and sportsmanship.",
      imageUrl: "/dist/assets/nlfootbal.jpg",
    },
  ];

  return (
    <section className="my-16 px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-semibold mb-6 text-white">Certificates</h2>
      <p className="text-lg text-gray-300 mb-6">
        These are some of the key certifications I've earned throughout my
        professional journey, The certifications showcase expertise in software
        development, data analytics, and advanced technologies. Key achievements
        include a Software Developer internship at AISHWI Technologies,
        certifications in Data Analytics and Machine Learning from PrepInsta,
        and completion of a MERN Stack Developer bootcamp. Additional highlights
        include Python certification from E-Box, a DSA course from Smart
        Interview, and Generative AI training on LinkedIn, reflecting diverse
        technical skills and continuous learning and this certificates are show in LinkedIn just refer my LinkedIn Profile.
      </p>

      {/* Certificates Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ease-in-out">
        {certificates.map((item) => (
          <div
            key={item.id}
            className={`relative bg-gray-900 rounded-lg p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
              hoveredTitle === item.title ? "scale-105 z-10" : "scale-100"
            }`}
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
        Here are some of the awards I've received during my career, The
        achievements reflect excellence in academics, innovation, and teamwork.
        Highlights include a First Class Certificate from JNTUH, a Hackathon
        Winner award for tech innovation, and a Course Completion Certificate
        from AISHWI Technologies. The National Level CIT Internship Test and
        participation in the National Level Football Championship showcase
        professional skills, leadership, and sportsmanship.
      </p>

      {/* Awards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ease-in-out">
        {awards.map((item) => (
          <div
            key={item.id}
            className={`relative bg-gray-900 rounded-lg p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
              hoveredTitle == item.title ? "scale-105 z-10" : "scale-100"
            }`}
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
