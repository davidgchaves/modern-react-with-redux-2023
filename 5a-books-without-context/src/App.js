import { useState } from "react";

import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    console.log("Need to add book with: ", title);
  };

  return (
    <div>
      <BookList />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
};

export default App;
