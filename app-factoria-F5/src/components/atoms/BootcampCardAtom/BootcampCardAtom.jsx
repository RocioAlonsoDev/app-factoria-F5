import './BootcampCardAtom.css';
import enlaceImagen from '../../../assets/img/external-link1.png';
import image1 from '../../../assets/img/image1.png'
import PropTypes from 'prop-types';

const BootcampCardAtom = ({title,date}) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className='bootcamp-card-title'>
          <h2>{title}</h2>
          <img src={enlaceImagen} alt="enlace-externo" id="enlace-externo"/>
        </div>
        <p className='bootcamp-card-date'>Inicio: {date} </p>
        <img src={image1} alt={title} className='bootcamp-banner' />
      </div>
    </div>
  );
};

BootcampCardAtom.propTypes = {
  title: PropTypes.string.string,
  date: PropTypes.string
};

export default BootcampCardAtom;

