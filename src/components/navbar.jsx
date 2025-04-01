// import { useState } from "react";
// import { Menu, X, Search } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-8 w-full">
//       <div className="flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="Mystic Melody" className="h-10" />
//           {/* <span className="font-bold text-xl text-purple-800">
//             MYSTIC MELODY
//           </span> */}
//         </div>

//         {/* Menu Button (Mobile) */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-purple-800"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-6 items-center">
//           <a
//             href="#"
//             className="text-purple-800 hover:text-purple-500 transition duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="text-purple-800 hover:text-purple-500 transition duration-300"
//           >
//             Story
//           </a>
//           <a
//             href="#"
//             className="text-purple-800 hover:text-purple-500 transition duration-300"
//           >
//             Favorite
//           </a>
//           <div className="relative flex items-center">
//             <Search size={18} className="absolute left-3 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
//             Login
//           </button>
//           <a href="#" className="text-purple-800 hover:text-purple-600">
//             Register
//           </a>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden flex flex-col space-y-4 pb-4 border-t pt-4">
//           <a
//             href="#"
//             className="text-purple-800 hover:text-purple-500 transition duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="text-purple-800 hover:text-purple-500 transition duration-300"
//           >
//             Story
//           </a>
//           <a
//             href="#"
//             className="text-purple-800 hover:text-purple-500 transition duration-300"
//           >
//             Favorite
//           </a>
//           <div className="relative flex items-center">
//             <Search size={18} className="absolute left-3 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
//             Login
//           </button>
//           <a href="#" className="text-purple-800 hover:text-purple-600">
//             Register
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Mystic Melody" className="h-10" />

          {/* <span className="font-bold text-xl text-purple-800">
            MYSTIC MELODY
          </span> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a
            href="#"
            className="text-purple-800 hover:text-purple-500 transition duration-300"
          >
            Home
          </a>

          {/* Dropdown for Story */}
          <div className="relative group">
            <button
              className="flex items-center text-purple-800 hover:text-purple-500 transition duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Story <ChevronDown size={16} className="ml-1" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg border py-2">
                <a href="#" className="block px-4 py-2 hover:bg-purple-100">
                  Classic Tales
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-purple-100">
                  Mythology
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-purple-100">
                  Fantasy
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-purple-800 hover:text-purple-500 transition duration-300"
          >
            Favorite
          </a>

          {/* Search Box */}
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-3 text-purple-800" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
            <a href=""> Login </a>
          </button>
          <a
            href="#"
            className="text-purple-800 hover:text-purple-500 ml-2 transition duration-300"
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-4 pb-4 border-t pt-4">
          <a href="#" className="text-purple-800 hover:text-purple-600">
            Home
          </a>

          {/* Mobile Dropdown for Story */}
          <div className="relative">
            <button
              className="flex items-center text-purple-800 hover:text-purple-500 transition duration-300 w-full"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Story <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a
                  href="#"
                  className="block text-purple-800 hover:text-purple-500"
                >
                  Classic Tales
                </a>
                <a
                  href="#"
                  className="block text-purple-800 hover:text-purple-500"
                >
                  Mythology
                </a>
                <a
                  href="#"
                  className="block text-purple-800 hover:text-purple-500"
                >
                  Fantasy
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-purple-800 hover:text-purple-600">
            Favorite
          </a>
          <a href="#" className="text-purple-800 hover:text-purple-600">
            Search
          </a>
          <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
            Login
          </button>
          <a href="#" className="text-purple-800 hover:text-purple-600">
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
