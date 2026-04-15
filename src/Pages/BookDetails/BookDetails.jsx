import React, { use, useContext } from "react";
import { useParams } from "react-router";
import { BookContext } from "../../BookContext/BookProvider";

const bookPromise = fetch("/public/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const bookDetails = use(bookPromise);
  const { id } = useParams();
  const expectedBook = bookDetails.find((book) => book.bookId == id);

  const {handleMarkAsRead} = useContext(BookContext)

  return (
    <div className="">
      <div className="max-w-[80%] mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 bg-gray-100 rounded-2xl p-8 lg:p-12 flex items-center justify-center">
            <img
              src={expectedBook.image}
              alt={expectedBook.bookName}
              className="w-full max-w-sm rounded shadow-2xl drop-shadow-xl object-cover"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-4">
              {expectedBook.bookName}
            </h1>

            <p className="text-lg text-gray-600 font-medium mb-6">
              {expectedBook.author}
            </p>

            <hr className="border-gray-200 mb-4" />

            <p className="text-gray-800 font-medium mb-4">{expectedBook.category}</p>

            <hr className="border-gray-200 mb-6" />

            <p className="text-gray-500 leading-relaxed mb-6 text-sm lg:text-base">
              <span className="font-bold text-gray-900">Review : </span>
              {expectedBook.review}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-bold text-gray-900">Tag</span>
              {
                expectedBook.tags.map((tag,index) => <span key={index} className="bg-green-50 text-green-500 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                {tag}
              </span>)
              }
              
            </div>

            <hr className="border-gray-200 mb-6" />

            <div className="grid grid-cols-[150px_1fr] gap-y-3 mb-8 text-sm lg:text-base">
              <div className="text-gray-500">Number of Pages:</div>
              <div className="font-bold text-gray-900">{expectedBook.totalPages}</div>

              <div className="text-gray-500">Publisher:</div>
              <div className="font-bold text-gray-900">{expectedBook.publisher}</div>

              <div className="text-gray-500">Year of Publishing:</div>
              <div className="font-bold text-gray-900">{expectedBook.yearOfPublishing}</div>

              <div className="text-gray-500">Rating:</div>
              <div className="font-bold text-gray-900">{expectedBook.rating}</div>
            </div>

            <div className="flex gap-4">
              <button onClick={()=> handleMarkAsRead(expectedBook)} className="px-7 py-3 border border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2">
                Mark as Read
              </button>
              <button className="px-7 py-3 bg-cyan-400 text-white rounded-lg font-semibold hover:bg-cyan-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
