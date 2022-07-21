import { createContext, useState } from "react"

export const CarritoContext = createContext();

export const CartContext  = ({ children }) => {
    const [cantidadProductos, setcantidadProductos] = useState(0); //contadorProductos
    const [carrito,setCarrito] = useState([]); //nuestroCarrito
    
    //Buscamos el item si existe dentro del 
    const isIntCart = (id) => {  
        return carrito.find(el => el.item.id == id ) ? true : false;
    }
    
    const clear = () => {
        setCarrito([]);
        setcantidadProductos(0);
    };

    const removeProducto = id => {
        const posicion = posicionProducto(id);
        const producto = recuperarProducto(id);

        setcantidadProductos(cantidadProductos - producto.cantidad); //Descontamos cantidad de Productos
        carrito.splice(posicion,1); //Eliminamos el producto del carrito
        setCarrito(carrito); //actualizamos el carrito.
    }
    
    const addProducto = (producto,cantidad) => {

        if (isIntCart(producto.id)) {
            let productoRecuperado = recuperarProducto(producto.id);
            productoRecuperado.cantidad += cantidad;
            // setCarrito([...carrito]);
            setCarrito(carrito);
        } else {
            setCarrito([...carrito,{item:producto,cantidad}])
        }
        
        setcantidadProductos(cantidadProductos + cantidad);
    }


    //Funciones auxiliares
    //Recuperamos el elemento 
    const recuperarProducto = id => carrito.find(el => el.item.id === id );

    //Nos permite conocer la posicion del Producto dentro del carrito
    const posicionProducto = id => carrito.findIndex(el => el.item.id === id );

    return(
        <CarritoContext.Provider value={[cantidadProductos,carrito,clear,removeProducto,addProducto]}>
            {children}
        </CarritoContext.Provider>
    );
}


