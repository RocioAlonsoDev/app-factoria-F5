import PropTypes from 'prop-types';
import './buttonAtom.css';


const ButtonAtom = ({ label, color , typeButton}) => {
  return (
    <button className={`button-atom ${color}`} type={typeButton} >
      {label} 
    </button>
  );
};

ButtonAtom.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  typeButton: PropTypes.string
};

export default ButtonAtom;


