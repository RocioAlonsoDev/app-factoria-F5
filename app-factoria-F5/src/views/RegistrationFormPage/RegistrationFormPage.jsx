import './registrationFormPage.css';
import NavbarAtom from '../../components/atoms/NavbarAtom/NavbarAtom';
import BannerRegistrationForm from '../../components/molecules/BannerRegistrationForm.jsx/BannerRegistrationForm';
import RegistrationFormAtom from '../../components/atoms/RegistrationFormAtom/RegistrationFormAtom';
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';
import FooterAtom from '../../components/atoms/footerAtom/FooterAtom';


function RegistrationFormPage() {
        
  return (
    <>
            <NavbarAtom/>
            <BannerRegistrationForm/>
            <RegistrationFormAtom/>
            <ButtonAtom label={'Enviar'} color={'orange'}></ButtonAtom>
            <FooterAtom logo={true}></FooterAtom>
    </>
  )
}

export default RegistrationFormPage;