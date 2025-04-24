import React, { useState } from "react";
import { Search } from "lucide-react";
import story from "../assets/images/storyimg.png";

// Reusable SearchBox Component
const SearchBox = ({ mobile = false }) => (
  <div className={`relative flex items-center ${mobile ? "w-full" : "max-w-md w-full"}`}>
    <Search size={18} className="absolute left-3 text-purple-800" />
    <input
      type="text"
      placeholder="Search"
      className="pl-10 pr-4 py-2 border-2 border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md w-full"
    />
  </div>
);

// Reusable FilterDropdown Component with Icons for Story and Age
const FilterDropdown = ({ icon, title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Call onSelect for callback
  };

  return (
    <div className="relative w-40">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center bg-purple-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition w-full"
      >
        <span>{icon} {selectedOption}</span>
        
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-full">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="text-center px-4 py-2 hover:bg-purple-100 cursor-pointer text-gray-700"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main Favorites Component with Filters
const Favorites = () => {
  const [selectedAge, setSelectedAge] = useState("Filter Age");
  const [selectedStory, setSelectedStory] = useState("Filter Story");

  const storyOptions = ["Adventure", "Fairy Tale", "Fantasy", "Moral Story"];
  const ageOptions = ["3+", "6+", "9+", "All Ages"];

  const handleAgeSelect = (option) => {
    setSelectedAge(option);
  };

  const handleStorySelect = (option) => {
    setSelectedStory(option);
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-6 px-4">
      {/* Search Box */}
      <SearchBox />

      {/* Logo */}
      <div className="text-center">
        <img src={story} alt="Story Logo" className="mx-auto w-150 h-auto" />
      </div>

      {/* Centered Filter Buttons with Icons */}
      <div className="flex space-x-8 w-full ">
        {/* Story Filter */}
        <FilterDropdown
         
          title={selectedStory}
          options={storyOptions}
          onSelect={handleStorySelect}
        />

        {/* Age Filter */}
        <FilterDropdown
          
          title={selectedAge}
          options={ageOptions}
          onSelect={handleAgeSelect}
        />
      </div>
    </div>
  );
};

export default Favorites;
