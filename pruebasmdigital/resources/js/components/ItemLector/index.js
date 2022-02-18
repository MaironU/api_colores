import React from 'react'
import { Link } from 'react-router-dom'

const ItemLector = ({ lector }) => {
    return (
        <div className="card col-4">
            <div className="border">
                <img className="card-img-top" src="/images/banner-lector.png" alt="Card image cap" />
                <div className="card-body">
                    <h3 className="card-title text-center">{lector.name}</h3>
                    <span className="card-text">Documento: { lector.document_number }</span>
                    <span className="card-text">Teléfono: { lector.phone }</span>
                    <Link to={`/lectors/details?lector_id=${lector.id}`}>Detalles</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemLector;

