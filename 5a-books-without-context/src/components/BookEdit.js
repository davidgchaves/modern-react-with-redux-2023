import { useState } from "react";

const BookEdit = ({ book }) => {
  const [title, setTitle] = useState(book.title);

  const onInputChange = (event) => {
    setTitle(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`New title is ${title}`);
  };

  return (
    <form className="book-edit" onSubmit={onFormSubmit}>
      <label>Title</label>
      <input
        className="input"
        type="text"
        value={title}
        onChange={onInputChange}
      />
      <button className="button is-prmary">Save</button>
    </form>
  );
};

export default BookEdit;
