import {useState, useEffect} from 'react'
import task from '../../components/DetallesProductos';
import Loader from '../../components/Loader/Loader';
import ItemDetail from '../../components/DetalleItem/ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemListContainer({ greeting }) {
  const [detalle, setDetalle] = useState({});
  const [loading, setloading] = useState(true);

  const {id} = useParams();

  useEffect(()=>{
    // task(id)
    //  .then(res=> setDetalle(res))
    //  .catch(err => console.log(err))
    //  .finally(()=>setloading(false));

     const db = getFirestore();
     const queryProductos= doc(db,'productos',id);
     
     getDoc(queryProductos)
       .then(res => {setDetalle({id:res.id, ...res.data()})})
       .catch(err=>console.log(err))
       .finally(()=>setloading(false))

  },[]);

  return (
    <>
      {loading ? <Loader/> : <ItemDetail detalle={detalle} imgUrl={detalle.url_imagenes}/> }
    </>
  )
}


export default ItemListContainer