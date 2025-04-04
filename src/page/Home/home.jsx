import React from "react";
import fullvideo from "../../assets/images/full.mp4";
import book from "../../assets/images/book.png";
import music from "../../assets/images/music.png";
import member from "../../assets/images/member.png";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Section 1: Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="flex flex-col justify-center items-start space-y-6 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 leading-tight">
            Animated Read-Aloud Books for Kids
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-lg">
            Educational, safe, and ad-free. Vooks transforms the way kids experience books. It's the feel-good screen time you've been looking for!
          </p>
          <button
            className="bg-purple-800 text-white px-25 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2"
            aria-label="Explore Vooks"
            role="button"
          >
            Explore
          </button>
        </div>

        {/* Video Section */}
        <div className="mb-10 md:mb-0 md:w-1/2">
          <video
            src={fullvideo}
            className="w-full h-auto rounded-2xl shadow-lg border-4 border-gray-800"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Video showing animated read-aloud books for kids"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Section 2: Our Advantages Section */}
      <section className=" px-6 py-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-purple-900">
      Our Advantages
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Advantage Item 1 */}
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-white rounded-full p-15 shadow-md">
          <img src={book} alt="Over 4000 animated books for kids" className="w-20 mb-2" />
        </div>
        <p className="text-lg font-semibold text-gray-700">+4000 Books</p>
      </div>

      {/* Advantage Item 2 */}
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-white rounded-full p-15 shadow-md">
          <img src={music} alt="Vooks is available everywhere" className="w-20 mb-2" />
        </div>
        <p className="text-lg font-semibold text-gray-700">Available Everywhere</p>
      </div>

      {/* Advantage Item 3 */}
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-white rounded-full p-15 shadow-md">
          <img src={member} alt="Family-friendly content" className="w-20 mb-2" />
        </div>
        <p className="text-lg font-semibold text-gray-700">Family Friendly</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
