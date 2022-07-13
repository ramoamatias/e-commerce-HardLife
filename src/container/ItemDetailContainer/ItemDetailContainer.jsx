import {useState, useEffect} from 'react'
import task from '../../components/DetallesProductos';
import Loader from '../../components/Loader/Loader';
import ItemDetail from '../../components/DetalleItem/ItemDetail/ItemDetail';
import { useParams } from 'react-router';

function ItemListContainer({ greeting }) {
  const [detalle, setDetalle] = useState({});
  const [loading, setloading] = useState(true);

  const {id} = useParams();

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