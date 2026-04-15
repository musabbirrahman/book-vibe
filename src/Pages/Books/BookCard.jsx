import React from "react";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({book}) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm rounded-2xl p-6">
        <figure className="">
          <div className="py-8 px-24  bg-[#F3F3F3] rounded-2xl">
            <img
            src={book.image}
            alt={book.bookName}
            className=" h-[166px]"
          />
          </div>
        </figure>
        <div className="card-body">
            <div className="flex gap-2">
                {book.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success font-medium">{tag}</div>)}
                
            </div>
          <h2 className="card-title font-bold text-xl md:text-2xl">
            {book.bookName}
          </h2>
          <p className="font-medium opacity-80">
            {book.author}
          </p>
          <div className="card-actions border-t border-dashed pt-4 border-gray-300 justify-between font-medium">
            <div className="">{book.category}</div>
            <div className="flex gap-2 items-center">{book.rating} <FaRegStar /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
