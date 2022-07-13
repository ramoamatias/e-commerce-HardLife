import React from 'react'

function Descripcion({title,descripcion}) {

  return (
    <article>
        <div>
            <h4>{title}</h4>                    
            <p>{descripcion}</p>
         </div>
    </article>
  )
}

export default Descripcion