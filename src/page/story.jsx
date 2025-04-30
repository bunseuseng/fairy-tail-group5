// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "../import/card"; // Import the Card component

// const API_URL = "http://62.72.46.248:1337/api/stories?populate";
// const DEFAULT_IMAGE_URL =
//   "https://res.cloudinary.com/dsfuhhdez/image/upload/v1745376147/three_little_pigs_4740ba3915.webp";

// const Stories = () => {
//   const [stories, setStories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchStories = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         console.log("response-Data", response.data.data);
//         setStories(response.data.data || []);
//       } catch (err) {
//         console.error("Failed to fetch stories:", err);
//         setError("Failed to fetch stories. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStories();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-gray-500 text-lg">Loading stories...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {stories.map((story) => {
//         const { id, title, description, createdAt, imageUrls } = story;

//         // Fallback to the default image URL if imageUrls is empty
//         const imgSrc =
//           imageUrls && imageUrls.length > 0 ? imageUrls : [DEFAULT_IMAGE_URL];

//         return (
//           <Card
//             key={id}
//             title={title}
//             description={description}
//             createdAt={createdAt}
//             images={imgSrc}
//           />
//         );
//       })}
//     </div>
//   );
// };

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "../import/card"; // Import the Card component

// const BASE_API = "http://62.72.46.248:1337/api/stories";
// const DEFAULT_IMAGE_URL =
//   "https://res.cloudinary.com/dsfuhhdez/image/upload/v1745376147/three_little_pigs_4740ba3915.webp";

// const Stories = () => {
//   const [stories, setStories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchStories = async (query = "") => {
//     setLoading(true);
//     setError("");
//     try {
//       const url = query
//         ? `${BASE_API}?filters[title][$containsi]=${encodeURIComponent(
//             query
//           )}&populate=*`
//         : `${BASE_API}?populate=*`;

//       const response = await axios.get(url);
//       console.log("Fetched stories:", response.data.data);
//       setStories(response.data.data || []);
//     } catch (err) {
//       console.error("Failed to fetch stories:", err);
//       setError("Failed to fetch stories. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStories(); // Fetch all on initial load
//   }, []);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     fetchStories(searchTerm);
//   };

//   return (
//     <div className="p-6">
//       {/* Search Box */}
//       <form onSubmit={handleSearch} className="mb-6 flex gap-4">
//         <input
//           type="text"
//           placeholder="Search stories by title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full border border-gray-300 p-2 rounded-md shadow-sm"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//         >
//           Search
//         </button>
//       </form>

//       {/* Loading & Error */}
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <p className="text-gray-500 text-lg">Loading stories...</p>
//         </div>
//       ) : error ? (
//         <div className="flex justify-center items-center h-64">
//           <p className="text-red-500 text-lg">{error}</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {stories.length > 0 ? (
//             stories.map((story) => {
//               const { id, title, description, createdAt, imageUrls } = story;

//               const imgSrc =
//                 imageUrls && imageUrls.length > 0
//                   ? imageUrls
//                   : [DEFAULT_IMAGE_URL];

//               return (
//                 <Card
//                   key={id}
//                   title={title}
//                   description={description}
//                   createdAt={createdAt}
//                   images={imgSrc}
//                 />
//               );
//             })
//           ) : (
//             <p className="text-gray-400 col-span-full">
//               No stories found for "{searchTerm}".
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Stories;

import React, { useState, useEffect } from "react";
import { Heart, Heart as HeartFill } from "lucide-react"; // Using lucide-react icons
import { Link } from "react-router-dom";

// Reusable Story Card
const StoryCard = ({ story }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const imageUrl =
    story.cover_image?.formats?.large?.url ||
    story.cover_image?.formats?.medium?.url ||
    story.cover_image?.url;

  return (
    <Link to={`/story/${story.documentId}`}>
      <div className="relative bg-white rounded-[10px] shadow transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={story.title}
            className="rounded-[inherit] object-cover mb-4 w-full h-64 md:h-80 lg:h-96"
          />
        ) : (
          <div className="bg-gray-200 h-64 md:h-80 lg:h-96 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}

        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{story.title}</h3>
          <p className="text-gray-700">{story.description}</p>
        </div>

        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition"
          aria-label="Like or Unlike"
        >
          {liked ? (
            <HeartFill className="text-red-500 w-6 h-6 fill-current" />
          ) : (
            <Heart className="text-red-500 w-6 h-6" />
          )}
        </button>
      </div>
    </Link>
  );
};

const StoryFilterForm = () => {
  const [stories, setStories] = useState([]);
  const [ageRanges, setAgeRanges] = useState([]);
  const [storyTypes, setStoryTypes] = useState([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [selectedStoryType, setSelectedStoryType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // For search query

  // Fetching filters
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const ageResponse = await fetch(
          "http://62.72.46.248:1337/api/age-ranges"
        );
        const typeResponse = await fetch(
          "http://62.72.46.248:1337/api/story-types"
        );

        const ageData = await ageResponse.json();
        const typeData = await typeResponse.json();

        setAgeRanges(ageData.data || []);
        setStoryTypes(typeData.data || []);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  // Fetching stories
  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      setError(null);

      let url = `http://62.72.46.248:1337/api/stories?populate=*`;

      // Add search query to the URL
      if (searchQuery) {
        url += `&filters[title][$containsi]=${searchQuery}`;
      }

      if (selectedAgeRange !== null) {
        url += `&filters[age_range][id][$eq]=${selectedAgeRange}`;
      }
      if (selectedStoryType !== null) {
        url += `&filters[story_type][id][$eq]=${selectedStoryType}`;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setStories(result.data || []);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch stories.");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [selectedAgeRange, selectedStoryType, searchQuery]); // Re-fetch stories on search or filter change

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-violet-700">
        Story Filter
      </h1>

      {/* Search Form */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by story title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 flex-1"
        />
        <button
          onClick={() => setSearchQuery(searchQuery)} // Trigger search on button click
          className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
        >
          Search
        </button>
      </div>

      {/* Filter Form */}
      <form className="grid md:grid-cols-2 gap-4 mb-8 bg-white p-6 rounded-2xl shadow-md">
        <div className="flex flex-col">
          <label
            htmlFor="ageRange"
            className="mb-2 text-sm font-semibold text-gray-700"
          >
            Age Range
          </label>
          <select
            id="ageRange"
            value={selectedAgeRange || ""}
            onChange={(e) => setSelectedAgeRange(e.target.value || null)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="">All</option>
            {ageRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="storyType"
            className="mb-2 text-sm font-semibold text-gray-700"
          >
            Story Type
          </label>
          <select
            id="storyType"
            value={selectedStoryType || ""}
            onChange={(e) => setSelectedStoryType(e.target.value || null)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="">All</option>
            {storyTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {loading && (
        <p className="text-center text-gray-600">Loading stories...</p>
      )}
      {error && <p className="text-center text-red-500 font-medium">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stories.length > 0
          ? stories.map((story) => <StoryCard key={story.id} story={story} />)
          : !loading && (
              <p className="col-span-full text-center text-gray-500">
                No stories available for the selected filters.
              </p>
            )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <StoryFilterForm />
    </div>
  );
}

export default App;
