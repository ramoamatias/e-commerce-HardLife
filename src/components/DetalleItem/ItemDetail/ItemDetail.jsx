import {useContext, useEffect, useState} from "react"

import './ItemDetail.css'

import Descripcion from '../Descripcion/Descripcion';
import ImgContainer from '../ImgContainer/ImgContainer';
import Propiedades from '../Propiedades/Propiedades';
import Counter from '../../Counter/Counter';

import {CarritoContext} from '../../CartContext/CartContext'
import { Link } from "react-router-dom";
import Notebook from "../../Notebook/Notebook";
import Celular from "../../Celular/Celular";


function ItemDetail({ detalle }) {
    const [cantidadProductos,carrito,clear,removeProducto,addProducto] = useContext(CarritoContext);
    const [cantidadAgregada, setCantidadAgregada] = useState();

    const {id, titulo,url_imagenes,precio,marca,categoria,stock,procesador,memoria,sistema_operativo,imagen,conectividad,detalles,dimensiones,bateria,modelo,descripcion} = detalle;
    const agregarACarrito = (cantidad) => {
        addProducto(detalle,cantidad);
        setCantidadAgregada(cantidad);
    }

        return (
      <div className='itemDetail'>
          <div className='contenedorDetalle'>
              <ImgContainer pictures={url_imagenes}/>
              <article className='contenedorCompra'>
                  <h1>{titulo}</h1> 
                  <p>${Intl.NumberFormat('de-DE').format(precio)}</p>
                  {cantidadAgregada 
                     ? <div className="contenedorCompraRealizada">
                        <Link to='/carrito'><button className="btnCompra">Terminar compra</button></Link>
                        <Link to='/'><button className="btnCompra">Continuar Compra</button></Link>
                       </div>
                     : <Counter stock={stock} onAdd={agregarACarrito}/>}
                     <p className="stockDisponible">{stock} Disponibles </p>
              </article>
          </div>
           {
            categoria === "notebook" 
                ? <Notebook datos={detalle}/> 
                : categoria === "celular"
                    ? <Celular datos={detalle}/>
                    : null 
           }         
      </div>
    )
  }
export default ItemDetail