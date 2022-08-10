import { Link } from 'react-router-dom';
import './NavBar.css';

import Brand from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';
import Categoria from '../Categoria/Categoria';
import BotonLogin from '../BotonLogin/BotonLogin';

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

          <Link to="/categoria/celular" >
            <Categoria nombre = "Celulares"/>
          </Link>
    
        </article>
        <article className='sesion'>
          <Link to="carrito">
            <CartWidget/>
          </Link>
          <Link to="login">
            <BotonLogin/>
          </Link>
        </article>
        
    </nav>
  )
}

export default NavBar