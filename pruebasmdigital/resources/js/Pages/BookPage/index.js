import React, { useState, useEffect } from 'react'
import './index.css';
import { HOST } from '../../Utils/const'
import axios from 'axios'
import ListBook from '../../components/ListBook'
import Modal from '../../components/Modal'

const BookPage = () => {

    const [books, setBooks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [bookId, setBookId] = useState(1);

    useEffect(() => {
        fetchBooks()
    }, []);

    const fetchBooks = () => {
        axios.get(`${HOST}/books`).then(response => {
            let res = response.data
            if(!res.response) return alert(res.message)
            setBooks(res.data)
        });
    }

    return (
        <div className="books">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} bookId={bookId} fetchBooks={fetchBooks}/>
            <img src="/images/banner.jpg" alt="" />
            <h1 className="text-center">Libros</h1>
            <ListBook books={books} setIsOpen={setIsOpen} setBookId={setBookId}/>
        </div>
    )
}

export default BookPage;

