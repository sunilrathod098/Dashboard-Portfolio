import React from "react";
// import "./Home.css"; // Custom CSS for dynamic styling

export default function Home() {
  return (
    <div className="home-container mx-auto w-full max-w-7xl">
      {/* Header Section */}
      <aside className="relative text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="flex flex-wrap items-center">
          {/* Left Side: Content */}
          <div className="relative z-10 max-w-xl px-4 py-10 space-y-8 sm:text-left">
            <h1 className="text-4xl font-bold sm:text-5xl text-white">
              Welcome to My Dashboard
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Explore my projects, skills, and professional journey.
            </p>
            <button
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:opacity-80 transition-all"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              View My Work
            </button>
          </div>

          {/* Right Side: Profile Image */}
          <div className="relative z-10 flex justify-center items-center">
            <img
              className="rounded-full sm:w-80 w-64 shadow-2xl border-4 border-white"
              src="/portfolioimage.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
