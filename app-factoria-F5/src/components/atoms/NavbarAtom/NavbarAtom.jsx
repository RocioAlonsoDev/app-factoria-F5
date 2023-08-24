import { Link } from "react-router-dom";
import './NavbarAtom.css';

function NavbarAtom() {
    return (
      <nav className='navbar'>
        <Link className="link-decoration" to='/'><h1 className='text'>Inicio / <span>Inscripción</span></h1> </Link>
      </nav>
    );
  }
  
  export default NavbarAtom;



  