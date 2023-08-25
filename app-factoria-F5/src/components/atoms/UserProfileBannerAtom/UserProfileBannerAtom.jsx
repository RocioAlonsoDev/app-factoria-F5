import PropTypes from 'prop-types';
import './userProfileBannerAtom.css';
import duckProfilePicture from '../../../assets/img/duck.png';

function UserProfileBannerAtom({user_profile_name}) {

    return (
    <>
      <div className='user-profile-banner-container'>
        <div className='user-profile-banner-picture-container'>
            <img className='user-profile-banner-picture' src={duckProfilePicture} alt="Foto de perfil de usuario" />
        </div>
        <div className='user-profile-banner-name-status-container'>
            <h2 className='user-profile-banner-name-text'>{user_profile_name}</h2>
            <select id="status" name='Status' required>
                        <option value="Postulante">Postulante</option>
                        <option value="Coder">Coder</option>
                        <option value="Lista de espera">Lista de espera</option>
                        <option value="Ex-coder">Ex-coder</option>
            </select>
        </div>
      </div>
    </>
    );
  }

  UserProfileBannerAtom.propTypes = {
    user_profile_name: PropTypes.string.isRequired,
  };
  
  export default UserProfileBannerAtom;