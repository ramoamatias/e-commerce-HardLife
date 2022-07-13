import "./CartWidget.css";
import carritoDeCompra from '../../img/carritoDeCompra.svg'

const CartWidget = () => {
  return (
    <article className='cartWidget'>
        <img src={carritoDeCompra}/>
        <span> Mi Compra</span>
    </article>
  )
}

export default CartWidget