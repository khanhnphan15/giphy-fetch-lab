// App.jsx
import { useState } from "react";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("doreamon");

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  return (
    <div className="App">
      <h1>Giphy Search</h1>
      <SearchBar onSearch={handleSearch} />
      <GifList searchTerm={searchTerm} />
    </div>
  );
}
