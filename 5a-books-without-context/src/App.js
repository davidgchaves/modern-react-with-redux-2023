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
    <div className="app">
      <BookList books={books} />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
};

export default App;
