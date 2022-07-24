import Item from '../../components/Item/Item';
import "./ItemList.css"

function ItemList(props) {
  return (
    <section className='itemList'>
        {props.productos.map(
            el=> <Item 
                key= {el.id}
                id={el.id} 
                titulo={el.titulo} 
                precio={el.precio} 
                urlImagenes={el.url_imagenes[0]}
                categoria={el.categoria}/>
        )}
    </section>
  )
}

export default ItemList