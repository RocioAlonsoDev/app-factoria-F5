import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import Acces from "../views/Acces/Acces";
import RegistrationFormPage from "../views/RegistrationFormPage/RegistrationFormPage";
import SignInSuccessPage from "../views/SignInSuccessPage/SignInSuccessPage";
import SearchFilterPage from "../views/SearchFilterPage/SearchFilterPage"
import UserProfilePage from "../views/UserProfilePage/UserProfilePage";



const Router= () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<LandingPage/>}></Route>
                <Route path='/Acces' element= {<Acces/>}></Route>
                <Route path='/RegistrationFormPage' element={<RegistrationFormPage></RegistrationFormPage>}></Route>
                <Route path='/SignInSuccessPage' element={<SignInSuccessPage></SignInSuccessPage>}></Route>
                <Route path='/SearchFilterPage' element={<SearchFilterPage></SearchFilterPage>}></Route>
                <Route path='/UserProfilePage' element={<UserProfilePage></UserProfilePage>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;