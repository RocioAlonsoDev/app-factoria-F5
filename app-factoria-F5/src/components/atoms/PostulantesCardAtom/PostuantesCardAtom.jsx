import './PostulantesCardAtom.css';
import enlaceImagen from '../../../assets/img/external-link1.png';

const PostulantesCardAtom = (props) => {
    return (
        <div className='card'>
            <div>
                <h2>{props.title}</h2>

               <div className="cardrow">
                  <img src={enlaceImagen} alt="enlace-externo" id="enlace-externo"/>
                  <p>{props.option1}</p>
                </div> 
                <div className="cardrow">
                  <img src={enlaceImagen} alt="enlace-externo"/>
                  <p>{props.option2}</p>
                </div>
            </div>
        </div>
    )
}

export default PostulantesCardAtom