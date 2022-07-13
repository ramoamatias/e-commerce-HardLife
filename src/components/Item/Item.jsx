import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

function Item(props) {
  return (
    <div className="card" key={props.id}>
      <img src={props.pictureUrl} alt="" className="card-img"/>
      <article className='card-body'>
          <p className="card-title">{props.title}</p>
          <span className="card-price">${props.price}</span>
          <Link to={`/detalle/${props.id}`} >
            <button className="card-btn">Ver Más</button>
          </Link>
      </article>
    </div>
  )
}

export default Item
