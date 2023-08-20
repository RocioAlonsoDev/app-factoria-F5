import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom'; 
import  './Acces.css'


function AccesAcount() {
    return (
        <div id="form-container">
            <h2>Accede a tu cuenta</h2>
            <form id='acces'>
                <input type="email" placeholder="Correo electrónico" />
                <input type="password" placeholder="Contraseña" />
                <ButtonAtom label="Acceder" color="orange"/>
            </form>
            <div id="inscribe-text">¿Aún no tienes cuenta? Inscribete aquí</div>
        </div> 
    );
}

export default AccesAcount;
