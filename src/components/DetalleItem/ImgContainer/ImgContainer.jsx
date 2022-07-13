import React, { useEffect,useState } from 'react';
import './ImgContainer.css'

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
            
        <article>
            {imagenes.map((el,index)=> <img key={index} src={el} onClick={(e)=> estad(e)} style={{width:100}}/>)}
        </article>
    </section>
  )
}


export default ImgContainer