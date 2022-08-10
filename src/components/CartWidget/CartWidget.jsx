import "./CartWidget.css";
import carritoDeCompra from '../../img/carritoDeCompra.svg'
import { CarritoContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const CartWidget = () => {
  const [cantidadProductos] = useContext(CarritoContext);
  const {usuario} = useContext(AuthContext);
  return (
    <>
      { usuario 
          ? (
             usuario.email === "system@hardlife.com" 
              ? null
              :
                <article className='cartWidget'>
                    <img src={carritoDeCompra} className="imgWidget"/>
                    <div className={cantidadProductos ? "counterCarritoCargado" : "counterCarritoSinProductos"}>{cantidadProductos > 9 ? "9+" : cantidadProductos} </div>
                </article>
            )
          : null
      }
    </>
  )
}

export default CartWidget