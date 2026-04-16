import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../BookContext/BookProvider";
import { Link } from "react-router";

const ReadListBooks = ({sortByType}) => {
  const { storedBook } = useContext(BookContext);

  const [filterReadList, setFilterReadList] = useState(storedBook);

  useEffect(()=>{
    if(sortByType){
        if(sortByType === 'pages'){
            const sortData = [...storedBook].sort((a,b) => a.totalPages - b.totalPages);
            setFilterReadList(sortData);

        }else if(sortByType === 'rating'){
             const sortData = [...storedBook].sort((a,b) => a.rating - b.rating);
            setFilterReadList(sortData);
        }
    }
  }, [sortByType, storedBook])

  if (filterReadList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 mt-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No Books Added Yet</h2>
        <p className="text-gray-500 font-medium">
          You haven't added any books to your read list. Start exploring!
        </p>
      </div>
    );
  }

  return (
    <div>
      {filterReadList.map((book, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-2xl bg-white max-w-4xl w-full mb-6"
        >
          <div className="w-full md:w-64 bg-gray-100 rounded-2xl flex items-center justify-center p-8 shrink-0">
            <img
              src={book.image}
              alt={book.bookName}
              className="h-48 object-contain shadow-md"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2">
              {book.bookName}
            </h2>
            <p className="text-gray-600 font-medium mb-4">{book.author}</p>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
              <span className="font-bold text-gray-900">Tag</span>

              
              {book.tags &&
                book.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-green-50 text-green-600 font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}

              <div className="flex items-center gap-2 text-gray-500 ml-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>

                <span>{book.yearOfPublishing}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-gray-500 text-sm mb-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>

                <span>{book.publisher}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>

                <span>{book.totalPages}</span>
              </div>
            </div>

            <hr className="border-t border-gray-200 my-4" />

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className="px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm font-medium">
                Category: {book.category}
              </span>
              <span className="px-4 py-2 bg-orange-50 text-orange-500 rounded-full text-sm font-medium">
                Rating: {book.rating}
              </span>
              <Link to={`/bookDetails/${book.bookId}`}>
                <button className="px-6 py-2 bg-green-500 hover:bg-green-600 transition-colors text-white rounded-full text-sm font-semibold ml-auto">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadListBooks;
