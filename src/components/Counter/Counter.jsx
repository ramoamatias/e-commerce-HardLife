import { useEffect, useState} from "react"
import "./Counter.css"


const Counter = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(0);

  const aumentarCounter = () => counter < stock ? setCounter(counter + 1) : setCounter(stock);
  const disminuirCounter = () => counter > 0 ? setCounter(counter - 1) : setCounter(0);
//  console.log(cantidadProductos,carrito);
  return (
    <article className="counterContainer">
        <div className="botonesCantidad">
            <button className="counterBtn" onClick={disminuirCounter }> - </button>
            <span className="contador">{ counter }</span>
            <button className="counterBtn" onClick={aumentarCounter }> + </button>
        </div>
        <button disabled={counter===0 ? true : false} className="agregarCarrito counterBtn"  onClick={() => {onAdd(counter)}}>Agregar a Carrito</button> 
    </article>
  )
}

export default Counter