import React, { useContext } from 'react';
import { BookContext } from '../../BookContext/BookProvider';

const Books = () => {

    const {storedBook} = useContext(BookContext)
    return (
        <div>
            books
        </div>
    );
};

export default Books;