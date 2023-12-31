// Card.js
import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card-container'>
            <div className='image-container'>
            <img src={props.imageUrl} alt='' />
        </div>
        <div className='card-content'>
            <div className='card-title'>
                <h3>{props.title}</h3>
            </div>
            <div className='card-body'>
                <p>{props.body}</p>
            </div>
        </div>
        <div className='btn'>
            <button>
                <a>Talleres</a>
            </button>
        </div>
    </div>
    );
}

export default Card;
