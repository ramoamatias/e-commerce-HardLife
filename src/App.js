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
      <Brand titulo="HardLife"/>
      
      <article className='navegacion'>
        <Categoria nombre = "Home" />
        <Categoria nombre = "Notebooks"/>
        <Categoria nombre = "Monitores"/>  
        <Categoria nombre = "Celulares"/>  
        <Categoria nombre = "Tablets"/>  
      </article>      
      
      <CartWidget/>
     </NavBar>

     <ItemListContainer/>  
    </>
  )
}


export default App;