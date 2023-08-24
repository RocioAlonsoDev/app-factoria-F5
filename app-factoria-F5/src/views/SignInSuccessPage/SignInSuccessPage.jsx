import './signInSuccessPage.css';
import { Link } from "react-router-dom";
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';
import FooterAtom from '../../components/atoms/footerAtom/FooterAtom';
import NavbarAtom from '../../components/atoms/NavbarAtom/NavbarAtom';
import computer from '../../assets/img/online-resume.png';

export default function SignInSuccessPage(){
    return(
        <>
            <NavbarAtom></NavbarAtom>
            <main className='success-main'>
               <h1 className='success-title'>¡Tu solicitud ha sido enviada!</h1>
                <div className='success-message-container'>
                    <img src={computer} alt="Computer" />
                    <p>
                        Accede a tu cuenta para seguir
                        el estado de tu candidatura.
                    </p>
                </div>
                <Link className="link-decoration" to="/Acces"><ButtonAtom label='Acceder' color='orange'></ButtonAtom></Link>
                <FooterAtom logo={true}></FooterAtom> 
            </main>
            
        </>
    )
}