import React from 'react'

function Descripcion({titulo,descripcion}) {

  return (
    <article>
        <div>
            <h4>{titulo}</h4>                    
            <p>{descripcion}</p>
         </div>
    </article>
  )
}

export default Descripcion