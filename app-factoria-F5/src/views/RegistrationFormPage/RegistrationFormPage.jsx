import './registrationFormPage.css';
import BannerRegistrationForm from '../../components/molecules/BannerRegistrationForm.jsx/BannerRegistrationForm';
import RegistrationFormAtom from '../../components/atoms/RegistrationFormAtom/RegistrationFormAtom';
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';
import FooterAtom from '../../components/atoms/footerAtom/FooterAtom';


function RegistrationFormPage() {
        
  return (
    <>
            <BannerRegistrationForm/>
            <RegistrationFormAtom/>
            <ButtonAtom label={'Enviar'} color={'orange'}></ButtonAtom>
            <FooterAtom logo={false}></FooterAtom>
    </>
  )
}

export default RegistrationFormPage;