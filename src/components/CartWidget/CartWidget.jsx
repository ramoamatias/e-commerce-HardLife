import "./CartWidget.css";
import carritoDeCompra from '../../img/carritoDeCompra.svg'
import { CarritoContext } from "../CartContext/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const [cantidadProductos] = useContext(CarritoContext)
  return (
    <article className='cartWidget'>
        <img src={carritoDeCompra} className="imgWidget"/>
        <div className={cantidadProductos ? "counterCarritoCargado" : "counterCarritoSinProductos"}>{cantidadProductos > 9 ? "9+" : cantidadProductos} </div>
    </article>
  )
}

export default CartWidget