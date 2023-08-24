import PropTypes from 'prop-types';
import './userProfileSubcategoryCard.css';

function UserProfileSubcategoryCard({subsection_title, subsection_response, show_archive, subsection_archive_link, checkbox}) {
    return (
    <>
        <div className='card-subsection-container'>
            <div>
                <h6 className='subsection-title'>{subsection_title}</h6>
                <p className='subsection-response'>{subsection_response}</p>
                {show_archive && (
                <a className='subsection_archive_link' href={subsection_archive_link} download> Ver archivo </a> )}
            </div>
            <input className={checkbox ? "show-checkbox" : "none-checkbox"} type="checkbox" id="cbox1" value="completed" />
        </div>
    </>
    );
  }
  
  UserProfileSubcategoryCard.propTypes = {
    subsection_title: PropTypes.any.isRequired,
    subsection_response: PropTypes.any.isRequired,
    show_archive: PropTypes.bool.isRequired,
    subsection_archive_link: PropTypes.any.isRequired,
    checkbox: PropTypes.bool.isRequired,
  };

  export default UserProfileSubcategoryCard;