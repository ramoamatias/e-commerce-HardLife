import React, { useContext, useState } from 'react';
import './RegistroContainer.css';
import { AuthContext } from '../../components/AuthContext/AuthContext';
import Registro from '../../components/Registro/Registro';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import Cargando from '../../components/Cargando/Cargando';

const RegistroContainer = () => {
  const {usuario,registro} = useContext(AuthContext);
  const [cargando, setCargando] = useState(false);

  const registrarse = (e) => {
    e.preventDefault();
    let nombreCompleto = e.target[0].value,
        telefono = e.target[1].value,
        email = e.target[2].value,
        repeticionEmail = e.target[3].value,
        contraseña = e.target[4].value;
    const $error = document.querySelector(".errorRegistro");


    
      if (email !== repeticionEmail) {
        $error.innerHTML= "Email no son iguales" 
      } else {
        $error.innerHTML= "";
        setCargando(true);
        registro(email,contraseña,nombreCompleto,telefono)
          .then()
          .catch(err => {
            err.mensaje === "auth/email-already-in-use" 
            ? $error.innerHTML= "Correo ya en uso" 
            : err.mensaje === "auth/weak-password" 
              ? $error.innerHTML = "Contraseña debíl, debe ser mayor a 6 caracteres"
              : $error.innerHTML = "" ;
            })
            .finally(()=> setCargando(false));
            
            
          
        } 
  }

  return (
    <div className='registroContainer'>
      <h2>Registro</h2>
      {!usuario
        ? <Registro registrarse={registrarse}/>
        : <article className='registroExitosoContainer'>
            <h3 className='registroTituloExitoso'>Registro Exitoso</h3>
            <Link to="/login" className='btn'> Continuar Navegando</Link>
          </article>
      }
      {cargando ? <Cargando/>: null}

    </div>
  )
}

export default RegistroContainer