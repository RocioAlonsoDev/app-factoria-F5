import PropTypes from 'prop-types';
import './userCardAtom.css';
import duckProfilePicture from '../../../assets/img/duck.png';

function UserCardAtom({user_profile_name, completed}) {

    return (
    <>
      <div className='user-card-container'>
        <div className='user-card-profile-picture-container'>
            <img className='user-card-profile-picture' src={duckProfilePicture} alt="Foto de perfil de usuario" />
        </div>
        <div>
            <h2>{user_profile_name}</h2>
            <h6 className="user-card-complete">{completed}</h6>
        </div>
      </div>

        {/* Tarjeta de prueba con los valores hardcodeados */}
        <div className='user-card-container'>
            <div className='user-card-profile-picture-container'>
                <img className='user-card-profile-picture' src={duckProfilePicture} alt="" />
            </div>
            <div>
                <h2>Elsa Pato</h2>
                <h6 className="user-card-complete">100% completado</h6>
            </div>
        </div>
    </>
    );
  }

  UserCardAtom.propTypes = {
    user_profile_name: PropTypes.string.isRequired,
    completed: PropTypes.func.isRequired,
  };
  
  export default UserCardAtom;