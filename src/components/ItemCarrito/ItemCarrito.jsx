import cesto from "../../img/cestoBasura.svg"
import './ItemCarrito.css'

const ItemCarrito = ({producto,cantidad,remove}) => {
  return (
    <div className="itemCarritoContainer">
        <img src={producto.url_imagenes[0]} alt={`img_${producto.id}`} className='carritoImgProducto' />
        <p className="itemCarritoTitle">{producto.titulo}</p>
        <p><span>Precio Unitario</span>${Intl.NumberFormat('de-DE').format(producto.precio)}</p>
        <p><span>Cantidad</span> {cantidad}</p>
        <img src={cesto} className="cesto" onClick={()=>{remove(producto.id)}}/>
    </div>
  )
}

export default ItemCarrito