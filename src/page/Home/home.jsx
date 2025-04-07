import React, { useEffect, useRef, useState } from "react";
import fullvideo from "../../assets/images/full.mp4";
import book from "../../assets/images/book.png";
import music from "../../assets/images/music.png";
import member from "../../assets/images/member.png";
import movie1 from "../../assets/images/movie1.png";
import movie2 from "../../assets/images/movie2.png";
import movie3 from "../../assets/images/movie3.png";
import movie5 from "../../assets/images/movie5.png";
import movie6 from "../../assets/images/movie6.png";
import movie8 from "../../assets/images/movie8.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

// Reusable BookCard Component
const BookCard = ({ title, author, description, image, likes, onClick, isClicked }) => (
  <div
    className={`flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer transition transform duration-300 ${
      isClicked ? "scale-105 ring-4 ring-purple-300" : ""
    }`}
    onClick={onClick}
  >
    <img className="h-64 w-full object-cover" src={image} alt={title} />
    <div className="p-6 bg-white flex flex-col justify-between h-full">
      <div>
        <p className="text-xl font-semibold text-gray-900">{title}</p>
        {author && <p className="text-sm text-gray-500">{author}</p>}
        <p className="mt-2 text-base text-gray-600">{description}</p>
      </div>
      <div className="mt-4 flex items-center text-sm text-gray-500">❤️ {likes}</div>
    </div>
  </div>
);

// Reusable Section for Categories
const BookSection = ({ title, books, sectionId }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300); // Reset animation
  };

  return (
    <section id={sectionId} className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
          <a
            href={`#${sectionId}`}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Read More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <BookCard
              key={i}
              {...book}
              onClick={() => handleCardClick(i)}
              isClicked={clickedIndex === i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const sliderRef = useRef(null);
  const images = [movie1, movie2, movie3, movie5, movie6, movie8];

  const bookData = [
    {
      title: "Tari Tari",
      author: "Masakazu Hashimoto",
      description:
        "Masakazu Hashimoto, who was in charge of series composition for the original anime",
      image: img1,
      likes: 210,
    },
    {
      title: "Hercules And The Wagoner",
      description: "Hercules teaches the wagoner an important lesson about effort.",
      image: img2,
      likes: 180,
    },
    {
      title: "The Bad Guys",
      author: "Aaron Blabey",
      description: "A gang of misfit animals tries to be heroes instead of villains.",
      image: img3,
      likes: 230,
    },
  ];

  // Auto Slide Logic
  useEffect(() => {
    let isHovered = false;
    const slider = sliderRef.current;

    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    const interval = setInterval(() => {
      if (!isHovered && slider) {
        const { scrollLeft, scrollWidth, clientWidth } = slider;
        slider.scrollLeft = scrollLeft >= scrollWidth - clientWidth ? 0 : scrollLeft + 2;
      }
    }, 30);

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-start space-y-6 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 leading-tight">
            Animated Read-Aloud Books for Kids
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-lg">
            Educational, safe, and ad-free. Vooks transforms the way kids experience books. It's the
            feel-good screen time you've been looking for!
          </p>
          <button className="bg-purple-800 text-white px-10 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
            Explore
          </button>
        </div>

        <div className="mb-10 md:mb-0 md:w-1/2">
          <video
            src={fullvideo}
            className="w-full h-auto rounded-2xl shadow-lg border-4 border-gray-800"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* Advantages */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-900">Our Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: book, text: "+4000 Books" },
              { img: music, text: "Available Everywhere" },
              { img: member, text: "Family Friendly" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-4">
                <div className="bg-white rounded-full p-5 shadow-md">
                  <img src={item.img} alt={item.text} className="w-20 mb-2" />
                </div>
                <p className="text-lg font-semibold text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto Scrolling Slider */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Featured</h2>
          <div ref={sliderRef} className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {images.map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-64 h-64">
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="object-cover w-full h-full rounded-lg shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Sections */}
      <BookSection title="Adventure" books={bookData} sectionId="adventure" />
      <BookSection title="Animal" books={bookData} sectionId="animal" />
      <BookSection title="Classic" books={bookData} sectionId="classic" />
    </div>
  );
};

export default Home;
