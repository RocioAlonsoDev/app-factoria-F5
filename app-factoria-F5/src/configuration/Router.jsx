import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import Acces from "../views/Acces/Acces";
import SignInSuccessPage from '../views/SignInSuccessPage/SignInSuccessPage'
import RegistrationFormPage from "../views/RegistrationFormPage/RegistrationFormPage";


const Router= () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<LandingPage/>}></Route>
                <Route path='/signin' element={<RegistrationFormPage/>}></Route>
                <Route path='/access' element= {<Acces/>}></Route>
                <Route path='/success' element= {<SignInSuccessPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;