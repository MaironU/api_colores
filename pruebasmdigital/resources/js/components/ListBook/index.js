import React from 'react'
import ItemBook from '../ItemBook'
import './index.css'

function generate(data, element, setIsOpen, setBookId) {
    return data.map((value, index) =>
        React.cloneElement(element, {
            key: index,
            book: value,
            setIsOpen: setIsOpen,
            setBookId: setBookId
        }),
    );
}

const ListBook = ({ books, setIsOpen, setBookId }) => {
    return (
        <div className="list_books">
            {books.length > 0 &&
                generate(books, <ItemBook />, setIsOpen, setBookId)
            }
        </div>
    )
}

export default ListBook;

