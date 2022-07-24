import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { collection, doc, enableNetwork, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

import './ItemListContainer.css'

// import task from '../../components/producto';
import ItemList from '../ItemList/ItemList'
import Loader from '../../components/Loader/Loader';


function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [loading, setloading] = useState(true);
  const {idCategoria} = useParams();

  //recuperar un solo item
//   useEffect(()=>{
//     const db = getFirestore();
//     const queryProductos= doc(db,'productos','Q6AFiZHcY7FxDpZD6iPE');
    
//     getDoc(queryProductos)
//       .then(res => {setProductos([{id:res.id, ...res.data()}])})
//       .catch(err=>console.log(err))
//       .finally(()=>setloading(false))
// //setProductos([{id:res.id, ...res.data()}]) setProducto({id:res.id, ... })
//   },[]);


  // useEffect(()=>{
  //   const db = getFirestore();
  //   const coleccionProductos= collection(db,'productos');
  //   const query = idCategoria ? query(coleccionProductos,where('categoria',"==",idCategoria)) : collection(db,'productos');

  //   getDocs(query)
  //     .then(res => setProductos(res.docs.map(el => ({id:el.id,...el.data()}))))
  //     .catch(err=>console.log(err))
  //     .finally(()=>setloading(false))
  // },[]);

  // useEffect(()=>{
  //   const db = getFirestore();
  //   const coleccionProductos= collection(db,'productos');
  //   const coleccionFiltroProductos= query(coleccionProductos,where('categoria',"==",idCategoria));
    
  //   getDocs(coleccionFiltroProductos)
  //     .then(res => setProductos(res.docs.map(el => ({id:el.id,...el.data()}))))
  //     .catch(err=>console.log(err))
  //     .finally(()=>setloading(false))
  // },[]);

   useEffect(()=>{
    const db = getFirestore();
    if (idCategoria) {
      const coleccionProductos= collection(db,'productos');
      const coleccionFiltroProductos= query(coleccionProductos,where('categoria',"==",idCategoria));  
      getDocs(coleccionFiltroProductos)
        .then(res => setProductos(res.docs.map(el => ({id:el.id,...el.data()}))))
        .catch(err=>console.log(err))
        .finally(()=>setloading(false))
    } else { //para el home, sin filtrar ningun producto.
        const coleccionProductos= collection(db,'productos');
        getDocs(coleccionProductos)
          .then(res => setProductos(res.docs.map(el => ({id:el.id,...el.data()}))))
          .catch(err=>console.log(err))
          .finally(()=>setloading(false))
    }
  },[idCategoria]);



  // useEffect(()=>{
  //   if (idCategoria) {
  //     task
  //     .then(res=> setProductos(res.filter(el => el.categoria == idCategoria)))
  //     .catch(err=>console.log(err))
  //     .finally(()=>setloading(false));
  //   } else { //para el home, sin filtrar ningun producto.
  //     task
  //      .then(res=> setProductos(res))
  //      .catch(err=>console.log(err))
  //      .finally(()=>setloading(false));
  //   }
  // },[idCategoria]);

  return (
    <>
      {loading ? <Loader/> : <ItemList productos = {productos}/>}
    </>
  )
}
export default ItemListContainer