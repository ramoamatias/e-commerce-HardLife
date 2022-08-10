import React from 'react'
import './ItemDetalleCompra.css'

const ItemDetalleCompra = ({titulo,cantidadComprada,precio,subtotal,img_url}) => {
    return (
    <div className='itemDetalleCompraContainer'>
        <img src={img_url} alt={titulo}/>
        <p className='itemDetalleCompraTitulo'>{titulo}</p>
        <p><span>Cantidad Solicitada</span> {cantidadComprada}</p>
        <p><span>Precio Unitario </span>${Intl.NumberFormat('de-DE').format(precio)}</p>
        <p><span>Subtotal </span>${Intl.NumberFormat('de-DE').format(subtotal)}</p>
    </div>
  )
}

export default ItemDetalleCompra