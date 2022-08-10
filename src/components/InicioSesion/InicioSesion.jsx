import React from 'react'
import { Link } from 'react-router-dom'
import './InicioSesion.css'

const InicioSesion = ({submit}) => {
  return (
    <div>
        <form id="inicioSesion" onSubmit={(e)=> submit(e)}>
            <h2 className="tituloInicioSesion">Iniciar Sesion</h2>
            <div className="errorInicioSesion"> </div>
            <div className="input-group">
              <input required type="email" name="text" autoComplete="off" className="input"/>
              <label className="user-label">Email</label>
            </div>
            <div className="input-group">
              <input required type="password" name="text" autoComplete="off" className="input"/>
              <label className="user-label">Contraseña</label>
            </div>
            <article className="opcionesInicioSesion">
              <Link to = "/registro" className="linkRegistroUsuario">
                <p >Registrarse</p>
              </Link>
              <Link to = "/" className="recuperarContra">
                <p >Recuperar Contraseña</p>
              </Link>
            </article>
             <button className="btn">Iniciar</button>
        </form>
    
    </div>
  )
}

export default InicioSesion