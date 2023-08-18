import './signInSuccessPage.css';

import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';
import FooterAtom from '../../components/atoms/FooterAtom/FooterAtom';
import computer from '../../assets/img/online-resume.png'

export default function SignInSuccessPage(){
    return(
        <>
            <main className='success-main'>
               <h1 className='success-title'>¡Tu solicitud ha sido enviada!</h1>
                <div className='success-message-container'>
                    <img src={computer} alt="Computer" />
                    <p>
                        Accede a tu cuenta para seguir
                        el estado de tu candidatura.
                    </p>
                </div>
                <ButtonAtom label='Acceder' color='orange'></ButtonAtom>
                <FooterAtom></FooterAtom> 
            </main>
            
        </>
    )
}