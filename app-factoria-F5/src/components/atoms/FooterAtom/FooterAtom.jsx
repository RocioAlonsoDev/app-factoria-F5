import PropTypes from 'prop-types';
import "./footerAtom.css";
import logo from '../../../assets/img/logo.png';

const FooterAtom = ({logo}) => {

  return (
    <>
         <footer>
            <div className="footer">
            <img className={logo ? "footerLogoImg" : "footerLogoImgNone"} src={logo} alt="" />
                <div className="footerText">
                    <p className="paragrafFooter">Todos los derechos reservados 2021</p>
                    <div className="footerLinks">
                        <a href="https://factoriaf5.org/aviso-legal/">Aviso legal     </a>
                        <p>|</p>
                        <a href="https://factoriaf5.org/politica-de-privacidad/">Política de privacidad</a>
                        <p>|</p>
                        <a href="https://factoriaf5.org/politica-de-cookies/">Política de Cookies</a>
                    </div>
                    <div className="footerLinks">
                        <a href="https://factoriaf5.org/contacto/"> Contacta</a>
                        <p>|</p>
                        <a href="https://factoriaf5.org/somos/#transparencia">Transparencia</a>
                        <p>|</p>
                        <a href="https://factoriaf5.org/blog/">Blog</a>
                        <p>|</p>
                        <a href="https://www.crixa.es/">Diseño web Barcelona</a>
                    </div>
                </div>
        
            </div>
        </footer>
 
   </>
  )
}  

FooterAtom.propTypes = {
    logo: PropTypes.bool.isRequired,
  };

export default FooterAtom;