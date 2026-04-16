import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();
const BookProvider = ({children}) => {

    const [storedBook, setStoredBook] = useState([]);
    const [wishList, setWishList] = useState([]);
    const handleMarkAsRead = (currentBook)=>{

        const isReadBookExist = wishList.find(book => book.bookId == currentBook.bookId);
        if(isReadBookExist){
            toast.error('This book is already in wish list');
            return;
        }

        const isBookExist = storedBook.find(book => book.bookId == currentBook.bookId);
        if(isBookExist){
            toast.error('The book already exist is read list')
        }else{
            setStoredBook([...storedBook, currentBook]);
            toast.success(`${currentBook.bookName} added to read list`)
        }
    }
    const handleWishList = (currentBook)=>{

        const isWishListExist = storedBook.find(book => book.bookId == currentBook.bookId);
        if(isWishListExist){
            toast.error('This book is already in read list');
            return;
        }
        const isBookExist = wishList.find(book => book.bookId == currentBook.bookId);
        if(isBookExist){
            toast.error('The book already exist in wish list')
        }else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} added to wish list`)
        }
    }
    const data = {storedBook, setStoredBook, handleMarkAsRead, wishList, setWishList, handleWishList}
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;