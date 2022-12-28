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

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, title: newTitle } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
