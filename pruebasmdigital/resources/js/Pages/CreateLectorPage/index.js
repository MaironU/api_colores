import React, { useState } from 'react'
import './index.css'
import { HOST } from '../../Utils/const'

const CreateLectorPage = () => {

    const [lector, setLector] = useState({
        "name": "",
        "document_number": "",
        "address": "",
        "phone": ""
    });

    const [created, setCreated] = useState(false)

    const handleChange = (e) => {
        setLector({
            ...lector,
            [e.target.name]: e.target.value
        })
    }

    const createBook = () => {
        axios.post(`${HOST}/lectors`, lector).then(response => {
            let res = response.data
            if(res.response){
                setCreated(true)
            }
        })
    }

    return (
        <div className="books mb-4">
            <img src="/images/banner.jpg" alt="" />
            <h1 className="text-center">Crear Lector</h1>
            <div className="w-50 form">
                {created &&
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        Lector Creado Correctamente
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" name="name" value={lector.name} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>Número de Documento</label>
                    <input type="text" className="form-control" name="document_number" value={lector.document_number} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input type="text" className="form-control" name="address" value={lector.address} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input type="number" className="form-control" name="phone" value={lector.phone} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="form-group mt-2 d-flex justify-content-center">
                    <button className="btn btn-success w-50" onClick={() => createBook()}>Crear</button>
                </div>
            </div>
        </div>
    )
}

export default CreateLectorPage;

