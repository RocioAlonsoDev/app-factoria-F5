import { Link } from "react-router-dom";
import './registrationFormAtom.css'
import ButtonAtom from '../ButtonAtom/ButtonAtom'

const RegistrationFormAtom = () => {

    const FORM_ENDPOINT = "http://localhost/05-app-factoria-F5/back-php/API/applicants.php";

    return (
        <>
        
            <form id="registrationFormContainer" action={FORM_ENDPOINT} method='POST'>
                <input type="text" id="name" placeholder='Nombre' name='FirstName' required></input>
                <br></br>
                <input type="text" id="surname" placeholder='Apellidos' name='LastName' required></input>
                <br></br>
                <input type="email" id="email" placeholder='Correo electrónico' name='Email' required></input>
                <br></br>
                <input type="password" id="password" placeholder='Contraseña' name='Password' required></input>
                <br></br>
                <div id="registrationFormGenderContainer" name='Gender'>
                    <select id="gender" name='Gender' required>
                        <option value="" disabled selected hidden>Género</option>
                        <option value="Femenino">Mujer</option>
                        <option value="Masculino">Hombre</option>
                        <option value="Neutro">No Binario</option>
                    </select>
                    <select id="prenom" name='Pronoun' required>
                        <option value="" disabled selected hidden>Pronombre</option>
                        <option value="Femenino">Femenino - Ella</option>
                        <option value="Masculino">Masculino - El</option>
                        <option value="Neutro">Neutro - Elle</option>
                    </select>
                </div>
                <br></br>
                <input type="tel" id="phone" placeholder='Número de móvil' name='PhoneNumber' required></input>
                <br></br>
                <input type='text' id='DNI' placeholder='DNI' name='DNI' required></input>
                <br /><br />
                <input type="text" id="province" placeholder='¿Provincia donde vives?' name='Address' required></input>
                <br></br>
                <input type="date" id="age" placeholder='Fecha de nacimiento' name='Birthdate' required></input>
                <br></br>
                <select id="training" name='BootcampID' required>
                    <option value="" disabled selected hidden>¿Qué formación le interesa?</option>
                    <option value="1">FemNorte</option>
                </select>
                <Link className="link-decoration" to='/Acces'><ButtonAtom label={'Enviar'} color={'orange'} type={'submit'}> </ButtonAtom> </Link>
            </form>
            
        </>
   );
};

export default RegistrationFormAtom;