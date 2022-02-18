import React from 'react'
import Modal from '../../components/Modal'

const ItemBook = ({ book, setIsOpen, setBookId }) => {

    const Borrow = (id) => {
        setIsOpen(true)
        setBookId(id)
    }

    return (
        <div className="card col-4">
            <div className="border">
                <img className="card-img-top" src="/images/banner-book.png" alt="Card image cap" />
                <div className="card-body">
                    <h3 className="card-title text-center">{book.title}</h3>
                    <span className="card-text">Autor: { book.autor }</span>
                    <span className="card-text">Language: { book.language }</span>
                    <span className="card-text">Edición: { book.edition }</span>
                    {book.borrowed == "NO" ?
                        <button onClick={ () => Borrow(book.id)} className="btn btn-primary" data-toggle="modal" data-target="#modal">Prestar</button>
                        :
                        <button className="btn btn-primary" disabled>No disponible</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemBook;

