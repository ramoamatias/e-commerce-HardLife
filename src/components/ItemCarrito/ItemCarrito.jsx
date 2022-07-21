import cesto from "../../img/cestoBasura.svg"
import './ItemCarrito.css'

const ItemCarrito = ({producto,cantidad,remove}) => {
  return (
    <div className="itemCarritoContainer">
        <img src={producto.picture_url[0]} alt={`img_${producto.id}`} className='carritoImgProducto' />
        <p className="itemCarritoTitle">{producto.title}</p>
        <p>${Intl.NumberFormat('de-DE').format(producto.price)}</p>
        <p>cantidad: {cantidad}</p>
        <img src={cesto} className="cesto" onClick={()=>{remove(producto.id)}}/>
    </div>
  )
}

export default ItemCarrito