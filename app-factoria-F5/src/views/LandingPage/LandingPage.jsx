import './landingPage.css';
import menubars from '../../assets/icons/menu-bars.svg';
import logo from '../../assets/img/logo.png';
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom'


function LandingPage() {
  return (
    <>
        <div className='container'>
            <div className='social-menu'>
                <img src={menubars} alt="Menu desplegable."/>    
            </div>
            <div className='logo-container'>
                <img src={logo} alt="logo." />
            </div>
            <div className='welcome-menu'>
                <h1 className='welcome-menu-title'>Bienvenido/a</h1>
                <h2 className='welcome-menu-subtitle'>Comenzar con su cuenta</h2>

                <div className='button-group'>
                    <ButtonAtom label={'Inscripción'} color={'orange'}></ButtonAtom>
                    <ButtonAtom label={'Iniciar sesión'} color={'white'}></ButtonAtom>
                </div>
            </div>       
        </div>

    </>
  )
}

export default LandingPage

