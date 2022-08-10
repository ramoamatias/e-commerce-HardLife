import React, { useContext, useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { AuthContext } from '../../components/AuthContext/AuthContext';
import Loader from '../../components/Loader/Loader';
import OrdenesList from '../OrdenesList/OrdenesList';

const ComprasContainer = () => {

  const [loading, setloading] = useState(true);
  const [ordenes, setOrdenes] = useState({});
  const {usuario} = useContext(AuthContext)

  useEffect(() => {
    const db = getFirestore();
    const coleccionOrdenes= collection(db,'ordenes');
    const coleccionFiltroProductos= query(coleccionOrdenes,where('cliente',"==",usuario.email));
    
    getDocs(coleccionFiltroProductos)
      .then(res => setOrdenes(res.docs.map(el => ({id:el.id,...el.data()}))))
      .catch(err=>console.log(err))
      .finally(()=>setloading(false))
  
  }, [])
  console.log(ordenes);
  
  return (
    <>
      {loading ? <Loader/> : <OrdenesList ordenes= {ordenes}/>} 
    </>
  )
}

export default ComprasContainer