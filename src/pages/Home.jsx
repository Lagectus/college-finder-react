import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import UniversityList from "../components/UniversityList";

const Home = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (name, country) => {
    setLoading(true);
    setError(null);
    setUniversities([]);

    try {
      // Direct public API (Hipolabs) - no Netlify function required
      // Example: http://universities.hipolabs.com/search?name=mit&country=india
      const queryParts = [];
      if (name && name.trim() !== "") {
        queryParts.push(`name=${encodeURIComponent(name.trim())}`);
      }
      if (country && country.trim() !== "") {
        queryParts.push(`country=${encodeURIComponent(country.trim())}`);
      }
      const queryString = queryParts.length ? `?${queryParts.join("&")}` : "";

      const res = await fetch(
        `http://universities.hipolabs.com/search${queryString}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      // API returns array; set results (limit to 200 to avoid huge lists)
      setUniversities(Array.isArray(data) ? data.slice(0, 200) : []);
    } catch (err) {
      console.error("Error fetching universities:", err);
      setError("Kuch galat ho gaya — please try again.");
      setUniversities([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center p-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-100/70 to-purple-200/70 backdrop-blur-sm"></div>

      <h1 className="relative text-4xl font-extrabold text-indigo-900 mb-8 tracking-wide drop-shadow-lg z-10">
        🏫 College Finder
      </h1>

      <div className="relative z-10 w-full flex flex-col items-center">
        <SearchBar onSearch={handleSearch} />

        {loading && (
          <p className="text-gray-800 mt-4 animate-pulse">Fetching universities...</p>
        )}

        {error && <p className="text-red-600 mt-4">{error}</p>}

        {!loading && !error && <UniversityList universities={universities} />}
      </div>
    </div>
  );
};

export default Home;
