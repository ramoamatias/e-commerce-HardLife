import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import CompraDetalle from '../../components/CompraDetalle/CompraDetalle';
import Loader from '../../components/Loader/Loader';

const CompraDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [loading, setloading] = useState(true);

  const {id} = useParams();

  useEffect(()=>{
     const db = getFirestore();
     const queryProductos= doc(db,'ordenes',id);
     
     getDoc(queryProductos)
       .then(res => {setDetalle({id:res.id, ...res.data()})})
       .catch(err=>console.log(err))
       .finally(()=>setloading(false))

  },[]);

  return (
    <>
      {loading ? <Loader/> : <CompraDetalle detalle={detalle}/>}

    </>
  )
}

export default CompraDetailContainer