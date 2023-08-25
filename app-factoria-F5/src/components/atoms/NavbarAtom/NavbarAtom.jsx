import { Link } from "react-router-dom";
import './NavbarAtom.css';

function NavbarAtom() {
    return (
      <nav className='navbar'>
        <h1 className='text'>
          <Link className="link-decoration home" to='/'>Inicio </Link> / 
          <Link className="link-decoration" to='/'> Inscripción </Link>
        </h1>
      </nav>
    );
  }
  
  export default NavbarAtom;



  