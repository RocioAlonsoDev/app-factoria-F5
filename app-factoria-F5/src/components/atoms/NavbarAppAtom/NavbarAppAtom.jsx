import { useState } from 'react';
import menux from '../../../assets/icons/menu-x.svg';
import logoLight from '../../../assets/img/logo-light.png';

import PropTypes from 'prop-types';
import './navbarAppAtom.css';
import menuNavbarAppIcon from '../../../assets/icons/menu-navbar-app.svg'

function NavbarAppAtom({name_greeting}) {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
 
    return (
    <>
      <nav className='navbar-app'>
        <div className='navbar-app-icon-container' onClick={handleClick}>
            <img className="navbar-app-icon" src={menuNavbarAppIcon} alt="Icono Menú de Navegación" />
        </div>
        <h2 className='navbar-app-greeting-text'> Hola, {name_greeting} !</h2>
      </nav>



        <div className={click ? 'social-menu active' : 'social-menu'}>
            <div className='social-menu-icon' onClick={handleClick}>
                <img src={menux} alt="Menu desplegable."/>    
            </div>
            <div className='logo-container'>
                <a href='https://factoriaf5.org/'><img src={logoLight} alt="logo." /></a>
            </div>
            <ul>
                <a href="">
                    <li>
                        CONSULTAS
                    </li>
                </a>
                <a href="">
                    <li id='social-menu-orange'>
                        CERRAR SESION
                    </li>
                </a>

            </ul>
        </div>
    </>
    );
  }
  
  NavbarAppAtom.propTypes = {
    name_greeting: PropTypes.string.isRequired,
  };

  export default NavbarAppAtom;
