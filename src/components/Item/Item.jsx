import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

function Item(props) {
  // const [imagen, setImagen] = useState("");

  // useEffect(()=>{
  //   setImagen(props.url_imagenes[0]);
  // },[])

  return (
    <div className="card" key={props.id}>
      <img src={props.urlImagenes} alt="" className="card-img"/>
      <article className='card-body'>
          <p className="card-title">{props.titulo}</p>
          <span className="card-price">${props.precio}</span>
          <Link to={`/detalle/${props.id}`} >
            <button className="card-btn">Ver Más</button>
          </Link>
      </article>
    </div>
  )
}

// id={el.id} 
// titulo={el.titulo} 
// precio={el.precio} 
// urlImagenes={el.url_imagenes}
// categoria={el.categoria}/>

export default Item
