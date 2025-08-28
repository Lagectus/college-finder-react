import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("India"); // default capitalized

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(name, country);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 w-full max-w-2xl"
    >
      <input
        type="text"
        placeholder="Search university..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 shadow-sm"
      />
      <input
        type="text"
        placeholder="Enter country (default: India)"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 shadow-sm"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
