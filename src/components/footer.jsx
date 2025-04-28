// import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import logofooter from "../assets/images/logo.png";
import footerimg from "../assets/images/facebook.png";
import inImg from "../assets/images/in.png";
import telegramImg from "../assets/images/Telegram.png";
import Twister from "../assets/images/Twister.png";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-gray-900 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <img src={logofooter} alt="" className="w-50 mb-2" />
          <p className="text-sm max-w-lg">
            Fairytalez.com is the world's largest collection of fairy tales,
            fables, and folktales. Discover thousands of classic tales plus new
            stories by fairy tale fans. Join now to publish your own tales, get
            feedback from readers, and enter writing competitions.
          </p>
          <p className="font-semibold mt-2">
            © 2025 Fairytalez.mystic melody. All Rights Reserved.
          </p>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-2">Follow us on:</p>
          <div className="flex space-x-3">
            <a href="#" className="hover:opacity-80">
              <img src={footerimg} alt="Facebook" className="w-10" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={inImg} alt="LinkedIn" className="w-10" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={telegramImg} alt="Telegram" className="w-10" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={Twister} alt="Twitter" className="w-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
