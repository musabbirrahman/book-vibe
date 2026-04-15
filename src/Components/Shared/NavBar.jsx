import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const links = <>
      <li><NavLink to={'/'} className={({isActive})=> isActive? "text-[#23BE0A] font-semibold border-[#23BE0A] border rounded-lg" : ""}>Home</NavLink></li>
      <li><NavLink to={'/books'} className={({isActive})=> isActive? "text-[#23BE0A] font-semibold border-[#23BE0A] border rounded-lg" : ""}>Listed Books</NavLink></li>
      <li><NavLink to={'/page-to-read'} className={({isActive})=> isActive? "text-[#23BE0A] font-semibold border-[#23BE0A] border rounded-lg" : ""}>Pages to Read</NavLink></li>
  </>
  return (
    <div className="md:w-[80%] mx-auto mt-3 md:mt-10">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <button className="text-xl font-bold">Book Vibe</button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn text-white bg-[#23BE0A] rounded-lg">Sign In</button>
          <button className="btn text-white bg-[#59C6D2] rounded-lg">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
