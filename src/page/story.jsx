import React, { useState } from "react";
import Card from "../components/card.jsx";
import { Search } from "lucide-react";

const story = () => {
  const SearchBox = ({ mobile = false }) => (
    <div className={`relative flex items-center ${mobile ? "w-full" : ""}`}>
      <Search size={18} className="absolute left-3 text-purple-800" />
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 border-2 border-solid border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
      />
    </div>
  );

  const [isOpen, setIsOpen] = useState(false); // To track dropdown visibility
  const [selectedOption, setSelectedOption] = useState("Select an option"); // Button label state

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle selecting an option from the dropdown
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <>
      <div className="w-md mx-auto m-10">
        <SearchBox />
      </div>
      <div className="relative m-5">
        <div className="dropdown absolute bg-purple-800 p-3 text-white rounded-lg shadow-lg">
          <button className="dropdown-button" onClick={toggleDropdown}>
            {selectedOption}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleSelect("Option 1")}>Option 1</li>
              <li onClick={() => handleSelect("Option 2")}>Option 2</li>
              <li onClick={() => handleSelect("Option 3")}>Option 3</li>
              <li onClick={() => handleSelect("Option 4")}>Option 4</li>
            </ul>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 mt-25">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default story;
