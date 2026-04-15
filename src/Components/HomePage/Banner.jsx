import React from "react";
import bannerImg from "../../assets/banner-book.png"

const Banner = () => {
  return (
    <div className="mt-5 md:mt-12">
      <div className="hero bg-base-200 min-h-[70vh] w-[95%] md:w-[80%] mx-auto rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
          <img
            src={bannerImg}
            className="max-w-52 md:max-w-sm rounded-lg"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
            
            <button className="btn text-white font-bold rounded-lg bg-[#23BE0A] mt-5 md:mt-10">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
