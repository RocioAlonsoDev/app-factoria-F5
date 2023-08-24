import ButtonAtom from "../../components/atoms/ButtonAtom/ButtonAtom"; 
import  './Acces.css';


function Acces() {

    const FORM_ENDPOINT = "http://localhost/05-app-factoria-F5/back-php/API/applicants.php";
    const navigate = useNavigate();
        
    const handleSubmit = (event) => {

        event.preventDefault();

        try {

            axios.post(FORM_ENDPOINT,new FormData(event.target))
            .then(response=>{
                if(response.data){
                    navigate('/success');
                }
            })
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };


    
    return (
        <div id="form-container">
            <h2>Accede a tu cuenta</h2>
            <form id='acces' onSubmit={handleSubmit}>
                <input type="email" name='Email' placeholder="Correo electrónico" />
                <input type="password" name='Password' placeholder="Contraseña" />
                <ButtonAtom label="Acceder" color="orange"/>
            </form>
            <div id="inscribe-text">¿Aún no tienes cuenta? Inscribete aquí</div>
        </div> 
    );
}

export default Acces;
