import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import Acces from "../views/Acces/Acces";

//importo paginas

//import Description from "../components/pages/Description"

/*<Route path='/features' element= {<Features/>}></Route>

                
                <Route path='/extra' element= {<Extra/>}></Route>*/

const Router= () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<LandingPage/>}></Route>
                <Route path='/Acces' element= {<Acces/>}></Route>
                
                {/* <Route path='/screens' element= {<Screens/>}></Route> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;