import PropTypes from 'prop-types';
import './userProfileSubcategoryCard.css';

function UserProfileSubcategoryCard({subsection_title, subsection_response, checkbox}) {
    return (
    <>
        <div className='card-subsection-container'>
            <div>
                <h6 className='subsection-title'>{subsection_title}</h6>
                <p className='subsection-response'>{subsection_response}</p>
            </div>
            <input className={checkbox ? "show-checkbox" : "none-checkbox"} type="checkbox" id="cbox1" value="completed" />
        </div>
    </>
    );
  }
  
  UserProfileSubcategoryCard.propTypes = {
    subsection_title: PropTypes.any.isRequired,
    subsection_response: PropTypes.any.isRequired,
    checkbox: PropTypes.bool.isRequired,
  };

  export default UserProfileSubcategoryCard;