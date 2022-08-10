import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import InicioSesion from "../../components/InicioSesion/InicioSesion";
import './LoginContainer.css';

const LoginContainer = () => {
    const {acceso,desAcceso,usuario} = useContext(AuthContext);

    useEffect(()=> {
      if (!usuario) {
        document.querySelector("[type='email']").focus();
      }
    } ,[])

    const submit =  (e) => {
        e.preventDefault();
        const email =e.target.querySelector("[type='email']").value;
        const contra =e.target.querySelector("[type='password']").value;
        acceso(email,contra).then(res => {
          res.mensaje
          console.log("respuesta de acceso",res)
        })
        .catch(err => {
          const $form = document.getElementById("inicioSesion"),
            $inputEmail = $form.querySelector("[type='email']"),
            $inputContra = $form.querySelector("[type='password']"),
            $mensajeError = $form.querySelector(".errorInicioSesion");
        
            $mensajeError.innerHTML="";
            
            if (err.mensaje === "auth/user-not-found") {
              $inputEmail.focus();
              $inputEmail.classList.add("error");
              $inputContra.classList.remove("error");
              $mensajeError.innerHTML="Usuario Inexistente";
             
            } else if (err.mensaje === "auth/wrong-password") {
              $inputEmail.classList.remove("error");
              $inputContra.focus();
              $inputContra.classList.add("error");
              $mensajeError.innerHTML="Contraseña Incorrecta";
              
          }
        });
      }
    
  return (
    <div className="loginContainer">
    { 
      usuario 
      ? ( usuario.email === "system@hardlife.com" 
          ? <div>
              <Link to="/gestionDeProductos">
                <h2>Gestion de Productos</h2>
              </Link> 
            <button onClick={desAcceso}>cerrar sesion</button>
            
            </div>
        :
            <section className="containerOpcionesUsuario">
            <Link to="/compras" className="seccionUsuario">
              <h2>Compras</h2>
              <p> Usted puede ver el historial de compras realizadas </p>
            </Link>
            {/* <Link to="/cofiguraciones" className="seccionUsuario">
              <h2>Configuraciones</h2>
              <p> Se podrá configurar sus datos personales </p>
            </Link> */}
            <button onClick={desAcceso} className="btn">cerrar sesion</button>
          </section>
        ) :
          <InicioSesion submit={submit}/>
    }
    </div>
  )
}

export default LoginContainer