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
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const MenuLinks = ({ mobile = false }) => (
    <>
      <Link
        to="/"
        className={`text-purple-800 hover:text-purple-500 transition duration-300 ${
          mobile ? "" : "mr-6"
        }`}
      >
        Home
      </Link>

      <Link
        to="/story"
        className={`text-purple-800 hover:text-purple-500 transition duration-300 ${
          mobile ? "" : "mr-6"
        }`}
      >
        Story
      </Link>

      <Link
        to="/favorite"
        className={`text-purple-800 hover:text-purple-500 transition duration-300 ${
          mobile ? "" : "mr-6"
        }`}
      >
        Favorite
      </Link>
    </>
  );

  const SearchBox = ({ mobile = false }) => (
    <div className={`relative flex items-center ${mobile ? "w-full" : ""}`}>
      <Search size={18} className="absolute left-3 text-purple-800" />
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
      />
    </div>
  );

  const AuthButtons = ({ mobile = false }) => (
    <>
      <Link
        to="/login"
        className={`bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300 ${
          mobile ? "w-full text-center" : ""
        }`}
      >
        Login
      </Link>
      <Link
        to="/register"
        className={`text-purple-800 hover:text-purple-600 ${
          mobile ? "w-full text-center" : "ml-2"
        }`}
      >
        Register
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Mystic Melody" className="h-10" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-purple-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <MenuLinks />
          <SearchBox />
          <AuthButtons />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-4 pb-4 border-t pt-4">
          <MenuLinks mobile />
          <SearchBox mobile />
          <AuthButtons mobile />
        </div>
      )}
    </nav>
  );
}
