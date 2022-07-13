import './ItemDetail.css'
import Descripcion from '../Descripcion/Descripcion';
import ImgContainer from '../ImgContainer/ImgContainer';
import Propiedades from '../Propiedades/Propiedades';

function ItemDetail(props) {
  const {id, title,picture_url, price,marca,procesador,memoria,sistema_operativo,imagen,conectividad,detalles,dimensiones,bateria,modelo,descripcion} = props.detalle;

  return (
    <div className='itemDetail'>
        <div className='contenedorDetalle'>
            <ImgContainer pictures={picture_url}/>
            <article className='contenedorCompra'>
                <h1>{title}</h1> 
                <p>${price}</p>
                <button className='btnCompra'>Comprar</button>
            </article>
        </div>
        <section className='bodyDetalle'>
                <h3 className='bodyMarca'>{marca}</h3>
                <p className='bodyTitle'>{title}</p>
                <p>Producto: <span className='bodyId'>{id}</span></p>
                <article className='bodyDescripcion'>
                    <h3>Descripción</h3>
                    <div>
                        <Descripcion key='disenioDescr' title='Diseño' descripcion={descripcion.diseño}/>
                        <Descripcion key='desempenioDescr'  title='Desempeño' descripcion={descripcion.desempeño}/>
                        <Descripcion key='conectividadDescr'title='Conectividad' descripcion={descripcion.conectividad}/>
                        <Descripcion key='beteriaDescr' title='Batería' descripcion={descripcion.bateria}/> 
                    </div>

                </article>
                <article className='containerCaracteristicas'>
                    <h2>Caracteristicas Técnicas</h2>
                    <ul>
                        <Propiedades key='procesador' title='Procesador' prop={procesador}/>
                        <Propiedades key='memoria' title='Memoria' prop={memoria}/>
                        <Propiedades key='sistemaOperativo' title='Sistema Operativo' prop={sistema_operativo}/>
                        <Propiedades key='imagen' title='Imagen' prop={imagen}/>
                        <Propiedades key='conectividad' title='Conectividad' prop={conectividad}/>
                        <Propiedades key='detalles' title='Detalles' prop={detalles}/>
                        <Propiedades key='dimensiones' title='Dimensiones' prop={dimensiones}/>
                        <Propiedades key='bateria' title='Batería' prop={bateria}/>
                        <Propiedades key='modelo' title='Modelo' prop={modelo}/>
                    </ul>
                </article>

            </section>
    </div>
  )
}

export default ItemDetail