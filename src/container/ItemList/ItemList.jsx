import Item from '../../components/Item/Item';
import "./ItemList.css"

function ItemList(props) {
  return (
    <section className='itemList'>
        {props.productos.map(
            el=> <Item 
                key= {el.id}
                id={el.id} 
                title={el.title} 
                price={el.price} 
                pictureUrl={el.pictureUrl}/>
        )}
    </section>
  )
}

export default ItemList