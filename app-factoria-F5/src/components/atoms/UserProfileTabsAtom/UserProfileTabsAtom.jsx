import './userProfileTabsAtom.css';

function UserProfileTabsAtom() {
    return (
      <>
        <div className="tabs">
            <div className="tab-container">
                <div id="tab3" className="tab"> 
                <a href="#tab3">Pestaña 3</a>
                <div className="tab-content">
                    <h2>Titulo 3</h2>
                    <p>Lorem ipsum ...</p>
                </div>
                </div>
                <div id="tab2" className="tab">
                <a href="#tab2">Pestaña 2</a>
                <div className="tab-content">
                    <h2>Titulo 2</h2>
                    <p>Lorem ipsum ...</p>
                </div>
                </div> 
                <div id="tab1" className="tab">
                <a href="#tab1">Pestaña 1</a>
                <div className="tab-content">
                    <h2>Titulo 1</h2>
                    <p>Lorem ipsum ...</p>
                </div> 
                </div> 
            </div>
        </div>      
      </>
    );
  }
  
  export default UserProfileTabsAtom;