import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import Brand from './components/Brand/Brand';
import Categoria from './components/Categoria/Categoria';
import CartWidget from './components/CartWidget/CartWidget';

function App() {

  return (
    <>
     <NavBar >
      <Brand titulo="PurityLife"/>
      <article className='navegacion'>
        <Categoria nombre = "Home" />
        <Categoria nombre = "Productos"/>
        <Categoria nombre = "Contacto"/>  
      </article>      
     <CartWidget/>
     </NavBar>
     <ItemListContainer greeting="Bienvenidos a PurityLife!"/>
    </>
  )
}


export default App;