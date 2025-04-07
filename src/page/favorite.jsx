import { useState } from "react";
import { Heart } from "lucide-react";
// import Image from "../assets/images/book-img.png";

const initialBooks = [
  {
    id: 1,
    title: "Hercules And The Wagoner",
    description:
      "Hercules teaches the wagoner an important lesson about effort.",
    likes: 0,
    image:
      "https://i.pinimg.com/474x/4b/c7/c2/4bc7c292ec3ad7b8b59993e66d208d7a.jpg",
  },
  {
    id: 2,
    title: "Hercules And The Wagoner",
    description:
      "Hercules teaches the wagoner an important lesson about effort.",
    likes: 0,
    image:
      "https://i.pinimg.com/474x/4b/c7/c2/4bc7c292ec3ad7b8b59993e66d208d7a.jpg",
  },
  {
    id: 3,
    title: "Hercules And The Wagoner",
    description:
      "Hercules teaches the wagoner an important lesson about effort.",
    likes: 0,
    image:
      "https://i.pinimg.com/474x/4b/c7/c2/4bc7c292ec3ad7b8b59993e66d208d7a.jpg",
  },
];

export default function FavoriteSection() {
  const [favorites, setFavorites] = useState({});
  const [likes, setLikes] = useState(
    initialBooks.reduce((acc, book) => {
      acc[book.id] = book.likes;
      return acc;
    }, {})
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const isLiked = prev[id];
      setLikes((likesPrev) => ({
        ...likesPrev,
        [id]: isLiked ? likesPrev[id] - 1 : likesPrev[id] + 1,
      }));
      return {
        ...prev,
        [id]: !isLiked,
      };
    });
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-center text-xl font-bold mb-6">My Favorite</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {initialBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md p-4 relative"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.description}</p>

            {/* Heart and like count */}
            <button
              onClick={() => toggleFavorite(book.id)}
              className="flex items-center space-x-1 mt-3 text-sm text-gray-500 hover:text-red-500"
            >
              <Heart
                size={20}
                className={
                  favorites[book.id]
                    ? "fill-red-500 text-red-500"
                    : "text-gray-400"
                }
              />
              <span>{likes[book.id]}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
