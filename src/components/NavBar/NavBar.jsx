import { Link } from 'react-router-dom';
import './NavBar.css';

import Brand from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';
import Categoria from '../Categoria/Categoria';

function NavBar({children}) {
  return (
    <nav className='navbar'>
        <Link to='/'>
          <Brand titulo="HardLife"/>
        </Link>
        <article className='navegacion'>
          <Link to="/categoria/notebook" >
            <Categoria nombre = "Notebooks"/>
          </Link>

          <Link to="/categoria/monitor" >
            <Categoria nombre = "Monitores"/>
          </Link>

          <Link to="/categoria/celular" >
            <Categoria nombre = "Celulares"/>
          </Link>
          
          <Link to="/categoria/tablet" >
            <Categoria nombre = "Tablets"/>
          </Link>
        </article>
        <Link to="carrito">
          <CartWidget/>
        </Link>
        
    </nav>
  )
}

export default NavBar