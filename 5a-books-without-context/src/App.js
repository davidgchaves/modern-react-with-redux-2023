import { useState } from "react";

import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const generateBookId = () => Math.round(Math.random() * 99999);

  const createBook = (title) => {
    setBooks([...books, { id: generateBookId(), title }]);
  };

  const deleteBookById = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
