import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuLinks = ({ mobile = false }) => (
    <div className={`flex ${mobile ? "flex-col space-y-4" : "space-x-8"}`}>
      <Link
        to="/"
        className="text-purple-800 hover:text-purple-600 text-lg font-medium transition duration-300 "
      >
        Home
      </Link>
      <Link
        to="/story"
        className="text-purple-800 hover:text-purple-600 text-lg font-medium transition duration-300"
      >
        Story
      </Link>
      <Link
        to="/favorite"
        className="text-purple-800 hover:text-purple-600 text-lg font-medium transition duration-300"
      >
        Favorite
      </Link>
    </div>
  );

  const AuthButtons = () => (
    <div className="flex space-x-4">
      <Link
        to="/login"
        className="bg-purple-800 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300 shadow-md"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="text-purple-800 border border-purple-800 px-6 py-2 rounded-full hover:bg-purple-100 transition duration-300 shadow-md"
      >
        Register
      </Link>
    </div>
  );

  return (
    <nav className="bg-white shadow-md px-6 lg:px-15 w-full ">
      <div className="flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Mystic Melody" className="h-15" />
        </Link>
        <div className="hidden lg:flex flex-1 justify-center">
          <MenuLinks />
        </div>
        <div className="hidden lg:flex">
          <AuthButtons />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-purple-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-6 pb-6 border-t pt-6">
          <MenuLinks mobile />
          <AuthButtons />
        </div>
      )}
    </nav>
  );
}