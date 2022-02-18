import React from 'react'
import ItemLector from '../ItemLector'
import './index.css'

function generate(data, element) {
    return data.map((value, index) =>
        React.cloneElement(element, {
            key: index,
            lector: value
        }),
    );
}

const ListLector = ({ lectors }) => {
    return (
        <div className="list_lectors">
            {lectors.length > 0 &&
                generate(lectors, <ItemLector />)
            }
        </div>
    )
}

export default ListLector;

