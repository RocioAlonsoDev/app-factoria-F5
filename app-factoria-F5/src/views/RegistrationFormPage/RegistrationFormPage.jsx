import './registrationFormPage.css';
import NavbarAtom from '../../components/atoms/NavbarAtom/NavbarAtom';
import BannerRegistrationForm from '../../components/molecules/BannerRegistrationForm.jsx/BannerRegistrationForm';
import RegistrationFormAtom from '../../components/atoms/RegistrationFormAtom/RegistrationFormAtom';
import FooterAtom from '../../components/atoms/footerAtom/FooterAtom';


function RegistrationFormPage() {
        
  return (
    <>
            <NavbarAtom/>
            <main className='registration-form-main'>
              <BannerRegistrationForm/>
              <RegistrationFormAtom/>
              <FooterAtom logo={true}></FooterAtom>
            </main>
    </>
  )
}

export default RegistrationFormPage;