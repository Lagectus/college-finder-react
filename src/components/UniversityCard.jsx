import React from "react";

const UniversityCard = ({ uni }) => {
  return (
    <div className="relative bg-gradient-to-br from-white/80 to-blue-50/80 shadow-md rounded-2xl p-6 border border-transparent hover:border-blue-400 hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80')",
        }}
      ></div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-indigo-700 mb-3 tracking-wide drop-shadow-sm">
          {uni.name}
        </h2>

        <div className="space-y-1 text-gray-800">
          <p className="text-sm flex items-center">
            🌐 <span className="ml-2">Domain: {uni.domains[0]}</span>
          </p>
          <p className="text-sm flex items-center">
            📍 <span className="ml-2">Country: {uni.country}</span>
          </p>
        </div>

        {uni.web_pages && (
          <a
            href={uni.web_pages[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            🌍 Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default UniversityCard;
