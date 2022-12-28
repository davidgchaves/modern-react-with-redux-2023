import { useState } from "react";

import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const onEditButtonClick = () => {
    setShowEdit(!showEdit);
  };

  const onDeleteButtonClick = () => {
    onDelete(book.id);
  };

  const onFormSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className="book-show">
      {showEdit ? (
        <BookEdit book={book} onSubmit={onFormSubmit} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={onEditButtonClick}>
          Edit
        </button>
        <button className="delete" onClick={onDeleteButtonClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
