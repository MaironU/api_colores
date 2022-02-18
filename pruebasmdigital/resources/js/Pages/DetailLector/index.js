import React, { useState, useEffect } from 'react'
import './index.css';
import { HOST } from '../../Utils/const'
import axios from 'axios'

const DetailLector = () => {

    const [lector, setLector] = useState([]);

    useEffect(() => {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var lector_id = urlParams.get('lector_id');

        fetchLector(lector_id)
    }, []);

    const fetchLector = (lector_id) => {
        axios.get(`${HOST}/lectors/${lector_id}`).then(response => {
            let res = response.data
            if(!res.response) return alert(res.message)
            setLector(res.data)
        });
    }

    const ReturnBook = (book_id, lector_id) => {
        axios.post(`${HOST}/return_book`, {book_id, lector_id}).then(response => {
            let res = response.data
            if(res.response){
                fetchLector(lector_id)
            }else{
                alert(res.error)
            }
        })
    }

    function generate(data) {
        return data.map((book, index) =>
            <div className="card col-4" key={index}>
                <div className="border">
                    <img className="card-img-top" src="/images/banner-book.png" alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title text-center">{book.title}</h3>
                        <span className="card-text">Autor: { book.autor }</span>
                        <span className="card-text">Language: { book.language }</span>
                        <span className="card-text">Edición: { book.edition }</span>
                        <button onClick={ () => ReturnBook(book.id, lector.id)} className="btn btn-primary" data-toggle="modal" data-target="#modal">Devolver</button>
                    </div>
                </div>
            </div>
        );
    }

    function listBook(books){
        return (
            <div className="list_books">
                {books.length > 0 &&
                    generate(books)
                }
            </div>
        )
    }

    return (
        <>
            {lector &&
                <div className="lectors">
                    <img src="/images/banner.jpg" alt="" />
                    <div className="card col-4 mt-4 mx-auto">
                        <div className="border">
                            <img className="card-img-top" src="/images/banner-lector.png" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title text-center">{lector.name}</h3>
                                <span className="card-text">Documento: { lector.document_number }</span>
                                <span className="card-text">Teléfono: { lector.phone }</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-3">
                        <h2>Libros Prestados</h2>
                        <div>
                            {lector.borrowed_books && lector.borrowed_books.length > 0 ?
                                listBook(lector.borrowed_books)
                                :
                                <span>No tiene libros prestados</span>
                            }
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default DetailLector;

