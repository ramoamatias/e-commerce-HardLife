import { createContext, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut,onAuthStateChanged, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider  = ({ children }) => {
    const [usuario, setUsuario] = useState();


    //Nos permite resgistranos como usaurios nuevos dentro del sitio.
    const registro = async (email,password,nombreCompleto,telefono) => {   
        const respuesta = {
            codigo:null,
            usuario: null,
            mensaje: null
        }
        try {
            let auth = getAuth();
            console.log("usuario logueado",auth)
            const resp = await createUserWithEmailAndPassword(auth, email, password)
            const user = resp.user;


            auth = getAuth();
            updateProfile(auth.currentUser, {
            displayName: nombreCompleto, 
            phoneNumber: parseInt(telefono)
            })
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
            

            setUsuario(user);
            respuesta.codigo = 200;
            respuesta.usuario = user;
            respuesta.mensaje = 'Registro Exitoso';
            return Promise.resolve(respuesta);
        } catch (error) {
            respuesta.codigo = 400;
            respuesta.mensaje = error.code;
            return Promise.reject(respuesta);
        }
    }

    //sirve para acceder con usuario y contraseña desde una sinctronizacion de email y password

    const acceso = async (email,contra) => {
        const respuesta = {
            codigo:null,
            usuario: null,
            mensaje: null
        }
        try {
            const auth = getAuth();
            const resp = await signInWithEmailAndPassword(auth, email, contra)
            setUsuario(resp.user);
            respuesta.codigo = 200;
            respuesta.usuario = resp.user;
            respuesta.mensaje = 'Login Exitoso';
            return Promise.resolve(respuesta);
        } catch (error) {
            respuesta.codigo = 400;
            respuesta.mensaje = error.code;
            return Promise.reject(respuesta);
        }
    }

  //Metodo que nos sirve para saber si hay un user logeado, y se ejecuta cada vez que sufre un cambio el estado de auth
    const desAcceso = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUsuario(null);
        }).catch((error) => {
            console.log(error);
        });
    }

    const isLoogeado = () => {
        const auth = getAuth();
        onAuthStateChanged(auth,(user)=> {
            if (user) {
                setUsuario(user);
            }else {
                setUsuario(null);
            }
        });
      }
    


    return(
        <AuthContext.Provider value={{usuario,registro,acceso,desAcceso,isLoogeado}}>
            {children}
        </AuthContext.Provider>
    );
}