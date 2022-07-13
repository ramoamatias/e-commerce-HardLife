import {useState, useEffect} from 'react'
import task from '../../components/DetallesProductos';
import Loader from '../../components/Loader/Loader';
import ItemDetail from '../../components/DetalleItem/ItemDetail/ItemDetail';

function ItemListContainer({ greeting }) {
  const [detalle, setDetalle] = useState({});
  const [loading, setloading] = useState(true);


  let id = 1;

  useEffect(()=>{
    task(id)
     .then(res=> setDetalle(res))
     .catch(err => console.log(err))
     .finally(()=>setloading(false));
  },[]);

  return (
    <>
      {loading ? <Loader/> : <ItemDetail detalle={detalle}/> }
    </>
  )
}

export default ItemListContainer