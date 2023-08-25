import ButtonAtom from "../../components/atoms/ButtonAtom/ButtonAtom"; 
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import  './Acces.css';
import NavbarAtom from "../../components/atoms/NavbarAtom/NavbarAtom";
import FooterAtom from "../../components/atoms/FooterAtom/FooterAtom";


function Acces() {

    const FORM_ENDPOINT = "http://localhost/05-app-factoria-F5/back-php/API/user.php";
    const navigate = useNavigate();
    const logIn = (data) => {
        sessionStorage.setItem("UserID", data['UserID']);
    }    
    const handleSubmit = async (event) => {
        event.preventDefault();

            try {

            axios.post(FORM_ENDPOINT,new FormData(event.target))
            .then(response=>{
                if(response.data){
                    logIn(response.data);
                    navigate('/consultas');
                }
            })
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
    <>
        <NavbarAtom></NavbarAtom>
        <main>
            <div id="form-container">
                <h2>Accede a tu cuenta</h2>
                <form id='acces' onSubmit={handleSubmit}>
                    <input type="email" name='Email' placeholder="Correo electrónico" />
                    <input type="password" name='Password' placeholder="Contraseña" />
                    <ButtonAtom label="Acceder" color="orange"/>
                </form>
                <div id="inscribe-text">¿Aún no tienes cuenta? <Link to='/registro'>Inscribete aquí</Link></div>
            </div>
        </main> 
        <FooterAtom></FooterAtom>
    </>
    );
}

export default Acces;
