import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoryViewer = () => {
  const { documentId } = useParams(); // 👈 Get documentId from URL
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = `http://62.72.46.248:1337/api/stories/${documentId}?populate=*`;

  useEffect(() => {
    setLoading(true);
    const fetchStory = async () => {
      try {
        const response = await axios.get(apiUrl);
        setStory(response.data.data);
      } catch (err) {
        setError("Failed to load story: " + err.message);
      }
      setLoading(false);
    };

    fetchStory();
  }, [apiUrl]);

  if (error) return <p>{error}</p>;
  if (!story) return <p>{loading}</p>;

  return (
    <>
      <h2>{story.title}</h2>
      <p>{story.summary}</p>
      <img src={story.cover_image?.url} alt="Story Cover" width="200" />
      <audio controls>
        <source src={story.audio?.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="">
        <div dangerouslySetInnerHTML={{ __html: story.content }} />
      </div>
    </>
  );
};

export default StoryViewer;
