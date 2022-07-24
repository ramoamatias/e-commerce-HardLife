import {useContext, useEffect, useState} from "react"

import './ItemDetail.css'

import Descripcion from '../Descripcion/Descripcion';
import ImgContainer from '../ImgContainer/ImgContainer';
import Propiedades from '../Propiedades/Propiedades';
import Counter from '../../Counter/Counter';

import {CarritoContext} from '../../CartContext/CartContext'
import { Link } from "react-router-dom";


function ItemDetail({ detalle , imgUrl}) {
    const [cantidadProductos,carrito,clear,removeProducto,addProducto] = useContext(CarritoContext);
    const [cantidadAgregada, setCantidadAgregada] = useState();

    const {id, titulo,url_imagenes,precio,marca,stock,procesador,memoria,sistema_operativo,imagen,conectividad,detalles,dimensiones,bateria,modelo,descripcion} = detalle;
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
          <section className='bodyDetalle'>
                  <h3 className='bodyMarca'>{marca}</h3>
                  <p className='bodyTitle'>{titulo}</p>
                  <p>Producto: <span className='bodyId'>{id}</span></p>
                  <article className='bodyDescripcion'>
                      <h3>Descripción</h3>
                      <div>
                          <Descripcion key='disenioDescr' titulo='Diseño' descripcion={descripcion.diseño}/>
                          <Descripcion key='desempenioDescr'  titulo='Desempeño' descripcion={descripcion.desempeño}/>
                          <Descripcion key='conectividadDescr'titulo='Conectividad' descripcion={descripcion.conectividad}/>
                          <Descripcion key='beteriaDescr' titulo='Batería' descripcion={descripcion.bateria}/> 
                      </div>
  
                  </article>
                  <article className='containerCaracteristicas'>
                      <h2>Caracteristicas Técnicas</h2>
                      <ul>
                          <Propiedades key='procesador' titulo='Procesador' prop={procesador}/>
                          <Propiedades key='memoria' titulo='Memoria' prop={memoria}/>
                          <Propiedades key='sistemaOperativo' titulo='Sistema Operativo' prop={sistema_operativo}/>
                          <Propiedades key='imagen' titulo='Imagen' prop={imagen}/>
                          <Propiedades key='conectividad' titulo='Conectividad' prop={conectividad}/>
                          <Propiedades key='detalles' titulo='Detalles' prop={detalles}/>
                          <Propiedades key='dimensiones' titulo='Dimensiones' prop={dimensiones}/>
                          <Propiedades key='bateria' titulo='Batería' prop={bateria}/>
                          <Propiedades key='modelo' titulo='Modelo' prop={modelo}/>
                      </ul>
                  </article>
  
              </section>
      </div>
    )
  }
export default ItemDetail