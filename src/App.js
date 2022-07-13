import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
      <>
          <NavBar/>
          <Routes>
           <Route index path='/' element={<ItemListContainer/>}/>
           <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
           <Route path='/detalle/:id' element={<ItemDetailContainer/>} />  
          </Routes>

      </>
    </BrowserRouter>
  )
}



export default App;