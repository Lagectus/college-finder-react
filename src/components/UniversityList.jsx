const UniversityList = ({ universities }) => {
  if (!universities || universities.length === 0) {
    return <p className="text-gray-600 mt-4">No universities found.</p>;
  }

  return (
    <ul className="mt-6 w-full max-w-2xl space-y-3">
      {universities.map((uni, idx) => (
        <li
          key={idx}
          className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-indigo-900">{uni.name}</h3>
          <p className="text-sm text-gray-700">{uni.country}</p>
          {uni.web_pages && uni.web_pages[0] && (
            <a
              href={uni.web_pages[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              Visit Website
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default UniversityList;
