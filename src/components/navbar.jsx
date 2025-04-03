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
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Story dropdown state
  const [activeMenu, setActiveMenu] = useState("Home"); // Active menu state

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu !== "Story") setDropdownOpen(false); // Close dropdown if another menu is clicked
  };

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-8 w-full">
      <div className="relative flex justify-between items-center py-4">
        {/* Logo (Left) */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Mystic Melody" className="h-10" />
        </div>

        {/* Centered Menu */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-6 items-center">
          <a href="/" className="text-purple-800 hover:text-purple-600">
            Home
          </a>

          {/* Dropdown for Story */}
          <div className="relative">
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

          <a href="" className="text-purple-800 hover:text-purple-600">
            Favorite
          </a>

          {/* Search Box */}
          {/* <div className="relative flex items-center">
            <Search size={18} className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div> */}
        </div>

        {/* Login & Register (Right Side) */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
            Login
          </button>
          <a href="#" className="text-purple-800 mt-2 hover:text-purple-600">
            Register
          </a>
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-4 pb-4 border-t pt-4">
          <a
            href="#"
            className={`text-purple-800 hover:text-purple-600 ${
              activeMenu === "Home" ? "border-b-2 border-purple-800" : ""
            }`}
            onClick={() => handleMenuClick("Home")}
          >
            Home
          </a>

          {/* Mobile Dropdown for Story */}
          <div className="relative">
            <button
              className={`flex items-center text-purple-800 hover:text-purple-500 transition duration-300 w-full ${
                activeMenu === "Story" ? "border-b-2 border-purple-800" : ""
              }`}
              onClick={() => {
                handleMenuClick("Story");
                setDropdownOpen(!dropdownOpen);
              }}
            >
              Story <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a
                  href="#"
                  className="block text-purple-800 hover:text-purple-500"
                  onClick={() => handleMenuClick("Classic Tales")}
                >
                  Classic Tales
                </a>
                <a
                  href="#"
                  className="block text-purple-800 hover:text-purple-500"
                  onClick={() => handleMenuClick("Mythology")}
                >
                  Mythology
                </a>
                <a
                  href="#"
                  className="block text-purple-800 hover:text-purple-500"
                  onClick={() => handleMenuClick("Fantasy")}
                >
                  Fantasy
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className={`text-purple-800 hover:text-purple-600 ${
              activeMenu === "Favorite" ? "border-b-2 border-purple-800" : ""
            }`}
            onClick={() => handleMenuClick("Favorite")}
          >
            Favorite
          </a>
          <button className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
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
