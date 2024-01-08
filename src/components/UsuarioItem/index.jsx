import React from 'react'
import './UsuarioItem.css';
export function UsuarioItem({img, title,alt}) {
    return (

        <li className='item'>
            <div className='item_img_container'>
                <img src={img} alt={alt} />
            </div>
            <h2 className='item_title'>{title}</h2>
        </li>
    )
}

