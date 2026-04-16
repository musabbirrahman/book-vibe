import React, { useContext, useState } from "react";
import { BookContext } from "../../BookContext/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBooks from "./ListedBooks/ReadListBooks";
import WishListBooks from "./ListedBooks/WishListBooks";
import { IoIosArrowDown } from "react-icons/io";

const Books = () => {
  const { storedBook, wishList } = useContext(BookContext);
  const [sortByType, setSortByType] = useState('')

  return (
    <div className="w-[95%] md:w-[80%] mx-auto mt-5 md:mt-10">
      <div className="flex justify-center mb-5 md:mb-15">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white flex items-center">
            Sort by {sortByType} <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=>setSortByType('pages')}>
              <a>Pages</a>
            </li>
            <li onClick={()=>setSortByType('rating')}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadListBooks sortByType={sortByType}></ReadListBooks>
        </TabPanel>
        <TabPanel>
          <WishListBooks sortByType={sortByType}></WishListBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
