import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './CarritoContainer.css'
import { CarritoContext } from "../../components/CartContext/CartContext"
import ItemCarrito from "../../components/ItemCarrito/ItemCarrito"
import { AuthContext } from "../../components/AuthContext/AuthContext"
import {addDoc,getFirestore,collection} from "firebase/firestore"
import Cargando from "../../components/Cargando/Cargando"

const CarritoContainer = () => {
  const [cantidadProductos,carrito,clear,removeProducto,addProducto] = useContext(CarritoContext)
  const {usuario} = useContext(AuthContext)
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);
  const [nroOrden, setNroOrden] = useState();


  const finalizarCompra = () => {
    
    if (!usuario) {
      const $error = document.getElementById("mensajeErrorParaRegistro");
      $error.innerHTML="";
      $error.innerHTML="Es necesario estar registrado";
      $error.style.textAlign="center";
      $error.style.fontWeight="bold";
      $error.style.color="red";

    }else {
      setCargando(true);
      const items = [];
      carrito.forEach(el => {
        items.push({id: el.item.id,titulo:el.item.titulo,precio:el.item.precio,cantidadComprada:el.cantidad,url_img:el.item.url_imagenes[0]})
      });
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      const orden = {
        cliente:usuario.email,
        productos : items,
        total,
        fechaEmision: hoy.toLocaleDateString()
      }
      const db = getFirestore();
      const queryInsertar = collection(db,"ordenes");
      addDoc(queryInsertar,orden)
        .then(res => {
          setNroOrden(res.id);
        })
        .catch(err => console.log(err))
        .finally(()=>{setCargando(false)}) 
    }
  }

  useEffect(()=>{
    console.log("hubo cambio de orden y carrito limpio",nroOrden);
  },[nroOrden]);


  useEffect(()=>{
    let totalCarrito = 0;
    carrito.map(
      el => totalCarrito += el.item.precio * el.cantidad
    );

    setTotal(Intl.NumberFormat('de-DE').format(totalCarrito))}
  ,[cantidadProductos]);
    
    
  return (
      <div className="carritoContainer">
        <div id="mensajeErrorParaRegistro"></div>
        <h2>Mi Carrito</h2>
          {
            carrito.length > 0 
              ?  (nroOrden 
                    ? <article className="ordenGeneradaContainer">
                        <h3 className="ordenGeneradaTitulo">Orden Generada con éxito</h3>          
                        <p>Nro Orden: <span>{nroOrden}</span></p>
                        <Link to="/">
                          <button className="btn" onClick={()=>{clear()}}>Continuar Navegando</button>
                        </Link>
                      </article> 
                    :  <article>
                          <div className="carritoContainerTotal">
                              Total : <span className="valorTotal">${total}</span>
                              <div className="carritoContainerBtn">
                                <Link to="/"><button className="carritoBtn">Seguir comprando</button></Link>
                                <button className="carritoBtn" onClick={() => {finalizarCompra()}} >Finalizar Compra</button>
                                { cargando ? <Cargando/> : null }
                              </div>
              
                          </div>
                          <div>
                              {carrito.map(el => <ItemCarrito key={el.item.id} producto={el.item} cantidad={el.cantidad} remove={removeProducto}/>)}
                              <button onClick={clear} className="carritoBtn"> Eliminar carrito</button>
                          </div>
                        </article>
                )
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