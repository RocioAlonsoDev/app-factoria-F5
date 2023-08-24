import ButtonAtom from "../../components/atoms/ButtonAtom/ButtonAtom"; 
import  './Acces.css';


function Acces() {
    return (
        <div id="form-container">
            <h2>Accede a tu cuenta</h2>
            <form id='acces'>
                <input type="email" name='Email' placeholder="Correo electrónico" />
                <input type="password" name='Password' placeholder="Contraseña" />
                <ButtonAtom label="Acceder" color="orange"/>
            </form>
            <div id="inscribe-text">¿Aún no tienes cuenta? Inscribete aquí</div>
        </div> 
    );
}

export default Acces;
