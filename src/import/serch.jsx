import React, { useState } from "react";

const StorySearch = () => {
  const [query, setQuery] = useState("");
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://62.72.46.248:1337/api/stories?filters[title][$containsi]=${query}`
      );
      const data = await response.json();
      setStories(data.data); // Strapi returns results in `data.data`
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Stories</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter story title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-2">
        {stories.map((story) => (
          <li key={story.id} className="border p-2 rounded shadow">
            <h2 className="text-lg font-semibold">{story.attributes.title}</h2>
            {/* Add more fields if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StorySearch; 
