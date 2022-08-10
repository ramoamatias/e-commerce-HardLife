import "./BotonLogin.css"
import {AuthContext} from '../AuthContext/AuthContext'
import { useContext, useEffect } from "react";

const Login = () => {
  const {usuario,isLoogeado,desAcceso} = useContext(AuthContext);

  useEffect(() => {
    isLoogeado();
    console.log(usuario);
  }, [])
  
  console.log(usuario);
  return (
    <>
    {usuario 
      ? <div className="login" title={`Usuario: ${usuario.email}`}></div>
      :<div className="btnLogin">Login</div>}
    </>
    // 
  )
}

export default Login