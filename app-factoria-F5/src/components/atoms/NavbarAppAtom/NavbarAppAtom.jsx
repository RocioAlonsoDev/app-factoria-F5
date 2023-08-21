import PropTypes from 'prop-types';
import './navbarAppAtom.css';
import menuNavbarAppIcon from '../../../assets/icons/menu-navbar-app.svg'

function NavbarAppAtom({name_greeting}) {
    return (
      <nav className='navbarApp'>
        <img className="navbarAppIcon" src={menuNavbarAppIcon} alt="Icono Menú de Navegación" />
        <h2 className='narbarAppGreetingText'>Hola, {name_greeting} !</h2>
      </nav>
    );
  }
  
  NavbarAppAtom.propTypes = {
    name_greeting: PropTypes.string.isRequired,
  };

  export default NavbarAppAtom;
