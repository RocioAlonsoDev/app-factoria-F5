import './bannerRegistrationForm.css';
import bannerImg from '../../../assets/img/bannerRegistrationForm.png';

const BannerRegistrationForm = () => {
    return (
        <>
            <section className='bannerContainer'>
            < img src={bannerImg} className="bannerImg" alt="banner"/>
            <h2 className='titleRompemosLosCodigos'>ROMPEMOS LOS CÓDIGOS</h2>
            <h4 className='subtittleRompemosLosCodigos'>¡Apuntate a nuestras formaciones!</h4>
            </section>
            
            
        </>
   );
};

export default BannerRegistrationForm;
