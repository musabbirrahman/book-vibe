import React, { use } from "react";
import BookCard from "../Books/BookCard";

const bookPromise = fetch("/public/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const BookData = use(bookPromise);
  console.log(BookData);
  return (
    <div className="mt-10 md:mt-20 w-[95%] md:w-[80%] mx-auto">
      <h2 className="font-bold text-3xl md:text-4xl text-center">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {BookData.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
