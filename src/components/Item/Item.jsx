import React from 'react'
import './Item.css';

function Item(props) {
  return (
    <div className="card" key={props.id}>
      <img src={props.pictureUrl} alt="" className="card-img"/>
      <article className='card-body'>
          <p className="card-title">{props.title}</p>
          <span className="card-price">${props.price}</span>
          <button className="card-btn">Ver Más</button>
      </article>
    </div>
  )
}

export default Item
