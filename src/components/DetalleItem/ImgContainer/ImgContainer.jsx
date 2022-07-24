import React, { useEffect,useState } from 'react';
import './ImgContainer.css'
import Img from "./Img/Img"

function ImgContainer({pictures}) {
    const [imagenes,setImagenes] = useState([]);
    const [ruta,setRuta] = useState('');

    useEffect(()=>{
        setImagenes(pictures);
    },[])
    
    useEffect(()=>{
        setRuta(imagenes[0]);
    },[imagenes])


    function estad(e) {
        setRuta(e.target.src);
    }

  return (
    <section className='imgContainer'>
        <img src={ruta} style={{width:400}}/>
            
        <article className='selectorImgs'>
            {imagenes.map((el,index)=> <Img key={index} rutaReceived={el} rutaMostrada={ruta} cambiar={estad}/>)}
        </article>
    </section>
  )
}


export default ImgContainer