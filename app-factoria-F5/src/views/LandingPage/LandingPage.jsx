import { useState } from 'react';
import './landingPage.css';
import menubars from '../../assets/icons/menu-bars.svg';
import menux from '../../assets/icons/menu-x.svg';
import logo from '../../assets/img/logo.png';
import logoLight from '../../assets/img/logo-light.png';
import linkedin from '../../assets/icons/linkedin.svg';
import linkedinHover from '../../assets/icons/linkedin-hover.svg';
import twitter from '../../assets/icons/twitter.svg';
import twitterHover from '../../assets/icons/twitter-hover.svg';
import insta from '../../assets/icons/insta.svg';
import instaHover from '../../assets/icons/insta-hover.svg';
import youtube from '../../assets/icons/youtube.svg';
import youtubeHover from '../../assets/icons/youtube-hover.svg';
import facebook from '../../assets/icons/facebook.svg';
import facebookHover from '../../assets/icons/facebook-hover.svg';
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
                <a href='https://factoriaf5.org/'><img src={logo} alt="logo." /></a>
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
                <a href='https://factoriaf5.org/'><img src={logoLight} alt="logo." /></a>
            </div>
            <ul>
                <a href="https://www.linkedin.com/company/factor%C3%ADaf5/">
                    <li>
                        <img src={linkedin} 
                        onMouseOut={e => (e.currentTarget.src = linkedin)} 
                        onMouseOver={e => (e.currentTarget.src = linkedinHover)} alt="linkedin" />
                    </li>
                </a>
                <a href="https://twitter.com/factoriaf5">
                    <li>
                        <img src={twitter} 
                        onMouseOut={e => (e.currentTarget.src = twitter)} 
                        onMouseOver={e => (e.currentTarget.src = twitterHover)} alt="twitter" />
                    </li>
                </a>
                <a href="https://www.instagram.com/factoria_f5/">
                    <li>
                        <img src={insta} 
                        onMouseOut={e => (e.currentTarget.src = insta)} 
                        onMouseOver={e => (e.currentTarget.src = instaHover)} alt="instagram" />
                    </li>
                </a>
                <a href="https://www.youtube.com/channel/UCazHbN7ChOJxRXW0-K1zczw">
                    <li>
                        <img src={youtube} 
                        onMouseOut={e => (e.currentTarget.src = youtube)} 
                        onMouseOver={e => (e.currentTarget.src = youtubeHover)} alt="youtube" />
                    </li>
                </a>
                <a href="https://www.facebook.com/factoriaf5/">
                    <li>
                        <img src={facebook} 
                        onMouseOut={e => (e.currentTarget.src = facebook)} 
                        onMouseOver={e => (e.currentTarget.src = facebookHover)} alt="facebook" />
                    </li>
                </a>
            </ul>
        </div>
    </>
  )
}

export default LandingPage

