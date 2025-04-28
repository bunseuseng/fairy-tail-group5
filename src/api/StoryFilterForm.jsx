// import React, { useState, useEffect } from "react";

// const StoryFilterForm = () => {
//   const [stories, setStories] = useState([]);
//   const [ageRange, setAgeRange] = useState(2);
//   const [storyType, setStoryType] = useState(6);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStories = async () => {
//       setLoading(true);
//       setError(null);

//       const apiUrl = `http://62.72.46.248:1337/api/stories?populate=*&filters[age_range][$eq]=${ageRange}&filters[story_type][$eq]=${storyType}&pagination[page]=1&pagination[pageSize]=10`;

//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json();
//         setStories(result.data || []); // directly set data
//       } catch (error) {
//         console.error(error);
//         setError("Failed to fetch stories.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStories();
//   }, [ageRange, storyType]);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Story Filter</h1>

//       {/* Filter Form */}
//       <form className="space-y-4 mb-6">
//         <div className="flex items-center">
//           <label htmlFor="ageRange" className="mr-2 font-medium">
//             Age Range:
//           </label>
//           <select
//             id="ageRange"
//             value={ageRange}
//             onChange={(e) => setAgeRange(Number(e.target.value))}
//             className="border px-3 py-2 rounded"
//           >
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             <option value={4}>4</option>
//             <option value={5}>5</option>
//             <option value={6}>6</option>
//             <option value={7}>7</option>
//             <option value={8}>8</option>
//             <option value={9}>9</option>
//             <option value={10}>10</option>
//           </select>
//         </div>

//         <div className="flex items-center">
//           <label htmlFor="storyType" className="mr-2 font-medium">
//             Story Type:
//           </label>
//           <select
//             id="storyType"
//             value={storyType}
//             onChange={(e) => setStoryType(Number(e.target.value))}
//             className="border px-3 py-2 rounded"
//           >
//             <option value={6}>Adventure</option>
//             <option value={7}>Classic</option>
//             <option value={8}>Fantasy</option>
//           </select>
//         </div>
//       </form>

//       {/* Loading/Error States */}
//       {loading && <p>Loading stories...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {/* Stories List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {stories.length > 0
//           ? stories.map((story) => (
//               <div key={story.id} className="border p-4 rounded shadow">
//                 {story.cover_image?.formats?.thumbnail?.url && (
//                   <img
//                     src={story.cover_image.formats.thumbnail.url}
//                     alt={story.title}
//                     className="w-full h-48 object-cover mb-4 rounded"
//                   />
//                 )}
//                 <h3 className="text-xl font-bold mb-2">{story.title}</h3>
//                 <p className="text-gray-700">{story.description}</p>
//               </div>
//             ))
//           : !loading && <p>No stories available for the selected filters.</p>}
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <StoryFilterForm />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";

const StoryFilterForm = () => {
  const [stories, setStories] = useState([]);
  const [ageRanges, setAgeRanges] = useState([]);
  const [storyTypes, setStoryTypes] = useState([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [selectedStoryType, setSelectedStoryType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch age ranges and story types on page load
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

  // Fetch stories when filters change
  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      setError(null);

      let url = `http://62.72.46.248:1337/api/stories?populate=*`;

      // Add filters only if selected
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
  }, [selectedAgeRange, selectedStoryType]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Story Filter</h1>

      {/* Filter Form */}
      <form className="space-y-4 mb-6">
        {/* Age Range Selector */}
        <div className="flex items-center">
          <label htmlFor="ageRange" className="mr-2 font-medium">
            Age Range:
          </label>
          <select
            id="ageRange"
            value={selectedAgeRange || ""}
            onChange={(e) => setSelectedAgeRange(e.target.value || null)}
            className="border px-3 py-2 rounded"
          >
            <option value="">All</option>
            {ageRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Story Type Selector */}
        <div className="flex items-center">
          <label htmlFor="storyType" className="mr-2 font-medium">
            Story Type:
          </label>
          <select
            id="storyType"
            value={selectedStoryType || ""}
            onChange={(e) => setSelectedStoryType(e.target.value || null)}
            className="border px-3 py-2 rounded"
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

      {/* Loading/Error States */}
      {loading && <p>Loading stories...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Stories List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.length > 0
          ? stories.map((story) => (
              <div key={story.id} className="border p-4 rounded shadow">
                {story.cover_image?.formats?.thumbnail?.url && (
                  <img
                    src={story.cover_image.formats.thumbnail.url}
                    alt={story.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-gray-700">{story.description}</p>
              </div>
            ))
          : !loading && <p>No stories available for the selected filters.</p>}
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
