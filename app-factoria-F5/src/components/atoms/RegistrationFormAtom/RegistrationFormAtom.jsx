import './registrationFormAtom.css'
import axios from 'axios';
import ButtonAtom from '../ButtonAtom/ButtonAtom'
import { useNavigate } from "react-router-dom";
// import APIservice from '../../../services/APIservice';

const RegistrationFormAtom = () => {

    const FORM_ENDPOINT = "http://localhost/05-app-factoria-F5/back-php/API/applicants.php";
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {

        event.preventDefault();

        try {

            axios.post(FORM_ENDPOINT,new FormData(event.target))
            .then(response=>{
                if(response.data){
                    navigate('/registro-exitoso');
                }
            })
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
      
    return (
        <>
        
            <form id="registrationFormContainer" onSubmit={handleSubmit}>
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

                <ButtonAtom label={'Enviar'} color={'orange'} type={'submit'} ></ButtonAtom>

            </form>
            
        </>
   );
};

export default RegistrationFormAtom