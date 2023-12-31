import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './userCardAtom.css';
import duckProfilePicture from '../../../assets/img/duck.png';

function UserCardAtom({user_profile_name, completed}) {
    const cardCompleted = completed === "100" ? "user-card-complete" : "user-card-inprogress";



    return (
    <>
      <Link className="link-decoration" to='/usuario'><div className='user-card-container'>
        <div className='user-card-profile-picture-container'>
            <img className='user-card-profile-picture' src={duckProfilePicture} alt="Foto de perfil de usuario" />
        </div>
        <div>
            <h2 className='user-card-profile-name-text'>{user_profile_name}</h2>
            <h6 className={`${cardCompleted}`}>{completed}% completado </h6>
        </div>
      </div></Link>

        {/* Tarjeta de prueba con los valores hardcodeados */}
        {/* <div className='user-card-container'>
            <div className='user-card-profile-picture-container'>
                <img className='user-card-profile-picture' src={duckProfilePicture} alt="" />
            </div>
            <div>
                <h2>Elsa Pato</h2>
                <h6 className="user-card-complete">100% completado</h6>
            </div>
        </div> */}
    </>
    );
  }

  UserCardAtom.propTypes = {
    user_profile_name: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired, 
  };
  
  export default UserCardAtom;