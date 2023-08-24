import './BootcampCardAtom.css';
import enlaceImagen from '../../../assets/img/external-link1.png';

const BootcampCardAtom = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{props.title}</h2>
         <img src={enlaceImagen} alt="enlace-externo" id="enlace-externo"/>
        <p>{props.description} Inicio: {props.date} </p>
        <img src={'img/external-link1.png'} alt={props.title} />
      </div>
    </div>
  );
};

export default BootcampCardAtom;

