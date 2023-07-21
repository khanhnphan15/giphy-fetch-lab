// GifList.jsx
import React, { useState, useEffect } from "react";
import GifListItem from "./GifListItem";

export default function GifList({ searchTerm }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function fetchGifs() {
      // const API_KEY = 'pmFiwchLDqLzXmxFxCwSXvYX86qNbWHR';
      const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=pmFiwchLDqLzXmxFxCwSXvYX86qNbWHR&q=${searchTerm}&limit=8`;

      try {
        const response = await fetch(API_URL);
        console.log(response);

        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
    }

    fetchGifs();
  }, [searchTerm]);

  return (
    <div className="gif-list">
      {gifs.map((gif) => (
        <GifListItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
}
