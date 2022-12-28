import BookShow from "./BookShow";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
