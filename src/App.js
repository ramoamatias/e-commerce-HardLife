import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import {CartContext} from './components/CartContext/CartContext';
import CarritoContainer from './container/CarritoContainer/CarritoContainer';



function App() {
  return (
      <CartContext>
        <BrowserRouter>
          <>
              <NavBar/>
              <Routes>
              <Route index path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='/detalle/:id' element={<ItemDetailContainer/>} />  
              <Route path='/carrito' element={<CarritoContainer/>} />  
              </Routes>

          </>
        </BrowserRouter>
      </CartContext>
  )
}



export default App;