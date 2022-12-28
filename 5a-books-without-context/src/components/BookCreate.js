import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const onInputChange = (event) => {
    setTitle(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={onFormSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={onInputChange}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
