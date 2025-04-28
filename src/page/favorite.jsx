// import { useState } from "react";
// import { Heart } from "lucide-react";

// import Image from "../assets/images/book-img.png";

// const initialBooks = [
//   {
//     id: 1,
//     title: "Hercules And The Wagoner",
//     description:
//       "Hercules teaches the wagoner an important lesson about effort.",
//     likes: 0,
//     image:
//       "https://i.pinimg.com/474x/4b/c7/c2/4bc7c292ec3ad7b8b59993e66d208d7a.jpg",
//   },
//   {
//     id: 2,
//     title: "Hercules And The Wagoner",
//     description:
//       "Hercules teaches the wagoner an important lesson about effort.",
//     likes: 0,
//     image:
//       "https://i.pinimg.com/474x/4b/c7/c2/4bc7c292ec3ad7b8b59993e66d208d7a.jpg",
//   },
//   {
//     id: 3,
//     title: "Hercules And The Wagoner",
//     description:
//       "Hercules teaches the wagoner an important lesson about effort.",
//     likes: 0,
//     image:
//       "https://i.pinimg.com/474x/4b/c7/c2/4bc7c292ec3ad7b8b59993e66d208d7a.jpg",
//   },
// ];

// export default function FavoriteSection() {
//   const [favorites, setFavorites] = useState({});
//   const [likes, setLikes] = useState(
//     initialBooks.reduce((acc, book) => {
//       acc[book.id] = book.likes;
//       return acc;
//     }, {})
//   );

//   const toggleFavorite = (id) => {
//     setFavorites((prev) => {
//       const isLiked = prev[id];
//       setLikes((likesPrev) => ({
//         ...likesPrev,
//         [id]: isLiked ? likesPrev[id] - 1 : likesPrev[id] + 1,
//       }));
//       return {
//         ...prev,
//         [id]: !isLiked,
//       };
//     });
//   };

//   return (
//     <div className="px-4 py-6 sm:px-6 lg:px-8">
//       <h2 className="text-center text-xl font-bold mb-6">My Favorite</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {initialBooks.map((book) => (
//           //
//           <motion.div
//             key={book.id}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-lg shadow-md p-4 relative"
//           >
//             <img
//               src={book.image}
//               alt={book.title}
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
//             <p className="text-sm text-gray-600">{book.description}</p>

//             {/* Heart and like count */}
//             <button
//               onClick={() => toggleFavorite(book.id)}
//               className="flex items-center space-x-1 mt-3 text-sm text-gray-500 hover:text-red-500"
//             >
//               <Heart
//                 size={20}
//                 className={
//                   favorites[book.id]
//                     ? "fill-red-500 text-red-500"
//                     : "text-gray-400"
//                 }
//               />
//               <span>{likes[book.id]}</span>
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// src/pages/FavoriteStory.jsx
import React, { useEffect, useState } from "react";

const FavoriteStory = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/favorite-stories")
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching favorite stories:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading favorite stories...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Favorite Stories</h1>
      <ul className="space-y-4">
        {favorites.map((story) => (
          <li key={story.id} className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-semibold">{story.title}</h2>
            <p>{story.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteStory;

// import { fetchFavorites, unfavoriteItem } from "./favoriteApi";

// useEffect(() => {
//   async function loadFavorites() {
//     const favorites = await fetchFavorites();
//     setFavorites(favorites);
//   }

//   loadFavorites();
// }, []);

// function handleUnfavorite(itemId) {
//   unfavoriteItem(itemId).then(() => {
//     // After unfavoriting, refresh the favorites list
//     fetchFavorites().then(setFavorites);
//   });
// }
