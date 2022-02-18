import React, { useState, useEffect } from 'react'
import './index.css';
import ListLector from '../../components/ListLector'
import { HOST } from '../../Utils/const'
import axios from 'axios'

const LectorPage = () => {

    const [lectors, setLectors] = useState([]);

    useEffect(() => {
        axios.get(`${HOST}/lectors`).then(response => {
            let res = response.data
            if(!res.response) return alert(res.message)
            setLectors(res.data)
        });
    }, []);

    return (
        <div className="lectors">
            <img src="/images/banner.jpg" alt="" />
            <h1 className="text-center">Lectores</h1>
            <ListLector lectors={lectors} />
        </div>
    )
}

export default LectorPage;

