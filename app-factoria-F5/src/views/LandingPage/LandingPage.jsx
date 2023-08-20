import { useState } from 'react';

import './landingPage.css';
import menubars from '../../assets/icons/menu-bars.svg';
import menux from '../../assets/icons/menu-x.svg';
import logo from '../../assets/img/logo.png';
import logoLight from '../../assets/img/logo-light.png';
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';
import FooterAtom from '../../components/atoms/footerAtom/FooterAtom';



function LandingPage() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
  return (
    <>
        <div className='container'>
            <div className='social-menu-icon' onClick={handleClick}>
                <img src={menubars} alt="Menu desplegable."/>    
            </div>
            <div className='logo-container'>
                <img src={logo} alt="logo." />
            </div>
            <div className='welcome-menu'>
                <p className='welcome-menu-title'>Bienvenido/a</p>
                <p className='welcome-menu-subtitle'>Comenzar con su cuenta</p>

                <div className='button-group'>
                    <ButtonAtom label={'Inscripción'} color={'orange'}></ButtonAtom>
                    <ButtonAtom label={'Iniciar sesión'} color={'white'}></ButtonAtom>
                </div>
                
                <FooterAtom></FooterAtom>
            </div>       
        </div>
        <div className={click ? 'social-menu active' : 'social-menu'}>
            <div className='social-menu-icon' onClick={handleClick}>
                <img src={menux} alt="Menu desplegable."/>    
            </div>
            <div className='logo-container'>
                <img src={logoLight} alt="logo." />
            </div>
        </div>
    </>
  )
}

export default LandingPage

