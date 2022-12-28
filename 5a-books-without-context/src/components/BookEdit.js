import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const onInputChange = (event) => {
    setNewTitle(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, newTitle);
  };

  return (
    <form className="book-edit" onSubmit={onFormSubmit}>
      <label>Title</label>
      <input
        className="input"
        type="text"
        value={newTitle}
        onChange={onInputChange}
      />
      <button className="button is-prmary">Save</button>
    </form>
  );
};

export default BookEdit;
