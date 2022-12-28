import { useState } from "react";

import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const generateBookId = () => books.length + 1;

  const handleCreateBook = (title) => {
    setBooks([...books, { id: generateBookId(), title }]);
  };

  return (
    <div>
      <BookList />
      {books.map((book) => (
        <div>
          id: {book.id}, title: {book.title}
        </div>
      ))}
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
};

export default App;
