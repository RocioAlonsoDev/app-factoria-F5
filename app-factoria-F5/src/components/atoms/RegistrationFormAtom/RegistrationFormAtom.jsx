import './registrationFormAtom.css'

const RegistrationFormAtom = () => {
    return (
        <>
        
            <form id="registrationFormContainer">
                <input type="text" id="name" placeholder='Nombre' required></input>
                <br></br>
                <input type="text" id="surname" placeholder='Apellidos' required></input>
                <br></br>
                <input type="email" id="email" placeholder='Correo electrónico' required></input>
                <br></br>
                <input type="password" id="password" placeholder='Contraseña' required></input>
                <br></br>
                <div id="registrationFormGenderContainer">
                    <select id="gender" required>
                        <option value="" disabled selected hidden>Género</option>
                        <option value="mujer">Mujer</option>
                        <option value="hombre">Hombre</option>
                        <option value="no binario">No Binario</option>
                        <option value="otro">Otro</option>
                    </select>
                    <select id="prenom" required>
                        <option value="" disabled selected hidden>Pronombre</option>
                        <option value="ella">Femenino - Ella</option>
                        <option value="el">Masculino - El</option>
                        <option value="elle">Neutro - Elle</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <br></br>
                <input type="tel" id="phone" placeholder='Número de móvil' required></input>
                <br></br>
                <input type="text" id="province" placeholder='¿Provincia donde vives?' required></input>
                <br></br>
                <input type="num" id="age" placeholder='¿Qué edad tienes?' required></input>
                <br></br>
                <select id="training" required>
                    <option value="" disabled selected hidden>¿Qué formación le interesa?</option>
                    <option value="Femnorte">FemNorte</option>
                    <option value="Digital Academy">Digital Academy - Asturias - El</option>
                    <option value="Otro">xxxx</option>
                </select>
            </form>
            
        </>
   );
};

export default RegistrationFormAtom;