import PropTypes from 'prop-types';
import './ButtonAtom.css';



const ButtonAtom = ({ label, onClick, color }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

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

ButtonAtom.defaultProps = {
  color: 'orange',
};

export default ButtonAtom;


