import React from 'react'
import './Registro.css'
const Registro = ({registrarse}) => {
  return (
    <form id="registro" onSubmit={(e)=> registrarse(e)}>
        <div className="errorRegistro"> </div>
        <div className="input-group">
            <input required type="text" name="text" autoComplete="off" className="input"/>
            <label className="user-label">Nombre Completo</label>
        </div>
        <div className="input-group">
            <input required type="number" name="text" autoComplete="off" className="input"/>
            <label className="user-label">Telefono</label>
        </div>
        <div className="input-group">
            <input required type="email" name="text" autoComplete="off" className="input"/>
            <label className="user-label">Email</label>
        </div>
        <div className="input-group">
            <input required type="email" name="text" autoComplete="off" className="input"/>
            <label className="user-label">Repita Email</label>
        </div>
        <div className="input-group">
            <input required type="password" name="text" autoComplete="off" className="input"/>
            <label className="user-label">Contraseña</label>
        </div>
     <button className="btn">Registrarse</button>
</form> 

  )
}

export default Registro