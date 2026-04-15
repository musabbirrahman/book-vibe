import React, { Children, createContext, useState } from 'react';

export const BookContext = createContext();
const BookProvider = ({children}) => {

    const [storedBook, setStoredBook] = useState([])
    const handleMarkAsRead = (currentBook)=>{
        const isBookExist = storedBook.find(book => book.bookId == currentBook.bookId);
        if(isBookExist){
            alert('The book already exist')
        }else{
            setStoredBook([...storedBook, currentBook]);
            alert(`${currentBook.bookName} added to the list`)
        }
    }
    const data = {storedBook, setStoredBook, handleMarkAsRead}
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;