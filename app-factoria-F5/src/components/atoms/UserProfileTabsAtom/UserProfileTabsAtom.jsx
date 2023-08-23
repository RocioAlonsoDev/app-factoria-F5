import PropTypes from 'prop-types';
import './userProfileTabsAtom.css';

function UserProfileTabsAtom({element_fase3, element_fase2, element_fase1}) {
    return (
      <>
        <div className="user-profile-tabs-section-container">
            <div className="tab-container">
                <div id="tab3" className="tab"> 
                    <a href="#tab3">Fase 3</a>
                    <section className="tab-body-content">
                        {element_fase3}
                    </section>
                </div>
                <div id="tab2" className="tab">
                    <a href="#tab2">Fase 2</a>
                    <section className="tab-body-content">
                        {element_fase2}
                    </section>
                </div> 
                <div id="tab1" className="tab">
                    <a href="#tab1">Fase 1</a>
                    <section className="tab-body-content">
                        {element_fase1}
                    </section> 
                </div> 
            </div>
        </div>      
      </>
    );
  }

  UserProfileTabsAtom.propTypes = {
    element_fase3: PropTypes.element.isRequired,
    element_fase2: PropTypes.element.isRequired,
    element_fase1: PropTypes.element.isRequired,
  };
  
  export default UserProfileTabsAtom;