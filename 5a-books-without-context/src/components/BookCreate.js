import { useState } from "react";

const BookCreate = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const onInputChange = (event) => {
    setTitle(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={onInputChange} />
        <button>Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
