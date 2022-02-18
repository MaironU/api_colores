import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HOST} from '../../Utils/const'

const Modal = ({isOpen, setIsOpen, bookId, fetchBooks}) => {

    const [lectors, setLectors] = useState([]);
    const [lector, setLector] = useState("");

    useEffect(() => {
        axios.get(`${HOST}/lectors`).then(response => {
            let res = response.data
            if(!res.response) return alert(res.message)
            setLectors(res.data)
        });
    }, []);

    const closeModal = () => {
        setIsOpen(false)
    }

    const borrowBook = () => {
        axios.post(`${HOST}/borrow_book`, {book_id: bookId, lector_id: lector}).then(response => {
            let res = response.data
            if(res.response){
                setIsOpen(false)
                fetchBooks()
            }else{
                alert(res.error)
            }
        })
    }

    const handleChange = (e)  =>{
        setLector(e.target.value)
    }

    return(
        <>
            {isOpen &&
                <div className="modal fade show" role="dialog" id="modal" style={{display: "block"}}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Prestar Libro</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => closeModal()}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Ecoge el usuario al que se le entregará el libro</p>

                            <div className="form-group">
                                <select className="form-control" value={lector} onChange={(e) => handleChange(e)}>
                                    {lectors.map((value, key) =>
                                        <option value={value.id} key={key}>
                                            {value.name}
                                        </option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => borrowBook()}>Guardar</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModal()}>Cerrar</button>
                        </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default Modal
