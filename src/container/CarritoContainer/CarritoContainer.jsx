import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './CarritoContainer.css'
import { CarritoContext } from "../../components/CartContext/CartContext"
import ItemCarrito from "../../components/ItemCarrito/ItemCarrito"

const CarritoContainer = () => {
  const [cantidadProductos,carrito,clear,removeProducto,addProducto] = useContext(CarritoContext)
  const [total, setTotal] = useState(0);


  useEffect(()=>{
    let totalCarrito = 0;
    carrito.map(
      el => totalCarrito += el.item.precio * el.cantidad
    );

    setTotal(Intl.NumberFormat('de-DE').format(totalCarrito))},[cantidadProductos]);

  return (
    <div className="carritoContainer">
      <h2>Mi Carrito</h2>
      {
        carrito.length > 0 
          ?  <article>
                <div className="carritoContainerTotal">
                    Total : <span className="valorTotal">${total}</span>
                    <div className="carritoContainerBtn">
                      <Link to="/"><button className="carritoBtn">Seguir comprando</button></Link>
                      <Link to="/"><button className="carritoBtn">Finalizar Compra</button></Link>
                    </div>
                </div>
                <div>
                    {carrito.map(el => <ItemCarrito key={el.item.id} producto={el.item} cantidad={el.cantidad} remove={removeProducto}/>)}
                    <button onClick={clear} className="carritoBtn"> Eliminar carrito</button>
                </div>
             </article>
          :  <article className="carritoVacio">
                <h3>Su carrito está vacio</h3> 
                 <h4>Para seguir comprando, navegar por las categorías en el sitio.</h4> 
                 <Link to="/"><button className="carritoBtn">Elegir Productos</button></Link>

            </article>
      }
    </div>
  )
}

export default CarritoContainer