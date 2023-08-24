import './openProcedure.css';
import ImageBannerBootcamp from '../../assets/img/image1.png';
import NavbarAppAtom from '../../components/atoms/NavbarAppAtom/NavbarAppAtom';
import UserCardList from '../../components/molecules/UserCardsList/UserCardsList';
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';


function OpenProcedure() {
  return (
    <>
      <NavbarAppAtom name_greeting={'Ana'}></NavbarAppAtom>
      <main className='open-procedure-container'>
        <div className='bootcamp-banner-container'>
          <div className="banner-container" style={{ backgroundImage:`url(${ImageBannerBootcamp})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}>
            <h2 className="bootcamp-title">Femcoders P3</h2>
          </div>          
        </div>

        <div className="bootcamp-dates-container" >
          <div className='dates-info-container' id="dates-start">
            <h5>Inicio</h5>
            <h6>Mayo 2024</h6>  
          </div>
          <div className='dates-info-container' id="dates-center">
            <h6>&gt;&gt;</h6>
          </div>
          <div className='dates-info-container' id="dates-end">
            <h5>Inicio</h5>
            <h6>Mayo 2024</h6>  
          </div>
        </div>

        <div className='bootcamp-stack-container'>
            <h3>Stack</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
        </div>

        <div className='bootcamp-description-container'>
            <h3>Descripción</h3>
            <p>Bootcamp inclusivo dirigido exclusivamente a mujeres en situación de vulnerabilidad (en situación de desempleo, inmigrantes o refugiadas, supervivientes de violencia machista…).</p>
        </div>
      
        <div className='bootcamp-cantidad-coders-container'>
          <h3>Coders</h3>
          <p>24 asignados</p>
        </div>
          <UserCardList></UserCardList>
          
          <ButtonAtom label={'Cerrar Selección'} color={'orange'}></ButtonAtom>
      </main>
      
    </>
    )
}

export default OpenProcedure;

