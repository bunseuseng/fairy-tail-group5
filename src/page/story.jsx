import React from "react";
import Form from "../api/StoryFilterForm";

const Favorites = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Favorite Stories</h1>
      <Form />
    </div>
  );
};

export default Favorites;
