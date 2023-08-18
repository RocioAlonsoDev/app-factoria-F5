import PropTypes from 'prop-types';
import './buttonAtom.css';

const ButtonAtom = ({ label, onClick, color }) => {
  return (
    <button className={`button-atom ${color}`} onClick={onClick} >
      {label} 
    </button>
  );
};

ButtonAtom.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default ButtonAtom;


