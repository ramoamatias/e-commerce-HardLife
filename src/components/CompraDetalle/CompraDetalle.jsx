import React from 'react'
import "./CompraDetalle.css"
import ItemDetalleCompra from '../ItemDetalleCompra/ItemDetalleCompra'
import { Link } from 'react-router-dom'


const CompraDetalle = ({detalle}) => {
    console.log("dentro de COmprta detalle",detalle)
  return (
    <div className='compraDetalleContainer'>
        <h2 className='compraDetalleTitulo'>N° Orden {detalle.id}</h2>
        <article className='compraDetalleDatos'>
            <p><span>Fecha Emisión:</span> {detalle.fechaEmision}</p>
            <p><span>Total:</span> ${detalle.total}</p>
        </article>
        {detalle.productos.map(el => <ItemDetalleCompra   
            key={el.id}
            titulo = {el.titulo}
            cantidadComprada = {el.cantidadComprada}
            precio = {el.precio}
            subtotal = {el.precio * el.cantidadComprada}
            img_url = {el.url_img}
            />)}
        <Link to='/compras' >
            <button className='btn'>Volver</button>
        </Link>
    </div>
  )
}

export default CompraDetalle