import React, { useState } from 'react'
import './index.css'
import { HOST } from '../../Utils/const'

const CreateBookPage = () => {

    const [book, setBook] = useState({
        "title": "",
        "autor": "",
        "language": "español",
        "edition": ""
    });

    const [created, setCreated] = useState(false)

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const createBook = () => {
        axios.post(`${HOST}/books`, book).then(response => {
            let res = response.data
            if(res.response){
                setCreated(true)
            }
        })
    }

    return (
        <div className="books mb-4">
            <img src="/images/banner.jpg" alt="" />
            <h1 className="text-center">Crear Libro</h1>
            <div className="w-50 form">
                {created &&
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        Libro Creado Correctamente
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" name="title" value={book.title} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>Autor</label>
                    <input type="text" className="form-control" name="autor" value={book.autor} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>Lenguage</label>
                    <select className="form-control" name="" id="" name="language" value={book.language} onChange={(e) => handleChange(e)}>
                        <option value="español">Español</option>
                        <option value="ingles">Inglés</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Edición</label>
                    <input type="text" className="form-control" name="edition" value={book.edition} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group mt-2 d-flex justify-content-center">
                    <button className="btn btn-success w-50" onClick={() => createBook()}>Crear</button>
                </div>
            </div>
        </div>
    )
}

export default CreateBookPage;

