import {useState, useEffect} from 'react'
import { useParams } from 'react-router';

import './ItemListContainer.css'

import task from '../../components/producto';
import ItemList from '../ItemList/ItemList'
import Loader from '../../components/Loader/Loader';


function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true);
  const {idCategoria} = useParams();
  
  useEffect(()=>{
    if (idCategoria) {
      task
      .then(res=> setProductos(res.filter(el => el.categoria == idCategoria)))
      .catch(err=>console.log(err))
      .finally(()=>setloading(false));
    } else { //para el home, sin filtrar ningun producto.
      task
       .then(res=> setProductos(res))
       .catch(err=>console.log(err))
       .finally(()=>setloading(false));
    }
  },[idCategoria]);

  return (
    <>
      {loading ? <Loader/> : <ItemList productos = {productos}/>}
    </>
  )
}
export default ItemListContainer