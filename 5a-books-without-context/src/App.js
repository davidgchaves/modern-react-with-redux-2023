import { useState } from "react";

import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const generateBookId = () => Math.round(Math.random() * 99999);

  const handleCreateBook = (title) => {
    setBooks([...books, { id: generateBookId(), title }]);
  };

  const handleDeleteBookById = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="app">
      <BookList books={books} onBookDelete={handleDeleteBookById} />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
};

export default App;
