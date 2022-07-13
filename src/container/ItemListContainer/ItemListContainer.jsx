import {useState, useEffect} from 'react'

import './ItemListContainer.css'

import task from '../../components/producto';
import ItemList from '../ItemList/ItemList'
import Loader from '../../components/Loader/Loader';

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    task
     .then(res=> setProductos(res))
     .finally(()=>setloading(false));
  },[]);

  return (
    <>
      {loading ? <Loader/> : <ItemList productos = {productos}/>}
    </>
  )
}

export default ItemListContainer