import { createContext, useState } from "react"

const CarritoContext = createContext();

const CartContext  = ({ children }) => {
    const [cantidadProductos, setcantidadProductos] = useState(0); //contadorProductos
    const [carrito,setCarrito] = useState([]); //nuestroCarrito

    
    //Buscamos el item si existe dentro del 
    const isIntCart = (id) => {  
        carrito.find(el => el.item.id === id ) ? true : false;
    }
    
    const clear = () => setCarrito([]);

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
        } else {
            carrito.push({item:producto,cantidad});
        }

        setcantidadProductos(carrito);
        setcantidadProductos(cantidadProductos + cantidad);
    }


    //Funciones auxiliares
    //Recuperamos el elemento 
    const recuperarProducto = id => carrito.find(el => el.item.id === id );

    //Nos permite conocer la posicion del Producto dentro del carrito
    const posicionProducto = id => carrito.findIndex(el => el.item.id === id );

    return(
        <ThemeContext.Provider value={[cantidadProductos,carrito,clear,removeProducto,addProducto]}>
            {children}
        </ThemeContext.Provider>
    );
}

export default CartContext;