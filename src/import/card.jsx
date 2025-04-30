import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, createdAt, images }) => {
  // Format the createdAt date
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <Link to="/story/${documentId}">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="flex flex-wrap">
          {images.map((img, index) => (
            <img
              key={index}
              className="w-full h-64 object-cover"
              src={img}
              alt={`Story Image ${index + 1}`}
            />
          ))}
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <p className="text-gray-400 text-sm mt-2">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
