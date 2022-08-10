import React from 'react'
import { Link } from 'react-router-dom'
import "./CompraItem.css"

const CompraItem = ({id,productos,total,fechaEmision}) => {
  return (
    <Link to={`/compras/${id}`} className='compraItemContainer' >
            <h2 className='compraItemTitulo'>Orden:   {id}</h2> 
            <p className='compraItemFecha'>Fecha Emisión: {fechaEmision}</p>
            <div className='compraItemBody'>
                <span> Cantidad de Productos:  {productos.length}</span>
                <span> Total: ${total}</span>
            </div>
    </Link>
  )
}

export default CompraItem