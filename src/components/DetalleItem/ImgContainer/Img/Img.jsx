import React, { useEffect, useState } from 'react'
import "./Img.css"

const Img = ({rutaReceived,rutaMostrada,cambiar}) => {
    const [ruta, setRuta] = useState('')
    
    useEffect(()=>{
        setRuta(rutaReceived);
    },[]);

  return (
    <img src={ruta} className={rutaMostrada?.includes(ruta) ? "imgActiva": "imgInactiva"} onClick={cambiar} style={{width:100}}/>
  )
}

export default Img