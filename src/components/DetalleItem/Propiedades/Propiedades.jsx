import React, { useState,useEffect } from 'react'
import './Propiedades.css'

function Propiedades({title,prop}) {
    const [ocultar,setOcultar] = useState(true);
    const [propiedades,setPropiedades] = useState([]);

    function ocultarMostrar() {
        setOcultar(!ocultar)
    }

    function splitCadena(prop) {
        let arreglo =[];
     
        for (const key in prop) {
            let palabras =key.replace("_"," ").split(" ");
            // console.log(key)
            for (let i = 0; i < palabras.length; i++) {
                palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1);
            }
            arreglo.push({
                nombreAMostrar:palabras.join(" "),
                nombreProp:key
            });
        }

        return arreglo;
    }

    useEffect(()=>{
        setPropiedades(splitCadena(prop));
    },[]) 

  return (
    <li onClick={ocultarMostrar} className="containerPropiedad">
            <h3 className={ocultar ? 'producto' : 'productoActivo'}>{title}</h3>
         <div className={ocultar ? 'novisible' : 'visible'} >
            <div>
                {propiedades.map((el,index)=> 
                    <div key={index} className='propiedad' >
                        <span>{el.nombreAMostrar}</span>  
                        <span>{prop[el.nombreProp]}</span>  
                    </div>
                )}
            </div>
        </div>
    </li>
  )
}

export default Propiedades