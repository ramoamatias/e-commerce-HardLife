import Descripcion from "../DetalleItem/Descripcion/Descripcion";
import Propiedades from "../DetalleItem/Propiedades/Propiedades";


const Celular = ({datos}) => {
  const {id, titulo,marca,camara,memoria,red,imagen,conectividad,caracteristicas_generales,dimensiones,bateria,modelo,descripcion} = datos;
  return (
    <section className='bodyDetalle'>
        <h3 className='bodyMarca'>{marca}</h3>
        <p className='bodyTitle'>{titulo}</p>
        <p>Producto: <span className='bodyId'>{id}</span></p>
        <article className='bodyDescripcion'>
            <h3>Descripción</h3>
            <div>
                <Descripcion key='disenioDescr' titulo='Diseño' descripcion={descripcion.disenio}/>
                <Descripcion key='desempenioDescr'  titulo='Desempeño' descripcion={descripcion.desempenio}/>
                <Descripcion key='camaraDescr'titulo='Camara' descripcion={descripcion.camara}/>
                <Descripcion key='beteriaDescr' titulo='Batería' descripcion={descripcion.bateria}/> 
            </div>
        </article>
        <article className='containerCaracteristicas'>
            <h2>Caracteristicas Técnicas</h2>
            <ul>
                <Propiedades key='camara' titulo='Camara' prop={camara}/>
                {/* <Propiedades key='sistemaOperativo' titulo='Sistema Operativo' prop={sistema_operativo}/> */}
                <Propiedades key='imagen' titulo='Imagen' prop={imagen}/>
                <Propiedades key='memoria' titulo='Memoria' prop={memoria}/>
                <Propiedades key='conectividad' titulo='Conectividad' prop={conectividad}/>
                <Propiedades key='red' titulo='Red' prop={red}/>
                <Propiedades key='caracteristicasGenerales' titulo='Caracteristicas Generales' prop={caracteristicas_generales}/>
                <Propiedades key='dimensiones' titulo='Dimensiones' prop={dimensiones}/>
                <Propiedades key='bateria' titulo='Batería' prop={bateria}/>
                <Propiedades key='modelo' titulo='Modelo' prop={modelo}/>
            </ul>
        </article>
    </section>
  )
}

export default Celular