import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearchBarSubmit = async (term) =>
    setImages(await searchImages(term));

  return (
    <div>
      <SearchBar onSubmit={handleSearchBarSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
