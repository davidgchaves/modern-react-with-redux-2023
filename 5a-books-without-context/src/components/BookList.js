import BookShow from "./BookShow";

const BookList = ({ books, onBookDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} onBookDelete={onBookDelete} />
      ))}
    </div>
  );
};

export default BookList;
