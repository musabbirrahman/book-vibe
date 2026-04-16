import React, { useContext } from "react";
import { BookContext } from "../../BookContext/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadListBooks from "./ListedBooks/ReadListBooks";
import WishListBooks from "./ListedBooks/WishListBooks";

const Books = () => {
  const { storedBook, wishList } = useContext(BookContext);
  
  return (
    <div className="w-[95%] md:w-[80%] mx-auto mt-5 md:mt-10">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadListBooks></ReadListBooks>
        </TabPanel>
        <TabPanel>
          <WishListBooks></WishListBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
