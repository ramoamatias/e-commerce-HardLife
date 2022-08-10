import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import {CartContext} from './components/CartContext/CartContext';
import CarritoContainer from './container/CarritoContainer/CarritoContainer';
import LoginContainer from './container/LoginContainer/LoginContainer'
import {AuthProvider} from './components/AuthContext/AuthContext'
import ComprasContainer from './container/ComprasContainer/ComprasContainer';
import CompraDetailContainer from './container/CompraDetailContainer/CompraDetailContainer';
import RegistroContainer from './container/RegistroContainer/RegistroContainer';


function App() {
  return (
      <AuthProvider>
        <CartContext>
          <BrowserRouter>
            <>
                <NavBar/>
                <Routes>
                  <Route index path='/' element={<ItemListContainer/>}/>
                  <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
                  <Route path='/detalle/:id' element={<ItemDetailContainer/>} />  
                  <Route path='/carrito' element={<CarritoContainer/>} />  
                  <Route path='/login' element={<LoginContainer/>} />  
                  <Route path='/registro' element={<RegistroContainer/>} /> 
                  <Route path='/compras' element={<ComprasContainer/>} />  
                  <Route path='/compras/:id' element={<CompraDetailContainer/>} />  
                </Routes>
            </>
          </BrowserRouter>
        </CartContext>
      </AuthProvider>
  )
}



export default App;