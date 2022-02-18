import React from 'react'
import './index.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <Link to="/books">Libros</Link>
                </li>
                <li>
                    <Link to="/lectors">Lectores</Link>
                </li>
                <li>
                    <Link to="/book/create">Crear Libro</Link >
                </li>
                <li>
                    <Link to="/lector/create">Crear Lector</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;

